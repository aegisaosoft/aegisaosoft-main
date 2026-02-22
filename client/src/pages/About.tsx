import { Link } from 'react-router-dom'

export function About() {
  return (
    <main style={{ paddingTop: '5rem' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            About Aegis AO Soft
          </h1>
          <p style={{ fontSize: '1.3rem', textAlign: 'center', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
            Secure, reliable software systems for regulated and mission-critical environments
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Aegis AO Soft develops secure, reliable software systems for organizations operating in regulated and mission-critical environments.
              The company specializes in platforms that support operational continuity, regulatory compliance, and large-scale data processing.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              Founded and led by a veteran software architect, Aegis AO Soft combines hands-on technical leadership with decades of experience
              delivering production systems for government-adjacent industries and complex operational domains.
            </p>
          </div>
        </div>
      </section>

      {/* Mission-Critical Systems */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            Mission-Critical Operational Systems
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Our work focuses on systems that must function continuously and accurately, often under regulatory oversight or operational constraints.
          </p>

          <div style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>Typical areas include:</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Fleet and transportation operations</li>
              <li style={{ marginBottom: '0.5rem' }}>Payment and billing systems</li>
              <li style={{ marginBottom: '0.5rem' }}>Compliance and reporting platforms</li>
              <li style={{ marginBottom: '0.5rem' }}>Workflow automation for administrative processes</li>
              <li style={{ marginBottom: '0.5rem' }}>Data-intensive operational software</li>
            </ul>
          </div>

          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280', textAlign: 'center' }}>
            Solutions are designed for reliability, auditability, and long-term maintainability.
          </p>
        </div>
      </section>

      {/* Transportation Technology */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            Transportation and Regulatory Technology
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Aegis AO Soft develops platforms supporting vehicle-based operations and associated regulatory requirements.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem' }}>Vehicle Rental and Fleet Management</h3>
              <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Operational control of vehicle inventories</li>
                <li style={{ marginBottom: '0.5rem' }}>Reservation and utilization tracking</li>
                <li style={{ marginBottom: '0.5rem' }}>Customer and contract management</li>
                <li style={{ marginBottom: '0.5rem' }}>Payment processing integration</li>
                <li style={{ marginBottom: '0.5rem' }}>Multi-location deployment</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem' }}>Toll and Violation Management</h3>
              <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Aggregation of toll charges across authorities</li>
                <li style={{ marginBottom: '0.5rem' }}>Processing of parking violations across jurisdictions</li>
                <li style={{ marginBottom: '0.5rem' }}>Billing, reconciliation, and reporting</li>
                <li style={{ marginBottom: '0.5rem' }}>Support for organizations operating nationwide fleets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            Security, Compliance, and Data Integrity
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Systems are engineered with strong emphasis on security and compliance considerations.
          </p>

          <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <li style={{ marginBottom: '0.5rem' }}>Controlled access and identity management</li>
            <li style={{ marginBottom: '0.5rem' }}>Data protection practices aligned with industry standards</li>
            <li style={{ marginBottom: '0.5rem' }}>Audit-ready logging and reporting</li>
            <li style={{ marginBottom: '0.5rem' }}>Isolation mechanisms for multi-tenant deployments</li>
            <li style={{ marginBottom: '0.5rem' }}>Payment processing compliance practices</li>
          </ul>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            Technology Capabilities
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Platforms are built using modern, widely adopted technologies to ensure sustainability and interoperability.
          </p>

          <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            <li style={{ marginBottom: '0.5rem' }}>Microsoft Azure cloud infrastructure</li>
            <li style={{ marginBottom: '0.5rem' }}>Modern .NET platform and ASP.NET Core</li>
            <li style={{ marginBottom: '0.5rem' }}>Distributed service architectures</li>
            <li style={{ marginBottom: '0.5rem' }}>Relational data management systems</li>
            <li style={{ marginBottom: '0.5rem' }}>Containerized deployments</li>
            <li style={{ marginBottom: '0.5rem' }}>Automated monitoring and diagnostics</li>
          </ul>

          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280', textAlign: 'center' }}>
            Technology choices prioritize long-term supportability over short-term trends.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            Founder-Architect Leadership
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Aegis AO Soft operates under direct technical leadership rather than purely managerial oversight.
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              The founder brings decades of experience designing and implementing complex systems in regulated environments, including:
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', paddingLeft: '2rem', marginBottom: '2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Financial services infrastructure</li>
              <li style={{ marginBottom: '0.5rem' }}>Payment processing systems</li>
              <li style={{ marginBottom: '0.5rem' }}>Regulatory reporting platforms</li>
              <li style={{ marginBottom: '0.5rem' }}>Government-related software initiatives</li>
              <li style={{ marginBottom: '0.5rem' }}>Large-scale transactional systems</li>
            </ul>

            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280', textAlign: 'center' }}>
              This approach ensures architectural consistency, technical accountability, and rapid resolution of complex issues.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '1rem' }}>
            Delivery Approach
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#6b7280', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Projects follow a disciplined lifecycle intended to reduce risk and support operational readiness.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                margin: '0 auto 1rem auto'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>Assessment</h3>
              <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Requirements analysis</li>
                <li style={{ marginBottom: '0.5rem' }}>Data and workflow evaluation</li>
                <li style={{ marginBottom: '0.5rem' }}>Architecture definition</li>
                <li style={{ marginBottom: '0.5rem' }}>Integration planning</li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                margin: '0 auto 1rem auto'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>Implementation</h3>
              <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Incremental development</li>
                <li style={{ marginBottom: '0.5rem' }}>Secure deployment pipelines</li>
                <li style={{ marginBottom: '0.5rem' }}>Automated testing</li>
                <li style={{ marginBottom: '0.5rem' }}>Documentation of system behavior</li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                margin: '0 auto 1rem auto'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>Operational Support</h3>
              <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Performance tuning</li>
                <li style={{ marginBottom: '0.5rem' }}>Monitoring and alerting</li>
                <li style={{ marginBottom: '0.5rem' }}>Security hardening</li>
                <li style={{ marginBottom: '0.5rem' }}>Ongoing maintenance and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Commitment */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem' }}>
            Commitment to Reliability and Accountability
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '3rem' }}>
              Aegis AO Soft engages with organizations that require dependable systems and a long-term technology partner.
              Our objective is to deliver solutions that remain stable, maintainable, and auditable throughout their operational lifecycle.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-block'
              }}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}