# DotsBot Landing Page - Design & Development Guideline

## Executive Summary

This document provides comprehensive design and development specifications for the DotsBot landing page. DotsBot is a modern, extensible customer messaging platform that unifies conversations across multiple channels with real-time capabilities and developer-friendly architecture.

---

## 1. Brand Positioning & Messaging

### Core Value Proposition
**"Unified Customer Conversations, Simplified."**

DotsBot consolidates all customer communications—social media, email, SMS, voice, and web chat—into one intelligent inbox, powered by modern technology and built for scale.

### Brand Personality
- **Modern & Technical:** Cutting-edge tech stack (Rails + Vue 3)
- **Developer-First:** API-centric, extensible, well-documented
- **Efficient & Fast:** Real-time updates, performant architecture
- **Reliable & Secure:** Enterprise-grade security and stability
- **Accessible:** Easy to integrate, easy to customize

### Key Differentiators
1. **Modern Stack:** Not legacy PHP—Rails API + Vue 3 with Vite
2. **Real-Time Everything:** ActionCable-powered live conversations
3. **True Omnichannel:** 13+ channels in one unified inbox
4. **Developer Experience:** Clean APIs, composable components, embeddable SDK
5. **Extensibility:** Marketplace integrations + custom webhooks

---

## 2. Landing Page Structure

### Page Sections (In Order)

#### 2.1 Hero Section
**Purpose:** Capture attention, communicate core value, drive action

**Components:**
- Bold headline emphasizing unified messaging
- Supporting subheadline highlighting key benefits
- Primary CTA button ("Start Free Trial" or "Get Started")
- Secondary CTA ("Schedule Demo" or "Watch Video")
- Hero visual (product screenshot or animated illustration)
- Trust indicators (customer logos, "Used by X teams")

**Content Strategy:**
- Headline: "Customer Conversations, All in One Place"
- Subheadline: "Modern messaging platform for support teams. Real-time inbox, 13+ channels, built for developers."
- Visual: Dashboard screenshot showing unified inbox with multiple channel icons

---

#### 2.2 Channel Showcase Section
**Purpose:** Demonstrate omnichannel capabilities

**Components:**
- Section title: "Connect Every Channel Your Customers Use"
- Grid of channel icons with labels:
  - Website Widget
  - WhatsApp Business
  - Facebook Messenger
  - Instagram DM
  - Twitter/X
  - Email
  - SMS
  - Telegram
  - Line
  - Voice
  - API
  - Web Widget
  - Custom Integrations

**Design Approach:**
- Animated icon grid with subtle hover effects
- Color-coded by category (social, messaging, traditional)
- Responsive grid: 6 cols desktop, 3 cols tablet, 2 cols mobile

---

#### 2.3 Key Features Section
**Purpose:** Highlight USPs and core capabilities

**Feature Cards:**

**1. Unified Inbox**
- Icon: Inbox with multiple channel badges
- Title: "All Messages, One Inbox"
- Description: "Consolidate conversations from social, email, SMS, voice, and web chat. Never miss a customer message again."

**2. Real-Time Collaboration**
- Icon: Lightning bolt or real-time indicator
- Title: "Instant, Live Updates"
- Description: "ActionCable-powered real-time sync. Agents see messages instantly, customers get immediate responses."

**3. Developer-Friendly**
- Icon: Code brackets or terminal
- Title: "Built for Developers"
- Description: "Clean REST APIs, embeddable widget SDK, composable Vue components. Extend and customize everything."

**4. Powerful Integrations**
- Icon: Puzzle pieces or connection nodes
- Title: "Marketplace Integrations"
- Description: "Connect Slack, Shopify, custom webhooks, and more. Account-scoped integrations with full API access."

**5. Modern Tech Stack**
- Icon: Stack or layers
- Title: "Modern Architecture"
- Description: "Rails API backend, Vue 3 SPA with Vite, Tailwind CSS. Performant, maintainable, scalable."

