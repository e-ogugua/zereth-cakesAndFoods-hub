# Development Guide

This guide provides technical details and best practices for developers working on the Zereth Cakes Hub project.

**Developed by CEO – Chukwuka Emmanuel Ogugua**

## Architecture Overview

### Technology Stack
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **PostgreSQL**: Primary database
- **Prisma**: Database ORM (planned for future versions)
- **Stripe**: Payment processing
- **NextAuth.js**: Authentication system

### Project Structure
```
app/                          # Next.js App Router
├── (auth)/                  # Authentication routes
├── api/                     # API endpoints
├── about/                   # About page
├── baker-dashboard/         # Baker management
├── categories/              # Product marketplace
├── custom-cake/             # Cake designer
└── globals.css              # Global styles

components/                  # React components
├── ui/                      # Base UI components
├── cake-configurator.tsx    # Main cake designer
├── navigation.tsx           # Site navigation
└── trust-indicators.tsx     # Social proof components

lib/                         # Utilities and configurations
├── utils.ts                 # General utilities
├── db.ts                    # Database connection
└── auth.ts                  # Authentication config

public/                      # Static assets
└── optimized/              # WebP optimized images

scripts/                     # Database and deployment scripts
└── 01-create-database-schema.sql
```

## Development Environment

### System Requirements
- **Node.js**: 18.17.0 or later
- **npm**: 9.0.0 or later (or pnpm)
- **PostgreSQL**: 13.0 or later
- **Git**: 2.30.0 or later

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/zereth_cakes_hub"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-development-secret"

# Email (optional for development)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"

# Payments (use test keys)
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Development
NODE_ENV="development"
NEXT_PUBLIC_NODE_ENV="development"
```

## Component Development

### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `CakeConfigurator.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatPrice.ts`)
- Types: `PascalCase.ts` (e.g., `ProductTypes.ts`)
- Styles: `camelCase.module.css` (for CSS modules)

### Component Structure
```typescript
// components/example-component.tsx
'use client'; // If client component

import { memo } from 'react';
import { Button } from '@/components/ui/button';

// TypeScript interfaces
interface ExampleComponentProps {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

// Component implementation
export const ExampleComponent = memo(function ExampleComponent({
  title,
  onClick,
  variant = 'primary'
}: ExampleComponentProps) {
  return (
    <div className="example-component">
      <h2>{title}</h2>
      <Button onClick={onClick} variant={variant}>
        Click me
      </Button>
    </div>
  );
});
```

### Best Practices
- Use TypeScript interfaces for all props
- Implement React.memo for expensive components
- Follow mobile-first responsive design
- Use semantic HTML elements
- Implement proper accessibility attributes

## Database Development

### Schema Management
Database schema is managed through SQL scripts in the `scripts/` directory:
- `01-create-database-schema.sql`: Main schema creation
- `02-seed-sample-data.sql`: Sample data for development

### Adding New Tables
1. Add SQL to `01-create-database-schema.sql`
2. Update TypeScript types in `lib/types/`
3. Add migration documentation in this guide
4. Update seed data if necessary

### Database Connection
```typescript
// lib/db.ts
import { Pool } from 'pg';

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});
```

## API Development

### Route Structure
API routes follow Next.js App Router conventions:
```
app/api/
├── payments/
│   ├── stripe/
│   │   ├── route.ts          # POST /api/payments/stripe
│   │   └── webhook/route.ts  # POST /api/payments/stripe/webhook
│   ├── paystack/route.ts     # POST /api/payments/paystack
│   └── flutterwave/route.ts  # POST /api/payments/flutterwave
├── products/
│   ├── route.ts              # GET /api/products
│   └── [id]/route.ts         # GET /api/products/[id]
└── orders/
    ├── route.ts              # GET, POST /api/orders
    └── [id]/route.ts         # GET /api/orders/[id]
```

### API Response Format
```typescript
// Success response
export function jsonResponse(data: any, status = 200) {
  return Response.json({
    success: true,
    data
  }, { status });
}

