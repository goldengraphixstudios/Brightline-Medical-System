import React from 'react';
import { Link } from 'react-router-dom';

export default function Supplies() {
  return (
    <div className="supplies-page">
      {/* Header */}
      <header className="header scrolled">
        <div className="nav-container">
          <Link to="/" className="logo-container">
            <div className="logo-text">
              <div className="logo-main">BRIGHTLINE</div>
              <div className="logo-sub">Medical System</div>
            </div>
          </Link>
          
          <nav>
            <ul className="nav-menu">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/#about" className="nav-link">About</Link></li>
              <li><Link to="/equipment" className="nav-link">Equipment</Link></li>
              <li><Link to="/supplies" className="nav-link active">Supplies</Link></li>
              <li><Link to="/#contact" className="nav-link">Contact</Link></li>
              <li><Link to="/#contact" className="nav-cta">Get Quote</Link></li>
            </ul>
          </nav>
          
          <button className="mobile-menu-btn">☰</button>
        </div>
      </header>

      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, rgba(0, 206, 197, 0.08) 0%, rgba(195, 247, 58, 0.05) 100%)', padding: '8rem 2rem 4rem', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <div className="section-subtitle">Coming Soon</div>
          <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Medical Supplies Catalog
          </h1>
          <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            We're currently updating our medical supplies catalog. Check back soon for our complete range of laboratory supplies, consumables, reagents, and accessories.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section style={{ padding: '5rem 2rem' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ margin: '0 auto 2rem' }}>
            <defs>
              <linearGradient id="suppliesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00CEC5" />
                <stop offset="100%" stopColor="#C3F73A" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#suppliesGrad)" opacity="0.1" />
            <rect x="60" y="70" width="80" height="60" fill="url(#suppliesGrad)" opacity="0.3" rx="5" />
            <circle cx="100" cy="100" r="25" fill="url(#suppliesGrad)" opacity="0.6" />
            <path d="M 100 85 L 100 115 M 85 100 L 115 100" stroke="#00CEC5" strokeWidth="4" strokeLinecap="round" />
          </svg>
          
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#2D3748' }}>
            Medical Supplies Coming Soon
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4A5568', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            In the meantime, please contact us directly for all your medical supply needs including:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto 3rem', textAlign: 'left' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧪</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#2D3748' }}>
                Laboratory Reagents
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4A5568' }}>
                High-quality reagents for all analyzer systems
              </p>
            </div>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📋</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#2D3748' }}>
                Test Strips & Supplies
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4A5568' }}>
                Urinalysis strips and diagnostic supplies
              </p>
            </div>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔬</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#2D3748' }}>
                Lab Consumables
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4A5568' }}>
                Tubes, slides, and laboratory essentials
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#contact" className="btn-primary">Contact Us for Supplies</Link>
            <a href="tel:+639925682337" className="btn-secondary">Call: 0992-568-2337</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>BRIGHTLINE MEDICAL SYSTEM</h3>
            <p>
              Your trusted partner in medical excellence. Providing premium medical equipment and comprehensive support to healthcare facilities across the Philippines.
            </p>
            <div className="footer-social">
              <a href="mailto:brightlinemedicalsystem@ymail.com" className="social-link" aria-label="Email">✉️</a>
              <a href="tel:+639925682337" className="social-link" aria-label="Phone">📞</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/equipment">Equipment</Link></li>
              <li><Link to="/supplies">Supplies</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="/equipment">Chemistry Analyzers</Link></li>
              <li><Link to="/equipment">X-Ray Systems</Link></li>
              <li><Link to="/equipment">Ultrasound</Link></li>
              <li><Link to="/equipment">ECG Machines</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>Legazpi City, Albay</li>
              <li>Philippines</li>
              <li><a href="tel:+639925682337">0992-568-2337</a></li>
              <li><a href="mailto:brightlinemedicalsystem@ymail.com">Email Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Brightline Medical System. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
