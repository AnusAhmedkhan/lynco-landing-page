# Landing Page Boilerplate

A modern, production-ready Next.js 15 landing page boilerplate with TypeScript, internationalization, and best practices. Built with the App Router and featuring a complete landing page structure.

## 🚀 Features

- **Complete Landing Pages**: Home, About Us, Pricing, and Contact Us
- **Internationalization**: Multi-language support (English, Spanish) with easy language switching
- **Modern UI**: Tailwind CSS 4, Radix UI components, and responsive design
- **Form Validation**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query (React Query) with Axios
- **TypeScript**: Full type safety with strict mode
- **Code Quality**: ESLint, Prettier, Husky, and lint-staged pre-configured
- **Carousels & Animations**: Swiper integration for smooth interactions

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── (landing)/            # Landing pages group
│   │   ├── home/
│   │   ├── aboutus/
│   │   ├── pricing/
│   │   ├── contactus/
│   │   └── layout.tsx        # Landing layout with header/footer
│   ├── globals.css
│   ├── layout.tsx            # Root layout with providers
│   └── not-found.tsx
├── components/               # Reusable UI components
│   ├── home/                 # Home page components
│   ├── aboutus/              # About Us components
│   ├── pricing/              # Pricing components
│   ├── contactus/            # Contact form components
│   ├── navigation/           # Navigation components
│   └── ui/                   # Base UI components
├── constants/                # Application constants
│   ├── landing.ts            # Landing page content
│   ├── pricing.ts            # Pricing plans data
│   └── routes.ts             # Route definitions
├── hooks/                    # Custom React hooks
├── lib/                      # Library configurations
│   ├── i18n.ts               # i18next configuration
│   └── utils.ts              # Utility functions
├── locales/                  # Translation files
│   ├── en.json
│   ├── es.json
│   └── index.ts
├── schema/                   # Zod validation schemas
├── types/                    # TypeScript type definitions
├── utils/                    # Utility functions
└── public/                   # Static assets
    └── assets/               # Images and icons
```

## 🛠️ Tech Stack

**Core**
- Next.js 15 (App Router)
- TypeScript 5
- Tailwind CSS 4

**UI & Components**
- Radix UI
- Lucide React + React Icons
- Swiper (carousels)

**Forms & Validation**
- React Hook Form
- Zod

**Data Management**
- TanStack Query v5
- Axios

**Internationalization**
- i18next + react-i18next
- Browser language detection
- localStorage persistence

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=your-api-url
   ```

4. **Run the development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000/home](http://localhost:3000/home)

## 📜 Available Scripts

```bash
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint issues
yarn format           # Format code with Prettier
yarn format:check     # Check formatting
```

## 📖 Customization

### Content

- **Landing Content**: Edit `constants/landing.ts`
- **Pricing Plans**: Modify `constants/pricing.ts`
- **Translations**: Update `locales/en.json` and `locales/es.json`

### Adding a New Language

1. Create `locales/[lang].json` (e.g., `fr.json`)
2. Copy structure from `en.json` and translate
3. Update `locales/index.ts` to export the new language
4. Add language option to `LanguageSwitcher` component

### Styling

- **Global Styles**: `app/globals.css`
- **Tailwind Config**: Create `tailwind.config.ts` to customize colors, fonts, etc.
- **Component Styles**: Components use Tailwind CSS utility classes

## 🎨 Key Components

### Pages
- **Home**: Hero, statistics, testimonials, pricing preview, templates
- **About Us**: Company story and achievements
- **Pricing**: Detailed plans with feature comparison table
- **Contact**: Validated contact form

### Reusable Components
- Navigation header with language switcher
- Mobile navigation drawer
- Statistics cards with counter animations
- Pricing cards
- Testimonial carousel
- Template showcase carousel
- Contact form with validation
- Logo slider
- Footer with social links

## 🌍 Internationalization

Access translations in components:

```typescript
import { strings } from '@/locales';

// Use in component
<h1>{strings.home.hero.title}</h1>
```

Or use the hook:

```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<h1>{t('home.hero.title')}</h1>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy automatically on push to main

### Other Platforms

Works with any Next.js-compatible platform:
- Netlify
- AWS Amplify
- Digital Ocean App Platform

### Manual Build

```bash
yarn build    # Creates optimized production build
yarn start    # Runs production server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit using conventional commits
5. Push and open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

---

**Built with Next.js 15 and TypeScript**
