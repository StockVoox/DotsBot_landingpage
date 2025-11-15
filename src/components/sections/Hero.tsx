'use client';

import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const customerLogos = [
    'Company A',
    'Company B',
    'Company C',
    'Company D',
    'Company E',
  ];

  return (
    <section className="hero section">
      <div className="container">
        <div className="hero__content">
          {/* Main Headline */}
          <h1 className="hero__headline animate-fade-in">
            Customer Conversations,
            <br />
            <span className="hero__headline-gradient">All in One Place</span>
          </h1>

          {/* Subheadline */}
          <p className="hero__subheadline animate-slide-up">
            Modern messaging platform for support teams. Real-time inbox, 12+ channels,
            built for developers.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta-group animate-slide-up">
            <a href="#trial" className="btn btn-primary btn-lg">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#demo" className="btn btn-secondary btn-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M6.3 5.7a1 1 0 011.4-1.4l8 8a1 1 0 010 1.4l-8 8a1 1 0 01-1.4-1.4L13.6 13H3a1 1 0 110-2h10.6L6.3 5.7z"
                  fill="currentColor"
                />
              </svg>
              Schedule Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="hero__trust">
            <div className="hero__trust-stats">
              <div className="hero__stat">
                <span className="hero__stat-number">10K+</span>
                <span className="hero__stat-label">Active Teams</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">1M+</span>
                <span className="hero__stat-label">Messages Daily</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">99.9%</span>
                <span className="hero__stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero__visual">
          <div className="hero__visual-card animate-slide-up">
            {/* Simulated Dashboard Screenshot */}
            <div className="dashboard-mockup">
              <div className="dashboard-mockup__header">
                <div className="dashboard-mockup__tabs">
                  <div className="dashboard-mockup__tab dashboard-mockup__tab--active">
                    Inbox
                  </div>
                  <div className="dashboard-mockup__tab">Assigned</div>
                  <div className="dashboard-mockup__tab">Resolved</div>
                </div>
                <div className="dashboard-mockup__search">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M11 11l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>Search conversations...</span>
                </div>
              </div>

              <div className="dashboard-mockup__content">
                <div className="dashboard-mockup__sidebar">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`conversation-item ${i === 1 ? 'conversation-item--active' : ''}`}
                    >
                      <div className="conversation-item__avatar"></div>
                      <div className="conversation-item__details">
                        <div className="conversation-item__name">Customer {i}</div>
                        <div className="conversation-item__preview">
                          Last message preview...
                        </div>
                      </div>
                      <div className="conversation-item__badge">{i}</div>
                    </div>
                  ))}
                </div>

                <div className="dashboard-mockup__main">
                  <div className="chat-header">
                    <div className="chat-header__info">
                      <div className="chat-header__avatar"></div>
                      <div>
                        <div className="chat-header__name">Customer Name</div>
                        <div className="chat-header__status">
                          <span className="status-dot status-dot--online"></span>
                          Online • WhatsApp
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="chat-messages">
                    <div className="chat-message chat-message--received">
                      <div className="chat-message__bubble">
                        Hi! I need help with my order
                      </div>
                      <div className="chat-message__time">2:41 PM</div>
                    </div>
                    <div className="chat-message chat-message--sent">
                      <div className="chat-message__bubble">
                        Of course! I'd be happy to help. What's your order number?
                      </div>
                      <div className="chat-message__time">2:42 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channel Icons Floating */}
              <div className="channel-badge channel-badge--1" title="WhatsApp">
                💬
              </div>
              <div className="channel-badge channel-badge--2" title="Email">
                📧
              </div>
              <div className="channel-badge channel-badge--3" title="Facebook">
                📘
              </div>
              <div className="channel-badge channel-badge--4" title="Instagram">
                📷
              </div>
            </div>
          </div>

          {/* Floating Feature Cards */}
          <div className="floating-card floating-card--1">
            <div className="floating-card__icon">⚡</div>
            <div className="floating-card__text">
              <div className="floating-card__title">Real-Time Sync</div>
              <div className="floating-card__desc">Instant updates</div>
            </div>
          </div>

          <div className="floating-card floating-card--2">
            <div className="floating-card__icon">🔒</div>
            <div className="floating-card__text">
              <div className="floating-card__title">Secure</div>
              <div className="floating-card__desc">Enterprise-grade</div>
            </div>
          </div>

          <div className="floating-card floating-card--3">
            <div className="floating-card__icon">🚀</div>
            <div className="floating-card__text">
              <div className="floating-card__title">Fast Setup</div>
              <div className="floating-card__desc">5-min integration</div>
            </div>
          </div>
        </div>

        {/* Customer Logos */}
        <div className="hero__customers">
          <p className="hero__customers-label">Trusted by leading teams worldwide</p>
          <div className="hero__customer-logos">
            {customerLogos.map((company, index) => (
              <div key={index} className="customer-logo">
                <div className="customer-logo__placeholder">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
