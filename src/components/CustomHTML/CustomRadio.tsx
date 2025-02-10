import { getImage } from "@/utils/getImage";
import Image from "next/image";
import React from "react";

interface CustomRadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  imageSrc?: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  checked,
  onChange,
  imageSrc,
}) => {
  return (
    <label
      className={`flex justify-between items-center cursor-pointer border-2 transition-all duration-300 mt-3 p-5 rounded-xl 
      ${
        checked
          ? "border-blue-500 shadow-custom-shadow-inp"
          : "border-gray-300 hover:border-blue-400 hover:shadow-lg"
      }`}
      onClick={onChange} // Thêm sự kiện click vào cả label
    >
        <div className="flex gap-x-3">
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
          ${checked ? "border-blue-500" : "border-gray-400"}`}
      >
        {checked && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
      </div>
      <span className="text-lg">{label}</span>
      </div>
      {imageSrc && (
        <Image
          src={getImage(imageSrc)}
          alt={label}
          width={50}
          height={50}
          className="w-10 h-10 object-contain ml-10 shadow-xl"
        />
      )}
    </label>
  );
};

export default CustomRadio;
