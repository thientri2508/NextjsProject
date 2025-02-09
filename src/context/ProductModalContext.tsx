"use client";
import { Product } from "@/types/Product";
import { CartProduct } from "@/types/CartProduct"; // Import kiểu dữ liệu CartProduct
import { createContext, useContext, useState, ReactNode } from "react";

interface ProductModalContextType {
  product: Product | null;
  itemCart: CartProduct | null; // Thêm state mới để lưu thông tin sản phẩm trong giỏ hàng
  isOpen: boolean;
  openModal: (product: Product, itemCart?: CartProduct) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ProductModalContextType | undefined>(undefined);

export const ProductModalProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [itemCart, setItemCart] = useState<CartProduct | null>(null); // State mới
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (product: Product, itemCart?: CartProduct) => {
    setProduct(product);
    setItemCart(itemCart ?? null); // Nếu không có itemCart thì đặt null
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProduct(null);
    setItemCart(null);
  };

  return (
    <ProductModalContext.Provider value={{ product, itemCart, isOpen, openModal, closeModal }}>
      {children}
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error("useProductModal must be used within a ProductModalProvider");
  }
  return context;
};
