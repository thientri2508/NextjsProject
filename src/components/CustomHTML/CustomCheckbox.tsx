"use client";

import { HiQuestionMarkCircle } from "react-icons/hi";

const CustomCheckbox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <label className="flex items-center space-x-4 xl:space-x-8 cursor-pointer select-none mt-7 pl-3">
      {/* Ô checkbox */}
      <div
        className='w-6 h-6 flex items-center justify-center border-2 transition-all bg-white'
        onClick={onChange}
      >
        {checked && <span className="text-black text-lg font-bold">✓</span>}
      </div>

      {/* Nhãn */}
      <span className="text-gray-800">{label}</span>
      <HiQuestionMarkCircle size={21} className="cursor-pointer" />
    </label>
  );
};

export default CustomCheckbox;
