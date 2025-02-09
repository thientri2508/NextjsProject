import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

      <Image
        src="/assets/banner/banner-shop.jpg"
        alt="Young man in urban setting wearing trendy casual wear"
        width={200}
        height={200}
        className={`w-full h-full object-cover transition-opacity duration-500`}
        loading="lazy"
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 lg:px-[170px]">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Urban Style, Unmatched Comfort
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Latest Trends in Men Casual Wear
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
    </div>
  );
};

export default HeroBanner;
