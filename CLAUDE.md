# CLAUDE.md - AI Assistant Guide for DotsBot Landing Page

## Project Overview

**Project Name:** DotsBot Landing Page
**Repository:** StockVoox/DotsBot_landingpage
**Purpose:** Landing page for DotsBot product/service
**Status:** New project (initial setup phase)

This document provides comprehensive guidance for AI assistants working on this codebase.

---

## Repository Structure

This is a new repository. The recommended structure for a modern landing page project is:

```
DotsBot_landingpage/
├── src/                    # Source files
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components/routes
│   ├── styles/            # CSS/styling files
│   ├── assets/            # Images, fonts, icons
│   ├── utils/             # Utility functions
│   └── config/            # Configuration files
├── public/                # Static assets
├── tests/                 # Test files
├── docs/                  # Documentation
├── .github/              # GitHub workflows and templates
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
├── CLAUDE.md             # This file
└── .gitignore           # Git ignore rules
```

---

## Technology Stack Recommendations

### Core Technologies
- **Framework:** React, Next.js, Vue, or Vanilla HTML/CSS/JS
- **Styling:** Tailwind CSS, styled-components, or CSS modules
- **Build Tool:** Vite, Webpack, or Parcel
- **Package Manager:** npm or yarn

### Development Tools
- **Linting:** ESLint for JavaScript/TypeScript
- **Formatting:** Prettier
- **Testing:** Jest, Vitest, or Playwright
- **Version Control:** Git with conventional commits

---

## Development Workflow

### Branch Strategy
- **Main/Master:** Production-ready code
- **Feature Branches:** Named as `claude/claude-md-mhz635bedwq4uv2f-019fneZ38qnXCxmg1ULHeDVB` (auto-generated for AI sessions)
- **Convention:** All Claude branches start with `claude/` and end with session ID

### Commit Guidelines
Follow Conventional Commits specification:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add hero section with CTA button
fix: resolve mobile menu overflow issue
docs: update setup instructions in README
```

### Git Operations
**Pushing:**
```bash
git push -u origin <branch-name>
```
- Retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s) on network errors
- Branch must start with 'claude/' and end with session ID

**Fetching/Pulling:**
```bash
git fetch origin <branch-name>
git pull origin <branch-name>
```
- Retry up to 4 times with exponential backoff on failures

---

## Code Conventions

### JavaScript/TypeScript
- Use ES6+ features
- Prefer const/let over var
- Use arrow functions for callbacks
- Follow functional programming principles where appropriate
- Keep functions small and focused (single responsibility)

### Component Structure
```javascript
// Preferred component structure
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Component.module.css';

const Component = ({ prop1, prop2 }) => {
  // Component logic

  return (
    <div className={styles.container}>
      {/* JSX */}
    </div>
  );
};

Component.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default Component;
```

### CSS/Styling
- Use BEM naming convention or CSS modules
- Mobile-first responsive design
- Prefer CSS Grid and Flexbox for layouts
- Use CSS custom properties (variables) for theming
- Keep specificity low

### File Naming
- Components: PascalCase (e.g., `HeroSection.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Styles: kebab-case or match component name
- Constants: UPPER_SNAKE_CASE in constants.js

---

## Accessibility Standards

### WCAG 2.1 Level AA Compliance
- Semantic HTML elements
- Proper heading hierarchy (h1 → h6)
- Alt text for all images
- Keyboard navigation support
- ARIA labels where needed
- Color contrast ratios: 4.5:1 for normal text, 3:1 for large text
- Focus indicators on interactive elements

### Testing
```bash
# Run accessibility tests
npm run test:a11y
```

---

## Performance Guidelines

### Optimization Targets
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

### Best Practices
- Lazy load images and components
- Optimize images (WebP format, proper sizing)
- Minimize bundle size
- Use code splitting
- Implement caching strategies
- Minify CSS and JavaScript

---

## Security Considerations

### Frontend Security
- Sanitize user inputs
- Use Content Security Policy (CSP) headers
- Avoid inline scripts
- Keep dependencies updated
- No sensitive data in client-side code
- Implement HTTPS only
- Validate forms server-side as well

### Dependency Management
```bash
# Regular security audits
npm audit
npm audit fix
```

---

## Testing Strategy

### Unit Tests
- Test utility functions
- Test component logic
- Aim for >80% code coverage

### Integration Tests
- Test component interactions
- Test form submissions
- Test navigation flows

### E2E Tests
- Test critical user paths
- Test across different browsers
- Test responsive behavior

### Running Tests
```bash
npm test              # Run all tests
npm run test:unit    # Unit tests only
npm run test:e2e     # E2E tests only
npm run test:coverage # Coverage report
```

---

