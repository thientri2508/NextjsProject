"use client";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useLayoutEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const priceRanges = [
  { price_from: 0.0, price_to: 50.0 },
  { price_from: 50.0, price_to: 100.0 },
  { price_from: 100.0, price_to: 150.0 },
  { price_from: 150.0, price_to: 200.0 },
  { price_from: 200.0, price_to: 250.0 },
  { price_from: 250.0, price_to: null },
];

interface FilterPriceDropdownProps {
  HandleFilterPrice: (filterPrice: string) => void;
}

const FilterPriceDropdown: React.FC<FilterPriceDropdownProps> = ({
  HandleFilterPrice,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const searchParams = useSearchParams();
  const FilterPrice = searchParams.get("price") || "";

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [priceRanges]);

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
          {priceRanges.map((price, index) => (
            <div
              key={index}
              onClick={() =>
                HandleFilterPrice(`${price.price_from}-${price.price_to}`)
              }
              className={`py-1 relative px-4 capitalize hover:text-[#111] ${
                `${price.price_from}-${price.price_to}` == FilterPrice
                  ? "bg-[#f3f2ee] text-[#111] font-medium"
                  : "text-[#b7b7b7]"
              } cursor-pointer`}
            >
              {price.price_to !== null
                ? `$${price.price_from.toFixed(2)} - $${price.price_to.toFixed(
                    2
                  )}`
                : `$${price.price_from.toFixed(2)}+`}
              {`${price.price_from}-${price.price_to}` == FilterPrice && (
                <RiCloseLine
                  size={21}
                  className="absolute right-3 top-[6px] font-medium"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPriceDropdown;
