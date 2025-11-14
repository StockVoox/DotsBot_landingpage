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
3. **True Omnichannel:** 12+ channels in one unified inbox
4. **Developer Experience:** Clean APIs, composable components, embeddable SDK
5. **Extensibility:** Marketplace integrations + custom webhooks

---

## 2. Landing Page Structure

### Page Sections (In Order)

#### 2.1 Header & Navigation
**Purpose:** Primary navigation, branding, and conversion-focused CTAs

**Layout Structure:**
- **Container:** Max-width 1200px with horizontal flexbox layout
- **Logo:** Left-aligned, clickable link to homepage
- **Navigation Menu:** Center-aligned (desktop), toggleable (mobile)
- **CTA Buttons:** Right-aligned with primary and secondary actions

**Components:**

**Logo (Left Section):**
- DotsBot logo/wordmark
- Size: 32px height (desktop), 28px (mobile)
- Links to homepage (/)
- Includes hover effect (subtle opacity change)

**Navigation Menu (Center Section):**
- **Product** (Dropdown)
  - Features
  - Integrations
  - API & SDK
  - Use Cases
- **Pricing** (Direct link)
- **Resources** (Dropdown)
  - Documentation
  - Developer Docs
  - Blog
  - Help Center
  - Support
- **Company** (Dropdown - optional)
  - About Us
  - Careers
  - Contact

**CTA Buttons (Right Section):**
- **Login** - Text link with underline on hover
- **Talk to Sales** - Secondary button (outlined)
- **Start Free Trial** - Primary button (filled)

**Design Specifications:**

**Desktop Header (≥1024px):**
```css
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid #E5E7EB;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.95);
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  height: 32px;
  transition: opacity 0.2s;
}

.header__logo:hover {
  opacity: 0.8;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.header__nav-item {
  font-size: 15px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: color 0.2s;
}

.header__nav-item:hover {
  color: #4F46E5;
}

.header__cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
}
```

**Dropdown Mega Menu:**
```css
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 240px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  padding: 16px 0;
  margin-top: 8px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
}

.dropdown.active {
  opacity: 1;
  visibility: visible;
}

.dropdown__item {
  padding: 12px 24px;
  font-size: 14px;
  color: #4B5563;
  transition: all 0.15s;
}

.dropdown__item:hover {
  background: #F9FAFB;
  color: #4F46E5;
}
```

**Mobile Header (<1024px):**
```css
.header--mobile {
  padding: 0 20px;
  height: 64px;
}

.header__menu-toggle {
  display: block;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
}

.header__mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  padding: 24px 20px;
}

.header__mobile-menu.open {
  transform: translateX(0);
}

.header__mobile-nav-item {
  padding: 16px 0;
  border-bottom: 1px solid #E5E7EB;
}
```

**Sticky Behavior:**
- Fixed position on scroll
- Slight shadow appears on scroll
- Background blur effect (backdrop-filter)
- Smooth transition on scroll (0.2s)

**Accessibility:**
- Keyboard navigation support (Tab, Enter, Escape)
- ARIA labels for dropdown menus
- Focus indicators on all interactive elements
- Screen reader friendly navigation

**Mobile Menu:**
- Hamburger icon (three horizontal lines)
- Slide-in from right animation
- Full-height overlay
- Accordion-style dropdowns
- Close button (X icon)

---

#### 2.2 Hero Section
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
- Subheadline: "Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers."
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
   - "DotsBot supports 12+ channels including Facebook, WhatsApp, Instagram, email, SMS, Telegram, Line, voice, web widget, API, and more."

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
- **Next.js 14+** with App Router (for superior SEO and performance)
- **TypeScript** for type safety
- **React 18+** (bundled with Next.js)