**6. Secure by Default**
- Icon: Shield or lock
- Title: "Enterprise Security"
- Description: "Input sanitization, framework best practices, secure defaults. Built with security as a core requirement."

---

#### 2.4 How It Works Section
**Purpose:** Explain the setup and usage flow

**3-Step Process:**

**Step 1: Connect Your Channels**
- Illustration: Channel connection UI
- Text: "Link your Facebook, WhatsApp, email, website widget, and more in minutes."

**Step 2: Manage in One Inbox**
- Illustration: Unified inbox screenshot
- Text: "All customer messages flow into a single, intelligent inbox. Assign, prioritize, and respond."

**Step 3: Extend & Automate**
- Illustration: Integration marketplace
- Text: "Add integrations, create webhooks, build custom workflows. DotsBot grows with your needs."

---

#### 2.5 Technical Highlights Section
**Purpose:** Appeal to technical decision-makers and developers

**Specifications Grid:**

| Feature | Details |
|---------|---------|
| **Backend** | Ruby on Rails API |
| **Frontend** | Vue 3 SPA with Vite |
| **Real-Time** | ActionCable WebSockets |
| **Styling** | Tailwind CSS |
| **Architecture** | Service Layer, Composable Components |
| **SDK** | Embeddable Widget (Vite Library Build) |
| **Background Jobs** | Sidekiq-ready async processing |
| **Localization** | Structured i18n (frontend & backend) |
| **API** | Versioned, RESTful, extensible |
| **Security** | Input sanitization, XSS/SQL mitigation |

**Design:** Dark code-block aesthetic with syntax highlighting

---

#### 2.6 Integrations Showcase
**Purpose:** Highlight ecosystem extensibility

**Integration Cards:**
- **Slack:** "Notify your team and manage conversations from Slack channels"
- **Shopify:** "Sync storefront events and customer data automatically"
- **Webhooks:** "Build custom integrations with flexible webhook events"
- **Custom Apps:** "Extend DotsBot with account-scoped integrations"

**Visual:** Logo grid + brief descriptions

---

#### 2.7 Use Cases / Customer Stories
**Purpose:** Show real-world applications

**Scenarios:**

**E-Commerce Teams**
"Handle customer inquiries from Instagram, Facebook, and email while syncing order data from Shopify."

**SaaS Support**
"Centralize support tickets from web chat, email, and Slack with real-time agent collaboration."

**Agencies & Developers**
"Build white-label customer communication solutions with embeddable widgets and full API access."

---

#### 2.8 Pricing Section (Optional/Teaser)
**Purpose:** Set expectations and drive leads

**Approach:**
- "Flexible Pricing for Teams of All Sizes"
- "Contact Sales" CTA for custom enterprise pricing
- Or simple tier preview: Starter / Professional / Enterprise

---

#### 2.9 FAQ Section
**Purpose:** Address objections and common questions

**Sample Questions:**
1. **What channels does DotsBot support?**
   - "DotsBot supports 13+ channels including Facebook, WhatsApp, Instagram, Twitter, email, SMS, Telegram, Line, voice, and more."

2. **Can I self-host DotsBot?**
   - "Yes! DotsBot is built for both SaaS and self-hosted deployments with a fully embeddable widget SDK."

3. **How does DotsBot handle real-time messages?**
   - "We use ActionCable WebSockets for instant, bi-directional communication between agents and customers."

4. **Is DotsBot developer-friendly?**
   - "Absolutely. Clean APIs, composable Vue components, embeddable SDK, and comprehensive documentation."

5. **What integrations are available?**
   - "Slack, Shopify, custom webhooks, and a growing marketplace of integrations. You can also build your own."

6. **Is DotsBot secure?**
   - "Yes. We follow framework best practices with input sanitization and secure defaults to prevent XSS, SQL injection, and other vulnerabilities."

---

#### 2.10 Final CTA Section
**Purpose:** Drive conversion at end of page

