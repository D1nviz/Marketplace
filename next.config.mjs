/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["railway.app"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "railway.app",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
