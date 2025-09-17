/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable image optimization completely
  images: {
    unoptimized: true,
    // Disable the /_next/image optimization route
    disableStaticImages: true,
    // Disable the default image optimization
    path: '',
    // Disable all image optimization features
    loader: 'default',
    // Disable device size detection
    deviceSizes: [],
    // Disable image formats
    formats: [],
    // Disable domains
    domains: [],
    // Disable minimum cache TTL
    minimumCacheTTL: 0,
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
        '**/node_modules/**/*',
        '**/.next/**/*',
      ],
    },
  },
  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-navigation-menu',
    '@radix-ui/react-slot',
    '@radix-ui/react-toast',
    'lucide-react',
    'sonner',
    'framer-motion'
  ],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  // Enable static exports for static deployments
  output: 'standalone',
  // Enable React Strict Mode
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
}

export default nextConfig