**Components:**
- Strong headline: "Ready to Unify Your Customer Conversations?"
- Supporting text: "Join modern support teams using DotsBot."
- Primary CTA: "Start Free Trial"
- Secondary CTA: "Talk to Sales"
- Trust elements: "No credit card required" badge

---

#### 2.11 Footer
**Purpose:** Navigation, legal, contact

**Sections:**
- **Product:** Features, Integrations, Pricing, Documentation
- **Company:** About, Blog, Careers, Contact
- **Resources:** Developer Docs, API Reference, Community, Status
- **Legal:** Privacy Policy, Terms of Service, Security
- **Social:** GitHub, Twitter, LinkedIn

---

## 3. UI/UX Design System

### 3.1 Color Palette

**Primary Colors:**
```css
--primary-600: #4F46E5;      /* Indigo - primary CTA, links */
--primary-700: #4338CA;      /* Indigo dark - hover states */
--primary-500: #6366F1;      /* Indigo light - backgrounds */
```

**Secondary Colors:**
```css
--secondary-600: #7C3AED;    /* Purple - accents */
--secondary-700: #6D28D9;    /* Purple dark */
```

**Accent Colors (for channel icons):**
```css
--accent-blue: #3B82F6;      /* Social channels */
--accent-green: #10B981;     /* Messaging apps */
--accent-orange: #F59E0B;    /* Email/SMS */
--accent-red: #EF4444;       /* Voice */
```

**Neutral Colors:**
```css
--gray-50: #F9FAFB;          /* Light backgrounds */
--gray-100: #F3F4F6;         /* Card backgrounds */
--gray-200: #E5E7EB;         /* Borders */
--gray-600: #4B5563;         /* Body text */
--gray-900: #111827;         /* Headings */
```

**Semantic Colors:**
```css
--success: #10B981;          /* Success states */
--warning: #F59E0B;          /* Warnings */
--error: #EF4444;            /* Errors */
--info: #3B82F6;             /* Info messages */
```

---

### 3.2 Typography

**Font Families:**
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace;
```

**Type Scale:**
```css
/* Headings */
--text-6xl: 3.75rem;     /* 60px - Hero headline */
--text-5xl: 3rem;        /* 48px - Section headlines */
--text-4xl: 2.25rem;     /* 36px - Sub-sections */
--text-3xl: 1.875rem;    /* 30px - Card titles */
--text-2xl: 1.5rem;      /* 24px - Component headings */
--text-xl: 1.25rem;      /* 20px - Large body */

/* Body */
--text-lg: 1.125rem;     /* 18px - Primary body */
--text-base: 1rem;       /* 16px - Default body */
--text-sm: 0.875rem;     /* 14px - Small text */
--text-xs: 0.75rem;      /* 12px - Fine print */
```

**Font Weights:**
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

**Line Heights:**
```css
--leading-tight: 1.25;   /* Headings */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.75; /* Large paragraphs */
```

---

### 3.3 Spacing System

**Consistent spacing scale (based on 4px base unit):**
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Section Padding:**
- Desktop: 96px top/bottom (--space-24)
- Tablet: 64px top/bottom (--space-16)
- Mobile: 48px top/bottom (--space-12)

---

### 3.4 Component Library

#### Button Styles

**Primary Button:**
```css
.btn-primary {
  background: var(--primary-600);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.btn-primary:hover {
  background: var(--primary-700);
  box-shadow: 0 4px 12px rgba(79,70,229,0.4);
  transform: translateY(-1px);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: white;
  color: var(--primary-600);
  border: 2px solid var(--gray-200);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--primary-600);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
```

**Button Sizes:**
- Small: `padding: 8px 16px; font-size: 14px;`
- Medium: `padding: 12px 24px; font-size: 16px;` (default)
- Large: `padding: 16px 32px; font-size: 18px;`

---

#### Card Component

**Feature Card:**
```css
.feature-card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--primary-500);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-4px);
}

