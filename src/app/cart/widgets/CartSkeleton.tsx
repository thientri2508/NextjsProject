import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CartSkeleton = () => {
  return (
    <div className="max-w-[800px] lg:max-w-[950px] xl:max-w-[1170px] m-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[40px] md:mt-[70px]">
        <div className="w-[90%] lg:w-[70%]">
            <Skeleton height={500} width="100%" />
        </div>
        <div className="w-[90%] lg:w-[28%]">
            <Skeleton height={500} width="100%" />
        </div>
    </div>
  )
}
