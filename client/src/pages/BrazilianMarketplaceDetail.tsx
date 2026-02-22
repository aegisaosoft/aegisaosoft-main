import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function BrazilianMarketplaceDetail() {
  const { t } = useTranslation()

  return (
    <main className="product-detail-page">
      <section className="hero" style={{ backgroundColor: 'var(--card-bg)', padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>🛒 Mercadinho25</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>Global Marketplace for Brazilian Artisan Products</h2>
          <p className="subtitle" style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Connect Brazilian artisans with global customers through AI-powered translation, social commerce integration, and multi-tenant marketplace architecture. Launch your artisan marketplace today.
          </p>
          <div className="hero-actions" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a href="https://mercadinho25.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem', marginRight: '1rem' }}>Try Free Demo</a>
            <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Visit Marketplace</a>
          </div>
          <div className="hero-stats" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>10</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Languages</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>+ Indigenous</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>AI</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Translation</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>Social</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Commerce</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>Multi</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tenant</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 What is Mercadinho25?</h2>
            <p>Mercadinho25 is a cloud-based e-commerce platform that connects local Brazilian artisans and small vendors with customers seeking authentic handcrafted items, folk art, and everyday essentials.</p>
            <p>The multi-tenant architecture enables independent sellers to operate branded storefronts under a unified marketplace, each with customizable product catalogs, pricing, and fulfillment options.</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>🏢 Who is it for?</h2>
            <ul>
              <li><strong>Brazilian artisans</strong> creating traditional crafts and folk art</li>
              <li><strong>Small vendors</strong> selling handmade goods and regional products</li>
              <li><strong>Marketplace operators</strong> wanting to launch niche e-commerce platforms</li>
              <li><strong>Cultural product sellers</strong> focusing on authentic Brazilian heritage items</li>
              <li><strong>Social commerce businesses</strong> leveraging Instagram and Facebook sales</li>
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ Main Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🏪 Multi-Tenant Storefronts</h3>
                <p>Independent seller accounts with custom branding, unique storefront design, and personalized identity.</p>
              </div>
              <div className="capability-card">
                <h3>🌍 10-Language Support + Indigenous Languages</h3>
                <p>Portuguese, English, Spanish, French, German, Italian, Japanese, Russian, plus indigenous languages (Guaraní Mbyá, Nheengatu) with full localization.</p>
                <div style={{ marginTop: '0.8rem', padding: '0.8rem', backgroundColor: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '0.5rem', borderLeft: '3px solid var(--accent)' }}>
                  <strong style={{ color: 'var(--accent)' }}>🏛️ Cultural Heritage Feature:</strong>
                  <br />
                  <span style={{ fontSize: '0.9rem' }}>Special support for Brazilian indigenous languages:</span>
                  <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.85rem' }}>
                    <li><strong>Guaraní Mbyá</strong> (gn-mby) - Traditional Guarani language</li>
                    <li><strong>Nheengatu</strong> (yrl) - Amazonian lingua franca</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', fontStyle: 'italic', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                    Preserving and promoting Brazil's cultural linguistic diversity through commerce
                  </div>
                </div>
              </div>
              <div className="capability-card">
                <h3>🤖 AI Translation</h3>
                <p>Automatic product description translation using Google Translate API and Claude AI for maximum reach.</p>
              </div>
              <div className="capability-card">
                <h3>📱 Social Commerce</h3>
                <p>Full Instagram Shop and Facebook Marketplace integration — sell directly through social platforms.</p>
              </div>
              <div className="capability-card">
                <h3>💳 Payment Processing</h3>
                <p>Integrated Stripe and MercadoPago with marketplace commission structure and seller payouts.</p>
              </div>
              <div className="capability-card">
                <h3>📦 Shipping Integration</h3>
                <p>Correios integration for Brazilian shipping with tracking and fulfillment coordination.</p>
              </div>
            </div>
          </div>

          {/* Problem it solves */}
          <div className="detail-section">
            <h2>🔧 Problems it Solves</h2>
            <ul>
              <li><strong>Limited global reach</strong> → 10-language platform with AI translation + indigenous language support</li>
              <li><strong>Complex e-commerce setup</strong> → Ready-to-use marketplace platform</li>
              <li><strong>Social media sales challenges</strong> → Integrated Instagram/Facebook commerce</li>
              <li><strong>Payment processing barriers</strong> → Multi-gateway support with local options</li>
              <li><strong>Inventory management complexity</strong> → Comprehensive vendor management system</li>
              <li><strong>Mobile shopping limitations</strong> → Mobile-first responsive design</li>
            </ul>
          </div>

          {/* Core Offerings */}
          <div className="detail-section">
            <h2>🎨 Core Product Categories</h2>
            <div className="offerings-grid">
              <div className="offering-card">
                <h3>Traditional Folk Crafts (Artesanato)</h3>
                <p>Ceramics, woodwork, textiles, lacework</p>
              </div>
              <div className="offering-card">
                <h3>Regional Handmade Goods</h3>
                <p>Leather items, woven baskets, embroidery</p>
              </div>
              <div className="offering-card">
                <h3>Everyday Essentials</h3>
                <p>Household sundries and daily necessities</p>
              </div>
              <div className="offering-card">
                <h3>Souvenirs & Decorative Pieces</h3>
                <p>Items representing Brazilian cultural heritage</p>
              </div>
            </div>
          </div>

          {/* Social Media Integration */}
          <div className="detail-section">
            <h2>📱 Social Commerce Integration</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              Comprehensive social commerce features enabling Brazilian artisans to sell directly through social media platforms and reach global audiences.
            </p>

            <div className="social-integrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🛒 Instagram Shop Integration
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  <li>Automatic product catalog sync to Instagram Shop</li>
                  <li>Direct checkout within Instagram app</li>
                  <li>Product tagging in posts and stories</li>
                  <li>Automated inventory updates</li>
                  <li>Multi-language product descriptions</li>
                  <li>Order fulfillment tracking integration</li>
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  📘 Facebook Marketplace Integration
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  <li>Automatic product listings on Facebook Marketplace</li>
                  <li>Facebook Business page shop integration</li>
                  <li>Targeted advertising for artisan products</li>
                  <li>Customer reviews and rating sync</li>
                  <li>Facebook Messenger customer support</li>
                  <li>Event-based promotional campaigns</li>
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  💬 WhatsApp Business Integration
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  <li>WhatsApp contact button on product pages</li>
                  <li>Individual WhatsApp numbers per seller</li>
                  <li>Automated order confirmations via WhatsApp</li>
                  <li>Product catalog sharing through WhatsApp</li>
                  <li>Customer support and inquiries</li>
                  <li>Delivery status notifications</li>
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🌍 Multi-Platform Analytics
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  <li>Unified analytics dashboard for all platforms</li>
                  <li>Social media performance tracking</li>
                  <li>Cross-platform sales attribution</li>
                  <li>Customer journey mapping</li>
                  <li>ROI tracking for social media campaigns</li>
                  <li>Automated reporting and insights</li>
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '2px solid var(--accent)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🏛️ Cultural Heritage Preservation
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ marginBottom: '0.8rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Beyond commercial success, Mercadinho25 actively preserves Brazilian cultural and linguistic diversity.
                  </p>
                  <div style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem', color: 'var(--accent)', fontSize: '1rem' }}>Indigenous Language Support:</h4>
                    <ul style={{ lineHeight: '1.6', fontSize: '0.9rem', margin: 0 }}>
                      <li><strong>Guaraní Mbyá</strong> (gn-mby) - Sacred language of the Guarani people</li>
                      <li><strong>Nheengatu</strong> (yrl) - Amazonian lingua franca, "good language"</li>
                    </ul>
                  </div>
                  <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    Empowering indigenous artisans to showcase their work in their native languages, preserving cultural identity while reaching global markets.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ Technology Stack</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>Frontend</h3>
                <p>React, TypeScript, Material-UI</p>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <p>Node.js RESTful API, Multi-tenant architecture</p>
              </div>
              <div className="tech-category">
                <h3>Database</h3>
                <p>PostgreSQL with tenant isolation</p>
              </div>
              <div className="tech-category">
                <h3>Cloud</h3>
                <p>Azure App Service, Auto-scaling</p>
              </div>
              <div className="tech-category">
                <h3>AI & Translation</h3>
                <p>Google Translate API, Claude AI</p>
              </div>
              <div className="tech-category">
                <h3>Integration</h3>
                <p>Instagram Graph API, Facebook Business API, MercadoPago</p>
              </div>
            </div>
          </div>

          {/* Live Examples - Tenant Storefronts */}
          <div className="detail-section">
            <h2>🏪 Live Tenant Examples</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              See how independent sellers create their own branded storefronts within the marketplace. Each tenant has complete control over their branding, products, and customer experience.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>

              {/* Alex's Store */}
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Alex's Artisan Workshop</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Traditional Brazilian ceramics and pottery. Custom branded storefront with unique design and personalized customer experience.
                </p>
                <a
                  href="https://alex.mercadinho25.com"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginBottom: '0.5rem', display: 'inline-block', width: '200px' }}
                >
                  🌐 Visit Alex's Store
                </a>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  alex.mercadinho25.com
                </div>
              </div>

              {/* Joanna's Store */}
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧵</div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Joanna's Textile Gallery</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Handwoven textiles and embroidery from São Paulo. Showcases custom branding with social media integration and multilingual support.
                </p>
                <a
                  href="https://joanna.mercadinho25.com"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginBottom: '0.5rem', display: 'inline-block', width: '200px' }}
                >
                  🌐 Visit Joanna's Store
                </a>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  joanna.mercadinho25.com
                </div>
              </div>

            </div>

            <div style={{
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid var(--accent)',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, color: 'var(--accent)', fontWeight: '500' }}>
                💡 <strong>Multi-Tenant Architecture:</strong> Each seller gets their own subdomain, custom branding, isolated data, and complete storefront control — all managed from a single platform.
              </p>
            </div>
          </div>

          {/* Administration & Seller Guide - Link to dedicated page */}
          <div className="detail-section">
            <div style={{
              backgroundColor: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '2px solid var(--accent)',
              textAlign: 'center'
            }}>
              <h2 style={{ marginBottom: '1rem' }}>📋 {t('adminGuide.sectionTitle')}</h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                {t('adminGuide.sectionSubtitle')}
              </p>
              <Link to="/admin-guide" className="btn btn-primary" style={{
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                📚 View Complete Admin Guide
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>Ready to Connect Artisans with Global Markets?</h2>
            <p>Launch your own Brazilian artisan marketplace with built-in social commerce and AI translation.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Start Your Marketplace</Link>
              <a href="https://mercadinho25.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Visit Site</a>
              <Link to="/admin-guide" className="btn btn-secondary">Seller Guide</Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}