.feature-card__icon {
  width: 48px;
  height: 48px;
  background: var(--primary-50);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.feature-card__title {
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 8px;
}

.feature-card__description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-600);
}
```

---

#### Channel Icon Component

**Design Specifications:**
```css
.channel-icon {
  width: 80px;
  height: 80px;
  background: var(--gray-50);
  border: 2px solid var(--gray-200);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.channel-icon:hover {
  border-color: var(--primary-500);
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: scale(1.05);
}

.channel-icon__image {
  width: 40px;
  height: 40px;
}

.channel-icon__label {
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-700);
  text-align: center;
}
```

---

#### Section Component

**Standard Section Structure:**
```html
<section class="section">
  <div class="section__container">
    <!-- Optional eyebrow text -->
    <p class="section__eyebrow">Features</p>

    <!-- Section title -->
    <h2 class="section__title">Main Section Heading</h2>

    <!-- Optional subtitle/description -->
    <p class="section__description">
      Supporting text that explains the section.
    </p>

    <!-- Section content -->
    <div class="section__content">
      <!-- Grid, flex, or custom layout -->
    </div>
  </div>
</section>
```

```css
.section {
  padding: 96px 20px;
}

.section__container {
  max-width: 1200px;
  margin: 0 auto;
}

.section__eyebrow {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--primary-600);
  margin-bottom: 12px;
  text-align: center;
}

.section__title {
  font-size: 48px;
  font-weight: 700;
  color: var(--gray-900);
  text-align: center;
  margin-bottom: 16px;
  line-height: 1.2;
}

.section__description {
  font-size: 20px;
  color: var(--gray-600);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 48px;
  line-height: 1.6;
}
```

---

### 3.5 Layout Grid

**Container:**
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;
  }
}

@media (min-width: 1280px) {
  .container {
    padding: 0 80px;
  }
}
```

