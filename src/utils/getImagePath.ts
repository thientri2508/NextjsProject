import getConfig from "next/config";

export function getImagePath(imagePath: string) {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig?.basePath || "";
  return `${basePath}${imagePath}`;
}