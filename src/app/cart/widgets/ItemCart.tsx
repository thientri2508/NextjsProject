"use client";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { CartProduct } from "@/types/CartProduct";
import { productsData } from "@/mockData/productData";
import { useProductModal } from "@/context/ProductModalContext";
import Link from "next/link";
import { getImage } from "@/utils/getImage";
import { useCart } from "@/context/CartProvider";
import { useModal } from "@/context/ConfirmModalContext";

interface ItemCartProps {
  productCart: CartProduct;
}

export const ItemCart: React.FC<ItemCartProps> = ({ productCart }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { openModal } = useProductModal();
  const productInfor = productsData.find((p) => p?.id === productCart?.id);
  const { showModal } = useModal();

  const min = 1;
  const max = 100;

  const [quantity, setQuantity] = useState<string>(
    (productCart.quantity ?? 1).toString()
  );

  // useEffect(() => {
  //   if (productCart.quantity !== undefined) {
  //     setQuantity(productCart.quantity.toString());
  //   }
  // }, [productCart.quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setQuantity(newValue);
      updateQuantity(productCart.id, productCart.size, Number(newValue),productCart.color)
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
      const newValue = Math.min(Number(prev) + 1, max);
      return String(newValue);
    });
    updateQuantity(productCart.id, productCart.size, Math.min(Number(quantity) + 1, max),productCart.color)
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      const newValue = Math.max(Number(prev) - 1, min);
      return String(newValue);
    });
    updateQuantity(productCart.id, productCart.size, Math.min(Number(quantity) - 1, max),productCart.color)
  };

  const handleDeleteItemCart = () => {
    showModal("Are you sure you want to remove all products from your cart?", () => {
      removeFromCart(productCart.id, productCart.size, productCart.color)
    });
  };

  return (
    <tr className="border-b border-gray-200 *:py-5">
      <td>
        <div className="flex flex-col md:flex-row gap-7 items-start md:items-center">
          <Link href={`/product/${productCart.id}`}><Image
            src={getImage(productInfor?.image ?? "")}
            alt=""
            width={90}
            height={90}
            className="cursor-pointer"
          ></Image></Link>
          <div>
            <div className="text-[15px] text-[#111] w-[150px] sm:w-[200px] xl:w-[300px] line-clamp-3 sm:line-clamp-2 overflow-hidden text-ellipsis capitalize">{productInfor?.name.toLowerCase()}</div>
            <div className="text-[18px] font-semibold mt-1">
              ${productInfor?.price}
            </div>
            <div
              className="font-semibold w-fit px-3 mt-2 py-[2px] center gap-1 cursor-pointer rounded-xl bg-slate-300 capitalize"
              onClick={() => productInfor && openModal(productInfor, productCart)}
            >
              <span>{productCart.color}</span>
              <span>/</span>
              <span>{productCart.size}</span>
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
          onClick={handleDeleteItemCart}
        />
      </td>
    </tr>
  );
};
