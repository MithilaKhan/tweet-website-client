"use client";
import Heading from '@/components/shared/Heading';
import SingleFoodCard from '@/components/shared/SingleFoodCard';
import { ConfigProvider, Pagination, Select } from 'antd';
import { useSearchParams } from 'next/navigation';
import React from 'react';

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

const Category = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    console.log(category);


    return (
        <div className=' container py-[52px]'>
            <div className=' flex items-center justify-between pb-5'>
                <Heading className='' title1={category || 'Default Category'} title2="" />
                <div className=' flex items-center  gap-2'>
                    <p className='text-[14px] text-[#333333] font-medium'> Sort by</p>

                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    optionSelectedColor: '#ffffff',
                                    optionSelectedBg: '#ED6923',
                                    optionActiveBg: '#fdf0e9',
                                    activeBorderColor: '#ED6923',
                                    hoverBorderColor: "transparent",
                                },
                            },
                        }}
                    >
                        <Select defaultValue={'price'} className=" rounded-md px-2 py-1 text-sm"
                            style={{
                                width: 120,
                                height: 40,

                                outline: "none",
                                boxShadow: "none",
                            }}>
                            <Select.Option value="price">Price</Select.Option>
                            <Select.Option value="distance">Distance</Select.Option>
                            <Select.Option value="rating">Rating</Select.Option>
                            <Select.Option value="feed">Delivery Fee</Select.Option>
                        </Select>
                    </ConfigProvider>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {foodItems.map((item) => <div key={item.id} className=' '> <SingleFoodCard item={item} /></div>)}
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Pagination: {
                            itemActiveBg: "#ED6923"
                        },
                    },
                    token: {
                        colorPrimary: "#ffffff",
                        colorBorder: "#ED6923",


                    },
                }}
            >

                <Pagination align="center" defaultCurrent={1} total={50} />
            </ConfigProvider>
        </div>
    );
};

export default Category;