**Why Next.js:**
- **Server-Side Rendering (SSR):** Better SEO with pre-rendered HTML
- **Static Site Generation (SSG):** Optimal performance for landing pages
- **Automatic Image Optimization:** Built-in next/image component
- **Built-in Font Optimization:** next/font with automatic subsetting
- **Metadata API:** Enhanced SEO with type-safe metadata
- **Sitemap & robots.txt:** Automatic generation
- **Code Splitting:** Automatic route-based code splitting
- **Edge Runtime:** Deploy to edge for faster global performance

**Styling:**
- **Tailwind CSS 4+** (to match DotsBot design system)
- **PostCSS** for additional processing
- **CSS Modules** (optional, for scoped styles)

**Additional Libraries:**
- **Animation:** Framer Motion (client-side animations)
- **Icons:** Heroicons or Lucide Icons
- **Forms:** React Hook Form
- **Analytics:** Google Analytics 4, Vercel Analytics, or Mixpanel
- **SEO:** next-seo (optional, for advanced SEO features)

---

### 4.2 Project Structure (Next.js 14+ App Router)

```
DotsBot_landingpage/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage (landing page)
│   ├── globals.css             # Global styles + Tailwind imports
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # robots.txt generation
│   ├── opengraph-image.tsx     # Dynamic OG image (optional)
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy page
│   ├── terms/
│   │   └── page.tsx            # Terms of service page
│   └── api/
│       └── contact/
│           └── route.ts        # API route for contact form
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── ChannelIcon.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Channels.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── TechHighlights.tsx
│   │   ├── Integrations.tsx
│   │   ├── UseCases.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Navigation.tsx
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   ├── og-image.png
│   ├── screenshots/
│   ├── icons/
│   └── videos/
├── lib/
│   ├── analytics.ts            # Analytics utilities
│   ├── constants.ts            # App constants
│   └── utils.ts                # Utility functions
├── types/
│   └── index.ts                # TypeScript types
├── styles/
│   ├── variables.css           # CSS custom properties
│   └── animations.css          # Reusable animations
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
```

**Key Differences from Traditional React:**
- **app/ directory:** Next.js 14+ App Router structure
- **layout.tsx:** Shared layout and metadata configuration
- **page.tsx:** Route components (not App.tsx)
- **sitemap.ts & robots.ts:** SEO files for search engines
- **opengraph-image.tsx:** Dynamic Open Graph image generation
- **No index.html:** Next.js generates HTML automatically

---

### 4.3 Component Implementation Examples

#### Root Layout (app/layout.tsx) - Server Component

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dotsbot.com'),
  title: {
    default: 'DotsBot - Unified Customer Messaging Platform',
    template: '%s | DotsBot',
  },
  description: 'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers. Unify conversations from social media, email, SMS, and more.',
  keywords: ['customer messaging', 'unified inbox', 'support platform', 'omnichannel', 'real-time chat', 'customer service software'],
  authors: [{ name: 'DotsBot Team' }],
  creator: 'DotsBot',
  publisher: 'DotsBot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dotsbot.com',
    title: 'DotsBot - Unified Customer Messaging Platform',
    description: 'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers.',
    siteName: 'DotsBot',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DotsBot Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DotsBot - Unified Customer Messaging Platform',
    description: 'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers.',
    images: ['/og-image.png'],
    creator: '@dotsbot',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

#### Homepage (app/page.tsx) - Server Component

```tsx
// app/page.tsx
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Channels from '@/components/sections/Channels';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import TechHighlights from '@/components/sections/TechHighlights';
import Integrations from '@/components/sections/Integrations';
import UseCases from '@/components/sections/UseCases';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Channels />
        <Features />
        <HowItWorks />
        <TechHighlights />
        <Integrations />
        <UseCases />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
```

---

#### Header Component (components/layout/Header.tsx) - Client Component

