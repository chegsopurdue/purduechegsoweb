/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  basePath: '/purduechegso.github.io',
  assetPrefix: '/purduechegso.github.io/',
}

module.exports = nextConfig
