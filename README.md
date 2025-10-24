# Zereth Cakes Hub

Zereth Cakes Hub is a modular cake-commerce and design platform built with Next.js 14, React 18, and TypeScript. The platform provides tools for custom cake design, marketplace functionality, and baker management.

**Developed by CEO – Chukwuka Emmanuel Ogugua**

## Platform Overview

This application serves as a comprehensive solution for:
- Interactive custom cake design and configuration system
- Multi-vendor marketplace for local bakery businesses
- Baker dashboard and comprehensive management interface
- Multi-currency e-commerce functionality
- Responsive web application with complete dark mode implementation

## Technical Architecture

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with CSS custom properties
- **UI Components**: Radix UI primitives with custom implementations
- **Animations**: Framer Motion with accessibility support
- **Database**: PostgreSQL with structured schema
- **Deployment**: Vercel-optimized configuration

### System Features
- **Custom Cake Designer**: Interactive cake configuration tool with real-time pricing
- **Marketplace**: Product browsing with advanced filtering and search
- **Multi-currency Support**: NGN, USD, GBP with automatic conversion
- **Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **Dark Mode**: Complete theme system with user preference persistence
- **Image Optimization**: WebP conversion with responsive sizing

## Project Structure

```
zereth-cakes-hub/
├── app/                    # Next.js App Router pages and API routes
│   ├── (auth)/            # Authentication pages
│   ├── api/               # Server-side API endpoints
│   ├── about/             # About page
│   ├── baker-dashboard/   # Baker management interface
│   ├── baker-signup/      # Baker registration process
│   ├── categories/        # Product marketplace
│   ├── checkout/          # Payment processing
│   ├── contact/           # Contact form
│   ├── custom-cake/       # Interactive cake designer
│   ├── gallery/           # Portfolio showcase
│   ├── order/             # Order management
│   └── services/          # Service descriptions
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (buttons, cards, forms)
│   ├── navigation.tsx    # Main navigation component
│   ├── footer.tsx        # Site footer
│   └── cake-configurator.tsx # Core cake design component
├── lib/                  # Utility functions and configurations
├── public/               # Static assets and optimized images
├── scripts/              # Database setup and migration scripts
└── styles/               # Global styles and CSS custom properties
```

## Development Setup

### Prerequisites
- Node.js 18.17 or later
- npm or pnpm package manager
- PostgreSQL 13+ database server
- Git for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zereth-cakes-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure environment variables**

   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:
   ```bash
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/zereth_cakes_hub"

   # Next.js Configuration
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # Email Configuration (for contact forms)
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"
   EMAIL_FROM="noreply@zerethcakes.com"

   # Payment Processing (Stripe)
   STRIPE_PUBLISHABLE_KEY="pk_test_your_key_here"
   STRIPE_SECRET_KEY="sk_test_your_key_here"
   STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

   # Development Settings
   NODE_ENV="development"
   ```

4. **Set up PostgreSQL database**

   Create a new PostgreSQL database:
   ```bash
   createdb zereth_cakes_hub
   ```

   Run the database schema:
   ```bash
   psql -d zereth_cakes_hub < scripts/01-create-database-schema.sql
   ```

   Optional - seed with sample data:
   ```bash
   psql -d zereth_cakes_hub < scripts/02-seed-sample-data.sql
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Verify installation**

   Open http://localhost:3000 in your browser. The application should load without errors.

### Stripe Payment Setup

1. **Create Stripe account** at https://stripe.com
2. **Get API keys** from the Stripe dashboard
3. **Configure webhooks** for payment events
4. **Update environment variables** with your Stripe keys
5. **Test payments** using Stripe test cards in development

### Email Configuration

The application supports email notifications for:
- Contact form submissions
- Order confirmations
- Password resets

Configure SMTP settings in your environment variables for email functionality.

## Development Workflow

### Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run analyze      # Bundle analysis for optimization
```

### Code Quality Standards

- **TypeScript**: Strict mode enabled with comprehensive type coverage
- **ESLint**: Configured with Next.js and TypeScript rules
- **Prettier**: Consistent code formatting across the project
- **Component Architecture**: Clear separation between client and server components

### Performance Optimization

- **Image Optimization**: Automatic WebP conversion and responsive images
- **Code Splitting**: Route-based and component-based splitting
- **Bundle Analysis**: Built-in bundle analyzer for optimization insights
- **Caching Strategy**: Optimized for static and dynamic content

## Platform Features

