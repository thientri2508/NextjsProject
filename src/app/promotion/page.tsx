import Image from "next/image";
import { PromotionCard } from "./widgets/PromotionCard";
import { promotionsData } from "@/mockData/promotionData";
import { getImage } from "@/utils/getImage";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src={getImage("/assets/banner/banner-promotion.jpg")}
          alt="Banner Promotion"
          width={200}
          height={200}
          className="w-full h-full object-cover opacity-50"
          priority
        /> 
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Exclusive Men Collection
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Discover amazing deals on premium menswear and accessories
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors">
            Explore Deals
          </button>
        </div>
      </div>

      {/* Promotions Grid */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Active Promotions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotionsData.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Stay Updated with Latest Offers
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for exclusive deals and updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:shadow-custom-shadow-inp focus:border-sky-200"
            />
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-opacity-75 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