```tsx
// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/common/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Product',
      href: '#',
      dropdown: [
        { label: 'Features', href: '/features' },
        { label: 'Integrations', href: '/integrations' },
        { label: 'API & SDK', href: '/developers' },
        { label: 'Use Cases', href: '/use-cases' },
      ],
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Resources',
      href: '#',
      dropdown: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Developer Docs', href: '/developers/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'Help Center', href: '/help' },
        { label: 'Support', href: '/support' },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      } border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="DotsBot"
              width={120}
              height={32}
              className="h-8 w-auto transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg py-2 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Login
            </Link>
            <Button variant="secondary" size="small">
              Talk to Sales
            </Button>
            <Button variant="primary" size="small">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-600"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Link
                href="/login"
                className="block text-center text-sm font-medium text-gray-700"
              >
                Login
              </Link>
              <Button variant="secondary" size="medium" fullWidth>
                Talk to Sales
              </Button>
              <Button variant="primary" size="medium" fullWidth>
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
```

---

#### Hero Component (components/sections/Hero.tsx) - Client Component

```tsx
// components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/common/Button';

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
              Modern messaging platform for support teams. Real-time inbox, 12+ channels,
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
                {/* Avatar images using Next.js Image */}
                <Image
                  src="/avatars/1.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/avatars/2.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/avatars/3.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm text-gray-600">
                Used by <strong className="text-gray-900">500+</strong> support teams
              </p>
            </div>
          </motion.div>

          {/* Hero visual - optimized with Next.js Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/screenshots/dashboard-hero.png"
              alt="DotsBot Dashboard showing unified inbox with multiple channels"
              width={1400}
              height={900}
              priority
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

**Note:** Components using client-side features (Framer Motion, useState, etc.) must have `'use client'` directive.

---

#### Button Component - Client Component

```tsx
// components/common/Button.tsx
'use client';

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

#### Channels Section Component - Client Component

```tsx
// components/sections/Channels.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const channels = [
  { name: 'Website', icon: '/icons/website.svg', color: 'blue' },
  { name: 'WhatsApp', icon: '/icons/whatsapp.svg', color: 'green' },
  { name: 'Facebook', icon: '/icons/facebook.svg', color: 'blue' },
  { name: 'Instagram', icon: '/icons/instagram.svg', color: 'red' },
  { name: 'Email', icon: '/icons/email.svg', color: 'orange' },
  { name: 'SMS', icon: '/icons/sms.svg', color: 'orange' },
  { name: 'Telegram', icon: '/icons/telegram.svg', color: 'blue' },
  { name: 'Line', icon: '/icons/line.svg', color: 'green' },
  { name: 'Voice', icon: '/icons/voice.svg', color: 'red' },
  { name: 'API', icon: '/icons/api.svg', color: 'gray' },
  { name: 'Web Widget', icon: '/icons/widget.svg', color: 'purple' },
  { name: 'Custom', icon: '/icons/custom.svg', color: 'purple' },
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
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-white hover:shadow-lg transition-all cursor-pointer group"
            >
              <Image
                src={channel.icon}
                alt={`${channel.name} icon`}
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium text-gray-700">
                {channel.name}
              </span>
            </motion.div>
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

#### Image Optimization with Next.js Image

Next.js automatically optimizes images with the `<Image />` component:

```tsx
import Image from 'next/image';

// Automatic optimization: WebP/AVIF, lazy loading, responsive sizes
<Image
  src="/screenshots/dashboard.png"
  alt="DotsBot Dashboard"
  width={1400}
  height={900}
  priority={false}  // true for above-the-fold images
  quality={85}      // 1-100, default 75
  placeholder="blur" // optional blur-up effect
  blurDataURL="data:image/..." // optional low-res placeholder
/>
```

**Next.js Image Benefits:**
- Automatic format optimization (WebP, AVIF)
- Lazy loading by default (priority={true} disables)
- Responsive image sizes with srcset
- Prevents Cumulative Layout Shift (CLS)
- On-demand optimization (not at build time)

**Image Configuration:**

```js
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['cdn.dotsbot.com'], // external image domains
  },
};
```

---

#### Font Optimization with next/font

```tsx
// app/layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