// Error response
export function errorResponse(message: string, code: string, status = 400) {
  return Response.json({
    success: false,
    error: message,
    code
  }, { status });
}
```

## Styling Guidelines

### Design System
The project uses a consistent design system with:
- **Primary Color**: #EF4444 (red)
- **Secondary Color**: #22C55E (green)
- **Typography**: Serif for headings, sans-serif for body text
- **Spacing**: Consistent scale using Tailwind utilities

### Responsive Breakpoints
```css
/* Mobile-first approach */
xs: 475px    /* Extra small devices */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Large desktops */
2xl: 1400px  /* Extra large screens */
```

### Utility Classes
```css
/* Custom utility classes in globals.css */
.section-spacing { @apply py-12 sm:py-16 lg:py-20; }
.container-spacing { @apply px-4 sm:px-6 lg:px-8; }
.touch-target { @apply min-h-[44px] min-w-[44px]; }
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
}
```

## Performance Optimization

### Code Splitting
Use dynamic imports for heavy components:
```typescript
const HeavyComponent = dynamic(
  () => import('@/components/heavy-component'),
  {
    loading: () => <div>Loading...</div>
  }
);
```

### Image Optimization
```typescript
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={false} // Set true only for above-fold images
/>
```

### Bundle Analysis
```bash
npm run analyze  # Generate bundle analysis report
```

## Testing Strategy

### Unit Tests
Test individual functions and utilities:
```typescript
// lib/utils.test.ts
import { formatPrice } from './utils';

describe('formatPrice', () => {
  it('formats USD correctly', () => {
    expect(formatPrice(100, 'USD')).toBe('$100');
  });
});
```

### Component Tests
```typescript
// components/button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Integration Tests
Test API routes and database interactions:
```typescript
// app/api/products/__tests__/route.test.ts
import { NextRequest } from 'next/server';
import { GET } from '../route';

describe('/api/products', () => {
  it('returns products list', async () => {
    const request = new NextRequest('http://localhost:3000/api/products');
    const response = await GET(request);
    expect(response.status).toBe(200);
  });
});
```

## Deployment

### Development Deployment
```bash
npm run build
npm run start  # Production-like environment
```

### Production Deployment (Vercel)
```bash
npm run build
vercel --prod
```

### Environment Setup for Production
1. Set up PostgreSQL database (Vercel Postgres or external)
2. Configure Stripe live keys
3. Set up email service (SendGrid, AWS SES, etc.)
4. Configure domain and SSL certificates

## Debugging

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Check TypeScript errors
npm run type-check

# Check linting issues
npm run lint
```

#### Database Connection Issues
```bash
# Check PostgreSQL is running
pg_isready -h localhost -p 5432

# Verify database exists
psql -l | grep zereth_cakes_hub

# Check connection string format
echo $DATABASE_URL
```

#### Payment Integration Issues
```bash
# Test Stripe webhook
stripe listen --forward-to localhost:3000/api/payments/stripe/webhook

# Check Stripe dashboard for errors
# Verify webhook secret matches environment variable
```

## Code Quality

### Pre-commit Hooks
Install Husky for automated code quality checks:
```bash
npm install --save-dev husky
npx husky install
```

### Automated Checks
- **ESLint**: Code linting and style enforcement
- **TypeScript**: Type checking and inference
- **Prettier**: Code formatting
- **Bundle Analyzer**: Dependency size analysis

## Performance Monitoring

### Core Web Vitals
Monitor these metrics in production:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Bundle Size
- **Initial Load**: Target < 200KB
- **Vendor Chunks**: Should be cached by browser
- **Route Chunks**: Load on-demand

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## Support

For development questions:
- **Email**: support@zereth-cakes-hub.com
- **Documentation**: Check this guide and inline comments
- **Issues**: Use GitHub issues for bug reports and feature requests

---

**Zereth Cakes Hub – Developed by CEO (Chukwuka Emmanuel Ogugua)**
