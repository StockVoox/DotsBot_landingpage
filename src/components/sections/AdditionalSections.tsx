'use client';

import React from 'react';
import './AdditionalSections.css';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Channels',
      description:
        'Link your Facebook, WhatsApp, email, website widget, and more in minutes. Simple setup wizard guides you through.',
      icon: '🔌',
    },
    {
      number: '02',
      title: 'Manage in One Inbox',
      description:
        'All customer messages flow into a single, intelligent inbox. Assign, prioritize, and respond with ease.',
      icon: '📥',
    },
    {
      number: '03',
      title: 'Extend & Automate',
      description:
        'Add integrations, create webhooks, build custom workflows. DotsBot grows with your needs.',
      icon: '⚙️',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Get started in minutes with our simple 3-step process
          </p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step__number">{step.number}</div>
              <div className="step__icon">{step.icon}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">{step.description}</p>
              {index < steps.length - 1 && <div className="step__arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TechnicalHighlights: React.FC = () => {
  const techSpecs = [
    { label: 'Backend', value: 'Ruby on Rails API' },
    { label: 'Frontend', value: 'Vue 3 SPA with Vite' },
    { label: 'Real-Time', value: 'ActionCable WebSockets' },
    { label: 'Styling', value: 'Tailwind CSS' },
    { label: 'Architecture', value: 'Service Layer, Composable Components' },
    { label: 'SDK', value: 'Embeddable Widget (Vite Library Build)' },
    { label: 'Background Jobs', value: 'Sidekiq-ready async processing' },
    { label: 'Localization', value: 'Structured i18n (frontend & backend)' },
    { label: 'API', value: 'Versioned, RESTful, extensible' },
    { label: 'Security', value: 'Input sanitization, XSS/SQL mitigation' },
  ];

  return (
    <section id="technical" className="technical section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built on Modern Technology</h2>
          <p className="section-description">
            Enterprise-grade architecture designed for performance and scalability
          </p>
        </div>

        <div className="tech-grid">
          {techSpecs.map((spec, index) => (
            <div key={index} className="tech-spec">
              <div className="tech-spec__label">{spec.label}</div>
              <div className="tech-spec__value">{spec.value}</div>
            </div>
          ))}
        </div>

        <div className="tech-highlight">
          <div className="tech-highlight__code">
            <div className="code-block">
              <div className="code-block__header">
                <div className="code-block__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-block__title">api/conversations.js</div>
              </div>
              <pre className="code-block__content">
                <code>{`// Simple, powerful API
fetch('/api/v1/conversations', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data.conversations);
});

// Real-time updates with ActionCable
cable.subscriptions.create({
  channel: 'ConversationsChannel'
}, {
  received: (data) => {
    updateInbox(data.message);
  }
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Integrations: React.FC = () => {
  const integrations = [
    {
      name: 'Slack',
      description: 'Notify your team and manage conversations from Slack channels',
      icon: '💬',
    },
    {
      name: 'Shopify',
      description: 'Sync storefront events and customer data automatically',
      icon: '🛍️',
    },
    {
      name: 'Webhooks',
      description: 'Build custom integrations with flexible webhook events',
      icon: '🔗',
    },
    {
      name: 'Custom Apps',
      description: 'Extend DotsBot with account-scoped integrations',
      icon: '⚡',
    },
  ];

  return (
    <section id="integrations" className="integrations section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Powerful Integrations</h2>
          <p className="section-description">
            Connect DotsBot with your favorite tools and services
          </p>
        </div>

        <div className="integrations__grid">
          {integrations.map((integration, index) => (
            <div key={index} className="integration-card card">
              <div className="integration-card__icon">{integration.icon}</div>
              <h3 className="integration-card__name">{integration.name}</h3>
              <p className="integration-card__description">{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="integrations__cta">
          <p>Need a custom integration?</p>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export const UseCases: React.FC = () => {
  const useCases = [
    {
      title: 'E-Commerce Teams',
      description:
        'Handle customer inquiries from Instagram, Facebook, and email while syncing order data from Shopify.',
      icon: '🛒',
      color: 'var(--accent-orange)',
    },
    {
      title: 'SaaS Support',
      description:
        'Centralize support tickets from web chat, email, and Slack with real-time agent collaboration.',
      icon: '💻',
      color: 'var(--accent-blue)',
    },
    {
      title: 'Agencies & Developers',
      description:
        'Build white-label customer communication solutions with embeddable widgets and full API access.',
      icon: '🚀',
      color: 'var(--accent-purple)',
    },
  ];

  return (
    <section id="use-cases" className="use-cases section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built for Every Team</h2>
          <p className="section-description">
            See how teams across industries use DotsBot
          </p>
        </div>

        <div className="use-cases__grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-card__icon" style={{ background: useCase.color }}>
                {useCase.icon}
              </div>
              <h3 className="use-case-card__title">{useCase.title}</h3>
              <p className="use-case-card__description">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA: React.FC = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">Ready to Transform Your Customer Support?</h2>
          <p className="cta__description">
            Join thousands of teams already using DotsBot. Start your free trial today.
          </p>
          <div className="cta__buttons">
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
            <a href="#contact" className="btn btn-secondary btn-lg">
              Talk to Sales
            </a>
          </div>
          <p className="cta__note">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
