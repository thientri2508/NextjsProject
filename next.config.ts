import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  //basePath: isProd ? "/NextjsProject" : "",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: isProd ? "/NextjsProject/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
