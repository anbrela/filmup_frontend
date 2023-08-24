/** @type {import('next').NextConfig} */

const port = process.env.PORT || 3000
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
