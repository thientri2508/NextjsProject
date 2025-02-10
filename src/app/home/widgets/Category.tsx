import { getImage } from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";

export const Category = () => {
  return (
    <div className="mt-28 flex flex-col flex-wrap items-center justify-center px-4 sm:px-0">
      <div className="h-auto sm:h-[550px] lg:h-[440px] relative lg:scale-85 lg:ml-[350px] xl:scale-100 xl:ml-[450px]">
        <Image src={getImage("/assets/banner/banner2.jpg")} alt="" width={440} height={440}></Image>
        <div className="font-semibold text-[24px] hidden sm:block sm:text-[32px] w-full lg:w-[300px] absolute top-[84%] lg:top-28 lg:left-[-180px] xl:left-[-210px]">
          Clothing Collections 2025
        </div>
        <div className="font-semibold text-[24px] mt-6 mb-3 sm:hidden w-full">
          Clothing Collections 2025
        </div>
        <Link href='/shop' className="btn-shopNow top-[520px] hidden sm:block lg:top-60 lg:left-[-180px] xl:left-[-210px]">
          SHOP NOW
        </Link>
        <Link href='/shop' className="btn-shopNow-Mobi">
          SHOP NOW
        </Link>
      </div>
      <div className="h-auto sm:h-[560px] mt-[30px] lg:ml-[-500px] lg:mt-[-130px] lg:scale-85 xl:scale-100 xl:ml-[-700px] xl:mt-[-80px]">
        <Image src={getImage("/assets/banner/banner3.jpg")} alt="" width={440} height={470}></Image>
        <div className="font-semibold text-[26px] sm:text-[32px] w-[300px] mt-4">
          Accessories
        </div>
        <Link href='/shop' className="btn-shopNow mt-[12px]">SHOP NOW</Link>
      </div>
      <div className="h-auto sm:h-[520px] lg:h-[440px] relative mt-[70px] lg:ml-[470px] lg:mt-[-390px] lg:scale-85 xl:scale-100 xl:ml-[650px] xl:mt-[-350px]">
      <Image src={getImage("/assets/banner/banner4.jpg")} alt="" width={440} height={440}></Image>
        <div className="font-semibold text-[26px] hidden sm:block sm:text-[32px] w-full lg:w-[300px] absolute top-[420px] lg:top-[100px] lg:left-[-50px] xl:left-[-170px]">
          Shoes Spring 2025
        </div>
        <div className="font-semibold text-[24px] mt-6 mb-3 sm:hidden w-full">
          Shoes Spring 2025
        </div>
        <Link href='/shop' className="btn-shopNow hidden sm:block top-[485px] lg:top-[230px] lg:left-[-50px] xl:left-[-170px]">
          SHOP NOW
        </Link>
        <Link href='/shop' className="btn-shopNow-Mobi">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};
