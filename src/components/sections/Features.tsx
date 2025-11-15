'use client';

import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: '📥',
      title: 'All Messages, One Inbox',
      description:
        'Consolidate conversations from social, email, SMS, voice, and web chat. Never miss a customer message again.',
    },
    {
      icon: '⚡',
      title: 'Instant, Live Updates',
      description:
        'ActionCable-powered real-time sync. Agents see messages instantly, customers get immediate responses.',
    },
    {
      icon: '👨‍💻',
      title: 'Built for Developers',
      description:
        'Clean REST APIs, embeddable widget SDK, composable Vue components. Extend and customize everything.',
    },
    {
      icon: '🔌',
      title: 'Marketplace Integrations',
      description:
        'Connect Slack, Shopify, custom webhooks, and more. Account-scoped integrations with full API access.',
    },
    {
      icon: '🏗️',
      title: 'Modern Architecture',
      description:
        'Rails API backend, Vue 3 SPA with Vite, Tailwind CSS. Performant, maintainable, scalable.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description:
        'Input sanitization, framework best practices, secure defaults. Built with security as a core requirement.',
    },
  ];

  const channels = [
    { icon: '🌐', name: 'Website Widget' },
    { icon: '💬', name: 'WhatsApp' },
    { icon: '📘', name: 'Facebook' },
    { icon: '📷', name: 'Instagram' },
    { icon: '📧', name: 'Email' },
    { icon: '💬', name: 'SMS' },
    { icon: '✈️', name: 'Telegram' },
    { icon: '📱', name: 'Line' },
    { icon: '📞', name: 'Voice' },
    { icon: '🔌', name: 'API' },
    { icon: '🎯', name: 'Web Chat' },
    { icon: '⚡', name: 'Custom' },
  ];

  return (
    <>
      {/* Channels Showcase */}
      <section id="channels" className="channels section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Connect Every Channel Your Customers Use</h2>
            <p className="section-description">
              Unify all customer touchpoints in one intelligent inbox
            </p>
          </div>

          <div className="channels__grid">
            {channels.map((channel, index) => (
              <div key={index} className="channel-card">
                <div className="channel-card__icon">{channel.icon}</div>
                <div className="channel-card__name">{channel.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="features section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything You Need to Deliver Amazing Support</h2>
            <p className="section-description">
              Powerful features designed for modern support teams
            </p>
          </div>

          <div className="features__grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-card__icon">{feature.icon}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
