"use client";
import { useState, useEffect } from "react";
import { getImage } from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";  // Import thư viện framer-motion

const bannerImages = [
  "/assets/banner/hero-1.jpg",
  "/assets/banner/hero-2.jpg",
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Đổi ảnh sau mỗi 4 giây và thêm hiệu ứng fade
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        setIsFading(false);
      }, 1000); // Thời gian fade là 1 giây
    }, 5000); // Chuyển ảnh mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[900px] overflow-hidden">
      {/* Ảnh nền hiện tại */}
      <motion.div
        key={currentIndex}
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFading ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={getImage(bannerImages[currentIndex])}
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Ảnh tiếp theo */}
      <motion.div
        key={(currentIndex + 1) % bannerImages.length}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFading ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={getImage(bannerImages[(currentIndex + 1) % bannerImages.length])}
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Nội dung trên ảnh */}
      <div className="absolute inset-0 flex flex-col justify-center pt-[230px]">
        <div className="w-[1170px] max-w-[85%] m-auto">
          <div className="text-[#e53637] font-semibold tracking-widest">SUMMER COLLECTION</div>
          <div className="text-[48px] w-[400px] lg:w-[500px] font-bold my-4 leading-tight">
            Fall - Winter Collections 2024
          </div>
          <p className="mt-10 w-[400px] lg:w-[500px]">
            A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
          </p>
          <Link href='/shop'>
            <button className="mt-8 w-[230px] h-[52px] bg-black text-white tracking-[4px]">SHOP NOW</button>
          </Link>

          {/* Icon mạng xã hội */}
          <ul className="flex mt-[270px] lg:mt-[285px] gap-10 items-center *:cursor-pointer">
            <li><Image src={getImage("/assets/icon/icon-fb.png")} alt="Facebook" width={24} height={24} /></li>
            <li><Image src={getImage("/assets/icon/icon-twitter.png")} alt="Twitter" width={24} height={24} /></li>
            <li><Image src={getImage("/assets/icon/icon-pinterest.png")} alt="Pinterest" width={24} height={24} /></li>
            <li><Image src={getImage("/assets/icon/icon-ins.png")} alt="Instagram" width={24} height={24} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