**Grid System:**
```css
.grid {
  display: grid;
  gap: 32px;
}

/* Feature grid: 3 columns on desktop */
.grid--features {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

/* Channel grid: 6 columns on desktop */
.grid--channels {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .grid--channels {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .grid--channels {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

### 3.6 Animation & Interaction

**Transitions:**
```css
/* Default smooth transition */
.transition-default {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Quick interaction feedback */
.transition-fast {
  transition: all 0.15s ease;
}
```

**Hover Effects:**
- Buttons: Slight lift (translateY(-2px)) + shadow
- Cards: Lift (translateY(-4px)) + border color change + shadow
- Links: Color change + underline
- Icons: Scale (scale(1.05)) + color change

**Page Load Animations:**
```css
/* Fade in from bottom */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Stagger children with delay */
.stagger-children > * {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
```

---

### 3.7 Responsive Breakpoints

```css
/* Mobile first approach */
/* Base styles: 0-639px (mobile) */

/* Small tablets */
@media (min-width: 640px) { /* sm */ }

/* Tablets */
@media (min-width: 768px) { /* md */ }

/* Small desktop */
@media (min-width: 1024px) { /* lg */ }

/* Desktop */
@media (min-width: 1280px) { /* xl */ }

/* Large desktop */
@media (min-width: 1536px) { /* 2xl */ }
```

**Responsive Typography:**
```css
h1 {
  font-size: 36px; /* mobile */
  line-height: 1.2;
}

@media (min-width: 768px) {
  h1 {
    font-size: 48px; /* tablet */
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 60px; /* desktop */
  }
}
```

---

## 4. Technical Implementation Specifications

### 4.1 Technology Stack

**Framework:**
- React 18+ with TypeScript (recommended) OR Vue 3 (to match DotsBot core)
- If Vue: Composition API, `<script setup>`, TypeScript

**Build Tool:**
- Vite 5+ for fast dev experience and optimized builds

**Styling:**
- Tailwind CSS 3+ (to match DotsBot design system)
- PostCSS for additional processing

**Additional Libraries:**
- **Animation:** Framer Motion (React) or @vueuse/motion (Vue)
- **Icons:** Heroicons or Lucide Icons
- **Forms:** React Hook Form (React) or VeeValidate (Vue)
- **Analytics:** Google Analytics 4 or Mixpanel

---

### 4.2 Project Structure (React + Vite Example)

```
DotsBot_landingpage/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   ├── og-image.png
│   └── screenshots/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── videos/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   └── ChannelIcon.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Channels.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── TechHighlights.tsx
│   │   │   ├── Integrations.tsx
│   │   │   ├── UseCases.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Navigation.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── utils/
│   │   ├── analytics.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

### 4.3 Component Implementation Examples

#### Hero Component (React + TypeScript)

```tsx
// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Customer Conversations,{' '}
              <span className="text-primary-600">All in One Place</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Modern messaging platform for support teams. Real-time inbox, 13+ channels,
              built for developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="large">
                Schedule Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {/* Avatar images */}
                <img src="/avatars/1.png" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/avatars/2.png" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/avatars/3.png" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <p className="text-sm text-gray-600">
                Used by <strong className="text-gray-900">500+</strong> support teams
              </p>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/screenshots/dashboard-hero.png"
              alt="DotsBot Dashboard"
              className="rounded-lg shadow-2xl"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">1,247 messages</p>
                  <p className="text-xs text-gray-500">Today</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

---

#### Button Component (React + TypeScript)

```tsx
// src/components/common/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary: 'bg-white text-primary-600 border-2 border-gray-200 hover:border-primary-600 focus:ring-primary-500 shadow-sm hover:shadow-md',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400',
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

---

#### FeatureCard Component

```tsx
// src/components/common/FeatureCard.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard = ({ icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white border border-gray-200 rounded-xl p-8 h-full transition-all duration-300 hover:border-primary-500 hover:shadow-lg hover:-translate-y-1">
        {/* Icon container */}
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
```

---

#### Channels Section Component

```tsx
// src/components/sections/Channels.tsx
import { motion } from 'framer-motion';
import ChannelIcon from '../common/ChannelIcon';

const channels = [
  { name: 'Website', icon: '/icons/website.svg', color: 'blue' },
  { name: 'WhatsApp', icon: '/icons/whatsapp.svg', color: 'green' },
  { name: 'Facebook', icon: '/icons/facebook.svg', color: 'blue' },
  { name: 'Instagram', icon: '/icons/instagram.svg', color: 'red' },
  { name: 'Twitter', icon: '/icons/twitter.svg', color: 'blue' },
  { name: 'Email', icon: '/icons/email.svg', color: 'orange' },
  { name: 'SMS', icon: '/icons/sms.svg', color: 'orange' },
  { name: 'Telegram', icon: '/icons/telegram.svg', color: 'blue' },
  { name: 'Line', icon: '/icons/line.svg', color: 'green' },
  { name: 'Voice', icon: '/icons/voice.svg', color: 'red' },
  { name: 'API', icon: '/icons/api.svg', color: 'gray' },
  { name: 'Web Widget', icon: '/icons/widget.svg', color: 'purple' },
];

const Channels = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-3">
            Omnichannel Platform
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Connect Every Channel Your Customers Use
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From social media to email, SMS to voice calls—manage all conversations
            in one unified inbox.
          </p>
        </motion.div>

        {/* Channel grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {channels.map((channel, index) => (
            <ChannelIcon
              key={channel.name}
              name={channel.name}
              icon={channel.icon}
              color={channel.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
```

---

### 4.4 Performance Optimization

#### Image Optimization
```tsx
// Use next-gen formats (WebP, AVIF) with fallbacks
<picture>
  <source srcset="/hero.avif" type="image/avif" />
  <source srcset="/hero.webp" type="image/webp" />
  <img src="/hero.png" alt="DotsBot Dashboard" loading="lazy" />
</picture>
```

#### Lazy Loading
```tsx
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const FAQ = lazy(() => import('./sections/FAQ'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  return (
    <>
      <Hero />
      <Channels />
      <Features />

      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
        <Footer />
      </Suspense>
    </>
  );
}
```

#### Code Splitting
```js
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
        },
      },
    },
  },
});
```

---

### 4.5 SEO Optimization

#### Meta Tags
```html
<!-- index.html -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary Meta Tags -->
  <title>DotsBot - Unified Customer Messaging Platform</title>
  <meta name="title" content="DotsBot - Unified Customer Messaging Platform" />
  <meta name="description" content="Modern messaging platform for support teams. Real-time inbox, 13+ channels, built for developers. Unify conversations from social media, email, SMS, and more." />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dotsbot.com/" />
  <meta property="og:title" content="DotsBot - Unified Customer Messaging Platform" />
  <meta property="og:description" content="Modern messaging platform for support teams. Real-time inbox, 13+ channels, built for developers." />
  <meta property="og:image" content="https://dotsbot.com/og-image.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://dotsbot.com/" />
  <meta property="twitter:title" content="DotsBot - Unified Customer Messaging Platform" />
  <meta property="twitter:description" content="Modern messaging platform for support teams. Real-time inbox, 13+ channels, built for developers." />
  <meta property="twitter:image" content="https://dotsbot.com/og-image.png" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>
```

#### Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DotsBot",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Unified customer messaging platform with real-time conversations across 13+ channels",
  "operatingSystem": "Web",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120"
  }
}
</script>
```

---

### 4.6 Analytics Integration

```tsx
// src/utils/analytics.ts
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Mixpanel (optional)
  if (window.mixpanel) {
    window.mixpanel.track(eventName, properties);
  }
};

