import getConfig from "next/config";

export function getImagePath(imagePath: string) {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig?.basePath || ""; // Lấy basePath từ next.config.js
  return `${basePath}${imagePath}`;
}
