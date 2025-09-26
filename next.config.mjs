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
  // Add CSP headers for development
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
          }
        ]
      }
    ]
  }
}

export default nextConfig
