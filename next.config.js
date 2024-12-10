/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ip-address-converter',
  assetPrefix: '/ip-address-converter',
}

module.exports = nextConfig

