/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
  serverExternalPackages: ['sharp', 'onnxruntime-node']
}

export default nextConfig