// Usage in components
import { trackEvent } from '@/utils/analytics';

const Hero = () => {
  const handleCTAClick = () => {
    trackEvent('cta_clicked', {
      location: 'hero',
      button_text: 'Start Free Trial',
    });

    // Navigate to signup
    window.location.href = '/signup';
  };

  return (
    <Button onClick={handleCTAClick}>
      Start Free Trial
    </Button>
  );
};
```

---

### 4.7 Accessibility Checklist

- [ ] Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Proper heading hierarchy (single `<h1>`, logical `<h2>-<h6>` structure)
- [ ] Alt text for all images
- [ ] ARIA labels for icon buttons
- [ ] Keyboard navigation support (Tab, Enter, Escape)
- [ ] Focus indicators visible on all interactive elements
- [ ] Color contrast ratios meet WCAG AA standards (4.5:1 for text)
- [ ] Forms have associated labels
- [ ] Error messages are clear and associated with form fields
- [ ] Skip to main content link for screen readers
- [ ] No motion for users with `prefers-reduced-motion`

```css
/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 5. Content Guidelines

### 5.1 Tone of Voice

**Characteristics:**
- **Clear & Direct:** No jargon, straightforward explanations
- **Technical but Accessible:** Developer-focused but not intimidating
- **Confident:** Assert value without overselling
- **Helpful:** Focus on solving customer problems
- **Modern:** Reflect the modern tech stack

**Examples:**

❌ **Avoid:**
"DotsBot is a revolutionary, game-changing, next-generation platform that will completely transform how you think about customer support forever."

✅ **Prefer:**
"DotsBot consolidates all your customer messages into one real-time inbox. Built with Rails and Vue 3."

---

### 5.2 Headline Formulas

**Value-First Headlines:**
- "[Outcome] + [Qualifier]"
- Example: "Customer Conversations, All in One Place"

**Feature-Benefit Headlines:**
- "[Feature] for [Audience]"
- Example: "Real-Time Messaging for Modern Support Teams"

**Problem-Solution Headlines:**
- "Stop [Problem]. Start [Solution]."
- Example: "Stop Juggling Channels. Start Using DotsBot."

