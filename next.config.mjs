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
  // Removed 'output: standalone' for Vercel deployment compatibility
  trailingSlash: false,
  assetPrefix: '',
}

export default nextConfig
