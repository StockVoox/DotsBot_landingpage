'use client';

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'API', href: '#technical' },
      { label: 'Changelog', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Status', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
      { label: 'Security', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: '⚡' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          {/* Brand Column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#gradient-footer)" />
                <circle cx="16" cy="12" r="3" fill="white" />
                <circle cx="10" cy="20" r="3" fill="white" opacity="0.8" />
                <circle cx="22" cy="20" r="3" fill="white" opacity="0.8" />
                <defs>
                  <linearGradient id="gradient-footer" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
              <span>DotsBot</span>
            </div>
            <p className="footer__tagline">
              Unified customer conversations, simplified. Built for modern support teams.
            </p>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Product</h4>
              <ul className="footer__link-list">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Company</h4>
              <ul className="footer__link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Resources</h4>
              <ul className="footer__link-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Legal</h4>
              <ul className="footer__link-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} DotsBot. All rights reserved.
          </p>
          <div className="footer__badges">
            <span className="footer__badge">🔒 SOC 2 Compliant</span>
            <span className="footer__badge">🌍 GDPR Ready</span>
            <span className="footer__badge">✅ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
