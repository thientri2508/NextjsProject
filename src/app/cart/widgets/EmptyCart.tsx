import { getImage } from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Image
        src={getImage("/assets/icon/empty-cart.png")}
        alt=""
        width={200}
        height={200}
      ></Image>
      <h2 className="font-semibold text-[26px]">
        You do not have any products in your cart...
      </h2>
      <Link href='/shop' className="mt-14 cursor-pointer px-8 py-3 text-white bg-black hover:bg-white border-[3px] hover:text-black transition-all duration-300 border-black font-medium tracking-[2px] text-[14px]">
        CONTINUE SHOPPING
      </Link>
    </div>
  );
};
