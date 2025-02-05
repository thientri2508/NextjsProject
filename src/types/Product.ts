export interface Product {
    id: number;
    name: string;
    image: string;
    category?: string;
    id_category?: number;
    sub_image?: string[];
    price: number;
    rating: number;
    color?: string;
    quantity?: number;
    sizes?: string[];
    colors?: string[];
}

export interface ProductResponse {
    total: number;
    currentPage: number;
    list: Product[];
}