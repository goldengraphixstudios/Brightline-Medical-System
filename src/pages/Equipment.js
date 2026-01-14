import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { equipmentData } from '../data/equipmentData';

export default function Equipment() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedSpecs, setExpandedSpecs] = useState({});

  const categories = ['All', ...new Set(equipmentData.map(item => item.category))];
  
  const filteredEquipment = selectedCategory === 'All' 
    ? equipmentData 
    : equipmentData.filter(item => item.category === selectedCategory);

  const toggleSpecs = (id) => {
    setExpandedSpecs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="equipment-page">
      {/* Header */}
      <header className="header scrolled">
        <div className="nav-container">
          <Link to="/" className="logo-container">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Brightline Medical System" className="logo-image" />
          </Link>
          
          <nav>
            <ul className="nav-menu">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/#about" className="nav-link">About</Link></li>
              <li><Link to="/equipment" className="nav-link active">Equipment</Link></li>
              <li><Link to="/supplies" className="nav-link">Supplies</Link></li>
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
          <div className="section-subtitle">Our Products</div>
          <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Medical Equipment Catalog
          </h1>
          <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            Explore our comprehensive range of CE-certified medical equipment. From chemistry analyzers to X-ray systems, we provide cutting-edge technology for modern healthcare facilities.
          </p>
          
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.8rem 1.8rem',
                  background: selectedCategory === category ? 'linear-gradient(135deg, #00CEC5 0%, #00A99D 100%)' : 'white',
                  color: selectedCategory === category ? 'white' : '#2D3748',
                  border: selectedCategory === category ? 'none' : '2px solid #E8EBED',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedCategory === category ? '0 4px 15px rgba(0, 206, 197, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.borderColor = '#00CEC5';
                    e.target.style.color = '#00CEC5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.borderColor = '#E8EBED';
                    e.target.style.color = '#2D3748';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="section-container">
          <div className="products-grid">
            {filteredEquipment.map((equipment) => (
              <div key={equipment.id} className="product-card">
                <div className="product-image-wrapper" style={{ minHeight: '280px', overflow: 'hidden' }}>
                  {equipment.image ? (
                    <img 
                      src={equipment.image} 
                      alt={equipment.name}
                      style={{ 
                        width: '100%', 
                        height: '280px', 
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  ) : (
                    <svg width="100%" height="260" viewBox="0 0 300 260">
                      <defs>
                        <linearGradient id={`grad-${equipment.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1B4D3E" opacity="0.3" />
                          <stop offset="100%" stopColor="#C3F73A" opacity="0.2" />
                        </linearGradient>
                      </defs>
                      <rect width="300" height="260" fill={`url(#grad-${equipment.id})`} />
                    </svg>
                  )}
                  <div className="product-badge">{equipment.category}</div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-title">{equipment.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#00CEC5', fontWeight: '600', marginBottom: '0.75rem' }}>
                    {equipment.subtitle}
                  </p>
                  <p className="product-description">
                    {equipment.description}
                  </p>
                  
                  <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '1rem', color: '#2D3748' }}>
                      Key Features:
                    </h4>
                    <ul className="product-features">
                      {equipment.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="product-feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => toggleSpecs(equipment.id)}
                    className="product-specs-toggle"
                  >
                    {expandedSpecs[equipment.id] ? 'Hide' : 'View'} Technical Specifications
                    <span style={{ transition: 'transform 0.3s', transform: expandedSpecs[equipment.id] ? 'rotate(180deg)' : 'rotate(0)' }}>
                      ▼
                    </span>
                  </button>
                  
                  {expandedSpecs[equipment.id] && (
                    <div className="product-specs">
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: '#2D3748' }}>
                        Technical Specifications
                      </h4>
                      {equipment.specifications.map((spec, index) => (
                        <div key={index} className="spec-row">
                          <span className="spec-label">{spec.label}</span>
                          <span className="spec-value">{spec.value}</span>
                        </div>
                      ))}
                      
                      {equipment.inclusions && equipment.inclusions.length > 0 && (
                        <div style={{ marginTop: '1.5rem' }}>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.75rem', color: '#2D3748' }}>
                            Inclusions:
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {equipment.inclusions.map((item, index) => (
                              <li key={index} style={{ fontSize: '0.9rem', color: '#4A5568', marginBottom: '0.4rem', paddingLeft: '1.2rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#00CEC5', fontWeight: '700' }}>•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #E8EBED' }}>
                    <Link 
                      to="/#contact" 
                      className="btn-primary"
                      style={{ width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }}
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEquipment.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <p style={{ fontSize: '1.2rem', color: '#A0AEC0' }}>
                No equipment found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, rgba(0, 206, 197, 0.05) 0%, rgba(195, 247, 58, 0.03) 100%)', padding: '5rem 2rem' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Need Help Choosing Equipment?
          </h2>
          <p className="section-description" style={{ marginBottom: '2.5rem' }}>
            Our medical equipment specialists are ready to help you select the perfect equipment for your facility's needs.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#contact" className="btn-primary">Contact Our Specialists</Link>
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
