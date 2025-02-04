import { productCart } from "@/mockData/productData";
import Breadcrumb from "../shop/widgets/Breadcrumb";
import { ItemCart } from "./widgets/ItemCart";
import { CartProduct } from "@/types/CartProduct";

export default function Page() {
  return (
    <div className="w-full">
      <Breadcrumb label="Shopping Cart" />
      <div className="max-w-[800px] lg:max-w-[950px] xl:max-w-[1170px] m-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[40px] md:mt-[70px]">
        <div className="w-[90%] lg:w-[70%]">
          <table className="w-full text-left text-gray-700">
            <thead>
              <tr className="border-b border-gray-200 uppercase font-semibold *:py-4">
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {productCart.map((product: CartProduct) => (
                <ItemCart product={product} key={product.id} />
              ))}
            </tbody>
          </table>

          <div className="w-full flex justify-between *:cursor-pointer mt-7">
            <div className="px-8 py-3 border-[1px] border-gray-300 font-medium tracking-[2px] text-[14px]">CONTINUE SHOPPING</div>
            <div className="px-8 py-3 text-white bg-black font-medium tracking-[2px] text-[14px]">DELETE CART</div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[28%]">
          <div className="mt-14 lg:mt-4 font-bold text-center text-[22px] lg:text-[18px]">DISCOUNT CODES</div>
          <div className="flex justify-between mt-8">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[68%] outline-none text-[14px] px-4 py-3 border-gray-300 border-[1px]"
            />
            <div className="w-[32%] bg-black text-white tracking-[1px] center cursor-pointer font-semibold">
              APPLY
            </div>
          </div>
          <div className="bg-[#f3f2ee] px-6 py-4 flex flex-col gap-y-5 mt-14">
            <div>CART TOTAL</div>
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div className="text-[#e53637] font-semibold">$ 169.50</div>
            </div>
            <div className="flex justify-between">
              <div>Total</div>
              <div className="text-[#e53637] font-semibold">$ 169.50</div>
            </div>
            <div className="bg-black text-white tracking-[1px] center font-semibold text-center py-3 cursor-pointer">
              PROCEED TO CHECKOUT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
