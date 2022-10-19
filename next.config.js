/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css')
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/submitted",
        permanent: false
      },
    ]
  },
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
