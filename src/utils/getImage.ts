const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
export const getImage = (imagePath: string) => {
    return `${basePath}${imagePath}`;
};