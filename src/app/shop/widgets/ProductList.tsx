"use client";
import { CardProduct } from "@/components/CardProduct/CardProduct";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { getProductsByFilter } from "@/lib/product";
import { CardProductSkeleton } from "@/components/CardProduct/CardProductSkeleton";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const price = searchParams.get("price") || "";
  const color = searchParams.get("color") || "";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", category, price, color, page],
    queryFn: () => getProductsByFilter({ category, price, color, page }),
  });

  if (isLoading) return <CardProductSkeleton />;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="w-full">
      <div className="flex ml-[-20px] gap-y-10 flex-wrap mt-10 md:mt-0 px-3 md:px-0">
        {data?.list.map((product: Product) => (
          <CardProduct
            product={product}
            key={product.id}
            widthConfig="productlist"
          />
        ))}
      </div>
      <Pagination
        page={page}
        total={data?.total ?? 0}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
