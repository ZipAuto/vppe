/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vppe',
  assetPrefix: '/vppe/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/vppe',
  },
}

module.exports = nextConfig

