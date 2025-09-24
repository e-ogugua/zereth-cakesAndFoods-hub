# Zereth Cakes & Foods Hub 🍰

A modern, full-featured cake marketplace and custom cake design platform built with Next.js 14, React 18, and TypeScript.

## 🚀 Features

### Core Functionality
- **Custom Cake Designer** - Interactive cake customization tool
- **Marketplace** - Browse cakes from local bakers
- **Baker Dashboard** - Management system for bakers
- **Multi-currency Support** - NGN, USD, EUR, GBP
- **Responsive Design** - Works perfectly on all devices
- **Dark Mode Support** - Complete theme system
- **Image Optimization** - Automatic WebP conversion and optimization

### User Experience
- **Professional Navigation** - Clean, intuitive navigation with branding
- **Hero Sections** - Stunning hero images with optimized text contrast
- **Search & Filtering** - Advanced product discovery
- **Real-time Forms** - Instant feedback and validation
- **Mobile-First Design** - Optimized for mobile users

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: PostgreSQL (SQL scripts included)
- **Deployment**: Vercel-ready

## 📁 Project Structure

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

## 🎨 Design System

### Colors
- **Primary**: #F97316 (Orange)
- **Background**: #FFFFFF (Light) / #0A0A0A (Dark)
- **Text**: High contrast for accessibility
- **Accent**: Yellow (#EAB308) for highlights

### Typography
- **Headings**: Serif fonts for elegance
- **Body**: Sans-serif for readability
- **Hero Text**: Large, bold with drop shadows
- **Buttons**: Rounded, with hover effects

### Components
- **Navigation**: Sticky header with logo and menu
- **Hero Sections**: Full-width with overlay text
- **Cards**: Rounded corners with shadows
- **Forms**: Consistent styling with validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- PostgreSQL (for database)

### Installation

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

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your database URL and other secrets
   ```

4. **Set up the database**
   ```bash
   # Run the SQL scripts in scripts/ directory
   psql -d your_database < scripts/01-create-database-schema.sql
   psql -d your_database < scripts/02-seed-sample-data.sql
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📱 Pages Overview

### Public Pages
- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - Company story and team
- **Services** (`/services`) - Available services
- **Gallery** (`/gallery`) - Portfolio showcase
- **Contact** (`/contact`) - Contact form and information

### Marketplace
- **Categories** (`/categories`) - Browse products with filtering
- **Custom Cake** (`/custom-cake`) - Interactive cake designer
- **Bakers** (`/bakers`) - Meet local bakers

### User Features
- **Authentication** - Login/signup system
- **User Dashboard** - Order management
- **Checkout** - Secure payment processing
- **Order Tracking** - Real-time order status

### Baker Features
- **Baker Signup** (`/baker-signup`) - Registration process
- **Baker Dashboard** (`/baker-dashboard`) - Management interface
- **Product Management** - Add/edit products
- **Order Management** - Handle customer orders

## 🎯 Key Features

### Custom Cake Designer
- Interactive 3D cake visualization
- Multiple flavors, sizes, and decorations
- Real-time price calculation
- Save and share designs

### Marketplace
- Advanced search and filtering
- Baker profiles and ratings
- Wishlist functionality
- Multi-currency support

### Admin Dashboard
- Order management
- Customer support
- Analytics and reporting
- Content management

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality

### Performance
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Optimized asset caching
- **Bundle Analysis**: Built-in bundle analyzer

## 🌟 Recent Improvements (v2.0)

### Navigation Enhancements
- ✅ **Unified Navigation**: Single navigation system across all pages
- ✅ **Brand Integration**: Logo + "Zereth Cakes and Foods Hub" text
- ✅ **Mobile Optimization**: Responsive mobile menu
- ✅ **Accessibility**: ARIA labels and keyboard navigation

### Hero Section Improvements
- ✅ **Enhanced Text Contrast**: White text with strong drop shadows
- ✅ **Consistent Styling**: Unified hero classes across all pages
- ✅ **Better Readability**: Improved typography and spacing
- ✅ **Professional Design**: Gradient text effects and animations

### Footer Optimization
- ✅ **Succinct Design**: Streamlined from 285 to 110 lines
- ✅ **Essential Information**: Contact info, links, and social media
- ✅ **Clean Layout**: 3-column responsive design
- ✅ **Brand Consistency**: Matching navigation styling

### Technical Improvements
- ✅ **TypeScript**: Full type safety implementation
- ✅ **Component Architecture**: Modular, reusable components
- ✅ **Performance**: Optimized images and lazy loading
- ✅ **SEO**: Meta tags and structured data

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Optimized for fast loading
- **Image Optimization**: 60%+ size reduction with WebP

## 🔒 Security

- **Input Validation**: Server-side validation for all forms
- **CSRF Protection**: Built-in Next.js protection
- **XSS Prevention**: Sanitized user inputs
- **HTTPS**: SSL/TLS encryption
- **Headers**: Security headers configured

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
- **Netlify**: Configure build settings
- **Railway**: Deploy with PostgreSQL
- **AWS**: S3 + CloudFront + Lambda

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: genjoshsnr@gmail.com
- **Phone**: +234 806 014 7046
- **Location**: Enugu, Nigeria

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For utility-first styling
- **Radix UI** - For accessible components
- **Framer Motion** - For smooth animations
- **Vercel** - For hosting and deployment

---

**Zereth Cakes & Foods Hub** - Where edible art meets extraordinary taste! 🎂✨
