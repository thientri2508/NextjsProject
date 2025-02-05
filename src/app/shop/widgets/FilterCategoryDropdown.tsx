"use client";
import { Category } from "@/types/Category";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useLayoutEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

interface FilterCategoryDropdownProps {
  categories: {
    category: string;
    children: Category[];
  }[];
  FilterCategory: (categoryId: string) => void;
}

const FilterCategoryDropdown: React.FC<FilterCategoryDropdownProps> = ({
  categories,
  FilterCategory,
}) => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category") || "";
  const [openCategories, setOpenCategories] = useState<string[]>(
    categories.map((cat) => cat.category)
  );

  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Tính toán chiều cao cho mỗi danh mục con khi render xong
  const [heightMap, setHeightMap] = useState<{ [key: string]: number }>({});

  useLayoutEffect(() => {
    // Sau khi render xong, tính chiều cao của mỗi danh mục con
    categories.forEach((category) => {
      if (categoryRefs.current[category.category]) {
        setHeightMap((prev) => ({
          ...prev,
          [category.category]:
            categoryRefs.current[category.category]?.scrollHeight || 0,
        }));
      }
    });
  }, [categories]);

  const toggleCategory = (category: string) => {
    if (openCategories.includes(category)) {
      setOpenCategories((prevState) =>
        prevState.filter((item) => item !== category)
      );
    } else {
      setOpenCategories((prevState) => [...prevState, category]);
    }
  };

  return (
    <div className="w-[85%] flex flex-col gap-5">
      {categories.map((category, index) => (
        <div key={index} className="border-b-[1px] border-[#e5e5e5] pb-5">
          {/* Danh mục cha */}
          <div
            className="py-2 text-gray-700 select-none uppercase text-[18px] font-bold cursor-pointer flex justify-between items-center"
            onClick={() => toggleCategory(category.category)}
          >
            <span>{category.category}</span>
            {openCategories.includes(category.category) ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>

          {/* Danh mục con */}
          <div
            ref={(el) => {
              categoryRefs.current[category.category] = el;
            }}
            className="transition-all duration-300 ease-in-out overflow-hidden"
            style={{
              maxHeight: openCategories.includes(category.category)
                ? `${heightMap[category.category]}px` // Dùng chiều cao thực tế của danh mục con
                : "0px", // Khi đóng, giảm xuống 0px
            }}
          >
            <div className="space-y-1">
              {category.children.map((subCategory, subIndex) => (
                <div
                  key={subIndex}
                  onClick={() => FilterCategory(subCategory.id.toString())}
                  className={`py-1 relative capitalize hover:text-[#111] cursor-pointer ${
                    subCategory.id.toString() == categoryId
                      ? "bg-[#f3f2ee] text-[#111] font-medium"
                      : "text-[#b7b7b7]"
                  } px-4`}
                >
                  {subCategory.name}
                  {subCategory.id.toString() == categoryId && (
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
      ))}
    </div>
  );
};

export default FilterCategoryDropdown;
