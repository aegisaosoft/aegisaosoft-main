/*
 * Copyright (c) 2026 Aegis AO Soft LLC. All rights reserved.
 *
 * The contact form's inquiry, delivered as an email to the company inbox.
 *
 * Until 2026-10-01 /api/contact only wrote the inquiry to the server log, so nobody ever read one.
 * Now it is sent through the company mailbox's SMTP (Zoho Mail for aegisaosoft.com):
 *
 *   SMTP_USER      the mailbox that sends, e.g. alex@aegisaosoft.com   (required)
 *   SMTP_PASS      its app password — App Service setting, never in git (required)
 *   SMTP_HOST      default smtp.zoho.com          SMTP_PORT  default 465 (implicit TLS)
 *   CONTACT_TO     default alex@aegisaosoft.com   where inquiries land
 *   CONTACT_TIMEZONE  default America/New_York  the clock the "Received" line is written in
 *   CONTACT_MAIL_TRANSPORT=json   builds the message without sending it (scripts/check-site.js)
 *
 * Reply-To is the visitor, so answering the email answers them. The visitor's address never goes in
 * From: a mailbox may only send as itself, and anything else is what SPF/DMARC reject.
 */
const nodemailer = require('nodemailer')

const DEFAULT_TO = 'alex@aegisaosoft.com'
const DEFAULT_TIMEZONE = 'America/New_York'

const LIMITS = { name: 200, email: 254, company: 200, message: 5000 }

// Deliberately plain: one @, something on each side, a dot in the domain, no whitespace.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (value) => (typeof value === 'string' ? value.trim() : '')

/**
 * Validates the posted form. Returns { inquiry } or { error } with the reason in English.
 * Line breaks are refused in the one-line fields: they end up in the Subject and Reply-To headers.
 */
function readInquiry(body) {
  const inquiry = {
    name: clean(body?.name),
    email: clean(body?.email),
    company: clean(body?.company),
    message: clean(body?.message),
  }
  if (!inquiry.name || !inquiry.email || !inquiry.message) {
    return { error: 'Name, email, and message are required.' }
  }
  for (const [field, max] of Object.entries(LIMITS)) {
    if (inquiry[field].length > max) return { error: `The ${field} is too long.` }
  }
  for (const field of ['name', 'email', 'company']) {
    if (/[\r\n]/.test(inquiry[field])) return { error: `The ${field} must be a single line.` }
  }
  if (!EMAIL_PATTERN.test(inquiry.email)) return { error: 'The email address is not valid.' }
  return { inquiry }
}

/**
 * When the inquiry arrived, on the company's clock (Atlantic Highlands, NJ) rather than in UTC, e.g.
 * "Thu, Oct 1, 2026, 10:16 PM EDT". CONTACT_TIMEZONE takes any IANA zone name.
 */
function formatReceived(receivedAt, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(receivedAt)
}

/** The email for one inquiry: to the company inbox, from the sending mailbox, reply-to the visitor. */
function buildMessage(inquiry, env = process.env, receivedAt = new Date()) {
  const company = inquiry.company || 'N/A'
  const received = formatReceived(receivedAt, env.CONTACT_TIMEZONE || DEFAULT_TIMEZONE)
  return {
    from: { name: 'aegisaosoft.com contact form', address: env.SMTP_USER },
    to: env.CONTACT_TO || DEFAULT_TO,
    replyTo: { name: inquiry.name, address: inquiry.email },
    subject: `Contact form: ${inquiry.name}${inquiry.company ? ` (${inquiry.company})` : ''}`,
    text: [
      `Name:     ${inquiry.name}`,
      `Email:    ${inquiry.email}`,
      `Company:  ${company}`,
      `Received: ${received}`,
      '',
      inquiry.message,
      '',
      '-- ',
      'Sent from the contact form at https://aegisaosoft.com/contact. Reply to answer the sender.',
    ].join('\n'),
  }
}

/** Null when SMTP is not configured — the caller answers 503 rather than pretending it was sent. */
function createTransport(env = process.env) {
  if (env.CONTACT_MAIL_TRANSPORT === 'json') return nodemailer.createTransport({ jsonTransport: true })
  if (!env.SMTP_USER || !env.SMTP_PASS) return null
  const port = Number(env.SMTP_PORT || 465)
  return nodemailer.createTransport({
    host: env.SMTP_HOST || 'smtp.zoho.com',
    port,
    secure: port === 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    // The message carries no attachments or links to fetch; refuse any that slip in.
    disableFileAccess: true,
    disableUrlAccess: true,
  })
}

module.exports = { readInquiry, buildMessage, createTransport, DEFAULT_TO }
