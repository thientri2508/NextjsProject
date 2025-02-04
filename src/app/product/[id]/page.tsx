import { BiChevronRight } from "react-icons/bi";
import { ProductImage } from "../widgets/ProductImage";
import { ProductInfor } from "../widgets/ProductInfor";
import ProductTabs from "../widgets/ProductTab";
import FadeInUp from "@/components/ScrollEffect/FadeInUp";
import { ProductCarousel } from "@/components/ProductCarousel/ProductCarousel";
import { productsData } from "@/mockData/productData";
import { Product } from "@/types/Product";
import { CardProduct } from "@/components/CardProduct/CardProduct";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = productsData.find((product) => product.id.toString() === id);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="w-full bg-[#fff] py-12">
      <div className="max-w-[1000px] xl:max-w-[1150px] m-auto">
        <div className="flex gap-1 items-center text-[15px] justify-center">
          <div>Home</div>
          <BiChevronRight className="w-5 h-5 mx-1" />
          <div>Shop</div>
          <BiChevronRight className="w-5 h-5 mx-1" />
          <div className="font-semibold">Product Details</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-7 gap-y-14 px-5 xl:px-0">
          <div className="w-[80%] lg:w-[48%]">
            <ProductImage product={product} />
          </div>
          <div className="w-[80%] lg:w-[48%]">
            <ProductInfor product={product} />
          </div>
        </div>
        <ProductTabs />

        <FadeInUp>
          <div className="font-bold text-[30px] w-full text-center mt-[80px]">
            Related Product
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
    </div>
  );
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
    { id: "20" },
    { id: "21" },
    { id: "22" },
    { id: "23" },
    { id: "24" },
  ];
}