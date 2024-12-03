/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, Badge } from "antd";
import { HeartFilled, ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import CommonBanner from '@/components/shared/CommonBanner';
import React from 'react';
import Heading from "@/components/shared/Heading";
import { FaPlus } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { PiSealPercentLight } from "react-icons/pi";
import { TiStarFullOutline } from "react-icons/ti";

const foodItems = [
    {
        id: 1,
        title: "Burger with Emmentaler Cheese",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.5,
        price: "€44.99",
        image: "/food1.png",
        discount: "50% OFF"
    },
    {
        id: 2,
        title: "Tandoori Chicken",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food2.png",
        discount: "50% OFF"
    },
    {
        id: 3,
        title: "Döner Kebab",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food3.png",
        discount: "50% OFF"
    },
    {
        id: 4,
        title: "Classic Wiener Schnitzel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.6,
        price: "€44.99",
        image: "/food4.png",
        discount: "50% OFF"
    },
    {
        id: 5,
        title: "Vienna Sausage Platter",
        restaurant: "Burger King",
        time: "20 min",
        rating: 4.4,
        price: "€44.99",
        image: "/food5.png",
        discount: "50% OFF"
    },
    {
        id: 6,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.9,
        price: "€44.99",
        image: "/food9.png",
        discount: "50% OFF"
    },
    {
        id: 7,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food10.png",
        discount: "50% OFF"
    },
    {
        id: 8,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food8.png",
        discount: "50% OFF"
    },
    {
        id: 9,
        title: "Burger with Emmentaler Cheese",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.5,
        price: "€44.99",
        image: "/food1.png",
        discount: "50% OFF"
    },
    {
        id: 10,
        title: "Tandoori Chicken",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food2.png",
        discount: "50% OFF"
    },
    {
        id: 11,
        title: "Döner Kebab",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food3.png",
        discount: "50% OFF"
    },
    {
        id: 12,
        title: "Classic Wiener Schnitzel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.6,
        price: "€44.99",
        image: "/food4.png",
        discount: "50% OFF"
    },
    {
        id: 13,
        title: "Vienna Sausage Platter",
        restaurant: "Burger King",
        time: "20 min",
        rating: 4.4,
        price: "€44.99",
        image: "/food5.png",
        discount: "50% OFF"
    },
    {
        id: 14,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.9,
        price: "€44.99",
        image: "/food9.png",
        discount: "50% OFF"
    },
    {
        id: 15,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food10.png",
        discount: "50% OFF"
    },
    {
        id: 16,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food8.png",
        discount: "50% OFF"
    }
];

const Favorite = () => {
    return (
        <div>
            <CommonBanner title='Favorite' />

            <div className='container py-[100px]' >
                <div className=' pb-[40px]'>
                    <Heading className='  ' title1='Favorite ' title2=' ' />

                    <div className="">

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {foodItems.map((item) => (
                                <Card
                                    key={item.id}
                                    className="relative overflow-hidden hover:shadow-lg transition-shadow"
                                    cover={
                                        <div className="relative">
                                            <img
                                                alt={item.title}
                                                src={item.image}
                                                className="h-48 w-full object-cover z-0"
                                            />

                                          
                                               
                                                    <div
                                                        className=" absolute top-3 left-0  text-white flex items-center justify-center gap-1 text-[12px] bg-primary px-3 rounded-r-full py-2 "
                                                     
                                                    > <p> <PiSealPercentLight size={20} /> </p>  <p className="font-medium"> {item.discount} </p>  </div>
                                               
                                                <div className=" absolute top-3 right-2 w-10 h-10 bg-white/80  rounded-full flex items-center justify-center">

                                                    <IoHeart
                                                        size={24}
                                                        className="  text-xl"
                                                        color="#ED6923"
                                                    />
                                                </div>

                                                <div className="flex items-center text-[#333333] text-sm bg-white/80 absolute bottom-3 right-2 px-3 py-1 rounded-full">
                                                <TiStarFullOutline className="mr-1 " color="#ED6923" size={20} />
                                                {item.rating} <span className="text-[#707070] ms-1"> (85) </span>
                                            </div> 

                                        </div>
                                    }
                                    bodyStyle={{ padding: "12px" }}
                                >
                                    <div className="space-y-2"> 
                                        <div className=" flex items-center justify-between ">

                                        <h3 className="font-semibold text-[#333333]  text-[18px]">{item.title}</h3> 

                                        <div className="flex flex-col gap-1">
                                            <p className=" text-gray-500 text-[16px] decoration-2 font-semibold line-through"> € 40 </p> 
                                            <p className="font-bold text-primary text-[18px]">{item.price}</p>
                                        </div>
                                        </div>
                                        <div className="flex items-center text-[#262626] text-[16px]">
                                            <img
                                                src="/resturentlogo.png"
                                                alt="Restaurant Logo"
                                                className="w-4 h-4 mr-1"
                                            />
                                            {item.restaurant}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <ClockCircleOutlined className="mr-1" />
                                                {item.time}
                                            </div>
                                       
                                        </div>
                                        <div className="flex items-center justify-between pt-2">
                                           
                                            <button className="bg-primary text-white rounded-full w-8 h-8 flex  font-extrabold items-center justify-center text-xl">
                                                <FaPlus size={17} />
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorite;