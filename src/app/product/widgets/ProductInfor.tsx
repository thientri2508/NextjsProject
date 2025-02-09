"use client";
import StarRating from "@/components/StartRating/StarRating";
import { useCart } from "@/context/CartProvider";
import { showToast } from "@/hooks/useToast";
import { Product } from "@/types/Product";
import { getImage } from "@/utils/getImage";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaRegHeart } from "react-icons/fa";
import { RxDash } from "react-icons/rx";
import { ToastContainer } from "react-toastify";

interface ProductInforProps {
  product: Product;
  onAddToCart: () => void;
  isAdding: boolean;
}

export const ProductInfor: React.FC<ProductInforProps> = ({
  product,
  onAddToCart,
  isAdding,
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<string>("1");
  const [cartItem, setCartItem] = useState({
    id: product.id,
    name: product.name,
    size: product.sizes?.[0] || "",
    quantity: Number(quantity),
    color: product.colors?.[0] || "",
    price: product.price,
  });
  const min = 1;
  const max = 100;
  const step = 1;

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

  const handleAddToCart1 = () => {
    onAddToCart();
    if (!isAdding) {
      showToast("Successfully added to cart!", "success");
      addToCart(cartItem);
    }
  };

  const handleAddToCart2 = () => {
    showToast("Successfully added to cart!", "success");
    addToCart(cartItem);
  };

  return (
    <div className="w-full flex flex-col gap-2 items-center lg:items-start">
      <ToastContainer />
      <div className="flex w-full justify-between">
        <div>
          SKU: <b>3812912</b>
        </div>
        <div>
          Categories: <b>{product?.category}</b>
        </div>
      </div>
      <div className="text-[24px] font-semibold text-[#111] capitalize">
        {product?.name.toLowerCase()}
      </div>
      <div className="flex gap-1 items-center">
        <StarRating rating={product?.rating} />
        <RxDash />
        <div>{product?.rating} Reviews</div>
      </div>
      <div className="flex gap-4 items-end mt-2">
        <div className="text-[30px] font-semibold">${product?.price}</div>
        <div className="text-[20px] text-[#b7b7b7] pb-1 line-through">
          $300.0
        </div>
      </div>
      <div className="text-[15px] text-[#3d3d3d] mt-2 text-center md:text-start">
        Coat with quilted lining and an adjustable hood. Featuring long sleeves
        with adjustable cuff tabs, adjustable asymmetric hem with elastic side
        tabs and a front zip fastening with placket.
      </div>
      <div className="flex gap-4 items-center mt-6">
        <div>Size:</div>
        <ul className="flex gap-3 flex-wrap">
          {product?.sizes?.map((size, index) => (
            <li
              key={index}
              onClick={() => setCartItem((prev) => ({ ...prev, size }))}
              className={`${
                size == cartItem.size
                  ? "text-white bg-black"
                  : "border-[1px] border-[#e5e5e5] text-[#111] hover:text-white hover:bg-black transition-all duration-300"
              } cursor-pointer py-[6px] px-[14px] font-bold`}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 items-center mt-6">
        <div>Color:</div>
        <ul className="flex gap-3 flex-wrap items-center">
          {product?.colors?.map((color, index) => (
            <li
              key={index}
              onClick={() => setCartItem((prev) => ({ ...prev, color }))}
              className={`${
                color == cartItem.color
                  ? "border-[3px] p-1 border-black rounded-full"
                  : ""
              }`}
            >
              <div
                className="w-8 h-8 rounded-full cursor-pointer hover:opacity-50"
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

      <div className="flex flex-col md:flex-row mt-7 gap-8 items-center">
        <div className="relative flex items-center border-[1px] border-[#e5e5e5] w-full md:w-32">
          {/* Ô nhập số lượng */}
          <input
            type="text"
            className="w-full text-center outline-none p-2 font-bold text-[18px]"
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

        <div className="flex gap-[10px] select-none">
          <div
            onClick={handleAddToCart1}
            className={`${
              isAdding ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
            } bg-black text-white hidden lg:flex justify-center items-center text-[13px] py-[13px] px-8 font-semibold tracking-[2px] md:tracking-[4px] hover:opacity-75`}
          >
            ADD TO CART
          </div>
          <div
            onClick={handleAddToCart2}
            className={`${
              isAdding ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
            } bg-black text-white flex lg:hidden justify-center items-center text-[13px] py-[13px] px-8 font-semibold tracking-[2px] md:tracking-[4px] hover:opacity-75`}
          >
            ADD TO CART
          </div>
          <div className="bg-black text-white font-semibold px-6 center cursor-pointer hover:opacity-75">
            <FaRegHeart color="white" size={20} />
          </div>
        </div>
      </div>
      <div className="text-[20px] font-semibold mt-8 center w-full">
        Guaranteed Safe Checkout
      </div>
      <div className="center mt-3 w-full">
        <Image
          src={getImage("/assets/payment/details-payment.png")}
          alt=""
          width={476}
          height={26}
        ></Image>
      </div>
    </div>
  );
};
