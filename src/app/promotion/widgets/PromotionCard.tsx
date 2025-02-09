"use client"
import { FiChevronDown, FiChevronUp, FiShare2 } from "react-icons/fi";
import { CountdownTimer } from "./CountdownTimer";
import { useState } from "react";
import Image from "next/image";
import { Promotion } from "@/types/Promotion";
import { getImage } from "@/utils/getImage";

export const PromotionCard = ({ promotion }: {promotion: Promotion}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="relative">
          <Image
            src={getImage(promotion.image)}
            alt={promotion.title}
            width={200}
            height={200}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 rounded-bl-lg">
            {promotion.discount}
          </div>
        </div>
  
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{promotion.title}</h3>
          <CountdownTimer endTime="2024-01-30" />
  
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {promotion.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 font-semibold">Promo Code:</p>
              <div className="flex items-center justify-between mt-2">
                <code className="bg-gray-200 px-4 py-2 rounded">{promotion.promoCode}</code>
                <button
                  className="text-gray-400 hover:text-black flex items-center"
                  onClick={() => navigator.clipboard.writeText(promotion.promoCode)}
                >
                  Copy Code
                </button>
              </div>
            </div>
  
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                {isExpanded ? "Hide Details" : "Show Details"}
                {isExpanded ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
              </button>
  
              {isExpanded && (
                <div className="mt-4 text-gray-600 text-sm">
                  <p>{promotion.description}</p>
                  <p className="mt-2 text-xs">{promotion.terms}</p>
                </div>
              )}
            </div>
  
            <div className="mt-6 flex justify-between items-center">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-75 transition-colors">
                Shop Now
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <FiShare2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };