"use client";
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = ["Shop", "Collection", "Promotion", "Blog", "Contacts"];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
console.log("Base Path:", basePath);

const Header = () => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  
  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <header className="w-full h-[90px] bg-white sticky z-[60] top-0 items-center transition-all shadow-custom-shadow">
      <div className="max-w-[470px] sm:max-w-[850px] md:max-w-[790px] lg:max-w-[910px] xl:max-w-[1170px] m-auto h-full flex items-center px-3 sm:px-10 md:px-0 justify-between md:justify-center md:gap-[60px] lg:gap-[75px] xl:gap-[110px]">
        <div className="cursor-pointer flex-shrink-0 h-full flex items-center">
          <Link href="/">
            <Image
              src={`/assets/logo/logo.png`}
              alt="Logo"
              width={196}
              height={23}
              priority
              className="w-[196px] md:w-[130px] lg:w-[196px]"
            ></Image>
          </Link>
        </div>
        <ul className="hidden md:flex gap-5 lg:gap-10 text-[17px] font-semibold">
          {categories.map((category, index) => (
            <Link href={`/${category.toLowerCase()}`} key={index}>
              <li className="cursor-pointer transition-colors relative group inline-block pb-1">
                <span className="transition-all duration-300 ease-in-out">
                  {category}
                </span>
                <span className="absolute left-0 bottom-0 block h-0.5 w-0 bg-[#e53637] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex gap-x-5 lg:gap-x-7 items-center">
          <div className="hidden xl:block relative">
            <input
              type="search"
              placeholder="Search product..."
              className="hidden outline-none text-[15px] border-solid border-2 pl-4 pr-10 py-1 lg:block lg:w-48 xl:w-52 focus:shadow-custom-shadow-inp focus:border-sky-200 transition-all"
            ></input>
            <div className="absolute z-10 top-[8px] right-[13px] cursor-pointer">
              <RiSearchLine size={18} />
            </div>
          </div>

          <div className="hidden md:block xl:hidden relative cursor-pointer">
            <RiSearchLine
              size={24}
              className="mt-1 select-none"
              onClick={() => {
                setIsOpenSearch(!isOpenSearch);
              }}
            />
            <input
              type="search"
              placeholder="Search product..."
              className={`${
                isOpenSearch ? "block" : "hidden"
              } outline-none border-solid text-[14px] border-2 px-4 py-1 w-48 absolute z-[60] top-[42px] right-[-15px] focus:shadow-custom-shadow-inp focus:border-sky-200 transition-all`}
            ></input>
          </div>

          <Link
            href="/cart"
            className="relative cursor-pointer w-[50px] hidden md:block"
          >
            <MdOutlineShoppingBag size={28} />
            <div className="absolute z-10 w-[30px] h-[20px] text-[10px] text-[#FFF] rounded-[20px] bg-[#e53637] right-0 top-[-10px] flex items-center justify-center">
              <span>0</span>
            </div>
          </Link>
        </div>

        <div
          className="w-[40px] h-[40px] border-solid border-black border-[1px] py-[11px] cursor-pointer rounded md:hidden"
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
        >
          <div className="w-[55%] m-auto border-solid border-black border-[2px]"></div>
          <div className="w-[55%] m-auto border-solid border-black border-[2px] mt-[3px]"></div>
          <div className="w-[55%] m-auto border-solid border-black border-[2px] mt-[3px]"></div>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 z-[100] bg-custom-bg w-full h-[200dvh] md:hidden 
  transition-opacity duration-500 ${
    isOpenMenu
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
      >
        <div
          className={`transition-all duration-500 h-full bg-white 
    ${isOpenMenu ? "w-[60%] overflow-auto" : "w-0 overflow-hidden"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex flex-col gap-y-5 px-6">
            <div className="flex justify-center gap-12 *:cursor-pointer pt-12">
              <FaRegHeart size={24} />
              <Link href="/cart" className="relative">
                <MdOutlineShoppingBag size={26} />
                <div className="absolute z-10 w-[30px] h-[20px] text-[10px] text-[#FFF] rounded-[20px] bg-[#e53637] right-[-20px] top-[-10px] flex items-center justify-center">
                  <span>0</span>
                </div>
              </Link>
              <FaRegCircleUser size={24} />
            </div>

            <div className="relative">
              <input
                type="search"
                placeholder="Search product..."
                className="outline-none w-full border-gray-300 text-[14px] border-2 pl-4 pr-10 py-1 focus:shadow-custom-shadow-inp focus:border-sky-200 transition-all"
              ></input>
              <div className="absolute z-10 top-[8px] right-[24px] cursor-pointer">
                <RiSearchLine size={18} />
              </div>
            </div>

            <ul className="flex flex-col gap-y-5 text-[17px] font-semibold mt-3 ml-3 w-[87%]">
              {categories.map((category, index) => (
                <Link href={`/${category.toLowerCase()}`} key={index}>
                  <li className="cursor-pointer transition-colors relative group inline-block pb-1 w-[100%]">
                    <span className="transition-all duration-300 ease-in-out">
                      {category}
                    </span>
                    <span className="absolute left-0 bottom-0 block h-0.5 w-0 bg-[#e53637] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
