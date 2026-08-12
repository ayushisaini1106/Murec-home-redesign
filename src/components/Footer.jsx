export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-marquee">
        <span>MUREC</span><span>·</span><span>BUILDING WITH TRUST</span><span>·</span><span>DESIGN THAT ENDURES</span><span>·</span><span>MADHUSUDAN URBAN REAL ESTATE</span><span>·</span>
        <span>MUREC</span><span>·</span><span>BUILDING WITH TRUST</span><span>·</span><span>DESIGN THAT ENDURES</span><span>·</span><span>MADHUSUDAN URBAN REAL ESTATE</span><span>·</span>
      </div>

      <div className="site-container">
        <div className="footer-top">
          {/* Brand Logo */}
          <div className="footer-brand">
            <a href="#top" aria-label="Back to top">
              <img src="/murec_logo.png" alt="MUREC emblem logo" className="footer-logo-img" />
            </a>
            <div className="footer-badge">PREMIUM RESIDENCES · NOIDA</div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-links">
            <span className="footer-col-title">Navigation</span>
            <a href="#legacy">Legacy</a>
            <a href="#collection">Collection</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Address, Email, Phone Column */}
          <div className="footer-contact-block">
            <span className="footer-col-title">Corporate Info</span>
            
            <div className="contact-item">
              <span className="contact-label">Corporate Address</span>
              <p>Madhusudan, 2nd Floor, Riana Towers, 51–52, Noida Sector 136, Uttar Pradesh – 201301</p>
            </div>

            <div className="contact-item-row">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:info@murec.com">info@murec.com</a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+919717773229">+91 97177 73229</a>
              </div>
            </div>
          </div>
        </div>

        {/* Concise Disclaimer Text */}
        <div className="footer-disclaimer-note">
          <p>
            This website is purely conceptual and for representation purposes. All layouts, specifications, amenities, and visuals are subject to change as decided by MUREC or competent authorities.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span>© 2026 MUREC. All rights reserved.</span>
          <span>Powered by Propacity</span>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.582 6.186a2.696 2.696 0 00-1.896-1.896C17.99 3.8 12 3.8 12 3.8s-5.99 0-7.686.49A2.696 2.696 0 002.418 6.186C1.928 7.882 1.928 12 1.928 12s0 4.118.49 5.814a2.696 2.696 0 001.896 1.896C6.01 20.2 12 20.2 12 20.2s5.99 0 7.686-.49a2.696 2.696 0 001.896-1.896C22.072 16.118 22.072 12 22.072 12s0-4.118-.49-5.814zM9.8 15.46V8.54L15.75 12 9.8 15.46z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
