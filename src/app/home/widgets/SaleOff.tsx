"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SaleOff = () => {
  const [endDate] = useState(() => new Date().getTime() + 10 * 24 * 60 * 60 * 1000); // 10 ngày

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="bg-[#f3f2ee] py-32 mt-24 w-full">
      <div className="w-[1170px] max-w-[85%] m-auto h-full flex flex-col lg:flex-row gap-y-10 justify-between items-center">
        <div className="relative w-[200px] h-[300px] whitespace-nowrap lg:scale-75 xl:scale-100 flex-shrink-0">
          <div className="absolute z-20 w-[600px] h-full bg-white top-0 left-[-480px]"></div>
          <div className="absolute z-50 top-[15%] left-0 flex flex-col gap-5 text-[34px] text-[#b7b7b7] font-[600]">
            <div>Clothings Hot</div>
            <div className="text-[#111]">Shoe Collection</div>
            <div>Accessories</div>
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            src="/assets/product/product-sale.png"
            alt=""
            width={360}
            height={314}
            className="lg:scale-75 xl:scale-100"
          ></Image>
          <div className="absolute flex-col z-20 w-[100px] h-[100px] bg-[#111] text-white rounded-[50%] center top-[-40px] right-[20px] lg:top-[0px] xl:top-[-40px] lg:right-[30px] xl:right-0 lg:scale-85 xl:scale-100">
            <div className="text-[15px]">Sale Of</div>
            <div className="text-[20px] font-bold">$29.99</div>
          </div>
        </div>
        <div className="flex flex-col gap-7 font-[600] tracking-widest lg:scale-75 xl:scale-100">
          <div className="text-[14px] text-[#e53637]">DEAL OF THE WEEK</div>
          <div className="text-[36px] text-[#111] lg:w-[360px] mt-[-20px]">
            Multi-pocket Chest Bag Black
          </div>
          <div className="flex text-[36px] text-[#111] gap-6 md:gap-16 lg:gap-6">
            <div className="flex flex-col items-center gap-4">
              <div>{timeLeft.days}</div>
              <div className="text-[15px]">Days</div>
            </div>
            <div className="text-[26px] mt-2">:</div>
            <div className="flex flex-col items-center gap-4">
              <div>{timeLeft.hours}</div>
              <div className="text-[15px]">Hours</div>
            </div>
            <div className="text-[26px] mt-2">:</div>
            <div className="flex flex-col items-center gap-4">
              <div>{timeLeft.minutes}</div>
              <div className="text-[15px]">Minutes</div>
            </div>
            <div className="text-[26px] mt-2">:</div>
            <div className="flex flex-col items-center gap-4">
              <div>{timeLeft.seconds}</div>
              <div className="text-[15px]">Seconds</div>
            </div>
          </div>
          <div className="w-[167px] h-[48px] bg-black text-white center text-[13px] tracking-[4px] mt-5">
            SHOP NOW
          </div>
        </div>
      </div>
    </div>
  );
};
