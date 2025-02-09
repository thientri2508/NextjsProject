"use client";

import { Product } from "@/types/Product";
import { ProductInfor } from "./ProductInfor";
import { useRef, useState } from "react";
import ProductImage from "./ProductImage";

const Container = ({ product }: { product: Product }) => {
  const productImageRef = useRef<HTMLDivElement>(null);
  const [isAdding, setIsAdding] = useState(false); // Điều khiển hiệu ứng

  const handleAddToCart = () => {
    // Nếu đang trong quá trình thêm sản phẩm, không cho phép nhấn lại
    if (isAdding) return;

    setIsAdding(true); // Bật hiệu ứng

    if (productImageRef.current) {
      const imgRect = productImageRef.current.getBoundingClientRect();
      const cartIcon = document
        .getElementById("cart-icon")
        ?.getBoundingClientRect();

      if (cartIcon) {
        const cloneImage = productImageRef.current.cloneNode(
          true
        ) as HTMLElement;
        cloneImage.style.position = "fixed";
        cloneImage.style.top = `${imgRect.top}px`;
        cloneImage.style.left = `${imgRect.left}px`;
        cloneImage.style.width = `${imgRect.width}px`;
        cloneImage.style.height = `${imgRect.height}px`;
        cloneImage.style.transition = "all 0.8s ease-in-out";
        cloneImage.style.zIndex = "1000";

        document.body.appendChild(cloneImage);

        setTimeout(() => {
          cloneImage.style.top = `${cartIcon.top}px`;
          cloneImage.style.left = `${cartIcon.left}px`;
          cloneImage.style.width = "50px";
          cloneImage.style.height = "50px";
          cloneImage.style.opacity = "0.5";
        }, 50);

        setTimeout(() => {
          document.body.removeChild(cloneImage);
          setIsAdding(false); // Kết thúc hiệu ứng và cho phép nhấn lại
        }, 800);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-7 gap-y-14 px-5 xl:px-0">
      <div className="w-[80%] lg:w-[48%]">
        <ProductImage product={product} ref={productImageRef} />
      </div>
      <div className="w-[80%] lg:w-[48%]">
        <ProductInfor product={product} onAddToCart={handleAddToCart} isAdding={isAdding} />
      </div>
    </div>
  );
};

export default Container;
