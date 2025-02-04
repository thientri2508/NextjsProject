import Image from "next/image"

export const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner/banner1.jpg')] w-full h-[900px] bg-no-repeat bg-center bg-cover pt-[230px]">
        <div className='w-[1170px] max-w-[85%] m-auto'>
          <div className="text-[#e53637] font-semibold tracking-widest">SUMMER COLLECTION</div>
          <div className="text-[48px] w-[400px] lg:w-[500px] font-bold my-4 leading-tight">Fall - Winter Collections 2024</div>
          <p className="mt-10 w-[400px] lg:w-[500px]">A specialist label creating luxury essentials. Ethically crafted with an unwavering
          commitment to exceptional quality.</p>
          <button className="mt-8 w-[230px] h-[52px] bg-black text-white tracking-[4px]">SHOP NOW</button>
          <ul className='flex mt-[270px] lg:mt-[285px] gap-10 items-center *:cursor-pointer'>
            <li><Image src="/assets/icon/icon-fb.png" alt="" width={24} height={24}></Image></li>
            <li><Image src="/assets/icon/icon-twitter.png" alt="" width={24} height={24}></Image></li>
            <li><Image src="/assets/icon/icon-pinterest.png" alt="" width={24} height={24}></Image></li>
            <li><Image src="/assets/icon/icon-ins.png" alt="" width={24} height={24}></Image></li>
          </ul>
        </div>
      </div>
  )
}
