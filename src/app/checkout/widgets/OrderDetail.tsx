"use client";
import { useCart } from "@/context/CartProvider";
import { CartProduct } from "@/types/CartProduct";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const OrderDetail = () => {
  const { cart, getTotalPrice } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return (
      <div className="bg-[#f3f2ee] px-5 py-4">
        <div className="font-bold text-[20px] border-b-2 border-gray-300 pb-2">
          YOUR ORDER
        </div>

        <div className="flex flex-col gap-y-5 mt-5 pb-5 border-b-[1px] border-gray-300 overflow-y-auto max-h-[450px]">
          {cart.map((productCart: CartProduct) => (
            <div
              key={`${productCart.id}-${productCart.size}-${
                productCart.color || "default"
              }`}
            >
              <div className="flex justify-between">
                <div className="max-w-[69%] font-medium text-[18px] line-clamp-2 overflow-hidden text-ellipsis">
                  {productCart.name}
                </div>
                <div className="max-w-[29%] font-semibold">
                  $ {productCart.price}
                </div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="text-[14px] capitalize">
                  {`Size: ${productCart.size} / Color: ${productCart.color}`}
                </div>
                <div className="max-w-[39%] text-[14px]">
                  x {productCart.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-y-[2px] border-b-[1px] border-gray-300 pb-5">
          <div className="flex justify-between text-[18px]">
            <div>Subtotal</div>
            <div className="font-semibold">$ {getTotalPrice()}</div>
          </div>
          <div className="flex justify-between text-[18px]">
            <div>Decrease</div>
            <div className="font-semibold">$ 0</div>
          </div>
          <div className="flex justify-between text-[18px]">
            <div>Shipping Fee</div>
            <div className="font-semibold">$ 0</div>
          </div>
        </div>

        <div className="flex justify-between text-[24px] font-semibold mt-4">
          <div>Total</div>
          <div>$ {getTotalPrice()}</div>
        </div>

        <div className="font-medium bg-black text-white center py-3 text-[18px] tracking-widest cursor-pointer mt-8 hover:opacity-75">
          PLACE ORDER
        </div>
      </div>
    );
  } else {
    return <Skeleton height={500} width="100%" />;
  }
};
