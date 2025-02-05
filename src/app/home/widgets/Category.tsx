import { getImage } from "@/utils/getImage";
import Image from "next/image";

export const Category = () => {
  return (
    <div className="mt-28 flex flex-col flex-wrap items-center justify-center">
      <div className="h-[550px] lg:h-[440px] relative lg:scale-85 lg:ml-[350px] xl:scale-100 xl:ml-[450px]">
        <Image src={getImage("/assets/banner/banner2.jpg")} alt="" width={440} height={440}></Image>
        <div className="font-semibold text-[26px] sm:text-[36px] w-full lg:w-[300px] absolute top-[455px] lg:top-28 lg:left-[-180px] xl:left-[-210px]">
          Clothing Collections 2030
        </div>
        <div className="btn-shopNow top-[520px] lg:top-60 lg:left-[-180px] xl:left-[-210px]">
          SHOP NOW
        </div>
      </div>
      <div className="h-[560px] mt-[30px] lg:ml-[-500px] lg:mt-[-130px] lg:scale-85 xl:scale-100 xl:ml-[-700px] xl:mt-[-80px]">
        <Image src={getImage("/assets/banner/banner3.jpg")} alt="" width={440} height={470}></Image>
        <div className="font-semibold text-[26px] sm:text-[36px] w-[300px] mt-4">
          Accessories
        </div>
        <div className="btn-shopNow mt-[12px]">SHOP NOW</div>
      </div>
      <div className="h-[520px] lg:h-[440px] relative mt-[25px] lg:ml-[470px] lg:mt-[-390px] lg:scale-85 xl:scale-100 xl:ml-[650px] xl:mt-[-350px]">
      <Image src={getImage("/assets/banner/banner4.jpg")} alt="" width={440} height={440}></Image>
        <div className="font-semibold text-[26px] sm:text-[36px] w-full lg:w-[300px] absolute top-[420px] lg:top-[100px] lg:left-[-50px] xl:left-[-170px]">
          Shoes Spring 2030
        </div>
        <div className="btn-shopNow top-[485px] lg:top-[230px] lg:left-[-50px] xl:left-[-170px]">
          SHOP NOW
        </div>
      </div>
    </div>
  );
};
