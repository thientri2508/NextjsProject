"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterColorDropdownProps {
  HandleFilterColor: (color: string) => void;
}

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "white",
  "gray",
  "beige",
];

const FilterColorDropdown: React.FC<FilterColorDropdownProps> = ({
  HandleFilterColor,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const FilterColor = searchParams.get("color") || "";

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
        <div className="flex flex-wrap gap-3 items-center px-4">
          {colors.map((color, index) => (
            <div key={index} className={`${FilterColor == color ? 'border-2 border-black rounded-full p-1' : ''}`}>
              <div
                onClick={() => HandleFilterColor(color)}
                className={`w-7 h-7 border-2 border-[#e5e5e5] rounded-full cursor-pointer hover:opacity-50`}
                style={{
                  backgroundColor: color,
                  boxShadow: "0 0 0 4px rgba(229, 229, 229, 0.5)",
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterColorDropdown;