---

### 5.3 Call-to-Action Copy

**Primary CTAs:**
- "Start Free Trial"
- "Get Started Free"
- "Try DotsBot Free"
- "Sign Up Free"

**Secondary CTAs:**
- "Schedule Demo"
- "Talk to Sales"
- "View Documentation"
- "See How It Works"

**Best Practices:**
- Use action verbs
- Remove friction ("No credit card required")
- Be specific ("Start 14-day free trial" vs "Get started")
- Create urgency when appropriate ("Join 500+ teams")

---

## 6. Asset Requirements

### 6.1 Images

**Hero Screenshot:**
- **Format:** PNG or WebP
- **Dimensions:** 1400x900px (min)
- **Content:** DotsBot dashboard with unified inbox visible
- **Quality:** Crisp, high-resolution, realistic data

**Feature Icons:**
- **Format:** SVG (preferred) or PNG
- **Size:** 48x48px minimum
- **Style:** Consistent, modern, simple line icons
- **Color:** Single color, easily tintable

**Channel Icons:**
- **Format:** SVG or PNG
- **Size:** 40x40px minimum
- **Style:** Official brand icons when possible
- **Licensing:** Ensure proper usage rights

**Integration Logos:**
- **Format:** SVG or PNG with transparency
- **Size:** Variable (height: 40-60px)
- **Examples:** Slack logo, Shopify logo

---

### 6.2 Illustrations

**How It Works Section:**
- **Style:** Minimalist, tech-forward illustrations
- **Format:** SVG
- **Color Palette:** Match brand colors (primary-600, secondary-600, accent colors)
- **Complexity:** Simple, easy to understand at a glance

**Background Elements:**
- Subtle gradients
- Abstract shapes
- Grid patterns
- Dotted connections (fitting with "Dots" in DotsBot)

---

### 6.3 Video (Optional)

**Product Demo Video:**
- **Length:** 60-90 seconds
- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 (1080p)
- **Content:**
  - Quick overview of unified inbox
  - Show multi-channel messages
  - Highlight real-time updates
  - Showcase integrations
- **Hosting:** YouTube or Vimeo (embed on page)

---

## 7. Development Workflow

### 7.1 Setup Instructions

