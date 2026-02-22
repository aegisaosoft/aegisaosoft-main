import { Link } from 'react-router-dom'

export function AegisRentalDetail() {

  return (
    <main className="product-detail-page">
      <section className="hero" style={{ backgroundColor: 'var(--card-bg)', padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>🚗 Aegis Rental</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>Complete Car Rental SaaS Platform</h2>
          <p className="subtitle" style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Launch your own branded car rental website in minutes. Multi-tenant architecture with AI-powered booking, automated payments, and 5-language support for global operations.
          </p>
          <div className="hero-actions" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a href="https://aegis-rental.com/demo" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem', marginRight: '1rem' }}>Try Free Demo</a>
            <a href="https://aegis-rental.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Visit Platform</a>
          </div>
          <div className="hero-stats" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>5</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Languages</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>Multi</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tenant</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>AI</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Powered</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>Cloud</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Native</div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 What is Aegis Rental?</h2>
            <p>Aegis Rental is a comprehensive, multi-tenant SaaS platform that enables vehicle rental companies to quickly launch their own professional rental website. Built on modern cloud architecture, it provides everything needed to manage fleets, customers, and bookings from day one.</p>
            <p>Each rental company gets their own branded subdomain (yourcompany.aegis-rental.com) with complete customization options for logos, colors, and contact information.</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>🏢 Who is it for?</h2>
            <ul>
              <li><strong>Car rental companies</strong> looking to digitize their operations</li>
              <li><strong>Fleet operators</strong> wanting to offer direct customer rentals</li>
              <li><strong>Entrepreneurs</strong> starting new rental businesses</li>
              <li><strong>Existing rental businesses</strong> seeking to modernize legacy systems</li>
              <li><strong>Multi-location rental chains</strong> needing centralized management</li>
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ Main Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🎙️ AI-Powered Booking</h3>
                <p>Voice AI search and booking — customers speak naturally to find and reserve vehicles with intelligent recommendations.</p>
              </div>
              <div className="capability-card">
                <h3>📱 BlinkID Verification</h3>
                <p>Instant driver's license scanning (front & back) with automatic data extraction and age verification.</p>
              </div>
              <div className="capability-card">
                <h3>💳 Stripe Connect Payments</h3>
                <p>Seamless payment processing with multi-currency support for North and South America, including security deposits.</p>
              </div>
              <div className="capability-card">
                <h3>🌍 5-Language Support</h3>
                <p>Full localization in English, Spanish, Portuguese, French, and German with automated email communications.</p>
              </div>
              <div className="capability-card">
                <h3>📊 Fleet Management</h3>
                <p>Complete vehicle inventory management, maintenance scheduling, and real-time status updates.</p>
              </div>
              <div className="capability-card">
                <h3>📱 Social Media Integration</h3>
                <p>Full Instagram and Facebook integration for marketing and customer engagement.</p>
              </div>
            </div>
          </div>

          {/* Problem it solves */}
          <div className="detail-section">
            <h2>🔧 Problems it Solves</h2>
            <ul>
              <li><strong>Manual booking processes</strong> → Automated AI-powered reservation system</li>
              <li><strong>Paper-based verification</strong> → Digital ID scanning and validation</li>
              <li><strong>Complex payment handling</strong> → Integrated Stripe Connect with automatic payouts</li>
              <li><strong>Language barriers</strong> → Multi-language platform with full localization</li>
              <li><strong>High development costs</strong> → Ready-to-launch SaaS solution in minutes</li>
              <li><strong>Marketing challenges</strong> → Built-in social media integration and SEO optimization</li>
            </ul>
          </div>

          {/* Social Media Integration */}
          <div className="detail-section">
            <h2>📱 Social Media Integration</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              Integrated social commerce features to help rental companies showcase their fleet and attract customers through social media platforms.
            </p>

            <div className="social-integrations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  📷 Instagram Business Integration
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  <li>Showcase your fleet with automatic photo posting</li>
                  <li>Instagram Business profile integration</li>
                  <li>Vehicle availability updates</li>
                  <li>Customer testimonials and reviews</li>
                  <li>Location-based marketing for multiple branches</li>
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  📘 Facebook Business Integration
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  <li>Direct bookings through Facebook page</li>
                  <li>Facebook Marketplace vehicle listings</li>
                  <li>Automated ad campaign management</li>
                  <li>Event-based promotions and discounts</li>
                  <li>Customer support via Facebook Messenger</li>
                </ul>
              </div>

              <div className="integration-card" style={{ padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  🎯 Marketing Automation
                </h3>
                <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                  <li>Automated social media posting schedules</li>
                  <li>Vehicle availability notifications</li>
                  <li>Seasonal campaign management</li>
                  <li>Customer review aggregation and sharing</li>
                  <li>Analytics and performance tracking</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ Technology Stack</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>Frontend</h3>
                <p>React, TypeScript, Modern responsive design</p>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <p>ASP.NET Core REST API, PostgreSQL</p>
              </div>
              <div className="tech-category">
                <h3>Cloud</h3>
                <p>Microsoft Azure, Auto-scaling infrastructure</p>
              </div>
              <div className="tech-category">
                <h3>Payments</h3>
                <p>Stripe Connect, Multi-currency support</p>
              </div>
              <div className="tech-category">
                <h3>AI & ML</h3>
                <p>Voice recognition, Claude AI recommendations</p>
              </div>
              <div className="tech-category">
                <h3>Integration</h3>
                <p>BlinkID SDK, Instagram/Facebook APIs</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>Ready to Launch Your Rental Business?</h2>
            <p>Get your own branded car rental website up and running in minutes. No coding required, no IT team needed.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
              <a href="https://aegis-rental.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Visit Site</a>
              <a href="https://aegis-rental.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Request Pricing</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}