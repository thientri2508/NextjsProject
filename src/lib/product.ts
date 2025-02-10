import { product_page_size } from "@/constants/constants.pageSize";
import { productsData } from "@/mockData/productData";
import { ProductResponse } from "@/types/Product";
import { sanitizeInput } from "@/utils/validationInput";

export const getProductById = (id: string) => {
    const product = productsData.find((p) => p.id.toString() === id);
    return product
}

export const getProducts = (page: number): Promise<ProductResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const pageSize = product_page_size;
        const total = productsData.length;
        const list = productsData.slice((page - 1) * pageSize, page * pageSize);
  
        resolve({
          total,
          currentPage: page,
          list,
        });
      }, 500);
    });
};

export const getProductsByFilter = ({ category, price, color, page }: { category: string, price: string, color: string, page: number }): Promise<ProductResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pageSize = product_page_size;

      // Nếu có category, lọc theo category, nếu không thì lấy tất cả sản phẩm
      let filteredProducts = category
        ? productsData.filter(product => product.id_category.toString() === category)
        : productsData;

      // Lọc theo giá
      if (price) {
        const [minPrice, maxPrice] = price.split("-").map(str => parseFloat(str));

        // Nếu maxPrice không có, chỉ lọc sản phẩm có giá lớn hơn minPrice
        if (maxPrice) {
          filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
        } else {
          // Nếu minPrice có giá trị, lọc sản phẩm có giá lớn hơn minPrice
          filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
        }
      }

      // Lọc theo màu sắc (color)
      if (color) {
        filteredProducts = filteredProducts.filter(product => product.colors.includes(color));
      }

      const total = filteredProducts.length;
      const list = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

      resolve({
        total,
        currentPage: page,
        list,
      });
    }, 500);
  });
};

export const getProductbyName = (search: string) => {
  const sanitizedSearch = sanitizeInput(search.toLowerCase());
  return productsData.filter(product => 
    product.name.toLowerCase().includes(sanitizedSearch)
  );
};