### Custom Cake Designer (`/custom-cake`)
- Interactive cake configuration system with step-by-step interface
- Comprehensive design options (size, flavor, filling, decoration)
- Real-time price calculation with transparent cost breakdown
- Design persistence for later completion and sharing
- Touch-optimized interface for mobile and tablet devices

### Marketplace (`/categories`)
- Product catalog with advanced filtering and search capabilities
- Baker business profiles with portfolio and service information
- Customer review and rating system
- Product wishlist for saved items
- Multi-currency price display with automatic conversion

### Baker Dashboard (`/baker-dashboard`)
- Comprehensive product inventory management system
- Order lifecycle management with status tracking
- Customer communication and support tools
- Business analytics and performance reporting
- Account and business profile management

## Database Schema

The PostgreSQL database implements a normalized schema supporting:

- **Users**: Customer and baker accounts with role-based access control
- **Products**: Marketplace inventory with comprehensive metadata and pricing
- **Orders**: Transaction records with complete lifecycle status tracking
- **Baker Profiles**: Business information, service areas, and portfolio data
- **Categories**: Hierarchical product classification system
- **Reviews**: Customer feedback and rating management

## Deployment

### Production Deployment (Vercel)

1. **Build optimization**
   ```bash
   npm run build
   ```

2. **Deploy to production**
   ```bash
   vercel --prod
   ```

3. **Environment configuration** in Vercel dashboard
4. **Database provisioning** (Vercel Postgres or external PostgreSQL)
5. **Domain configuration** with SSL certificate setup

### Environment Variables for Production

```bash
# Production URLs
NEXTAUTH_URL="https://your-domain.vercel.app"
SITE_URL="https://your-domain.vercel.app"

# Database (use connection string from your provider)
DATABASE_URL="postgresql://..."

# Stripe (use live keys)
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email (use production SMTP)
EMAIL_SERVER_HOST="your-smtp-provider.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="noreply@your-domain.com"
EMAIL_SERVER_PASSWORD="your-production-password"

# Production settings
NODE_ENV="production"
```

### Alternative Deployment Platforms

- **Railway**: Full-stack deployment with PostgreSQL and automated CI/CD
- **Netlify**: Static generation with serverless functions for API endpoints
- **AWS**: S3 + CloudFront for static assets, Lambda for API processing

## Documentation

- **[API Documentation](API.md)**: Complete API reference and usage examples
- **[Development Guide](DEVELOPMENT.md)**: Technical details for contributors
- **[Database Setup](DATABASE.md)**: PostgreSQL configuration and management
- **[Deployment Guide](DEPLOYMENT.md)**: Production deployment procedures
- **[Contributing Guidelines](CONTRIBUTING.md)**: How to contribute to the project

## Security Considerations

- Input validation on all user-facing forms
- CSRF protection via Next.js built-in security
- XSS prevention through React's automatic escaping
- SQL injection prevention via parameterized queries
- HTTPS enforcement in production
- Security headers configured via Next.js

## Performance Metrics

- **Bundle Size**: Optimized to 261KB for fast initial load
- **Core Web Vitals**: All metrics within green thresholds (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Image Optimization**: WebP format with responsive sizing for 60%+ size reduction
- **Code Splitting**: Route-based and component-based splitting implemented

## Support

**Zereth Cakes Hub**
- **Email**: support@zereth-cakes-hub.com
- **Phone**: +234 806 014 7046
- **Location**: Enugu, Nigeria

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Zereth Cakes Hub – Developed by CEO (Chukwuka Emmanuel Ogugua)**

## Project Structure

```
zereth-cakes-hub/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── baker-dashboard/   # Baker management
│   ├── baker-signup/      # Baker registration
│   ├── categories/        # Product marketplace
│   ├── checkout/          # Checkout process
│   ├── contact/           # Contact form
│   ├── custom-cake/       # Cake designer
│   ├── gallery/           # Image gallery
│   ├── order/             # Order management
│   └── services/          # Services overview
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Site footer
│   ├── hero-section.tsx  # Hero components
│   └── cake-configurator.tsx # Cake designer
├── lib/                  # Utility functions
├── public/               # Static assets
├── scripts/              # Database scripts
└── styles/               # Global styles
```

## Acknowledgments

- **Next.js Team** - Framework development and documentation
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **PostgreSQL** - Database system
- **Vercel** - Hosting and deployment platform

---

**Zereth Cakes Hub – Developed by CEO (Chukwuka Emmanuel Ogugua)**
