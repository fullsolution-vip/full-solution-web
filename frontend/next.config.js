/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/full-solution-web',
    trailingSlash: true,
  }),
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: process.env.NODE_ENV === 'production', // Required for static export
  },
}

module.exports = nextConfig