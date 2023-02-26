/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ['res.cloudinary.com', 'img.youtube.com', 'www.gstatic.com'],
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}
