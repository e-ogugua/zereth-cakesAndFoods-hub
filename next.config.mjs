/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' for development - use only for production static export
  // output: 'export',
  // trailingSlash: true,
  images: {
    // Enable image optimization for better performance
    // unoptimized: true  // Only use this for static export
  },
  // Disable experimental CSS optimization for now to fix the module error
  // experimental: {
  //   optimizeCss: true,
  // },
}

export default nextConfig
