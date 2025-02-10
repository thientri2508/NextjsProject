"use client";
import { CardProduct } from "@/components/CardProduct/CardProduct";
import { getProductbyName } from "@/lib/product";
import { Product } from "@/types/Product";
import { getImage } from "@/utils/getImage";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("key") || "";

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", search],
    queryFn: () => getProductbyName(search),
    enabled: !!search, // Chỉ gọi API khi có từ khóa tìm kiếm
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;
  return (
    <div className="w-full">
      <div className="text-center text-[30px] font-semibold tracking-wide mb-12">{`${products.length} RESULTS FOUND FOR "${search}"`}</div>
      <div className="flex gap-y-10 flex-wrap ml-[-20px] px-3">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <CardProduct
              product={product}
              key={product.id}
              widthConfig="home"
            />
          ))
        ) : (
          <div className="center w-full">
            <Image
              src={getImage("/assets/icon/question.png")}
              alt=""
              width={120}
              height={120}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