**Benefits:**
- Zero layout shift (font metrics calculated at build time)
- No external network requests for Google Fonts
- Automatic subsetting (only include used characters)
- Self-hosting optimization

---

#### Dynamic Imports & Code Splitting

Next.js automatically code-splits by route. For additional optimization:

```tsx
import dynamic from 'next/dynamic';

// Lazy load components with no SSR
const AnimatedChart = dynamic(() => import('@/components/AnimatedChart'), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

// Lazy load heavy libraries
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  {
    loading: () => <Spinner />,
    ssr: true, // default
  }
);
```

---

#### Static Generation for Maximum Performance

```tsx
// app/page.tsx - Automatically static by default
export default function HomePage() {
  return <LandingPageContent />;
}

// Force static generation at build time
export const dynamic = 'force-static';

// Revalidate every 24 hours (ISR)
export const revalidate = 86400;
```

---

#### Performance Monitoring

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```

---

### 4.5 Advanced SEO Optimization with Next.js

Next.js provides industry-leading SEO capabilities out of the box. Here's a comprehensive implementation:

---

#### Metadata API (app/layout.tsx)

Next.js 14+ uses the Metadata API for type-safe, server-rendered meta tags:

```tsx
// app/layout.tsx
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4F46E5',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dotsbot.com'),

  // Basic metadata
  title: {
    default: 'DotsBot - Unified Customer Messaging Platform',
    template: '%s | DotsBot',
  },
  description: 'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers. Unify conversations from social media, email, SMS, and more.',

  // Keywords for SEO
  keywords: [
    'customer messaging platform',
    'unified inbox',
    'omnichannel support',
    'real-time chat',
    'customer service software',
    'support ticket system',
    'live chat software',
    'WhatsApp business integration',
    'social media inbox',
    'customer communication platform'
  ],

  // Author and creator
  authors: [{ name: 'DotsBot Team', url: 'https://dotsbot.com' }],
  creator: 'DotsBot',
  publisher: 'DotsBot Inc.',

  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dotsbot.com',
    siteName: 'DotsBot',
    title: 'DotsBot - Unified Customer Messaging Platform',
    description: 'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DotsBot Dashboard - Unified Inbox',
        type: 'image/png',
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    site: '@dotsbot',
    creator: '@dotsbot',
    title: 'DotsBot - Unified Customer Messaging Platform',
    description: 'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers.',
    images: ['/twitter-image.png'],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Web app manifest
  manifest: '/site.webmanifest',

  // Verification for search consoles
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },

  // Alternate languages (if applicable)
  alternates: {
    canonical: 'https://dotsbot.com',
    languages: {
      'en-US': 'https://dotsbot.com',
      'es-ES': 'https://dotsbot.com/es',
    },
  },

  // Category
  category: 'technology',
};
```

---

#### Dynamic Page Metadata (generateMetadata)

For pages with dynamic content:

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}
```

---

#### Sitemap Generation (app/sitemap.ts)

Next.js can dynamically generate sitemaps:

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dotsbot.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/integrations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
```

**Accessing sitemap:** `https://dotsbot.com/sitemap.xml`

---

#### Robots.txt Generation (app/robots.ts)

```ts
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://dotsbot.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
```

**Accessing robots.txt:** `https://dotsbot.com/robots.txt`

---

#### JSON-LD Structured Data

Add structured data for rich search results:

