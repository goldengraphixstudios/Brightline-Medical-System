import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const registrations = [
    { icon: Icons.Government, text: 'BIR Registered' },
    { icon: Icons.Certificate, text: 'DTI Certified Business' },
    { icon: Icons.Hospital, text: 'DOH Compliant Supplier' },
    { icon: Icons.Shield, text: 'FDA Approved Products' },
    { icon: Icons.Certificate, text: 'SEC Registered Company' },
  ];

  return (
    <div className="home-page">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo-container">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Brightline Medical System" className="logo-image" />
          </Link>
          
          <nav>
            <ul className="nav-menu">
              <li><a href="#home" className="nav-link active" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><Link to="/equipment" className="nav-link">Equipment</Link></li>
              <li><Link to="/supplies" className="nav-link">Supplies</Link></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
              <li><a href="#contact" className="nav-cta">Get Quote</a></li>
            </ul>
          </nav>
          
          <button className="mobile-menu-btn">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">Premium Medical Solutions</div>
            <h1 className="hero-title">
              Advancing <span className="highlight">Healthcare</span> with World-Class Medical Equipment
            </h1>
            <p className="hero-description">
              Brightline Medical System delivers cutting-edge medical equipment and supplies to healthcare facilities across the Philippines. From diagnostic imaging to laboratory analyzers, we provide the tools that save lives.
            </p>
            <div className="hero-cta-group">
              <Link to="/equipment" className="btn-primary">View Equipment</Link>
              <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a>
            </div>
            
            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><Icons.Certificate /></div>
                <div className="hero-feature-text">CE Certified Equipment</div>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><Icons.Lightning /></div>
                <div className="hero-feature-text">Fast Nationwide Delivery</div>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon"><Icons.Tools /></div>
                <div className="hero-feature-text">Expert Installation & Training</div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <svg width="550" height="550" viewBox="0 0 550 550" style={{ background: 'linear-gradient(135deg, rgba(27, 77, 62, 0.05) 0%, rgba(195, 247, 58, 0.03) 100%)' }}>
                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1B4D3E" />
                    <stop offset="100%" stopColor="#4CAF50" />
                  </linearGradient>
                  <linearGradient id="limeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C3F73A" />
                    <stop offset="100%" stopColor="#A4D930" />
                  </linearGradient>
                </defs>
                
                {/* Medical Cross - Much Bigger */}
                <g transform="translate(275, 275)">
                  <rect x="-50" y="-135" width="100" height="270" fill="url(#greenGradient)" rx="12" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="-135" y="-50" width="270" height="100" fill="url(#greenGradient)" rx="12" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" begin="0.5s" />
                  </rect>
                </g>
                
                {/* Heartbeat Line */}
                <path d="M 50 275 L 135 275 L 170 225 L 210 325 L 245 275 L 320 275" 
                      stroke="url(#limeGradient)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7">
                  <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="2s" repeatCount="indefinite" />
                </path>
                
                {/* Orbiting Particles */}
                <circle cx="275" cy="100" r="8" fill="url(#limeGradient)" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 275 275" to="360 275 275" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="275" r="7" fill="url(#greenGradient)" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 275 275" to="360 275 275" dur="10s" repeatCount="indefinite" />
                </circle>
                <circle cx="275" cy="460" r="7" fill="url(#limeGradient)" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 275 275" to="360 275 275" dur="12s" repeatCount="indefinite" />
                </circle>
                <circle cx="90" cy="275" r="6" fill="url(#greenGradient)" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="0 275 275" to="360 275 275" dur="9s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            
            <div className="floating-badge badge-1">
              <div className="badge-icon"><Icons.Hospital /></div>
              <div className="badge-text">Trusted by Healthcare</div>
            </div>
            
            <div className="floating-badge badge-2">
              <div className="badge-icon"><Icons.Microscope /></div>
              <div className="badge-text">Advanced Technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase Section */}
      <section style={{ background: 'linear-gradient(135deg, rgba(27, 77, 62, 0.02) 0%, rgba(195, 247, 58, 0.01) 100%)', padding: '4rem 2rem' }}>
        <div className="section-container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-subtitle">Our Equipment</div>
            <h2 className="section-title">Premium Medical Devices</h2>
            <p className="section-description">
              State-of-the-art medical equipment from trusted global manufacturers
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={process.env.PUBLIC_URL + '/urinalysis-analyzer.jpg'} alt="HT-11A Urinalysis Analyzer" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>HT-11A Urinalysis Analyzer</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Advanced automated urinalysis testing with high accuracy and efficiency</p>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={process.env.PUBLIC_URL + '/stationary-xray.jpg'} alt="ICEN Stationary X-Ray with DR System" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>ICEN Stationary X-Ray</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Complete X-Ray system with digital radiography for superior imaging quality</p>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={process.env.PUBLIC_URL + '/portable-xray.jpg'} alt="ICEN High Frequency Portable X-Ray" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>ICEN Portable X-Ray</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>High frequency portable X-Ray machine for flexible diagnostic imaging</p>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={process.env.PUBLIC_URL + '/hematology-analyzer.jpg'} alt="HIGHTOP HT-300 Hematology Analyzer" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>HIGHTOP HT-300</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>3-part hematology analyzer for comprehensive blood analysis</p>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={process.env.PUBLIC_URL + '/chemistry-analyzer.jpg'} alt="HTSH-2000 Chemistry Analyzer" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>HTSH-2000</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Full auto chemistry analyzer for precise clinical chemistry testing</p>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={process.env.PUBLIC_URL + '/ecg-machine.jpg'} alt="RN8003+ ECG Machine" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>RN8003+ ECG Machine</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Digital electrocardiography system for accurate cardiac monitoring</p>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={process.env.PUBLIC_URL + '/ultrasound.jpg'} alt="DP-10 Digital Ultrasound" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>DP-10 Ultrasound</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Digital ultrasonic diagnostic imaging system with superior resolution</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/equipment" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>View All Equipment</Link>
          </div>
        </div>
      </section>

      {/* About Section - continuing from previous... */}
      <section id="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image-container">
              <svg width="100%" height="450" viewBox="0 0 600 450">
                <defs>
                  <linearGradient id="aboutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1B4D3E" opacity="0.8" />
                    <stop offset="100%" stopColor="#4CAF50" opacity="0.6" />
                  </linearGradient>
                  <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C3F73A" opacity="0.7" />
                    <stop offset="100%" stopColor="#A4D930" opacity="0.5" />
                  </linearGradient>
                </defs>
                
                <rect width="600" height="450" fill="#F8F9FA" rx="20" />
                
                <g opacity="0.3">
                  <circle cx="150" cy="150" r="60" fill="url(#aboutGradient1)" />
                  <rect x="350" y="90" width="120" height="120" fill="url(#aboutGradient2)" rx="10" />
                  <circle cx="200" cy="330" r="50" fill="url(#aboutGradient1)" />
                  <rect x="380" y="280" width="100" height="100" fill="url(#aboutGradient2)" rx="10" />
                </g>
                
                <g transform="translate(300, 225)">
                  <circle cx="0" cy="0" r="80" fill="url(#aboutGradient1)" opacity="0.2" />
                  <rect x="-8" y="-40" width="16" height="80" fill="url(#aboutGradient1)" rx="3" />
                  <rect x="-40" y="-8" width="80" height="16" fill="url(#aboutGradient1)" rx="3" />
                </g>
                
                <path d="M 50 50 Q 100 80 150 50" stroke="url(#aboutGradient2)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 450 380 Q 500 350 550 380" stroke="url(#aboutGradient1)" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
              
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="about-content">
              <div className="section-subtitle">Who We Are</div>
              <h2 className="section-title">Your Trusted Partner in Medical Excellence</h2>
              <p>
                Brightline Medical System is a leading supplier of premium medical equipment and supplies in Legazpi City, Albay, Philippines. With over a decade of experience, we specialize in providing healthcare facilities with cutting-edge diagnostic, imaging, and laboratory equipment.
              </p>
              <p>
                Our commitment goes beyond just supplying equipment – we provide comprehensive support including installation, training, certification, and ongoing technical assistance to ensure your facility operates at peak efficiency.
              </p>
              
              <ul className="value-list">
                <li className="value-item">
                  <div className="value-icon"><Icons.Certificate /></div>
                  <div className="value-content">
                    <h4>Quality Assurance</h4>
                    <p>All equipment is CE certified and sourced from trusted global manufacturers</p>
                  </div>
                </li>
                <li className="value-item">
                  <div className="value-icon"><Icons.Shield /></div>
                  <div className="value-content">
                    <h4>Complete Support</h4>
                    <p>From consultation to installation, training, and maintenance – we're with you every step</p>
                  </div>
                </li>
                <li className="value-item">
                  <div className="value-icon"><Icons.Location /></div>
                  <div className="value-content">
                    <h4>Nationwide Service</h4>
                    <p>Fast delivery and service coverage across the Philippines</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Government Registration Belt - Moved Here */}
      <div className="gov-registration-belt">
        <div className="belt-content">
          {[...registrations, ...registrations].map((reg, index) => (
            <div key={index} className="belt-item">
              <reg.icon />
              <span>{reg.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section style={{ background: 'linear-gradient(135deg, rgba(27, 77, 62, 0.03) 0%, rgba(195, 247, 58, 0.02) 100%)' }}>
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle">Why Choose Us</div>
            <h2 className="section-title">Comprehensive Medical Solutions</h2>
            <p className="section-description">
              We provide end-to-end support for your medical facility, from equipment selection to ongoing maintenance and training.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Icons.Certificate /></div>
              <h3 className="feature-title">CE Certified Equipment</h3>
              <p className="feature-description">
                All our medical equipment meets international CE certification standards, ensuring quality, safety, and reliability for your healthcare facility.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Icons.GraduationCap /></div>
              <h3 className="feature-title">Professional Training</h3>
              <p className="feature-description">
                Comprehensive training programs for owners and staff on proper equipment operation, maintenance, and best practices.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Icons.Tools /></div>
              <h3 className="feature-title">Installation & Setup</h3>
              <p className="feature-description">
                Expert installation services including floor plan formulation and assistance with facility setup for optimal workflow.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Icons.Clipboard /></div>
              <h3 className="feature-title">Licensing Support</h3>
              <p className="feature-description">
                Assistance with government permits (PTC, Mayor's, DENR) and DOH compliance (FDA, LTO, drug testing licensing).
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Icons.ChartUp /></div>
              <h3 className="feature-title">Marketing Assistance</h3>
              <p className="feature-description">
                Support with laboratory marketing strategies and hiring qualified personnel including medical technologists.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><Icons.Shield /></div>
              <h3 className="feature-title">Warranty & Service</h3>
              <p className="feature-description">
                Extended warranty coverage with calibration services and nationwide technical support for all equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-subtitle">Get In Touch</div>
            <h2 className="section-title">Contact Brightline Medical System</h2>
            <p className="section-description">
              Ready to upgrade your medical facility? Contact us for a consultation and quote.
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon-wrapper"><Icons.Location /></div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Legazpi City, Albay<br />Philippines</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper"><Icons.Phone /></div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+639925682337">0992-568-2337</a><br />
                    <a href="tel:+639613899651">0961-389-9651</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper"><Icons.Email /></div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:brightlinemedicalsystem@ymail.com">
                      brightlinemedicalsystem@ymail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="name" className="form-input" required />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" className="form-input" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="facility">Facility Type *</label>
                  <select id="facility" name="facility" className="form-select" required>
                    <option value="">Select facility type</option>
                    <option value="hospital">Hospital</option>
                    <option value="clinic">Clinic</option>
                    <option value="laboratory">Laboratory</option>
                    <option value="imaging-center">Imaging Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="interest">Equipment Interest *</label>
                  <select id="interest" name="interest" className="form-select" required>
                    <option value="">Select equipment category</option>
                    <option value="chemistry-analyzer">Chemistry Analyzer</option>
                    <option value="hematology">Hematology Analyzer</option>
                    <option value="xray">X-Ray Systems</option>
                    <option value="ultrasound">Ultrasound</option>
                    <option value="ecg">ECG Machine</option>
                    <option value="urinalysis">Urinalysis Analyzer</option>
                    <option value="multiple">Multiple Equipment</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea id="message" name="message" className="form-textarea" required placeholder="Tell us about your facility and equipment needs..."></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Inquiry</button>
              </form>
            </div>
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
              <a href="mailto:brightlinemedicalsystem@ymail.com" className="social-link" aria-label="Email"><Icons.Email /></a>
              <a href="tel:+639925682337" className="social-link" aria-label="Phone"><Icons.Phone /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
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
