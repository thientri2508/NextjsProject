"use client"
import { useProductModal } from "@/context/ProductModalContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const ModalAddToCart = () => {
  const { product, isOpen, closeModal } = useProductModal();

  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("1");
  const min = 1;
  const max = 100;
  const step = 1;

  useEffect(() => {
    if (product?.image) {
      setMainImage(product.image);
    }
  }, [product]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setQuantity(newValue); // Cho phép nhập số nhưng chưa cập nhật state ngay
    }
  };

  const handleBlur = () => {
    const numericValue = Number(quantity);
    if (numericValue < min) setQuantity(String(min));
    else if (numericValue > max) setQuantity(String(max));
    else if (quantity === "") setQuantity(String(min)); // Tránh để ô trống
  };

  const increaseQuantity = () => {
    setQuantity((prev) => {
      const newValue = Math.min(Number(prev) + step, max);
      return String(newValue);
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      const newValue = Math.max(Number(prev) - step, min);
      return String(newValue);
    });
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[100%] md:w-[90%] lg:w-[75%] xl:w-[58%] relative">
        <div className="max-w-[880px] m-auto max-h-[100dvh]">
          <button className="absolute top-4 right-4" onClick={closeModal}>
            <CgClose size={30} />
          </button>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-y-4 mt-8 items-center sm:items-start">
            <div className="w-[70%] sm:w-[48%] md:w-[56%] flex justify-between">
              <div className="w-[15%] flex flex-col gap-y-3 max-h-[383px]">
                {product?.sub_image?.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`sub-image-${index}`}
                    width={100}
                    height={120}
                    className="cursor-pointer w-full hover:opacity-60 transition"
                    onClick={() => setMainImage(src)}
                  />
                ))}
              </div>
              <div className="w-[82%] center">
                <Image
                  src={mainImage || "/default-ProducImage.jpg"}
                  alt="main-image"
                  width={453}
                  height={533}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[70%] sm:w-[48%] md:w-[41%]">
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
                      className="border-[1px] cursor-pointer border-[#e5e5e5] py-[5px] text-[#111] hover:text-white text-[14px] hover:bg-black transition-all duration-300 px-[10px] font-bold"
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 mt-3 font-medium">
                <div>Color:</div>
                <ul className="flex gap-3 flex-wrap">
                  {product?.colors?.map((color, index) => (
                    <li
                      key={index}
                      className="w-6 h-6 rounded-full cursor-pointer hover:opacity-50"
                      style={{
                        backgroundColor: color,
                        border: "1px solid #e5e5e5",
                        boxShadow: "0 0 0 4px rgba(229, 229, 229, 0.5)",
                      }}
                    ></li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-row mt-5 sm:mt-7 gap-4 items-center">
                <div className="relative flex items-center border-[1px] border-[#e5e5e5] w-[40%]">
                  {/* Ô nhập số lượng */}
                  <input
                    type="text"
                    className="w-full text-center outline-none p-2 font-bold"
                    value={quantity}
                    onChange={handleChange}
                    onBlur={handleBlur} // Kiểm tra khi rời khỏi ô nhập
                  />

                  {/* Nút tăng/giảm số lượng */}
                  <div className="absolute right-1 flex flex-col justify-center">
                    <button
                      className="p-1 text-gray-600 hover:text-black"
                      onClick={increaseQuantity}
                    >
                      <FaChevronUp />
                    </button>
                    <button
                      className="p-1 text-gray-600 hover:text-black"
                      onClick={decreaseQuantity}
                    >
                      <FaChevronDown />
                    </button>
                  </div>
                </div>

                <div className="bg-black w-1/2 text-white text-[13px] py-[13px] font-semibold center tracking-widest cursor-pointer hover:opacity-75">
                  ADD TO CART
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
