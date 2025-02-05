"use client"
import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/Product";
import { getImage } from "@/utils/getImage";

export const ProductImage = ({product} : {product: Product}) => {
  // State lưu hình ảnh chính
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
      <div className="w-[79%] flex justify-center items-center">
        <Image src={getImage(mainImage)} alt="main-image" width={453} height={533} className="w-full" />
      </div>
    </div>
  );
};
