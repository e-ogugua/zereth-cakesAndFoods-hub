/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  images: {
    domains: ['zereth-cakes-hub.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    // Optimize images more aggressively
    // Enable device sizes for better responsive loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable image optimization for local images
    unoptimized: false,
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: false, // Disabled to avoid build issues
    // Enable optimizePackageImports for better tree shaking
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize chunk splitting for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize chunk splitting in production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Separate vendor chunks for better caching
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          // UI components chunk
          ui: {
            test: /[\\/]components[\\/]ui[\\/]/,
            name: 'ui-components',
            chunks: 'all',
            priority: 5,
            enforce: true,
          },
          // Heavy components chunk - separate from main bundle
          heavy: {
            test: /[\\/]components[\\/](cake-configurator|product-showcase|trending-products)[\\/]/,
            name: 'heavy-components',
            chunks: 'all',
            priority: 15,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
}

export default nextConfig
