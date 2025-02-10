import { getImage } from "@/utils/getImage";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";

export const Footer = () => {
  return (
    <div className="w-full bg-[#111] mt-20">
      <div className="max-w-[320px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] gap-y-10 m-auto flex flex-wrap justify-between text-[15px] text-[#b7b7b7] py-[70px]">
        <div className="flex flex-col gap-y-4 w-[265px]">
          <Image
            src={getImage("/assets/logo/footer-logo.png")}
            alt=""
            width={196}
            height={23}
            priority
          ></Image>
          <div className="mt-3">
            The customer is at the heart of our unique business model, which
            includes design.
          </div>
          <Image
            src={getImage("/assets/payment/payment.png")}
            alt=""
            width={218}
            height={23}
            priority
            className="mt-5"
          ></Image>
        </div>

        <div className="flex flex-col gap-y-4 *:cursor-pointer">
          <div className="text-white tracking-[2px] font-semibold">
            SHOPPING
          </div>
          <div className="mt-3">Clothing Store</div>
          <div>Trending Shoes</div>
          <div>Accessories</div>
          <div>Sale</div>
        </div>

        <div className="flex flex-col gap-y-4 *:cursor-pointer">
          <div className="text-white tracking-[2px] font-semibold">
            SHOPPING
          </div>
          <div className="mt-3">Contact Us</div>
          <div>Payment Methods</div>
          <div>Delivary</div>
          <div>Return & Exchanges</div>
        </div>

        <div className="flex flex-col gap-y-4 w-[265px]">
          <div className="text-white tracking-[2px] font-semibold">
            NEWLETTER
          </div>
          <div className="mt-3">
            Be the first to know about new arrivals, look books, sales & promos!
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="outline-none w-full mt-1 py-3 pl-2 pr-11 bg-[#111] text-white border-b-2"
            />
            <TfiEmail
              size={18}
              className="absolute z-20 top-[18px] right-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] m-auto center py-5 text-[15px] text-[#b7b7b7]" style={{borderTop: "1px solid rgba(255, 255, 255, 0.1)"}}>
        Copyright © 20252020 All rights reserved | This template is made with by
        Tri Nguyen
      </div>
    </div>
  );
};
