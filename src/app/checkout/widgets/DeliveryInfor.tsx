"use client";

import CustomCheckbox from "@/components/CustomHTML/CustomCheckbox";
import { useState } from "react";

export const DeliveryInfor = () => {
  const paymentMenthods = [
    "Pay directly upon delivery",
    "Pay by International Card / Domestic Card / QR Code",
  ];
  const deliveryMenthods = ["Standard speed (from 2 - 5 working days)"];
  const [selectedPaymentMenthods, setSelectedPaymentMenthods] = useState<number | null>(
    paymentMenthods.length === 1 ? 0 : null
  );
  const [selectedDeliveryMenthods, setSelectedDeliveryMenthods] = useState<number | null>(
    deliveryMenthods.length === 1 ? 0 : null
  );

  return (
    <div>
      <div className="font-bold bg-[#f3f2ee] pl-5 py-2 text-[20px]">
        DELIVERY INFORMATION
      </div>
      <div className="flex flex-col gap-y-6 mt-8 text-[18px]">
        <div className="relative w-full">
          <input
            type="text"
            id="fullname"
            placeholder=" "
            className="outline-none border-solid border-2 px-4 py-2 w-[100%] lg:w-[80%] transition-all peer"
          />
          <label htmlFor="fullname" className="label-inp">
            Full name
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="phone"
            placeholder=" "
            className="outline-none border-solid border-2 px-4 py-2 w-[100%] lg:w-[80%] transition-all peer"
          />
          <label htmlFor="phone" className="label-inp">
            Phone number
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="outline-none border-solid border-2 px-4 py-2 w-[100%] lg:w-[80%] transition-all peer"
          />
          <label htmlFor="email" className="label-inp">
            Email
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="address"
            placeholder=" "
            className="outline-none border-solid border-2 px-4 py-2 w-[100%] lg:w-[80%] transition-all peer"
          />
          <label htmlFor="address" className="label-inp">
            Address
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="city"
            placeholder=" "
            className="outline-none border-solid border-2 px-4 py-2 w-[100%] lg:w-[80%] transition-all peer"
          />
          <label htmlFor="city" className="label-inp">
            Town/City
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="country"
            placeholder=" "
            className="outline-none border-solid border-2 px-4 py-2 w-[100%] lg:w-[80%] transition-all peer"
          />
          <label htmlFor="country" className="label-inp">
            Country/State
          </label>
        </div>
      </div>

      <div className="font-bold bg-[#f3f2ee] pl-5 py-2 text-[20px] mt-10">
        DELIVERY METHOD
      </div>
      <div className="flex justify-between flex-wrap items-center pr-3">
        {deliveryMenthods.map((label, index) => (
          <CustomCheckbox
            key={index}
            label={label}
            checked={selectedDeliveryMenthods === index}
            onChange={() => setSelectedDeliveryMenthods(index)}
          />
        ))}
        <div className="text-[18px] font-bold mt-7">0 $</div>
      </div>

      <div className="font-bold bg-[#f3f2ee] pl-5 py-2 text-[20px] mt-7">
        PAYMENT METHODS
      </div>
      {paymentMenthods.map((label, index) => (
        <CustomCheckbox
          key={index}
          label={label}
          checked={selectedPaymentMenthods === index}
          onChange={() => setSelectedPaymentMenthods(index)}
        />
      ))}
    </div>
  );
};
