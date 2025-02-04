import { productsData } from "@/mockData/productData";

export const getProductById = (id: string) => {
    const product = productsData.find((p) => p.id.toString() === id);
    return product
}