/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pixabay.com',
      'images.unsplash.com',
      'i.imgur.com',
      'res.cloudinary.com',
    ],
  },
  // Server actions are now stable in Next.js 15
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:5000']
    },
  },
}

module.exports = nextConfig
