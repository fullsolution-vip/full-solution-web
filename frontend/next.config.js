/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Required for static export
}

module.exports = nextConfig