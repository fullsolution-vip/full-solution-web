/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/full-solution-web', // Required for GitHub Pages deployment
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Required for static export
}

module.exports = nextConfig