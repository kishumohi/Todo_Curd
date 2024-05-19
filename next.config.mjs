/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_URL: "http://localhost:3000/api/topics",
    MONGODB_URI:
      "mongodb+srv://admin:admin@cluster0.lrb33ja.mongodb.net/crud_db",
  },
};

export default nextConfig;
