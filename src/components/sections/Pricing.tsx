'use client';

import React, { useState } from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for Small Teams',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Up to 5 agents',
        '2,000 conversations/month',
        '5 channels',
        'Basic integrations (Slack)',
        'Email support',
        '30-day message history',
        'Basic reporting',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'Best for Growing Teams',
      monthlyPrice: 49,
      annualPrice: 39,
      badge: 'Most Popular',
      features: [
        'Up to 20 agents',
        'Unlimited conversations',
        'All 12+ channels',
        'Advanced integrations',
        'Priority email & chat support',
        'Unlimited message history',
        'Advanced analytics & reporting',
        'Custom branding',
        'API access',
        '99.9% SLA',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For Enterprise Teams',
      price: 'Custom',
      features: [
        'Unlimited agents',
        'Unlimited conversations',
        'All channels + custom channels',
        'All integrations + custom',
        'Dedicated account manager',
        '24/7 phone & priority support',
        'Custom SLA',
        'SSO/SAML authentication',
        'On-premise deployment option',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.price === 'Custom') return 'Custom';
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return `$${price}`;
  };

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-description">
            Choose the plan that fits your team's needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Annual/Monthly Toggle */}
        <div className="pricing__toggle">
          <span className={`pricing__toggle-label ${!isAnnual ? 'pricing__toggle-label--active' : ''}`}>
            Monthly
          </span>
          <button
            className="pricing__toggle-switch"
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle pricing"
          >
            <div className={`pricing__toggle-slider ${isAnnual ? 'pricing__toggle-slider--active' : ''}`}></div>
          </button>
          <span className={`pricing__toggle-label ${isAnnual ? 'pricing__toggle-label--active' : ''}`}>
            Annual
            <span className="pricing__toggle-badge">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="pricing__grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.highlighted ? 'pricing-card--popular' : ''}`}
            >
              {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}

              <div className="pricing-card__header">
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__description">{plan.description}</p>

                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{getPrice(plan)}</span>
                  {plan.price !== 'Custom' && (
                    <span className="pricing-card__period">
                      /agent/month
                      {isAnnual && <span className="pricing-card__billing"> billed annually</span>}
                    </span>
                  )}
                </div>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-card__feature">
                    <svg className="pricing-card__check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.1" />
                      <path
                        d="M6 10l2.5 2.5L14 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#trial"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="pricing__faq">
          <h3 className="pricing__faq-title">Frequently Asked Questions</h3>
          <div className="pricing__faq-grid">
            <div className="faq-item">
              <h4 className="faq-item__question">Can I change plans later?</h4>
              <p className="faq-item__answer">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-item__question">What payment methods do you accept?</h4>
              <p className="faq-item__answer">
                We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-item__question">Is there a free trial?</h4>
              <p className="faq-item__answer">
                Yes! All plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-item__question">What happens after the trial?</h4>
              <p className="faq-item__answer">
                You'll be prompted to add payment information. If you don't, your account will be downgraded to the free tier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
