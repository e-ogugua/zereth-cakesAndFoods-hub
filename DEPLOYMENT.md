# Deployment Guide

This guide covers deployment strategies and procedures for the Zereth Cakes Hub application.

**Developed by CEO – Chukwuka Emmanuel Ogugua**

## Production Deployment

### Platform Options

#### 1. Vercel (Recommended)
**Best for**: Next.js applications, automatic deployments, global CDN

**Setup:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
npm run build
vercel --prod

# Set environment variables in Vercel dashboard
```

**Environment Variables:**
```bash
NEXTAUTH_URL="https://your-domain.vercel.app"
DATABASE_URL="postgresql://..."
STRIPE_SECRET_KEY="sk_live_..."
NODE_ENV="production"
```

#### 2. Railway
**Best for**: Full-stack applications with databases

**Setup:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and connect project
railway login
railway init

# Deploy
railway up
```

#### 3. Netlify
**Best for**: Static sites and serverless functions

**Setup:**
```bash
# Build settings in netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

# Deploy
npm run build
netlify deploy --prod
```

## Environment Configuration

### Production Environment Variables

```bash
# URLs
NEXTAUTH_URL="https://your-domain.com"
SITE_URL="https://your-domain.com"
VERCEL_URL="https://your-domain.vercel.app"

# Database
DATABASE_URL="postgresql://username:password@host:5432/database?sslmode=require"

# Authentication
NEXTAUTH_SECRET="your-production-secret-key"

# Payments (Live Keys)
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email Service
EMAIL_SERVER_HOST="smtp.sendgrid.net"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="apikey"
EMAIL_SERVER_PASSWORD="your-sendgrid-key"
EMAIL_FROM="noreply@your-domain.com"

# Production Settings
NODE_ENV="production"
NEXT_PUBLIC_NODE_ENV="production"
```

### Domain Configuration

1. **Purchase domain** from registrar (Namecheap, GoDaddy, etc.)
2. **Configure DNS** to point to deployment platform
3. **Set up SSL** certificates (usually automatic)
4. **Update environment variables** with new domain

## Database Deployment

### Option 1: Vercel Postgres
1. Enable Postgres in Vercel dashboard
2. Copy connection string to environment variables
3. Run schema scripts via CLI or dashboard

### Option 2: External PostgreSQL
1. Set up PostgreSQL instance (AWS RDS, Google Cloud SQL, etc.)
2. Configure connection string in environment variables
3. Run database schema scripts
4. Set up automated backups

## Payment Integration

### Stripe Setup for Production
1. **Create Stripe account** at stripe.com
2. **Verify business** for live payments
3. **Get live API keys** from dashboard
4. **Configure webhooks** for payment events
5. **Test payments** with real cards

### Webhook Configuration
```bash
# Stripe CLI for webhook testing
stripe listen --forward-to your-domain.com/api/payments/stripe/webhook

# Update webhook secret in environment variables
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## Email Service Setup

### Recommended Providers
- **SendGrid**: Reliable transactional email
- **AWS SES**: Cost-effective for high volume
- **Postmark**: Excellent deliverability
- **Mailgun**: Developer-friendly API

### Configuration
```bash
# SendGrid example
EMAIL_SERVER_HOST="smtp.sendgrid.net"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="apikey"
EMAIL_SERVER_PASSWORD="SG.your-sendgrid-key"
EMAIL_FROM="noreply@your-domain.com"
```

## Monitoring and Analytics

### Performance Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Core Web Vitals**: Monitor LCP, FID, CLS metrics

### Error Tracking
- **Sentry**: Real-time error monitoring
- **LogRocket**: User session replay
- **Vercel Logs**: Platform-specific logging

## Security Checklist

### Pre-Deployment
- [ ] **Environment variables** secured and not committed to version control
- [ ] **Database credentials** use strong passwords
- [ ] **API keys** are live/production keys (not test keys)
- [ ] **SSL certificates** properly configured
- [ ] **Security headers** enabled

### Post-Deployment
- [ ] **Test all payment flows** with real transactions
- [ ] **Verify email delivery** for notifications
- [ ] **Check mobile responsiveness** across devices
- [ ] **Monitor performance** with real users
- [ ] **Set up error alerting** for critical issues

## Rollback Procedures

### If Issues Occur
1. **Monitor error logs** on deployment platform
2. **Check database connectivity** and data integrity
3. **Verify environment variables** are correctly set
4. **Test critical user flows** (checkout, authentication)
5. **Rollback to previous version** if necessary

### Emergency Rollback
```bash
# Vercel rollback
vercel rollback

# Railway rollback
railway rollback
```

## Performance Optimization

### Production Build
```bash
# Ensure optimized production build
npm run build

# Check bundle size
npm run analyze
```

### CDN Configuration
- **Images**: Automatic optimization via Next.js Image component
- **Static Assets**: Served via CDN automatically
- **API Routes**: Edge runtime for global performance

## Support and Maintenance

### Regular Tasks
- **Monitor uptime** and performance metrics
- **Check error logs** daily
- **Update dependencies** monthly
- **Review security** quarterly
- **Test backup procedures** quarterly

### Contact Information
**Zereth Cakes Hub**
- **Email**: support@zereth-cakes-hub.com
- **Phone**: +234 806 014 7046
- **Location**: Enugu, Nigeria

---

**Zereth Cakes Hub – Developed by CEO (Chukwuka Emmanuel Ogugua)**
