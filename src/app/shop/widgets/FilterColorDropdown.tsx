"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterColorDropdownProps {
  colors: string[];
}

const FilterColorDropdown: React.FC<FilterColorDropdownProps> = ({ colors }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex flex-col w-[85%] gap-y-4 border-b-[1px] border-[#e5e5e5] pb-7 mt-5">
      {/* Tiêu đề dropdown */}
      <div
        className="py-2 text-gray-700 select-none uppercase text-[18px] font-bold cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Colors</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* Danh sách màu sắc */}
      {isOpen && (
        <div className="flex flex-wrap gap-3">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-7 h-7 rounded-full cursor-pointer hover:opacity-50"
              style={{
                backgroundColor: color,
                border: "1px solid #e5e5e5",
                boxShadow: "0 0 0 4px rgba(229, 229, 229, 0.5)",
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterColorDropdown;
