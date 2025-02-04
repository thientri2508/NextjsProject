import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/NextjsProject" : "",  // 🛠 Thay bằng tên repo
  assetPrefix: isProd ? "/NextjsProject/" : "", // Đảm bảo đường dẫn asset đúng
  publicRuntimeConfig: {
    basePath: isProd ? "/NextjsProject" : "",
  },
  images: {
    unoptimized: true, // GitHub Pages không hỗ trợ tối ưu ảnh Next.js
  },
};

export default nextConfig;
