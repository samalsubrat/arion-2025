/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '139.59.17.142',
        port: '',
        pathname: '/static/media/**',
      },
    ],
  },
}

module.exports = nextConfig 