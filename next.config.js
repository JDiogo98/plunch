/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: { styledComponents: true },
  images: {
    domains: ["www.themealdb.com"],
  },
};

module.exports = nextConfig;