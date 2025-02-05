"use client";
import { categories } from "@/mockData/categoryData";
import FilterCategoryDropdown from "./FilterCategoryDropdown";
import FilterColorDropdown from "./FilterColorDropdown";
import FilterPriceDropdown from "./FilterPriceDropdown";
import { Suspense, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { convertToTree } from "@/utils/convertToTree";
import queryString from "query-string";
import { useSearchParams } from "next/navigation";

export const ProductFilter = () => {
  const [openFilter, setOpentFilter] = useState(false);
  const [category, setCategory] = useState<string | undefined>();
  const [price, setPrice] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();
  const searchParams = useSearchParams();

  // Hàm cập nhật URL bằng query-string
  const updateUrl = (
    newCategoryId?: string,
    newPrice?: string,
    newColor?: string
  ) => {
    const newQuery = queryString.stringify({
      ...(newCategoryId && { category: newCategoryId }), // Thêm category nếu newCategoryId khác rỗng
      ...(newPrice && { price: newPrice }), // Thêm price nếu newPrice khác rỗng
      ...(newColor && { color: newColor }),
    });

    // Cập nhật URL mà không reload trang
    window.history.pushState(null, "", `/shop?${newQuery}`);
  };

  const FilterCategory = (categoryId: string) => {
    if (category === categoryId) {
      // Nếu chọn lại category đã có, loại bỏ category khỏi URL
      updateUrl(undefined, price, color);
      setCategory("");
    } else {
      // Nếu chọn một category mới, cập nhật URL với category mới
      updateUrl(categoryId, price, color);
      setCategory(categoryId);
    }
  };

  const HandleFilterPrice = (filterPrice: string) => {
    if (price === filterPrice) {
      updateUrl(category, undefined, color);
      setPrice("");
    } else {
      updateUrl(category, filterPrice, color);
      setPrice(filterPrice);
    }
  };

  const HandleFilterColor = (filterColor: string) => {
    if (color === filterColor) {
      updateUrl(category, price, undefined);
      setColor("");
    } else {
      updateUrl(category, price, filterColor);
      setColor(filterColor);
    }
  };

  useEffect(() => {
    // Lấy các query params từ URL khi component được mount
    const parsedQuery = queryString.parse(window.location.search);

    // Đặt lại state từ query params
    setCategory(parsedQuery.category as string);
    setPrice(parsedQuery.price as string);
    setColor(parsedQuery.color as string);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams]);

  return (
    <>
      <div className="md:hidden w-full h-[80px] flex justify-between px-8 bg-black text-white">
        <div
          className="w-1/2 h-full cursor-pointer flex justify-between items-center select-none pr-3"
          onClick={() => {
            setOpentFilter(!openFilter);
          }}
        >
          <div className="font-semibold text-[22px]">Option</div>
          {openFilter ? <FaChevronUp size={22} /> : <FaChevronDown size={22} />}
        </div>
        <div className="w-1/2 h-full flex justify-end items-center text-[18px] font-medium">
          54 products
        </div>
      </div>
      <div
        className={`w-[100%] md:w-[33%] lg:w-[23%] ${
          openFilter ? "h-[500px] overflow-auto" : "h-0 overflow-hidden"
        } md:h-[1680px] transition-all duration-200 flex flex-col items-center md:items-start`}
      >
        <Suspense>
          <FilterCategoryDropdown
            categories={convertToTree(categories)}
            FilterCategory={FilterCategory}
          />
          <FilterPriceDropdown HandleFilterPrice={HandleFilterPrice} />
          <FilterColorDropdown HandleFilterColor={HandleFilterColor} />
        </Suspense>
      </div>
    </>
  );
};
