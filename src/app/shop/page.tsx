import { Suspense } from "react";
import { ProductFilter } from "./widgets/ProductFilter";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import ProductList from "./widgets/ProductList";
import { getProductsByFilter } from "@/lib/product";
import HeroBanner from "./widgets/HeroBanner";

export default async function Page() {
  const queryClient = new QueryClient();

  // Fetch dữ liệu trên server trước khi render
  await queryClient.prefetchQuery({
    queryKey: ["products", "", "", "", 1],
    queryFn: () =>
      getProductsByFilter({ category: "", price: "", color: "", page: 1 }),
  });
  return (
    <div className="w-full">
      <HeroBanner />
      <div className="max-w-[720px] lg:max-w-[900px] xl:max-w-[1170px] m-auto flex flex-col md:flex-row justify-between mt-[40px] md:mt-[90px]">
        <Suspense>
          <ProductFilter />
        </Suspense>
        <div className="w-[100%] md:w-[66%] lg:w-[74%]">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense>
              <ProductList />
            </Suspense>
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
}
