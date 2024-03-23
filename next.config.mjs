/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "marketplace-production-9ae6.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
