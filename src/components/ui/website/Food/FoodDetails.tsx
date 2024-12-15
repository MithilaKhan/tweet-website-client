"use client";
import { useState } from "react";
import { Input, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import { LuBadgeInfo } from "react-icons/lu";
import { IoBicycle, IoLocationOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import SingleFoodCard from "@/components/shared/SingleFoodCard";
import ReviewsModal from "./ReviewsModal";
import MoreInfo from "./MoreInfo";
import Cart from "./Cart";
 
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
  const [isCartOpen, setCartOpen] = useState(false);

  const handleSeeMore = () => setVisibleCount((prevCount) => prevCount + 8);

  const filters = ["Popular", "Pizza", "Burger", "Set Meals"];

  return (
    <div>
      {/* Header */}
      <div className="flex lg:flex-row flex-col items-start gap-4 py-12 container">
        <Image
          src="/burgerking.svg"
          alt="Burger King"
          width={160}
          height={140}
          className="rounded-lg"
        />
        <div className="flex-1 py-1">
          <h1 className="text-3xl font-semibold text-gray-800">
            Mcdonald&apos;s
          </h1>
          <div className="flex lg:flex-row flex-wrap items-center text-sm gap-3"> 
           
            <Rate allowHalf disabled defaultValue={4.2} className="text-orange-500" />
            <p className="flex items-center gap-1 text-gray-800 text-sm">
              <span>4.2</span>
              <span>(145 Ratings)</span>
            </p> 

            <div className="flex items-center lg:gap-2 gap-5">

            <p
              className="text-primary cursor-pointer underline"
              onClick={() => setReviews(true)}
            >
              See Reviews
            </p>
            <p
              className="text-primary cursor-pointer underline flex items-center gap-0.5"
              onClick={() => setInfo(true)}
            >
              <LuBadgeInfo size={14} />
              More Info
            </p>
            </div>
          </div>
          <div className="text-gray-600 mt-3">
            <div className="flex items-center gap-1">
              <IoBicycle size={16} />
              <p>Delivery Fee 10€</p>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <IoLocationOutline size={16} color="#ed6923" />
              <p>Am Hauptplatz 2A, 1030 Vienna, Austria</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white lg:py-3 py-5 flex items-center justify-center">
        <div className="flex lg:flex-row flex-col items-center container lg:gap-6 gap-4">
          <Input
            suffix={<SearchOutlined className="text-gray-500 text-xl" />}
            placeholder="Search food"
            className="shadow"
            style={{ width: 330 }}
          />
          <div className="flex lg:gap-4 gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-medium ${
                  activeFilter === filter ? "text-primary" : "text-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-12 gap-8 container mt-12">
        <div className="col-span-12 lg:col-span-6 mb-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {foodItems.slice(0, visibleCount).map((item) => (
              <SingleFoodCard key={item.id} item={item} />
            ))}
          </div>
          {visibleCount < foodItems.length && (
            <div className="flex justify-center mt-12">
              <button
                className="px-6 py-2 bg-primary text-white rounded"
                onClick={handleSeeMore}
              >
                See More
              </button>
            </div>
          )}
        </div>

        {/* Cart Section */}
        <div
          className={`  lg:col-span-6   ${
            isCartOpen ? "fixed right-0 top-0 h-full w-[90%] z-50" : "hidden lg:block"
          }`}
        >
          <Cart />
        </div>

        {/* Cart Toggle Button (Mobile Only) */}
        <button
          className="fixed bottom-4 right-4 bg-primary text-white rounded-full p-3 shadow-lg lg:hidden z-[99]"
          onClick={() => setCartOpen(!isCartOpen)}
        >
          <FiShoppingCart size={24} />
        </button>
      </div>

      {/* Modals */}
      <ReviewsModal open={reviews} onClose={() => setReviews(false)} />
      <MoreInfo open={info} onClose={() => setInfo(false)} />
    </div>
  );
};

export default FoodDetails;
