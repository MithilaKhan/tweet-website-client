"use client";

import { ConfigProvider, Steps } from "antd"; 
import { StepsProps } from "antd";
import Image from "next/image";

const deliverySteps: StepsProps['items'] = [
  {
    title:  <p className=" text-xl font-semibold text-[#333333]"> Order Placed </p>,
    description: "Nov 15, 2024, 10:00 AM",
    status: "finish",
  },
  {
    title:  <p className=" text-xl font-semibold text-[#333333]"> Order Confirmed </p>  ,
    description: "Nov 15, 2024, 10:05 AM",
    status: "finish",
  },
  {
    title: <p className=" text-xl font-semibold text-[#333333]"> Order Packed </p>,
    description: "Nov 15, 2024, 10:10 AM",
    status: "finish",
  },
  {
    title: <p className=" text-xl font-semibold text-[#333333]"> On the way </p> ,
    description: "Deliveryman is heading your way",
    status: "process",
  },
  {
    title: <p className=" text-xl font-semibold text-[#333333]"> Delivered </p>,
    description:  <div className=" flex flex-col "> 
         <p> Estimated delivery time </p>  
         <p className="text-[#FF4D00] text-lg font-semibold">25 - 30 Minutes</p>
    </div> 
   ,
    status: "wait",
  },
];

const TrackOrder = () => {
  return (
    <div className=" ">
    <div className="bg-white rounded-xl p-10 pb-0 w-full  shadow-sm"> 
        <p className=" border-t-2 border-dotted border-[#767676] mt-5"> </p>
      <div className="border border-primary rounded-xl px-4 py-3 mb-6 w-fit mx-auto -mt-6 bg-[#FDF0E9]">
        <p className="text-gray-600 text-sm">Order ID: <span className="text-[#333333] font-medium"> 2138192017313256 </span> </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl text-primary font-semibold mb-4">Order Details</h2>
        <div className="space-y-2 w-1/2">
          <div className="flex gap-3">
            <span className="text-gray-600">Order From:</span>
            <span className="font-medium">Best Fried Chicken (BFC) - Austria</span>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-600">Delivering to:</span>
            <span className="font-medium">924/C Shahid Baki Rd, Austria</span>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-600">Total Amount:</span>
            <span className="font-medium text-[#FF4D00]">€ 30</span>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 "> 
        <ConfigProvider
  theme={{
    token: {
        colorPrimary:"#ED6923"
    },
  }}
> 
          <Steps
            direction="vertical"
            size="default"
            current={3}
            items={deliverySteps}
            className="custom-steps"  
            style={{
                height:"450px"
            }}
          />
</ConfigProvider>
          <div className=" ml-8">
           
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/track.svg"
            alt="Delivery Illustration"
            width={750}
            height={750}
            className=" h-auto"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default TrackOrder;
