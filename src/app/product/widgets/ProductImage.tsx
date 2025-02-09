"use client";
import { useState, forwardRef } from "react";
import Image from "next/image";
import { Product } from "@/types/Product";
import { getImage } from "@/utils/getImage";
import { motion } from "framer-motion";

interface ProductImageProps {
  product: Product;
}

const ProductImage = forwardRef<HTMLDivElement, ProductImageProps>(
  ({ product }, ref) => {
    const [mainImage, setMainImage] = useState(product?.image);

    return (
      <div className="w-full flex justify-between">
        {/* Danh sách ảnh nhỏ */}
        <div className="w-[17.5%] h-[300px] flex flex-col gap-y-4">
          {product?.sub_image?.map((src, index) => (
            <Image
              key={index}
              src={getImage(src)}
              alt={`sub-image-${index}`}
              width={100}
              height={120}
              className="cursor-pointer w-full transition-shadow duration-200 hover:shadow-xl"
              onClick={() => setMainImage(src)}
            />
          ))}
        </div>

        {/* Ảnh chính */}
        <motion.div
          ref={ref}
          className="w-[79%] flex justify-center items-center"
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}  // Hiệu ứng thu nhỏ khi click
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={getImage(mainImage)}
            alt="main-image"
            width={453}
            height={533}
            className="w-full cursor-pointer"
          />
        </motion.div>
      </div>
    );
  }
);

// Thêm displayName cho component
ProductImage.displayName = "ProductImage";

export default ProductImage;