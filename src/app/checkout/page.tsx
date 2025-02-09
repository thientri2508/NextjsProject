import Breadcrumb from "../shop/widgets/Breadcrumb";
import { DeliveryInfor } from "./widgets/DeliveryInfor";
import { OrderDetail } from "./widgets/OrderDetail";

export default function Page() {
  return (
    <div className="w-full">
      <Breadcrumb label="Check Out" />
      <div className="max-w-[800px] lg:max-w-[950px] xl:max-w-[1170px] m-auto flex flex-col gap-y-16 lg:flex-row items-center lg:items-start justify-between mt-[20px] md:mt-[50px]">
        <div className="w-[90%] lg:w-[48%] xl:w-[57%]">
          <DeliveryInfor />
        </div>
        <div className="w-[90%] lg:w-[48%] xl:w-[40%]">
          <OrderDetail />
        </div>
      </div>
    </div>
  );
}
