/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // SITE_URL: "http://localhost:3000/api/topics",
    SITE_URL: process.env.SITE_URI,
  },
};

export default nextConfig;
