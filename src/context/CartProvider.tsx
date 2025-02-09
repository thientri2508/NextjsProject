"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartProduct } from "@/types/CartProduct";
import { STORAGE_KEYS } from "@/constants/storageKeys";

// Định nghĩa kiểu dữ liệu cho context
interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: number, size: string, color?: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number, color?: string) => void;
  updateItemAttributes : (productId: number, oldSize: string, newSize: string, oldColor?: string, newColor?: string) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
}

// Khởi tạo context
const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: CartProduct) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === product.size && item.color === product.color
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === product.size && item.color === product.color
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId: number, size: string, color?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (productId: number, size: string, quantity: number, color?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const updateItemAttributes = (
    productId: number,
    oldSize: string,
    newSize: string,
    oldColor?: string,
    newColor?: string
  ) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId && item.size === oldSize && item.color === oldColor) {
          return { ...item, size: newSize, color: newColor };
        }
        return item;
      });
    });
  };
  

  const getTotalPrice = () => {
    return parseFloat(
      cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, clearCart, updateItemAttributes }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook để sử dụng context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};