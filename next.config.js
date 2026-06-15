/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  basePath: '/purdue-che-gso',
  assetPrefix: '/purdue-che-gso/',
}

module.exports = nextConfig
