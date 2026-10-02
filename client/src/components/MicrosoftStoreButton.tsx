/*
 * Copyright (c) 2025-2026 Aegis AO Soft LLC and Alexander Orlov.
 * 34 Middletown Ave, Atlantic Highlands, NJ 07716
 *
 * THIS SOFTWARE IS THE CONFIDENTIAL AND PROPRIETARY INFORMATION OF
 * Aegis AO Soft LLC and Alexander Orlov.
 *
 * This code may be used, reproduced, modified, or distributed ONLY with the
 * prior written permission of Aegis AO Soft LLC / Alexander Orlov.
 *
 * Author: Alexander Orlov
 * Aegis AO Soft LLC
 */


import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'

/** Shopping-bag glyph with the four Microsoft squares, sized to sit inline with button text. */
function MicrosoftStoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ flexShrink: 0 }}>
      <path d="M8 7V5.5a4 4 0 0 1 8 0V7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="7" width="18" height="14.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="7.4" y="10.4" width="4.3" height="4.3" fill="#F25022" />
      <rect x="12.3" y="10.4" width="4.3" height="4.3" fill="#7FBA00" />
      <rect x="7.4" y="15.3" width="4.3" height="4.3" fill="#00A4EF" />
      <rect x="12.3" y="15.3" width="4.3" height="4.3" fill="#FFB900" />
    </svg>
  )
}

/** "Get it from Microsoft Store" link with the Store icon; same look as the other secondary buttons. */
export function MicrosoftStoreButton({ href, style }: { href: string; style?: CSSProperties }) {
  const { t } = useTranslation()
  return (
    <a
      href={href}
      className="btn btn-secondary"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', ...style }}
    >
      <MicrosoftStoreIcon />
      <span>{t('productCards.buttons.microsoftStore')}</span>
    </a>
  )
}
