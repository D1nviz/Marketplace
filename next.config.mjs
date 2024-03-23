/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["railway.app"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "https://marketplace-production-9ae6.up.railway.app/",
      },
    ],
  },
};

export default nextConfig;
