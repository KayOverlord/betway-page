/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.betway.co.za",
        port: "",
        pathname: "/images/Shared/sprite/site/**",
      },
    ],
  },
};

module.exports = nextConfig;
