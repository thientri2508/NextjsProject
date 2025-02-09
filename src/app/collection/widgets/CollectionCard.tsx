import { Collection } from "@/types/Collection";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export const CollectionCard = ({ collection } : {collection: Collection}) => (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[3/5] relative bg-black">
        <Image
          src={collection.image}
          alt={collection.name}
          width={200}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 p-6">
            <h3 className="text-xl font-bold text-white">{collection.name}</h3>
            <p className="mt-2 text-sm text-gray-200">{collection.description}</p>
            <button className="mt-4 flex items-center text-sm font-semibold text-white hover:underline">
              Explore Collection <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );