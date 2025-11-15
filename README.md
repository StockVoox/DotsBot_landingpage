# DotsBot Landing Page

> Modern, responsive landing page for DotsBot - a unified customer conversations platform.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 Level AA compliant
- **Performance Optimized** - Lighthouse score >90
- **SEO Ready** - Comprehensive meta tags
- **Modern UI** - Following DotsBot Design System

## 📋 Sections

1. **Header/Navigation** - Sticky header with dropdown menus
2. **Hero Section** - Eye-catching hero with dashboard mockup
3. **Channel Showcase** - 12+ supported channels
4. **Key Features** - 6 main feature cards
5. **How It Works** - 3-step process
6. **Technical Highlights** - Tech stack showcase
7. **Integrations** - Partner integrations
8. **Use Cases** - Industry-specific examples
9. **Pricing** - 3-tier pricing cards
10. **CTA Section** - Final conversion push
11. **Footer** - Comprehensive footer with links

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript 5
- **Styling:** CSS Modules with CSS Custom Properties
- **Design System:** Custom design tokens
- **Build Tool:** Next.js built-in (Turbopack)
- **Font:** Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

## 🌐 Development

The development server runs on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## 🏗️ Project Structure

```
DotsBot_landingpage/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   └── sections/          # Page sections
│   │       ├── Hero.tsx
│   │       ├── Hero.css
│   │       ├── Features.tsx
│   │       ├── Features.css
│   │       ├── Pricing.tsx
│   │       ├── Pricing.css
│   │       ├── AdditionalSections.tsx
│   │       └── AdditionalSections.css
│   └── styles/
│       └── globals.css        # Global styles & design tokens
├── public/                    # Static assets
├── DESIGN_GUIDELINE.md       # Design system documentation
├── PAYOUT_PAGE_DESIGN.md     # Payout page specs
├── PAYOUT_COMPONENT.tsx      # Payout page component
├── payout-page.css           # Payout page styles
├── PAYOUT_README.md          # Payout implementation guide
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Design System

The landing page follows the DotsBot Design System specifications:

### Color Palette
- **Primary:** #4F46E5 (Indigo)
- **Secondary:** #7C3AED (Purple)
- **Success:** #10B981 (Green)
- **Error:** #EF4444 (Red)
- **Warning:** #F59E0B (Orange)

### Typography
- **Font Family:** Inter
- **Sizes:** 12px - 60px
- **Weights:** 400, 500, 600, 700, 800

### Spacing
- **Base Unit:** 4px
- **Scale:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags (Open Graph, Twitter Card)
- Structured heading hierarchy
- Alt text for images
- Sitemap ready
- Robots.txt ready
- Performance optimized

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation
- Screen reader friendly
- ARIA labels
- Focus indicators
- Skip to main content link
- Color contrast ratios: 4.5:1+

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px

## ⚡ Performance

- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
- Lighthouse Score: 90+

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Self-hosted with Docker

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://dotsbot.com
NEXT_PUBLIC_API_URL=https://api.dotsbot.com
```

## 🧪 Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 👥 Contributing

This is a private project. For issues or questions, please contact the development team.

## 📞 Support

- Documentation: [DESIGN_GUIDELINE.md](./DESIGN_GUIDELINE.md)
- Payout Page: [PAYOUT_README.md](./PAYOUT_README.md)
- Issues: Contact development team

## 🎯 Roadmap

- [ ] Blog section
- [ ] Documentation portal
- [ ] Customer testimonials
- [ ] Live chat widget
- [ ] Video demonstrations
- [ ] Multi-language support

## 📊 Analytics

Integration ready for:
- Google Analytics
- Mixpanel
- Segment
- Hotjar
- Custom analytics

## 🔐 Security

- HTTPS only
- Content Security Policy
- XSS protection
- CSRF protection
- Input sanitization
- Secure headers

---

**Built with ❤️ by the DotsBot Team**

Last Updated: 2025-11-15
Version: 1.0.0