## Landing Page Specific Guidelines

### Essential Sections
1. **Hero Section**
   - Clear value proposition
   - Primary CTA (Call-to-Action)
   - Engaging visuals

2. **Features Section**
   - Key product features
   - Benefits-focused copy
   - Icons or illustrations

3. **How It Works**
   - Step-by-step process
   - Visual guides

4. **Social Proof**
   - Testimonials
   - Customer logos
   - Statistics/metrics

5. **Pricing** (if applicable)
   - Clear pricing tiers
   - Feature comparison

6. **FAQ**
   - Address common questions
   - Reduce friction

7. **Footer**
   - Contact information
   - Links to legal pages
   - Social media links

### Conversion Optimization
- Clear and prominent CTAs
- A/B testing capabilities
- Analytics integration (Google Analytics, Mixpanel, etc.)
- Form validation with helpful error messages
- Loading states for async actions
- Success/confirmation messages

---

## Environment Configuration

### Environment Variables
Create `.env` files (never commit to git):
```
# .env.example (commit this)
VITE_API_URL=
VITE_ANALYTICS_ID=
VITE_CONTACT_EMAIL=
```

### Configuration Files
- `.env.local` - Local development (gitignored)
- `.env.production` - Production settings
- `.env.example` - Template (committed)

---

## Build and Deployment

### Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server
npm run build       # Production build
npm run preview     # Preview production build
```

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] Lighthouse score >90 on all metrics
- [ ] Cross-browser testing complete
- [ ] Mobile responsiveness verified
- [ ] Accessibility audit passed
- [ ] SEO meta tags configured
- [ ] Analytics integrated
- [ ] Forms tested and working
- [ ] Links verified (no broken links)

### Deployment Platforms
Recommended platforms:
- Vercel (Next.js optimized)
- Netlify
- GitHub Pages
- Cloudflare Pages

---

## AI Assistant Guidelines

### Task Planning
Always use TodoWrite tool for:
- Multi-step tasks (3+ steps)
- Complex implementations
- Bug fixes requiring multiple files
- Feature additions

### Code Quality Standards
- Write secure code (no XSS, injection vulnerabilities)
- Follow existing code style
- Add comments for complex logic
- Keep functions under 50 lines
- Maximum file size: 300 lines (refactor if larger)

### When Making Changes
1. Read existing files before editing
2. Understand the full context
3. Make minimal, focused changes
4. Test changes thoroughly
5. Update documentation if needed
6. Commit with clear messages

### File Operations Priority
1. **Read:** Use Read tool for viewing files
2. **Edit:** Use Edit tool for modifications
3. **Search:** Use Grep for content search
4. **Find:** Use Glob for file patterns
5. **Bash:** Only for actual terminal operations

### Communication
- Be concise and clear
- No emojis unless requested
- Focus on technical accuracy
- Output text directly (not via echo/bash)

---

## Common Tasks

### Adding a New Component
```bash
# 1. Create component file
touch src/components/NewComponent.jsx

# 2. Create style file
touch src/components/NewComponent.module.css

# 3. Create test file
touch tests/NewComponent.test.jsx

# 4. Import and use in parent component
```

### Adding Dependencies
```bash
# Install package
npm install <package-name>

# Install dev dependency
npm install -D <package-name>

# Update package
npm update <package-name>
```

### Debugging
```javascript
// Development logging
console.log('Debug:', data);

// Remove before production
// Use proper error handling instead
```

---

## Resources and References

### Documentation Links
- [React Docs](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev) - Performance & best practices
- [A11y Project](https://www.a11yproject.com) - Accessibility

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audits
- [WAVE](https://wave.webaim.org/) - Accessibility testing
- [BrowserStack](https://www.browserstack.com) - Cross-browser testing

---

## Project-Specific Notes

### DotsBot Branding
- Maintain consistent branding throughout
- Follow brand guidelines for colors, fonts, logo usage
- Ensure messaging aligns with brand voice

### Target Audience
- Define target audience personas
- Tailor content and design accordingly
- Consider user journey and pain points

### Analytics and Tracking
- Track key conversion metrics
- Monitor user behavior
- A/B test major changes

---

## Changelog

### Current Version
- Initial CLAUDE.md creation
- Established project structure and conventions
- Defined development workflow
- Set code quality standards

---

## Questions or Issues?

When encountering issues:
1. Check existing documentation
2. Review error messages carefully
3. Search codebase for similar patterns
4. Consult official library documentation
5. Ask user for clarification if needed

---

## File Metadata

**Last Updated:** 2025-11-14
**Maintained By:** AI Assistants & Development Team
**Version:** 1.0.0

---

*This document should be updated as the project evolves and new patterns emerge.*