```tsx
// components/StructuredData.tsx
export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DotsBot',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    description: 'Unified customer messaging platform with real-time conversations across 12+ channels',
    featureList: [
      'Unified inbox',
      'Real-time messaging',
      '13+ channel integrations',
      'Developer API',
      'Custom webhooks',
    ],
    screenshot: 'https://dotsbot.com/screenshots/dashboard.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '120',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'DotsBot Inc.',
      url: 'https://dotsbot.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DotsBot',
    url: 'https://dotsbot.com',
    logo: 'https://dotsbot.com/logo.png',
    sameAs: [
      'https://twitter.com/dotsbot',
      'https://linkedin.com/company/dotsbot',
      'https://github.com/dotsbot',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'support@dotsbot.com',
      availableLanguage: ['English'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Usage in layout:**

```tsx
// app/layout.tsx
import { SoftwareApplicationSchema, OrganizationSchema } from '@/components/StructuredData';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SoftwareApplicationSchema />
        <OrganizationSchema />
      </body>
    </html>
  );
}
```

---

#### Dynamic OG Image Generation

Generate Open Graph images dynamically:

```tsx
// app/opengraph-image.tsx (or app/og/route.tsx for more control)
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DotsBot - Unified Customer Messaging Platform';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4F46E5',
          fontSize: 64,
          fontWeight: 700,
          color: 'white',
        }}
      >
        <div style={{ marginBottom: 20 }}>DotsBot</div>
        <div style={{ fontSize: 32, fontWeight: 400 }}>
          Unified Customer Messaging Platform
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
```

---

#### Canonical URLs

Prevent duplicate content issues:

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://dotsbot.com',
  },
};

// For specific pages
// app/features/page.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://dotsbot.com/features',
  },
};
```

---

#### SEO Best Practices Checklist

- [ ] **Metadata API configured** in layout.tsx
- [ ] **Dynamic sitemap** generated (app/sitemap.ts)
- [ ] **Robots.txt** configured (app/robots.ts)
- [ ] **Structured data** (JSON-LD) for Software, Organization, FAQ
- [ ] **Canonical URLs** set for all pages
- [ ] **Open Graph images** optimized (1200x630px)
- [ ] **Alt text** on all images
- [ ] **Semantic HTML** (h1, h2, article, section, nav)
- [ ] **Loading performance** optimized (Next.js Image, fonts)
- [ ] **Mobile-friendly** and responsive
- [ ] **Page speed** >90 on Lighthouse
- [ ] **HTTPS** enforced
- [ ] **Google Search Console** verified
- [ ] **XML sitemap** submitted to search engines

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

#### Initial Setup with Next.js

```bash
# Option 1: Clone existing repository
git clone https://github.com/StockVoox/DotsBot_landingpage.git
cd DotsBot_landingpage
npm install

# Option 2: Create new Next.js project
npx create-next-app@latest dotsbot-landingpage --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd dotsbot-landingpage
```

#### Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

#### Environment Variables

Create a `.env.local` file:

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://dotsbot.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Contact form (if using)
CONTACT_EMAIL=support@dotsbot.com

