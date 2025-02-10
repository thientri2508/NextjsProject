import { CardBlog } from "@/components/CardBlog/CardBlog";
import { blogData } from "@/mockData/blogData";
import { Blog } from "@/types/Blog";
import { getImage } from "@/utils/getImage";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[350px] bg-gray-900">
        <Image
          src={getImage("/assets/banner/banner-blog.jpg")}
          alt="Men's Fashion Hero"
          width={200}
          height={200}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
        </div>
      </div>

      <div className="max-w-[1150px] m-auto mt-24 flex flex-col gap-4 items-center">
        <div className="flex flex-wrap w-full gap-7 mt-5 justify-center">
          {blogData.map((blog: Blog) => (
            <CardBlog blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
