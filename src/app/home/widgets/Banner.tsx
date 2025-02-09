import { getImage } from "@/utils/getImage";
import Image from "next/image"

export const Banner = () => {
  return (
    <div className="relative w-full h-[900px]">
      {/* Ảnh nền */}
      <Image
        src={getImage("/assets/banner/banner1.jpg")}
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Nội dung trên ảnh */}
      <div className="absolute inset-0 flex flex-col justify-center pt-[230px]">
        <div className="w-[1170px] max-w-[85%] m-auto">
          <div className="text-[#e53637] font-semibold tracking-widest">SUMMER COLLECTION</div>
          <div className="text-[48px] w-[400px] lg:w-[500px] font-bold my-4 leading-tight">
            Fall - Winter Collections 2024
          </div>
          <p className="mt-10 w-[400px] lg:w-[500px]">
            A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
          </p>
          <button className="mt-8 w-[230px] h-[52px] bg-black text-white tracking-[4px]">SHOP NOW</button>

          {/* Icon mạng xã hội */}
          <ul className="flex mt-[270px] lg:mt-[285px] gap-10 items-center *:cursor-pointer">
            <li><Image src={getImage("/assets/icon/icon-fb.png")} alt="Facebook" width={24} height={24} /></li>
            <li><Image src={getImage("/assets/icon/icon-twitter.png")} alt="Twitter" width={24} height={24} /></li>
            <li><Image src={getImage("/assets/icon/icon-pinterest.png")} alt="Pinterest" width={24} height={24} /></li>
            <li><Image src={getImage("/assets/icon/icon-ins.png")} alt="Instagram" width={24} height={24} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
