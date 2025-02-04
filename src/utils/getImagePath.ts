import getConfig from "next/config";

export function getImagePath(imagePath: string) {
    const config = getConfig();
    const basePath = config?.publicRuntimeConfig?.basePath || "";
  
    return `${basePath}${imagePath}`;
  }