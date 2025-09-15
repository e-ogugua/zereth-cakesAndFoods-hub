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
    'sonner'
  ],
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'onnxruntime-node']
  }
}

export default nextConfig
