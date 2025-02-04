"use client";
import { Product } from "@/types/Product";
import Breadcrumb from "./widgets/Breadcrumb";
import FilterCategoryDropdown from "./widgets/FilterCategoryDropdown";
import FilterColorDropdown from "./widgets/FilterColorDropdown";
import FilterPriceDropdown from "./widgets/FilterPriceDropdown";
import { CardProduct } from "@/components/CardProduct/CardProduct";
import { productsData } from "@/mockData/productData";
import { useState } from "react";
import Pagination from "./widgets/Pagination";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const categories = [
  {
    category: "Men's shirt",
    children: ["T-shirt", "Shirt", "Jacket", "Vest", "Waistcoat"],
  },
  {
    category: "Men's pants",
    children: ["Trouser", "Jeans", "Khaki pants", "Shorts", "Elastic pants"],
  },
  {
    category: "Shoes",
    children: [
      "Sandals",
      "Leather shoes",
      "Leather slippers",
      "Plastic slippers",
    ],
  },
  {
    category: "Accessories",
    children: ["Glasses", "Hat", "Socks", "Belt", "Leather wallet"],
  },
];

const priceRanges = [
  { price_from: 0.0, price_to: 50.0 },
  { price_from: 50.0, price_to: 100.0 },
  { price_from: 100.0, price_to: 150.0 },
  { price_from: 150.0, price_to: 200.0 },
  { price_from: 200.0, price_to: 250.0 },
  { price_from: 250.0, price_to: null },
];

const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#800080"];

export default function Page() {
  const [openFilter, setOpentFilter] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const total = 50;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="w-full">
      <Breadcrumb label="Shop" />
      <div className="max-w-[720px] lg:max-w-[900px] xl:max-w-[1170px] m-auto flex flex-col md:flex-row justify-between mt-[40px] md:mt-[90px]">
        <div className="md:hidden w-full h-[80px] flex justify-between px-8 bg-black text-white">
          <div
            className="w-1/2 h-full cursor-pointer flex justify-between items-center select-none pr-3"
            onClick={() => {
              setOpentFilter(!openFilter);
            }}
          >
            <div className="font-semibold text-[22px]">Option</div>
            {openFilter ? (
              <FaChevronUp size={22} />
            ) : (
              <FaChevronDown size={22} />
            )}
          </div>
          <div className="w-1/2 h-full flex justify-end items-center text-[18px] font-medium">54 products</div>
        </div>
        <div
          className={`w-[100%] md:w-[33%] lg:w-[23%] ${
            openFilter ? "h-[500px] overflow-auto" : "h-0 overflow-hidden"
          } md:h-[1680px] transition-all duration-200 flex flex-col items-center md:items-start`}
        >
          <FilterCategoryDropdown categories={categories} />
          <FilterPriceDropdown prices={priceRanges} />
          <FilterColorDropdown colors={colors} />
        </div>

        <div className="w-[100%] md:w-[66%] lg:w-[74%]">
          <div className="flex gap-x-2 md:gap-x-[20px] gap-y-10 flex-wrap justify-center lg:justify-normal mt-14 md:mt-0">
            {productsData.map((product: Product) => (
              <CardProduct
                product={product}
                key={product.id}
                widthConfig="productlist"
              />
            ))}
          </div>
          <Pagination
            page={page}
            pageSize={pageSize}
            total={total}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
