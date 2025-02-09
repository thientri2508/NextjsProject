import Image from "next/image";
import { CollectionCard } from "./widgets/CollectionCard";
import { collectionData } from "@/mockData/collectionData";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/banner/banner-collection.jpg"
          alt="Hero Collection"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Autumn Winter 2024
          </h1>
          <p className="text-xl text-gray-200 font-semibold mb-8 max-w-2xl">
          Discover our latest collection featuring premium materials and
          timeless designs
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors">
          Shop Now
          </button>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-[1220px] mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Featured Collections
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collectionData.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>

      {/* Preview Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Coming Soon</h2>
            <p className="mt-4 text-gray-400">
              Stay tuned for our upcoming collections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
