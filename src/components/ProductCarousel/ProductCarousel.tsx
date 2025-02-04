"use client";
import { Swiper as SwiperClass } from "swiper";
import { CardProduct } from "../CardProduct/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useRef } from "react";
import { productsData } from "@/mockData/productData";
import { Product } from "@/types/Product";

export const ProductCarousel = () => {
  const btnLeft = useRef<HTMLDivElement | null>(null);
  const btnRight = useRef<HTMLDivElement | null>(null);

  // Hàm xử lý khi slide thay đổi
  const handleSlideChange = (swiper: SwiperClass) => {
    if (!swiper.isBeginning) {
      if (btnLeft.current) btnLeft.current.style.display = "flex";
    } else {
      if (btnLeft.current) btnLeft.current.style.display = "none";
    }

    if (swiper.isEnd) {
      if (btnRight.current) btnRight.current.style.display = "none";
    } else {
      if (btnRight.current) btnRight.current.style.display = "flex";
    }
  };

  return (
    <div className="w-full mt-10 relative hidden xl:block">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={22}
        loop={false}
        onSlideChange={handleSlideChange}
        navigation={{ prevEl: `#btnLeft-product`, nextEl: `#btnRight-product` }}
      >
        {
          productsData.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <CardProduct product={product} widthConfig="carousel" />
            </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-20 top-[150px] left-[-55px] cursor-pointer hidden" ref={btnLeft} id="btnLeft-product">
        <GoChevronLeft size={60} />
      </div>

      <div className="absolute z-20 top-[150px] right-[-55px] cursor-pointer" ref={btnRight} id="btnRight-product">
        <GoChevronRight size={60} />
      </div>
    </div>
  );
};