# Optional: CMS or API keys
# NEXT_PUBLIC_CMS_API_KEY=xxx
```

#### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{ts,tsx,md,json}\"",
    "analyze": "ANALYZE=true next build"
  }
}
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
| WhatsApp Business | WhatsApp + briefcase | Green (#10B981) |
| Facebook | Facebook logo | Blue (#3B82F6) |
| Instagram | Instagram logo | Red gradient (#EF4444) |
| Email | Envelope | Orange (#F59E0B) |
| SMS | Message bubble | Orange (#F59E0B) |
| Telegram | Telegram plane | Blue (#3B82F6) |
| Line | Line logo | Green (#10B981) |
| Voice | Phone icon | Red (#EF4444) |
| API | Code brackets | Gray (#6B7280) |
| Web Widget | Widget/embed icon | Purple (#7C3AED) |
| Custom | Puzzle piece or custom icon | Purple (#7C3AED) |

---

## Appendix B: Integration Logo Reference

**Available Integrations:**
- **Slack:** Official Slack logo (aubergine/multicolor)
- **Shopify:** Shopify bag logo (green #95BF47)
- **Webhooks:** Generic webhook icon (chain link)

---

## Appendix C: Recommended Tools & Libraries

**Core Framework:**
- **Next.js:** https://nextjs.org (React framework)
- **React:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Tailwind CSS:** https://tailwindcss.com

**UI & Animation:**
- **Framer Motion:** https://www.framer.com/motion
- **Heroicons:** https://heroicons.com (free icon set)
- **Lucide Icons:** https://lucide.dev (alternative icons)
- **Radix UI:** https://www.radix-ui.com (headless components)
- **shadcn/ui:** https://ui.shadcn.com (copy-paste components)

**Forms & Validation:**
- **React Hook Form:** https://react-hook-form.com
- **Zod:** https://zod.dev (TypeScript-first schema validation)

**SEO & Analytics:**
- **next-seo:** https://github.com/garmeeh/next-seo (advanced SEO)
- **Google Analytics 4:** https://analytics.google.com
- **Vercel Analytics:** https://vercel.com/analytics (built-in)
- **Vercel Speed Insights:** https://vercel.com/docs/speed-insights
- **Mixpanel:** https://mixpanel.com (optional)
- **Hotjar:** https://www.hotjar.com (heatmaps, recordings)

**Design Tools:**
- **Figma:** For mockups and prototyping
- **TinyPNG:** https://tinypng.com (image compression)
- **Squoosh:** https://squoosh.app (advanced image optimization)
- **SVGOMG:** https://jakearchibald.github.io/svgomg (SVG optimization)
- **Coolors:** https://coolors.co (color palette generator)
- **Realtime Colors:** https://realtimecolors.com (preview color palettes)

**Performance Testing:**
- **Lighthouse:** Built into Chrome DevTools
- **WebPageTest:** https://www.webpagetest.org
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Bundle Analyzer:** `@next/bundle-analyzer`
- **next-bundle-analyzer:** Visualize Next.js bundle sizes

**Accessibility:**
- **WAVE:** https://wave.webaim.org
- **axe DevTools:** Browser extension
- **Contrast Checker:** https://webaim.org/resources/contrastchecker
- **Pa11y:** https://pa11y.org (automated testing)

**Development Tools:**
- **ESLint:** Code linting (built into Next.js)
- **Prettier:** Code formatting
- **Husky:** Git hooks
- **lint-staged:** Run linters on staged files
- **Commitlint:** Enforce commit message conventions

**Deployment:**
- **Vercel:** https://vercel.com (recommended, built by Next.js creators)
- **Netlify:** https://www.netlify.com
- **Cloudflare Pages:** https://pages.cloudflare.com
- **AWS Amplify:** https://aws.amazon.com/amplify

**Recommended Package Installations:**

```bash
# Core dependencies
npm install next@latest react@latest react-dom@latest typescript @types/react @types/node

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Animation
npm install framer-motion

# Forms
npm install react-hook-form zod @hookform/resolvers

# Icons
npm install lucide-react
# or
npm install @heroicons/react

# Analytics
npm install @vercel/analytics @vercel/speed-insights

# Utilities
npm install clsx tailwind-merge

# Development
npm install -D prettier eslint-config-prettier @next/bundle-analyzer
```

---

## Document Metadata

**Version:** 2.0.0
**Last Updated:** 2025-11-14
**Author:** AI Assistant (Claude)
**Maintained By:** DotsBot Development Team

**Change Log:**
- 2025-11-14 (v2.0): Updated for Next.js 14+ with App Router and enhanced SEO implementation
  - Replaced React + Vite with Next.js framework
  - Updated project structure to Next.js App Router
  - Enhanced SEO section with Metadata API, sitemap, robots.txt, structured data
  - Added Next.js Image and Font optimization
  - Updated all component examples for Next.js patterns
  - Added Server Component vs Client Component guidance
  - Expanded recommended tools and libraries
  - Added environment variables and deployment guidance
- 2025-11-14 (v1.0): Initial comprehensive guideline created

---

**This document should serve as the single source of truth for all design and development decisions related to the DotsBot landing page. Update it as the project evolves.**
