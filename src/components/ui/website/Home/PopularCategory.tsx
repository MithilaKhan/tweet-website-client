/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import category1 from "@/assests/category1.svg";
import category2 from "@/assests/category2.svg";
import category3 from "@/assests/category3.svg";
import category4 from "@/assests/category4.svg";
import category5 from "@/assests/sorma.svg";
import Heading from "@/components/shared/Heading";
import CommontypeTitle from "@/components/shared/CommontypeTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";

export interface FoodItem {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

export const foodData: FoodItem[] = [
  {
    id: 1,
    name: "Donut",
    image: category1,
    bgColor: "#E1B47B",
  },
  {
    id: 2,
    name: "Pizza",
    image: category2,
    bgColor: "#FA8D1C",
  },
  {
    id: 3,
    name: "Kebab",
    image: category3,
    bgColor: "#FD683E",
  },
  {
    id: 4,
    name: "Burger",
    image: category4,
    bgColor: "#FF8000",
  },
  {
    id: 5,
    name: "Sandwich",
    image: category5,
    bgColor: "#F75E28",
  },
  {
    id: 6,
    name: "Shawarma",
    image: category1,
    bgColor: "#FCBD00",
  },
  {
    id: 7,
    name: "Taco",
    image: category2,
    bgColor: "#DA270F",
  },
  {
    id: 8,
    name: "Donut",
    image: category1,
    bgColor: "#E1B47B",
  },
  {
    id: 9,
    name: "Pizza",
    image: category2,
    bgColor: "#FA8D1C",
  },
];

const PopularCategory = () => {
  const router = useRouter();

  return (
    <div className="py-[72px] flex items-center justify-center lg:w-full md:w-[600px] w-[400px] lg:px-0 px-10 lg:mt-0 mt-[50px]">
      <div>
        {/* Heading */}
        <div className="lg:pb-[36px] pb-[20px] container">
          <CommontypeTitle className="" title="Category" />
          <Heading title1="Popular" title2="Categories" className="" />
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative">
          <div className="lg:w-[1300px] md:w-[600px] w-[400px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={7}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{
                delay: 2000,
                // disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 7,
                  spaceBetween: 0,
                },
              }}
              className="mySwiper w-full"
            >
              {foodData.map((data) => (
                <SwiperSlide key={data.id}>
                  <div
                    onClick={() => router.push(`/category?category=${data.name}`)}
                    className="flex justify-center items-center relative p-4 cursor-pointer"
                  >
                    <div
                      className="lg:w-40 w-36 lg:h-[128px] h-[120px] rounded-lg flex flex-col justify-end items-center pt-1"
                      style={{ backgroundColor: data.bgColor }}
                    >
                      <div className="z-20 absolute -top-0">
                        <Image
                          src={data.image}
                          alt={data.name}
                          width={139}
                          height={94}
                          className="z-20 pt-1"
                        />
                      </div>
                      <p className="text-white text-lg font-semibold px-4">
                        {data.name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="swiper-button-prev absolute z-10 top-[40%] bg-primary p-1 rounded-full shadow-md"
              style={{ height: "40px", width: "40px", left: "-2px" }}
            >
              <BiChevronLeft size={24} color="white" />
            </button>
            <button
              className="swiper-button-next absolute z-10 top-[40%] bg-primary p-1 rounded-full shadow-md"
              style={{ height: "40px", width: "40px", right: "-2px" }}
            >
              <BiChevronRight size={24} color="white" />
            </button>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default PopularCategory;