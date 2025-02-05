import { Blog } from "@/types/Blog";
import { getImage } from "@/utils/getImage";
import Image from "next/image";
import { PiCalendarDotsThin } from "react-icons/pi";

interface CardBlogProps {
    blog: Blog;
}

export const CardBlog: React.FC<CardBlogProps> = ({blog}) =>{
  return (
    <div className="w-[calc(90%-28px)] sm:w-[calc(80%-28px)] md:w-[calc(50%-28px)] xl:w-[calc(33.33%-28px)] relative h-[420px] cursor-pointer group">
      <Image
        src={getImage(blog.image)}
        alt=""
        width={360}
        height={270}
        className="w-full object-cover"
      ></Image>
      <div className="absolute z-20 bg-white p-7 flex flex-col gap-3 w-[80%] top-[230px] left-[50%] translate-x-[-50%] group-hover:shadow-lg transition-all duration-300">
        <div className="flex gap-2 items-center">
          <PiCalendarDotsThin size={20} />
          <div className="text-[14px] text-[#3d3d3d]">{blog.date_created}</div>
        </div>
        <div className="text-[18px] font-semibold">
          {blog.title}
        </div>
        <div className="text-[13px] tracking-[4px] font-semibold cursor-pointer overflow-visible whitespace-nowrap w-[45px] hover:w-[105px] pb-1 border-b-2 border-black hover:border-[#e53637] transition-all duration-200 ease-in-out">
          READ MORE
        </div>
      </div>
    </div>
  );
};
