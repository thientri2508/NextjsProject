"use client";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { CartProduct } from "@/types/CartProduct";
import { productsData } from "@/mockData/productData";
import { useProductModal } from "@/context/ProductModalContext";

interface ItemCartProps {
  product: CartProduct;
}

export const ItemCart: React.FC<ItemCartProps> = ({ product }) => {
  const { openModal } = useProductModal();
  const productInfor = productsData.find((p) => p?.id === product?.id);

  const min = 1;
  const max = 100;
  const step = 1;

  const [quantity, setQuantity] = useState<string>(
    (product.quantity ?? 1).toString()
  );

  useEffect(() => {
    if (product.quantity !== undefined) {
      setQuantity(product.quantity.toString());
    }
  }, [product.quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setQuantity(newValue);
    }
  };

  const handleBlur = () => {
    const numericValue = Number(quantity);
    if (numericValue < min) setQuantity(String(min));
    else if (numericValue > max) setQuantity(String(max));
    else if (quantity === "") setQuantity(String(min));
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

  return (
    <tr className="border-b border-gray-200 *:py-5">
      <td>
        <div className="flex flex-col md:flex-row gap-7 items-start md:items-center">
          <Image
            src={productInfor?.image || "/assets/default.png"}
            alt=""
            width={90}
            height={90}
          ></Image>
          <div>
            <div className="text-[15px] text-[#111]">{productInfor?.name}</div>
            <div className="text-[18px] font-semibold">
              ${productInfor?.price}
            </div>
            <div
              className="font-semibold w-fit px-3 mt-2 py-[2px] center gap-1 cursor-pointer rounded-xl bg-slate-300"
              onClick={() => productInfor && openModal(productInfor)}
            >
              <span>{product.color}</span>
              <span>/</span>
              <span>{product.size}</span>
              <span className="ml-1 mt-[2px]">
                <FaAngleDown />
              </span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center">
          <button
            className="p-1 text-gray-600 hover:text-black"
            onClick={decreaseQuantity}
          >
            <MdChevronLeft size={20} />
          </button>

          <input
            type="text"
            className="w-[40px] text-center outline-none p-1 font-bold text-[18px]"
            value={quantity}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button
            className="p-1 text-gray-600 hover:text-black"
            onClick={increaseQuantity}
          >
            <MdChevronRight size={20} />
          </button>
        </div>
      </td>
      <td className="text-[18px] font-semibold">
        {productInfor?.price !== undefined
          ? `$${(productInfor.price * Number(quantity)).toFixed(2)}`
          : "N/A"}
      </td>

      <td>
        <GoTrash
          size={20}
          className="cursor-pointer hover:text-red-500 transition"
        />
      </td>
    </tr>
  );
};
