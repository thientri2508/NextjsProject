import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardProductSkeleton = () => {
  return (
    <ul className="flex gap-x-2 md:gap-x-[20px] gap-y-10 flex-wrap justify-center lg:justify-normal mt-14 md:mt-0">
      {Array.from({ length: 12 }).map((_, index) => (
        <li
          key={index}
          className="w-[calc(50%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] h-[300px] sm:h-[420px] md:h-[300px] xl:h-[390px]"
        >
          <Skeleton height="75%" width="100%" className="aspect-square" />
          <Skeleton height={20} width="80%" className="mt-5" />
          <Skeleton height={15} width="60%" className="mt-3" />
        </li>
      ))}
    </ul>
  );
};
