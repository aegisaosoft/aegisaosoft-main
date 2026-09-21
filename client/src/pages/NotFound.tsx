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
 * What an address the site does not have looks like.
 *
 * The server already answers those with a 404 and a noindex tag; without a route here the
 * router rendered a page that was a header, a footer and nothing in between. The English
 * strings are inline defaults, so the page reads correctly in the twelve languages whose
 * bundles do not mention it yet.
 */

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <main className="home-page">
      <section className="hero">
        <div className="container">
          <h1>{t('notFound.title', 'This page does not exist')}</h1>
          <p className="subtitle">
            {t('notFound.subtitle', 'The address you followed is not part of this site — it may have been mistyped, or it may have moved.')}
          </p>
          <div className="cta-buttons">
            <Link to="/" className="btn btn-primary">{t('notFound.home', 'Go to the home page')}</Link>
            <Link to="/products" className="btn btn-secondary">{t('notFound.products', 'See the products')}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
