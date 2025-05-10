/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  // Server actions are now stable in Next.js 15
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:5000', 'riker.replit.dev', '*.riker.replit.dev']
    },
  },
  // Configurações gerais
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
