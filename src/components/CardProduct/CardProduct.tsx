"use client";
import Image from "next/image";
import StarRating from "../StartRating/StarRating";
import { Product } from "@/types/Product";
import Link from "next/link";
import { BsBagPlus } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useProductModal } from "@/context/ProductModalContext";
import { getImage } from "@/utils/getImage";
import { useState } from "react";

interface CardProductProps {
  product: Product;
  widthConfig: "carousel" | "home" | "productlist";
}

export const CardProduct: React.FC<CardProductProps> = ({
  product,
  widthConfig,
}) => {
  const images = product.sub_image?.length
    ? product.sub_image
    : ["/default-image.jpg"];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const { openModal } = useProductModal();
  const widthClasses =
    widthConfig === "carousel"
      ? "w-full"
      : widthConfig === "home"
      ? "w-[calc(50%-12px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%-12px)]"
      : widthConfig === "productlist"
      ? "w-[calc(50%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
      : "";

  return (
    <div
      className={`${widthClasses} flex flex-col relative cursor-pointer group overflow-hidden`}
    >
      <div
        className="w-[36px] h-[36px] center bg-white shadow-custom-shadow hover:rounded-2xl absolute z-20 top-5 right-[-36px] group-hover:right-5 transition-all duration-300"
        onClick={() => openModal(product)}
      >
        <BsBagPlus size={18} />
      </div>
      <div className="w-[36px] h-[36px] center bg-white shadow-custom-shadow hover:rounded-2xl absolute z-20 top-[66px] right-[-36px] group-hover:right-5 transition-all duration-300">
        <IoMdHeartEmpty size={20} />
      </div>
      <Link href={`/product/${product.id}`}>
        <div
          onMouseEnter={() => setCurrentImage(images[1] || images[0])} // Kiểm tra nếu có ảnh thứ 2
          onMouseLeave={() => setCurrentImage(images[0])}
        >
          <Image
            src={getImage(currentImage)}
            alt=""
            width={270}
            height={270}
            className={`${
              widthConfig == "carousel" ? "" : "w-full"
            } aspect-square object-cover`}
          ></Image>
        </div>
        <div className="mt-[18px] mb-[8px] line-clamp-2 overflow-hidden text-ellipsis capitalize">
          {product.name.toLowerCase()}
        </div>
      </Link>
      <div className="mt-auto flex justify-between items-center">
        <StarRating rating={product?.rating} />
        <ul className="flex gap-1">
          {product?.colors?.map((color, index) => (
            <li key={index} className='rounded-full w-4 h-4 mt-[2px] border-2 border-gray-200' style={{background: `${color}`}}></li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3 text-[20px] mt-[8px]">
        <div className="font-semibold">${product?.price}</div>
        <div className="text-[14px] text-[#b7b7b7] pt-1 line-through">
          $300.0
        </div>
      </div>
    </div>
  );
};
