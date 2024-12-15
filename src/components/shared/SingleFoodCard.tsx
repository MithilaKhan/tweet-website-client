"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { ClockCircleOutlined } from "@ant-design/icons";
import { FaPlus } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";
import { PiSealPercentLight } from "react-icons/pi";
import { TiStarFullOutline } from "react-icons/ti";
import { GoHeart, GoHeartFill } from 'react-icons/go';

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
const SingleFoodCard = ({ item }: ItemType) => { 
    const [isFavorite, setIsFavorite] = useState(false) 
    console.log(isFavorite);
    const handleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setIsFavorite(!isFavorite)
    }
    return (
        <div 

            className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white rounded-lg lg:w-[297px] w-[320px] " >
        
                <div className="relative">
                    <img
                        alt={item.title}
                        src={item.image}
                        className="h-48 w-full object-cover z-0"
                    />



                    <div
                        className=" absolute top-3 left-0  text-white flex items-center justify-center gap-1 text-[12px] bg-primary px-3 rounded-r-full py-2 "

                    > <p> <PiSealPercentLight size={20} /> </p>  <p className="font-semibold"> {item.discount} </p>  </div>

                    <div className=" absolute top-3 right-2 w-10 h-10 bg-white/80  rounded-full flex items-center justify-center" >
                        <p onClick={(e) => handleFavorite(e)} >

                    {isFavorite ? (
                        <GoHeartFill 
                            size={24}
                            className="text-xl"
                            color="#ED6923"
                        />
                    ) : (
                        <GoHeart
                            size={24}
                            className="text-xl"
                            color="#ED6923"
                        />
                    )}
                        </p>
                    </div>

                    <div className="flex items-center text-[#333333] text-sm bg-white/80 absolute bottom-3 right-2 px-3 py-1 rounded-full font-medium">
                        <TiStarFullOutline className="mr-1 " color="#ED6923" size={20} />
                        {item.rating} <span className="text-[#707070] ms-1"> (85) </span>
                    </div>

                </div>
           
       
            <div className="space-y-2 p-3">
                <div className=" flex items-center justify-between ">

                    <h3 className="font-semibold text-[#333333]  text-[18px]">{item.title}</h3>

                    <div className="flex flex-col ">
                        <p className=" text-gray-500 text-[17px] decoration-1 font-medium line-through"> € 40 </p>
                        <p className="font-bold text-primary text-[18px]">{item.price}</p>
                    </div>
                </div>
                <div className="flex items-center text-[#262626] text-[16px]">
                    <img
                        src="/resturentlogo.png"
                        alt="Restaurant Logo"
                        className="w-4 h-4 mr-1"
                    />
                   <p className=' text-[16px] font-normal'>   {item.restaurant} </p> 
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center  gap-2">
                        <div className="flex items-center text-[#5C5C5C] font-medium  text-sm">
                            <ClockCircleOutlined size={16} className="mr-1" />
                            {item.time}
                        </div>
                        <div className="flex items-center text-[#5C5C5C] font-medium  text-sm">
                            <IoBicycle size={20} className="mr-1" />
                            {item.deliveryPrice}
                        </div>

                    </div>

                    <button className="bg-primary text-white rounded-full w-9 h-9 flex  font-extrabold items-center justify-center text-xl">
                        <FaPlus size={17} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodCard;