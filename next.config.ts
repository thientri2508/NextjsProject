import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/NextjsProject" : "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // Bắt buộc khi deploy lên GitHub Pages
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath, // Cập nhật biến môi trường
  },
};

export default nextConfig;
