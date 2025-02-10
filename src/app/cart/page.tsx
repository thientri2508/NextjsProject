"use client";
import Breadcrumb from "../shop/widgets/Breadcrumb";
import { ItemCart } from "./widgets/ItemCart";
import { CartProduct } from "@/types/CartProduct";
import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";
import { EmptyCart } from "./widgets/EmptyCart";
import { CartSkeleton } from "./widgets/CartSkeleton";
import Link from "next/link";
import { useModal } from "@/context/ConfirmModalContext";

export default function Page() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { showModal } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDeleteCart = () => {
    showModal("Are you sure you want to delete all products in the shopping cart?", () => {
      clearCart()
    });
  };

  return (
    <div className="w-full">
      <Breadcrumb label="Shopping Cart" />
      {isMounted ? (
        cart.length > 0 ? (
          <div className="max-w-[800px] lg:max-w-[950px] xl:max-w-[1170px] m-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[40px] md:mt-[70px]">
            <div className="w-[90%] lg:w-[70%]">
              <table className="w-full text-left text-gray-700">
                <thead>
                  <tr className="border-b border-gray-200 uppercase font-semibold *:py-4">
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((productCart: CartProduct) => (
                    <ItemCart productCart={productCart} key={`${productCart.id}-${productCart.size}-${productCart.color || "default"}`} />
                  ))}
                </tbody>
              </table>

              <div className="w-full flex justify-between *:cursor-pointer mt-7 gap-10">
                <Link href='/shop' className="px-4 md:px-8 py-2 md:py-3 border-[1px] border-gray-300 text-center font-medium tracking-[2px] text-[12px] md:text-[14px]">
                  CONTINUE SHOPPING
                </Link>
                <div onClick={handleDeleteCart} className="px-4 md:px-8 py-2 md:py-3 text-white text-center bg-black font-medium tracking-[2px] text-[12px] md:text-[14px]">
                  DELETE CART
                </div>
              </div>
            </div>
            <div className="w-[90%] lg:w-[28%]">
              <div className="mt-14 lg:mt-4 font-bold text-center text-[22px] lg:text-[18px]">
                DISCOUNT CODES
              </div>
              <div className="flex justify-between mt-8">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-[68%] outline-none text-[14px] px-4 py-3 border-gray-300 border-[1px]"
                />
                <div className="w-[32%] bg-black text-white tracking-[1px] center cursor-pointer font-semibold">
                  APPLY
                </div>
              </div>
              <div className="bg-[#f3f2ee] px-6 py-4 flex flex-col gap-y-5 mt-14">
                <div className="font-semibold">CART TOTAL</div>
                <div className="flex justify-between">
                  <div>Subtotal</div>
                  <div className="text-[#e53637] font-semibold">$ {getTotalPrice()}</div>
                </div>
                <div className="flex justify-between">
                  <div>Total</div>
                  <div className="text-[#e53637] font-semibold">$ {getTotalPrice()}</div>
                </div>
                <Link href="/checkout" className="bg-black text-white tracking-[1px] center font-semibold text-center py-3 cursor-pointer">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[800px] lg:max-w-[950px] xl:max-w-[1170px] m-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[40px] md:mt-[70px]">
            <EmptyCart />
          </div>
        )
      ) : <CartSkeleton />}
    </div>
  );
}
