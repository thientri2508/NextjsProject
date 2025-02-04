export interface Product {
    id: number;
    name: string;
    image: string;
    category?: string;
    sub_image?: string[];
    price: number;
    rating: number;
    color?: string;
    quantity?: number;
    sizes?: string[];
    colors?: string[];
}