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

export function MyEZTollDetail() {

  return (
    <main className="product-detail-page">
      <section className="hero">
        <div className="container">
          <h1>🛣️ MyEZToll</h1>
          <h2>Toll & Parking Management Platform for Rental Fleets</h2>
          <p className="subtitle">
            Enterprise-grade platform designed specifically for car rental and fleet operators to automate toll processing and parking violation management across all 50 U.S. states.
          </p>
        </div>
      </section>

      <section className="product-details">
        <div className="container">

          {/* What is this product */}
          <div className="detail-section">
            <h2>🎯 What is MyEZToll?</h2>
            <p>MyEZToll is a specialized, single-organization platform (NOT multi-tenant) built exclusively for car rental companies and fleet operators who need comprehensive toll and parking violation management.</p>
            <p>Unlike generic solutions, MyEZToll provides dedicated infrastructure for individual fleet operators with complete control over their toll processing and violation workflows across all 50 U.S. states.</p>
          </div>

          {/* For whom */}
          <div className="detail-section">
            <h2>🏢 Who is it for?</h2>
            <ul>
              <li><strong>Car rental companies</strong> with multi-state operations</li>
              <li><strong>Fleet management companies</strong> handling toll-heavy routes</li>
              <li><strong>Enterprise fleet operators</strong> seeking automated compliance</li>
              <li><strong>Rental franchises</strong> needing centralized toll management</li>
              <li><strong>Corporate fleets</strong> with extensive travel across toll roads</li>
            </ul>
          </div>

          {/* Main capabilities */}
          <div className="detail-section">
            <h2>⚡ Main Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h3>🚛 Automated Toll Processing</h3>
                <p>Seamless processing of toll charges across multiple states with automatic reconciliation and payment.</p>
              </div>
              <div className="capability-card">
                <h3>🅿️ Parking Violation Management</h3>
                <p>Comprehensive tracking and dispute workflow for parking citations with automated resolution.</p>
              </div>
              <div className="capability-card">
                <h3>🇺🇸 50-State Coverage</h3>
                <p>Complete support for all U.S. states and territories with local regulation compliance.</p>
              </div>
              <div className="capability-card">
                <h3>⚙️ Owner Self-Service Portal</h3>
                <p>Dedicated portal for vehicle owners to handle payments and dispute workflows independently.</p>
              </div>
              <div className="capability-card">
                <h3>📊 Fleet Analytics</h3>
                <p>Comprehensive reporting and analytics for toll costs, violation trends, and fleet performance.</p>
              </div>
              <div className="capability-card">
                <h3>🤖 Intelligent Automation</h3>
                <p>AI-powered citation parsing and automated payment processing with minimal manual intervention.</p>
              </div>
            </div>
          </div>

          {/* Problem it solves */}
          <div className="detail-section">
            <h2>🔧 Problems it Solves</h2>
            <ul>
              <li><strong>Manual toll reconciliation</strong> → Automated processing across all states</li>
              <li><strong>Parking violation backlog</strong> → Intelligent parsing and dispute management</li>
              <li><strong>Multi-state compliance complexity</strong> → Unified 50-state regulatory coverage</li>
              <li><strong>Customer service burden</strong> → Self-service owner portal for disputes</li>
              <li><strong>Administrative overhead</strong> → Automated workflows and notifications</li>
              <li><strong>Cost visibility issues</strong> → Real-time reporting and analytics</li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="detail-section">
            <h2>🔑 Key Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>🔄 Single-Organization Architecture</h3>
                <p>Dedicated platform for individual fleet operators with complete data isolation and custom workflows.</p>
              </div>
              <div className="feature-item">
                <h3>🏛️ Government Integration</h3>
                <p>Direct integration with state DMV systems and municipal parking authorities for real-time data.</p>
              </div>
              <div className="feature-item">
                <h3>💰 Cost Optimization</h3>
                <p>Intelligent routing suggestions and toll cost analysis to minimize operational expenses.</p>
              </div>
              <div className="feature-item">
                <h3>📱 Mobile Access</h3>
                <p>Mobile-responsive interface for on-the-go fleet management and violation handling.</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-section">
            <h2>🛠️ Technology Stack</h2>
            <div className="tech-grid">
              <div className="tech-category">
                <h3>Frontend</h3>
                <p>React, Responsive design</p>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <p>ASP.NET Core, Robust API architecture</p>
              </div>
              <div className="tech-category">
                <h3>Database</h3>
                <p>PostgreSQL, Optimized queries</p>
              </div>
              <div className="tech-category">
                <h3>Cloud</h3>
                <p>Microsoft Azure, High availability</p>
              </div>
              <div className="tech-category">
                <h3>Automation</h3>
                <p>Playwright, Puppeteer web scraping</p>
              </div>
              <div className="tech-category">
                <h3>Security</h3>
                <p>Enterprise-grade security, AML compliance</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2>Ready to Automate Your Fleet Operations?</h2>
            <p>Eliminate manual toll processing and parking violation management with our enterprise-grade solution.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Demo</Link>
              <a href="https://myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Visit Site</a>
              <a href="https://owner.myeztoll.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Owner Portal</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}