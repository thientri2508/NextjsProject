"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface PriceRange {
  price_from: number;
  price_to: number | null;
}

interface FilterPriceDropdownProps {
  prices: PriceRange[];
}

const FilterPriceDropdown: React.FC<FilterPriceDropdownProps> = ({ prices }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [prices]);

  return (
    <div className="flex flex-col w-[85%] border-b-[1px] border-[#e5e5e5] pb-5 mt-5">
      {/* Tiêu đề dropdown */}
      <div
        className="py-2 text-gray-700 select-none uppercase text-[18px] font-bold cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Filter Price</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* Danh sách giá */}
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px" }}
      >
        <div className="space-y-1">
          {prices.map((price, index) => (
            <div
              key={index}
              className="py-1 text-[#b7b7b7] capitalize hover:text-[#111] cursor-pointer"
            >
              {price.price_to !== null
                ? `$${price.price_from.toFixed(2)} - $${price.price_to.toFixed(2)}`
                : `$${price.price_from.toFixed(2)}+`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPriceDropdown;