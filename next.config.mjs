/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "www.themealdb.com" }],
  },
};

export default nextConfig;
