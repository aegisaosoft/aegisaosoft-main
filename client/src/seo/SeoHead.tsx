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

/*
 * The page's own metadata, written into the document head on every route change.
 *
 * Until this existed the site shipped one <title> and nothing else: every address returned the
 * same 459-byte shell, so Google read the home page and www.aegisaosoft.com as two copies of
 * each other and indexed neither ("Duplicate, Google chose a canonical the user did not
 * declare"). A page that cannot say which address it lives at, and cannot say what it is
 * about, is a page a search engine is free to guess about.
 *
 * Mounted once, inside the router, rather than called from fifteen page components: the tags
 * belong to the address, and the address is something the router already knows. Every tag is
 * rewritten in place on each route rather than appended, so no page can inherit the previous
 * one's canonical — pointing at the page the visitor came from is worse than saying nothing.
 *
 * The Organization object is not written here. It is the same on every page, it is in the
 * shell, and a second copy of it would only be a second copy.
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import seo from './pages.json'

const MARK = 'data-seo'

const SITE = seo.site
const COMPANY = 'Aegis AO Soft'

interface PageMeta {
  path: string
  title: string
  description: string
  noindex?: boolean
}

const PAGES: PageMeta[] = seo.pages

/** The page this address is, or nothing — an address with no entry is not a page of this site. */
export const metaFor = (pathname: string): PageMeta | undefined => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return PAGES.find((page) => page.path === path)
}

const upsertMeta = (selector: string, attrs: Record<string, string>): void => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector)
  const el = existing ?? document.createElement('meta')
  Object.entries(attrs).forEach(([name, value]) => el.setAttribute(name, value))
  el.setAttribute(MARK, '')
  if (!existing) document.head.appendChild(el)
}

const upsertLink = (rel: string, href: string): void => {
  const existing = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  const el = existing ?? document.createElement('link')
  el.setAttribute('rel', rel)
  el.setAttribute('href', href)
  el.setAttribute(MARK, '')
  if (!existing) document.head.appendChild(el)
}

export function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = metaFor(pathname)
    // An address with no entry is served as 404 by the server; the app still renders, and what
    // it must not do is invite a crawler to index the result.
    const title = page ? page.title : `${COMPANY}`
    const description = page ? page.description : ''
    const canonical = `${SITE}${page ? page.path : pathname}`
    const indexable = Boolean(page) && !page?.noindex

    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    })
    upsertLink('canonical', canonical)

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: COMPANY })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: `${SITE}${seo.defaultImage}` })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  }, [pathname])

  return null
}
