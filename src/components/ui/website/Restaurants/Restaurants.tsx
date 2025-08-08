'use client';

import Heading from '@/components/shared/Heading';
import SingleRestaurantCard from '@/components/shared/SingleRestaurantCard';
import { Checkbox, ConfigProvider, Input, Pagination, Select } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { LuSlidersHorizontal } from 'react-icons/lu';

const FILTERS = [
    { key: 'newRestaurant', label: 'New Restaurant' },
    { key: 'hotelFood', label: 'Hotel Food' },
    { key: 'openNow', label: 'Open Now' },
    { key: 'offer', label: 'Offer' },
    { key: 'strongCards', label: 'Strong Cards' },
    { key: 'freeDelivery', label: 'Free Delivery' },
]; 

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

const Restaurants = () => {
    const router = useRouter();
    const [filters, setFilters] = useState({
        newRestaurant: false,
        hotelFood: true,
        openNow: true,
        offer: false,
        strongCards: false,
        freeDelivery: false,
    });
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const handleChange = (key: string) => (e: CheckboxChangeEvent) => {
        setFilters((prev) => ({
            ...prev,
            [key]: e.target.checked,
        }));
    };

    return (
        <div className="container py-[50px]">
            <div className="grid grid-cols-12 gap-5">
                {/* Filter Sidebar */}
                <div className="sm:hidden lg:grid-cols-3   fixed inset-0 z-50 bg-black/50 transition-opacity duration-300" 
     style={{ display: isFilterVisible ? 'block' : 'none' }}
     onClick={() => setIsFilterVisible(false)}></div>
<div
    className={`fixed z-50 top-32 left-0 lg:w-full lg:h-[450px] h-[550px]   w-3/4 bg-[#D86020] rounded-lg p-6 transition-transform duration-300
        ${isFilterVisible ? 'translate-x-0' : '-translate-x-full'}
    sm:static sm:translate-x-0 sm:col-span-3 sm:block`}
>
    <div className="pt-[25%]">
        <h2 className="text-white text-lg font-medium mb-4">Filter</h2>
        <div className="flex flex-col space-y-4 text-white">
            {FILTERS.map((filter) => (
                <Checkbox
                    key={filter.key}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    checked={filters[filter.key]}
                    onChange={handleChange(filter.key)}
                    className="text-white antd-checkbox-white"
                >
                    {filter.label}
                </Checkbox>
            ))}
        </div>
    </div>
</div>

                <div className="lg:col-span-9 col-span-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5"> 
                    <Heading className="" title1="All" title2="Restaurants" />
                        {/* Search Bar */}
                        <div className="flex items-center gap-3 w-full sm:w-auto"> 

                            <Input
                                placeholder="Search for restaurant"
                                style={{ width: '100%', height: 48 }}
                                className="rounded-md text-sm "
                                prefix={<FiSearch className="text-gray-400" size={20} />}
                            />

                            {/* Filter Button for Mobile */}
                            <button
                                className="sm:hidden flex items-center gap-2 bg-[#ED6923] text-white px-4 py-2 rounded-md h-[48px]"
                                onClick={() => setIsFilterVisible(!isFilterVisible)}
                            >
                                <LuSlidersHorizontal size={20} />
                                
                            </button>

                        {/* Sort By Dropdown */}
                        <div className="flex items-center gap-2">
                     
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Select: {
                                            optionSelectedColor: '#ffffff',
                                            optionSelectedBg: '#ED6923',
                                            optionActiveBg: '#fdf0e9',
                                            activeBorderColor: '#ED6923',
                                            hoverBorderColor: 'transparent',
                                        },
                                    },
                                }}
                            >
                                <Select
                                    defaultValue={'Sort by'}
                                    className="rounded-md px-2 py-1 text-sm"
                                    style={{
                                        width: 120,
                                        height: 48,
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                >
                                    <Select.Option value="Distance">Distance</Select.Option>
                                    <Select.Option value="Alphabetical">Alphabetical</Select.Option>
                                    <Select.Option value="Most Popular">Most Popular</Select.Option>
                                    <Select.Option value="Ratings">Ratings</Select.Option>
                                    <Select.Option value="Delivery Fee">Delivery Fee</Select.Option>
                                </Select>
                            </ConfigProvider>
                        </div> 

                        </div>
                    </div>

                    {/* Heading */}
                 

                    {/* Food Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                        {foodItems.map((item) => (
                            <div
                                key={item.id}
                                className="mx-4 cursor-pointer"
                                onClick={() => router.push(`/food/1`)}
                            >
                                <SingleRestaurantCard item={item} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <ConfigProvider
                        theme={{
                            components: {
                                Pagination: {
                                    itemActiveBg: '#ED6923',
                                },
                            },
                            token: {
                                colorPrimary: '#ffffff',
                                colorBorder: '#ED6923',
                            },
                        }}
                    >
                        <Pagination align="center" defaultCurrent={1} total={50} />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;
