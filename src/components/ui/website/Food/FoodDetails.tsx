"use client";
import { SearchOutlined } from '@ant-design/icons'
import { Input, Rate } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import Cart from './Cart';
import { LuBadgeInfo } from 'react-icons/lu';
import { IoBicycle, IoLocationOutline } from 'react-icons/io5'; 
import SingleFoodCard from '@/components/shared/SingleFoodCard';

const foodItems = [
    {
        id: 1,
        title: "Burger with Emmentaler Cheese",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.5,
        price: "€44.99",
        image: "/food1.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 2,
        title: "Tandoori Chicken",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food2.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 3,
        title: "Döner Kebab",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food3.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 4,
        title: "Classic Wiener Schnitzel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.6,
        price: "€44.99",
        image: "/food4.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 5,
        title: "Vienna Sausage Platter",
        restaurant: "Burger King",
        time: "20 min",
        rating: 4.4,
        price: "€44.99",
        image: "/food5.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 6,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.9,
        price: "€44.99",
        image: "/food9.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 7,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food10.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 8,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food8.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 9,
        title: "Burger with Emmentaler Cheese",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.5,
        price: "€44.99",
        image: "/food1.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 10,
        title: "Tandoori Chicken",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food2.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 11,
        title: "Döner Kebab",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food3.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 12,
        title: "Classic Wiener Schnitzel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.6,
        price: "€44.99",
        image: "/food4.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 13,
        title: "Vienna Sausage Platter",
        restaurant: "Burger King",
        time: "20 min",
        rating: 4.4,
        price: "€44.99",
        image: "/food5.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 14,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.9,
        price: "€44.99",
        image: "/food9.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 15,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food10.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 16,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food8.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    }
]; 

const FoodDetails = () => {
    const [reviews, setReviews] = useState(false);
    const [info, setInfo] = useState(false);
    const [activeFilter, setActiveFilter] = useState("Popular"); 
    const [visibleCount, setVisibleCount] = useState(8); 

    const handleSeeMore = () => {
      setVisibleCount((prevCount) => prevCount + 8); 
    };

    const filters = ["Popular", "Pizza", "Burger", "Set Meals"];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };


    return (
        <div className=" ">
            {/* Header */}
            <div className="flex items-start gap-4 py-[50px] container">
                <Image
                    src="/burgerking.svg"
                    alt="Burger King"
                    width={160}
                    height={140}
                    className="rounded-lg "
                />
                <div className="flex-1 py-1">

                    <h1 className="text-[36px] font-semibold text-[#343A40]">Mcdonald&apos;s</h1>
                    <div className="flex items-center text-sm gap-3 pt-">
                        <Rate allowHalf disabled defaultValue={4.2} className='text-orange-500' />
                        <p className=' flex items-center gap-1 text-[14px] text-[#262626]'>
                            <span>4.2</span>
                            <span className="">( 145 Ratings )</span>
                        </p>

                        <p className="text-primary  cursor-pointer underline" onClick={() => setReviews(true)}>See Reviews</p>
                        <p className="text-primary cursor-pointer underline flex items-center gap-0.5 " onClick={() => setInfo(true)}>
                            <span> <LuBadgeInfo size={14} /> </span>
                            <span>  More Info </span>
                        </p>
                    </div>

                    <div className="text-[#5C5C5C] mt-3">
                        <div className="flex items-center gap-1 text-[16px] text-[#5C5C5C]">
                            <p> <IoBicycle size={16} /> </p>
                            <p> Delivery Fee 10€</p>
                        </div>
                        <div className="flex items-center gap-1 mt-[11px] ">
                            <p> <IoLocationOutline size={16} color='#ed6923' /> </p>
                            <p> Am Hauptplatz 2A, 1030 Vienna, Austria</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Navigation */}
            <div className="  bg-white py-2.5 flex items-center justify-center ">
                <div className=' flex items-center container gap-6 '>
                    <Input
                        suffix={<SearchOutlined className="text-[#767676] text-[22px]" />}
                        placeholder="Search food"
                        className=" shadow"
                        style={{ width: 330 }}
                    />
                    <div className="flex gap-9 ">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => handleFilterClick(filter)}
                                className={` font-medium text-[16px]  ${activeFilter === filter ? " text-primary" : " text-[#333333]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                </div>

            </div>

            {/* Content */}
            <div className=" grid grid-cols-12 gap-[10%] container mt-[50px]">
                {/* Menu Items */} 
                <div className='col-span-6 mb-16'> 
                <div className=" grid grid-cols-2 gap-6 ">
                {foodItems.slice(0, visibleCount).map((item) => <div key={item.id} className=' ' > <SingleFoodCard item={item} /></div>)}   
                </div>
                {visibleCount < foodItems.length && ( 
        <div className="flex items-center justify-center mt-[50px]">
          <button
            className="px-6 py-2 bg-primary text-white rounded h-[50px]"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
               
                </div>

                {/* Cart */}
                <div className="col-span-6  mb-[50px]">
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;