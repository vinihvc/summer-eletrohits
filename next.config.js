// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ['res.cloudinary.com', 'img.youtube.com']
  }
})
