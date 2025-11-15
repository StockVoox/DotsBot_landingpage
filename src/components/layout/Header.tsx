'use client';

import React, { useState, useEffect } from 'react';
import './Header.css';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'Product',
      dropdown: [
        { label: 'Features', href: '#features' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'API & SDK', href: '#technical' },
        { label: 'Use Cases', href: '#use-cases' },
      ],
    },
    {
      label: 'Pricing',
      href: '#pricing',
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Documentation', href: '#' },
        { label: 'Developer Docs', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Help Center', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <a href="/" aria-label="DotsBot Home">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#gradient)" />
              <circle cx="16" cy="12" r="3" fill="white" />
              <circle cx="10" cy="20" r="3" fill="white" opacity="0.8" />
              <circle cx="22" cy="20" r="3" fill="white" opacity="0.8" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
            <span className="header__logo-text">DotsBot</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="header__nav-item-wrapper"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={closeAllDropdowns}
            >
              {item.dropdown ? (
                <>
                  <button
                    className="header__nav-item"
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className={`header__dropdown-icon ${
                        openDropdown === item.label ? 'header__dropdown-icon--open' : ''
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`dropdown ${
                      openDropdown === item.label ? 'dropdown--active' : ''
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="dropdown__item"
                        onClick={closeAllDropdowns}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={item.href} className="header__nav-item">
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="header__cta-group">
          <a href="#login" className="header__login">
            Login
          </a>
          <a href="#contact" className="btn btn-secondary btn-sm">
            Talk to Sales
          </a>
          <a href="#trial" className="btn btn-primary btn-sm">
            Start Free Trial
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="header__menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        {navItems.map((item) => (
          <div key={item.label} className="header__mobile-nav-item">
            {item.dropdown ? (
              <>
                <button
                  className="header__mobile-nav-link"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <svg
                    className={`header__dropdown-icon ${
                      openDropdown === item.label ? 'header__dropdown-icon--open' : ''
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="header__mobile-dropdown">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="header__mobile-dropdown-item"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={item.href}
                className="header__mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
        <div className="header__mobile-cta">
          <a href="#login" className="btn btn-secondary" style={{ width: '100%' }}>
            Login
          </a>
          <a href="#trial" className="btn btn-primary" style={{ width: '100%' }}>
            Start Free Trial
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
