"use client";
import { reviews } from "@/mockData/reviewData";
import { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("description");
  const additionalInfo = [
    { label: "Material", value: "Premium Cotton, Polyester Blend" },
    { label: "Available Colors", value: "Black, White, Blue, Red, Green" },
    { label: "Sizes", value: "S, M, L, XL, XXL" },
    { label: "Weight", value: "Approx. 250g" },
    { label: "Care Instructions", value: "Machine wash cold, tumble dry low" },
    { label: "Origin", value: "Made in Vietnam" },
    { label: "Warranty", value: "6 months manufacturer warranty" },
  ];

  return (
    <div className="w-full mt-20">
      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-300 text-[20px]">
        {["description", "reviews", "additional"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-semibold capitalize transition-all ${
              activeTab === tab
                ? "border-b-2 border-[#e53637] text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "description"
              ? "Description"
              : tab === "reviews"
              ? "Customer Reviews"
              : "Additional Information"}
          </button>
        ))}
      </div>

      {/* Nội dung từng tab */}
      <div className="mt-4 p-4">
        {activeTab === "description" && (
          <div>
            <h2 className="text-lg font-semibold">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos lobortis
              des mollis ut risus. Sedcus faucibus an sullamcorper mattis
              drostique des commodo pharetras loremos.
            </h2>
            <br />
            <h2 className="text-lg font-semibold">Products Infomation</h2>
            <p className="text-gray-600 mt-2">
              A Pocket PC is a handheld computer, which features many of the
              same capabilities as a modern PC. These handy little devices allow
              individuals to retrieve and store e-mail messages, create a
              contact file, coordinate appointments, surf the internet, exchange
              text messages and more. Every product that is labeled as a Pocket
              PC must be accompanied with specific software to operate the unit
              and must feature a touchscreen and touchpad.
            </p>
            <p className="text-gray-600 mt-2">
              As is the case with any new technology product, the cost of a
              Pocket PC was substantial during it’s early release. For
              approximately $700.00, consumers could purchase one of
              top-of-the-line Pocket PCs in 2003. These days, customers are
              finding that prices have become much more reasonable now that the
              newness is wearing off. For approximately $350.00, a new Pocket PC
              can now be purchased.
            </p>
            <br />
            <h2 className="text-lg font-semibold">Material used</h2>
            <p className="text-gray-600 mt-2">
              Polyester is deemed lower quality due to its none natural
              quality’s. Made from synthetic materials, not natural like wool.
              Polyester suits become creased easily and are known for not being
              breathable. Polyester suits tend to have a shine to them compared
              to wool and cotton suits, this can make the suit look cheap. The
              texture of velvet is luxurious and breathable. Velvet is a great
              choice for dinner party jacket and can be worn all year round.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            {reviews.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {reviews.map((review) => (
                  <li key={review.id} className="border-b pb-3">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{review.name}</h3>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <div className="text-yellow-500 text-sm mt-1">
                      {"⭐".repeat(review.rating) +
                        "☆".repeat(5 - review.rating)}
                    </div>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 mt-2">
                No reviews yet. Be the first to leave a review!
              </p>
            )}
          </div>
        )}

        {activeTab === "additional" && (
          <div>
            <ul className="text-gray-600 mt-2 space-y-2">
              {additionalInfo.map((info, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-800">
                    {info.label}:
                  </span>
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
