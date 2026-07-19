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


import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/** List item that keeps inline <strong> markup out of the translation string. */
type LabeledItem = { label: string; text: string }

/**
 * Platform support rows. These are file extensions and code snippets, so they stay
 * out of the translation files: nothing here is translatable, and the Vue snippet
 * would otherwise be swallowed by i18next nesting syntax.
 */
const STACK_ROWS = [
  { platform: '.NET', reads: '.cs, .cshtml, .razor, .xaml, .axaml', writes: '.resx', rewrites: 'L.Key, L.Format(...)' },
  { platform: 'Web', reads: '.tsx, .jsx, .ts, .js, .vue, .svelte, .html', writes: 'i18next JSON', rewrites: '{t("Key")}, {{ $t("Key") }}' },
  { platform: 'Android', reads: '.kt, .java, layout XML', writes: 'values-<locale>/strings.xml', rewrites: '@string/key, stringResource(...)' },
  { platform: 'Apple', reads: '.swift, .m, .h, .storyboard, .xib', writes: '<locale>.lproj/Localizable.strings', rewrites: 'String(localized:), NSLocalizedString' },
  { platform: 'Flutter', reads: '.dart', writes: 'app_<locale>.arb', rewrites: 'AppLocalizations.of(context)!.key' },
]

export function AegisLocalizerDetail() {
  const { t } = useTranslation()

  // Helper casts for i18next arrays returned via returnObjects
  const list = (key: string) => t(key, { returnObjects: true }) as string[]
  const labeledList = (key: string) => t(key, { returnObjects: true }) as LabeledItem[]

  return (
    <main className="product-detail-page">
      <section className="hero">
        <div className="container">
          <h1>🌐 Aegis Localizer</h1>
          <h2>{t('aegisLocalizerDetail.hero.title')}</h2>
          <p className="subtitle">
            {t('aegisLocalizerDetail.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 {t('aegisLocalizerDetail.whatIs.title')}</h2>
            <p>{t('aegisLocalizerDetail.whatIs.p1')}</p>
            <p>{t('aegisLocalizerDetail.whatIs.p2')}</p>
            <p>{t('aegisLocalizerDetail.whatIs.p3')}</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>🏢 {t('aegisLocalizerDetail.forWhom.title')}</h2>
            <ul>
              {labeledList('aegisLocalizerDetail.forWhom.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* How it works */}
          <div className="detail-section">
            <h2>⚙️ {t('aegisLocalizerDetail.pipeline.title')}</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {t('aegisLocalizerDetail.pipeline.intro')}
            </p>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🔍 {t('aegisLocalizerDetail.pipeline.cards.scan.title')}</h3>
                <p>{t('aegisLocalizerDetail.pipeline.cards.scan.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🧹 {t('aegisLocalizerDetail.pipeline.cards.filter.title')}</h3>
                <p>{t('aegisLocalizerDetail.pipeline.cards.filter.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🤖 {t('aegisLocalizerDetail.pipeline.cards.classify.title')}</h3>
                <p>{t('aegisLocalizerDetail.pipeline.cards.classify.text')}</p>
              </div>
              <div className="capability-card">
                <h3>🗂️ {t('aegisLocalizerDetail.pipeline.cards.resources.title')}</h3>
                <p>{t('aegisLocalizerDetail.pipeline.cards.resources.text')}</p>
              </div>
              <div className="capability-card">
                <h3>✍️ {t('aegisLocalizerDetail.pipeline.cards.rewrite.title')}</h3>
                <p>{t('aegisLocalizerDetail.pipeline.cards.rewrite.text')}</p>
              </div>
              <div className="capability-card">
                <h3>♻️ {t('aegisLocalizerDetail.pipeline.cards.incremental.title')}</h3>
                <p>{t('aegisLocalizerDetail.pipeline.cards.incremental.text')}</p>
              </div>
            </div>
          </div>

          {/* Supported stacks */}
          <div className="detail-section">
            <h2>🧩 {t('aegisLocalizerDetail.stacks.title')}</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {t('aegisLocalizerDetail.stacks.intro')}
            </p>

            <div className="social-integrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {STACK_ROWS.map((row) => (
                <div key={row.platform} className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{row.platform}</h3>
                  <ul style={{ marginBottom: '0', lineHeight: '1.6' }}>
                    <li><strong>{t('aegisLocalizerDetail.stacks.labels.reads')}</strong>{' '}{row.reads}</li>
                    <li><strong>{t('aegisLocalizerDetail.stacks.labels.writes')}</strong>{' '}{row.writes}</li>
                    <li><strong>{t('aegisLocalizerDetail.stacks.labels.rewrites')}</strong>{' '}{row.rewrites}</li>
                  </ul>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem' }}>
              {t('aegisLocalizerDetail.stacks.outro')}
            </p>
          </div>

          {/* Safety */}
          <div className="detail-section">
            <h2>🛡️ {t('aegisLocalizerDetail.safety.title')}</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {t('aegisLocalizerDetail.safety.intro')}
            </p>
            <ul>
              {labeledList('aegisLocalizerDetail.safety.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Problems it solves */}
          <div className="detail-section">
            <h2>🔧 {t('aegisLocalizerDetail.problems.title')}</h2>
            <ul>
              {labeledList('aegisLocalizerDetail.problems.items').map((item) => (
                <li key={item.label}><strong>{item.label}</strong>{' '}{item.text}</li>
              ))}
            </ul>
          </div>

          {/* Ways to run it */}
          <div className="detail-section">
            <h2>🚀 {t('aegisLocalizerDetail.delivery.title')}</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>⌨️ {t('aegisLocalizerDetail.delivery.cards.cli.title')}</h3>
                <p>{t('aegisLocalizerDetail.delivery.cards.cli.text')}</p>
              </div>
              <div className="feature-item">
                <h3>🖥️ {t('aegisLocalizerDetail.delivery.cards.gui.title')}</h3>
                <p>{t('aegisLocalizerDetail.delivery.cards.gui.text')}</p>
              </div>
              <div className="feature-item">
                <h3>📦 {t('aegisLocalizerDetail.delivery.cards.binaries.title')}</h3>
                <p>{t('aegisLocalizerDetail.delivery.cards.binaries.text')}</p>
              </div>
              <div className="feature-item">
                <h3>🔄 {t('aegisLocalizerDetail.delivery.cards.ci.title')}</h3>
                <p>{t('aegisLocalizerDetail.delivery.cards.ci.text')}</p>
              </div>
              <div className="feature-item">
                <h3>🔑 {t('aegisLocalizerDetail.delivery.cards.byok.title')}</h3>
                <p>{t('aegisLocalizerDetail.delivery.cards.byok.text')}</p>
              </div>
              <div className="feature-item">
                <h3>☁️ {t('aegisLocalizerDetail.delivery.cards.hosted.title')}</h3>
                <p>{t('aegisLocalizerDetail.delivery.cards.hosted.text')}</p>
              </div>
            </div>
          </div>

          {/* Boundaries — what it will not do */}
          <div className="detail-section">
            <h2>🚧 {t('aegisLocalizerDetail.limits.title')}</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('aegisLocalizerDetail.limits.intro')}
            </p>
            <ul>
              {list('aegisLocalizerDetail.limits.items').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ {t('aegisLocalizerDetail.tech.title')}</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.core.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.core.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.parsing.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.parsing.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.ai.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.ai.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.web.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.web.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.formats.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.formats.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.testing.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.testing.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.platforms.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.platforms.text')}</p>
              </div>
              <div className="tech-category">
                <h3>{t('aegisLocalizerDetail.tech.cards.privacy.title')}</h3>
                <p>{t('aegisLocalizerDetail.tech.cards.privacy.text')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>{t('aegisLocalizerDetail.cta.title')}</h2>
            <p>{t('aegisLocalizerDetail.cta.text')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">{t('aegisLocalizerDetail.cta.contact')}</Link>
              <a href="https://github.com/aegisaosoft/aegis-localizer" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('aegisLocalizerDetail.cta.sourceCode')}</a>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
              {t('aegisLocalizerDetail.cta.licenseNote')}
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
