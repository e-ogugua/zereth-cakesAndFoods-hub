/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  images: {
    domains: ['zereth-cakes-hub.vercel.app'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: false, // Disabled to avoid build issues
  },
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
