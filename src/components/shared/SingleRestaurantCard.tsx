/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { ClockCircleOutlined } from "@ant-design/icons";

import { IoBicycle } from "react-icons/io5";
import { PiSealPercentLight } from "react-icons/pi";
import { TiStarFullOutline } from "react-icons/ti";

interface Item {
    id: number;
    title: string;
    restaurant: string;
    time: string;
    rating: number;
    price: string;
    image: string;
    discount: string;
    deliveryPrice: string;
}

interface ItemType {
    item: Item;
}

const SingleRestaurantCard = ({ item }: ItemType) => {
    return (
        <div 

        className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white rounded-lg lg:w-[297px] w-full" >
    
            <div className="relative">
                <img
                    alt={item.title}
                    src={item.image}
                    className="h-48 w-full object-cover z-0"
                />



                <div
                    className=" absolute top-3 left-0  text-white flex items-center justify-center gap-1 text-[12px] bg-primary px-3 rounded-r-full py-2 "

                > <p> <PiSealPercentLight size={20} /> </p>  <p className="font-semibold"> {item.discount} </p>  </div>

               

                <div className="flex items-center text-[#333333] text-sm bg-white/80 absolute bottom-3 right-2 px-3 py-1 rounded-full font-medium">
                    <TiStarFullOutline className="mr-1 " color="#ED6923" size={20} />
                    {item.rating} <span className="text-[#707070] ms-1"> (85) </span>
                </div>

            </div>
       
   
        <div className="space-y-2 p-3">
            <div className=" flex items-center justify-between ">

                <h3 className="font-semibold text-[#333333]  text-[18px]"> {item.restaurant}</h3>

            </div>

            <div className="flex items-center justify-between pt-2">
                <div className="flex items-center justify-between  gap-2">
                    <div className="flex items-center text-primary font-medium  text-sm">
                        <ClockCircleOutlined size={16} color='#5C5C5C' className="mr-1" />
                        {item.time}
                    </div>
                    <div className="flex items-center text-primary font-medium  text-sm">
                        <IoBicycle size={20} color='#5C5C5C' className="mr-1" />
                        Delivery Fee  {item.deliveryPrice}
                    </div>

                </div>

             
            </div>   

            <div className='flex items-center gap-2 pb-2'>
{
            ["Pizza", "Burger", "Sandwich", "Biryani"].map((item, index) => {
  return (
    <div
      key={index} 
      className="flex items-center gap-2 text-[#767676] text-sm font-[400] "
    >
      {item} |
    </div>
  );
})
}

            </div>

             
        </div>
    </div>
    );
};

export default SingleRestaurantCard;