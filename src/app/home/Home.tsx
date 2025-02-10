import { ProductCarousel } from "@/components/ProductCarousel/ProductCarousel";
import { Banner } from "./widgets/Banner";
import { Category } from "./widgets/Category";
import { Product } from "@/types/Product";
import { CardProduct } from "@/components/CardProduct/CardProduct";
import { productsData } from "@/mockData/productData";
import { SaleOff } from "./widgets/SaleOff";
import { CardBlog } from "@/components/CardBlog/CardBlog";
import { blogData } from "@/mockData/blogData";
import { Blog } from "@/types/Blog";
import FadeInUp from "@/components/ScrollEffect/FadeInUp";
import FadeInImage from "@/components/ScrollEffect/FadeInImage";

const Home = () => {
  const images = [
    "./assets/banner/banner5.jpg",
    "./assets/banner/banner6.jpg",
    "./assets/banner/banner7.jpg",
    "./assets/banner/banner8.jpg",
    "./assets/banner/banner9.jpg",
    "./assets/banner/banner10.jpg",
  ];

  return (
    <div className="w-full">
      <Banner />
      <Category />
      <div className="max-w-[470px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1150px] m-auto">
        <FadeInUp>
          <div className="font-bold text-[30px] w-full text-center mt-12">
            Best Sellers
          </div>
        </FadeInUp>
        <FadeInUp>
          <ProductCarousel />
        </FadeInUp>

        <div className="flex xl:hidden gap-x-[12px] gap-y-10 flex-wrap mt-10">
          {productsData.map((product: Product) => (
            <CardProduct
              product={product}
              key={product.id}
              widthConfig="home"
            />
          ))}
        </div>
      </div>
      <SaleOff />
      <div className="max-w-[1150px] m-auto mt-24 flex flex-col lg:flex-row gap-16 lg:gap-0 xl:gap-10 justify-center items-center">
        <div className="w-[440px] md:w-[750px] flex flex-wrap *:w-1/2 md:*:w-1/3 lg:scale-85 xl:scale-100">
          {images.map((src, index) => (
            <FadeInImage
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-col gap-10 w-[400px] md:w-[720px] lg:w-[280px] xl:w-[360px] ml-[-30px] xl:ml-0">
          <div className="font-semibold text-[36px]">Instagram</div>
          <div className="text-[15px] text-[#3d3d3d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="font-semibold text-[30px] text-[#e53637]">
            #Male_Fashion
          </div>
        </div>
      </div>

      <FadeInUp>
        <div className="max-w-[1150px] m-auto mt-24 flex flex-col gap-4 items-center">
          <div className="text-[#e53637] text-[14px] tracking-[2px] font-[700]">
            LATEST NEWS
          </div>
          <div className="text-[#111] text-[36px] font-semibold">
            Fashion New Trends
          </div>
          <div className="flex flex-wrap w-full gap-7 mt-5 justify-center">
            {blogData.slice(0, 3).map((blog: Blog) => (
              <CardBlog blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </FadeInUp>
    </div>
  );
};

export default Home;
