/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [ "cdn2.thedogapi.com", "cdn2.thecatapi.com" ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/dogs",
      },
    ];
  },
};

module.exports = nextConfig;
