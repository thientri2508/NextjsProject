import { Suspense } from "react";
import Breadcrumb from "../shop/widgets/Breadcrumb";
import ProductList from "./widgets/ProductList";

export default function Page() {
  return (
    <div className="w-full">
      <Breadcrumb label="Search Product" />
      <div className="max-w-[800px] lg:max-w-[950px] xl:max-w-[1170px] m-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[40px] md:mt-[70px]">
        <Suspense>
          <ProductList />
        </Suspense>
      </div>
    </div>
  );
}