```bash
# Clone repository
git clone https://github.com/StockVoox/DotsBot_landingpage.git
cd DotsBot_landingpage

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

### 7.2 Git Workflow

**Branch Naming:**
```
claude/<feature-description>-<session-id>
```

**Commit Messages:**
```
feat: add hero section with CTA buttons
fix: resolve mobile menu overflow
style: update button hover states
refactor: extract FeatureCard component
docs: update README with setup instructions
```

---

### 7.3 Testing Checklist

**Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Responsive Testing:**
- [ ] 320px (small mobile)
- [ ] 375px (iPhone)
- [ ] 768px (tablet)
- [ ] 1024px (small desktop)
- [ ] 1440px (desktop)
- [ ] 1920px (large desktop)

**Performance Testing:**
- [ ] Lighthouse score >90 on all metrics
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] No console errors

**Accessibility Testing:**
- [ ] WAVE scan passes
- [ ] Keyboard navigation works
- [ ] Screen reader compatible (NVDA/JAWS)
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA

---

## 8. Launch Checklist

**Pre-Launch:**
- [ ] All sections implemented and reviewed
- [ ] Copy proofread for typos and clarity
- [ ] Images optimized (compressed, proper formats)
- [ ] Meta tags and OG tags configured
- [ ] Analytics tracking installed and tested
- [ ] Forms validated and tested
- [ ] CTAs link to correct destinations
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing complete
- [ ] Accessibility audit passed
- [ ] Performance audit passed (Lighthouse >90)
- [ ] SSL certificate configured
- [ ] 404 page designed
- [ ] Legal pages linked (Privacy, Terms)

**Post-Launch:**
- [ ] Monitor analytics for traffic and conversions
- [ ] Set up conversion tracking goals
- [ ] Monitor error logs
- [ ] Gather user feedback
- [ ] A/B test primary CTAs
- [ ] Iterate based on data

---

## 9. A/B Testing Opportunities

**Elements to Test:**
1. **Hero Headline:**
   - Variation A: "Customer Conversations, All in One Place"
   - Variation B: "Modern Messaging Platform for Support Teams"

2. **Primary CTA Text:**
   - Variation A: "Start Free Trial"
   - Variation B: "Get Started Free"

3. **Hero Visual:**
   - Variation A: Static dashboard screenshot
   - Variation B: Animated product demo

4. **Feature Ordering:**
   - Test different arrangements of feature cards

5. **Social Proof Placement:**
   - Hero section vs separate section

---

## 10. Future Enhancements

**Phase 2 Features:**
- Interactive product demo/playground
- Customer testimonials with photos/videos
- Case studies with metrics
- Live chat widget integration
- Comparison page (vs competitors)
- Resources section (blog, guides, webinars)
- Pricing calculator
- Integration directory with search
- Community forum link

**Advanced Interactions:**
- Scroll-triggered animations
- Interactive channel selector
- Live stats ticker
- Product tour walkthrough
- Chatbot demo

---

## Appendix A: Channel Icon Reference

| Channel | Icon Description | Color |
|---------|-----------------|-------|
| Website | Browser window | Blue (#3B82F6) |
| WhatsApp | WhatsApp logo | Green (#10B981) |
| Facebook | Facebook logo | Blue (#3B82F6) |
| Instagram | Instagram logo | Red gradient (#EF4444) |
| Twitter/X | X logo | Blue (#3B82F6) |
| Email | Envelope | Orange (#F59E0B) |
| SMS | Message bubble | Orange (#F59E0B) |
| Telegram | Telegram plane | Blue (#3B82F6) |
| Line | Line logo | Green (#10B981) |
| Voice | Phone icon | Red (#EF4444) |
| API | Code brackets | Gray (#6B7280) |
| Web Widget | Widget/embed icon | Purple (#7C3AED) |
| WhatsApp Business | WhatsApp + briefcase | Green (#10B981) |

---

## Appendix B: Integration Logo Reference

**Available Integrations:**
- **Slack:** Official Slack logo (aubergine/multicolor)
- **Shopify:** Shopify bag logo (green #95BF47)
- **Webhooks:** Generic webhook icon (chain link)

---

## Appendix C: Recommended Tools & Libraries

**Development:**
- **React:** https://react.dev
- **Vite:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **TypeScript:** https://www.typescriptlang.org

**Design:**
- **Figma:** For mockups and prototyping
- **Heroicons:** https://heroicons.com (free icon set)
- **Lucide Icons:** https://lucide.dev (alternative icons)
- **TinyPNG:** https://tinypng.com (image compression)
- **SVGOMG:** https://jakearchibald.github.io/svgomg (SVG optimization)

**Performance:**
- **Lighthouse:** Built into Chrome DevTools
- **WebPageTest:** https://www.webpagetest.org
- **Bundle Analyzer:** Visualize bundle sizes

**Accessibility:**
- **WAVE:** https://wave.webaim.org
- **axe DevTools:** Browser extension
- **Contrast Checker:** https://webaim.org/resources/contrastchecker

**Analytics:**
- **Google Analytics 4:** https://analytics.google.com
- **Mixpanel:** https://mixpanel.com (optional)
- **Hotjar:** https://www.hotjar.com (heatmaps, recordings)

---

## Document Metadata

**Version:** 1.0.0
**Last Updated:** 2025-11-14
**Author:** AI Assistant (Claude)
**Maintained By:** DotsBot Development Team

**Change Log:**
- 2025-11-14: Initial comprehensive guideline created

---

**This document should serve as the single source of truth for all design and development decisions related to the DotsBot landing page. Update it as the project evolves.**
