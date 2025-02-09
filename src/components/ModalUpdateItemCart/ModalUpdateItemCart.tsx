"use client";
import { useCart } from "@/context/CartProvider";
import { useProductModal } from "@/context/ProductModalContext";
import { getImage } from "@/utils/getImage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

export const ModalUpdateItemCart = () => {
  const { updateItemAttributes } = useCart();
  const [mainImage, setMainImage] = useState<string>("");
  const { product, itemCart, isOpen, closeModal } = useProductModal();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    itemCart?.size
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    itemCart?.color
  );

  const handleUpdateItemCart = () => {
    updateItemAttributes(
      itemCart?.id || 0, 
      itemCart?.size || "",
      selectedSize || "", 
      itemCart?.color || "", 
      selectedColor || ""
    );
    closeModal();
  };

  useEffect(() => {
    if (itemCart) {
      setSelectedSize(itemCart.size);
      setSelectedColor(itemCart.color);
    }
  }, [itemCart]);

  useEffect(() => {
    if (product?.image) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[100%] md:w-[90%] lg:w-[75%] xl:w-[58%] relative">
        <div className="max-w-[880px] m-auto max-h-[100dvh]">
          <button className="absolute top-4 right-4" onClick={closeModal}>
            <CgClose size={30} />
          </button>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-y-4 mt-8 items-center sm:items-start">
            <div className="w-[70%] sm:w-[48%] md:w-[54%] flex justify-between">
              <div className="w-[15%] flex flex-col gap-y-4 max-h-[383px]">
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
              <div className="w-[82%] center">
                <Image
                  src={getImage(mainImage) || "/default-ProducImage.jpg"}
                  alt="main-image"
                  width={453}
                  height={533}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[70%] sm:w-[48%] md:w-[43%]">
              <div className="text-[22px] font-semibold text-[#111] line-clamp-2 overflow-hidden text-ellipsis capitalize">
                {product?.name.toLowerCase()}
              </div>
              <div className="flex gap-3 items-end mt-1 sm:mt-2">
                <div className="text-[26px] font-semibold">
                  ${product?.price}
                </div>
                <div className="text-[#b7b7b7] pb-1 line-through">$300.0</div>
              </div>
              <div className="flex flex-col gap-2 mt-2 sm:mt-4 font-medium">
                <div>Size:</div>
                <ul className="flex gap-3 flex-wrap">
                  {product?.sizes?.map((size, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`${
                        size == selectedSize
                          ? "text-white bg-black"
                          : "border-[1px] border-[#e5e5e5] text-[#111] hover:bg-black hover:text-white"
                      } cursor-pointer py-[5px] text-[14px] transition-all duration-300 px-[10px] font-bold`}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 mt-3 font-medium">
                <div>Color:</div>
                <ul className="flex gap-3 flex-wrap items-center">
                  {product?.colors?.map((color, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`${
                        color == selectedColor
                          ? "border-[3px] p-1 border-black rounded-full"
                          : ""
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full cursor-pointer hover:opacity-50"
                        style={{
                          backgroundColor: color,
                          border: "2px solid #e5e5e5",
                          boxShadow: "0 0 0 4px rgba(229, 229, 229, 0.5)",
                        }}
                      ></div>
                    </li>
                  ))}
                </ul>
              </div>

              <div onClick={handleUpdateItemCart} className="bg-black mt-8 text-white py-[13px] font-semibold center tracking-widest cursor-pointer hover:opacity-75">
                UPDATE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
