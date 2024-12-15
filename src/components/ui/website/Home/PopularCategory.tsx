/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import category1 from "@/assests/category1.svg"
import category2 from "@/assests/category2.svg"
import category3 from "@/assests/category3.svg"
import category4 from "@/assests/category4.svg"
import category5 from "@/assests/sorma.svg" 
import Heading from "@/components/shared/Heading"; 
import CommontypeTitle from "@/components/shared/CommontypeTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider, { Settings } from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

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
      image: category1 ,
      bgColor: "#E1B47B"
    },
    {
      id: 2,
      name: "Pizza",
      image: category2,
      bgColor: "#FA8D1C"
    },
    {
      id: 3,
      name: "Kebab",
      image: category3,
      bgColor: "#FD683E"
    },
    {
      id: 4,
      name: "Burger",
      image: category4,
      bgColor: "#FF8000"
    },
    {
      id: 5,
      name: "Sandwich",
      image: category5,
      bgColor: "#F75E28"
    },
    {
      id: 6,
      name: "Shawarma",
      image: category1,
      bgColor: "#FCBD00"
    },
    {
      id: 7,
      name: "Taco",
      image: category2,
      bgColor: "#DA270F"
    } ,
    {
        id: 8,
        name: "Donut",
        image: category1 ,
        bgColor: "#E1B47B"
      },
      {
        id: 9,
        name: "Pizza",
        image: category2,
        bgColor: "#FA8D1C"
      },
  ]; 


const PopularCategory = () => {
 
  const router = useRouter();  
  const [activeIndex, setActiveIndex] = useState(0); 
  const CustomNextArrow = ({ onClick  }: { onClick?: () => void }) => (
    <div
 className=" absolute lg:flex hidden  lg:-right-10 right-0 top-1/3 cursor-pointer   "
      onClick={onClick}
    > 
    <div className="w-10 h-10 bg-white/80  rounded-full flex items-center justify-center shadow-md">

      <FaArrowRightLong color="#767676" size={20} />
    </div>
    </div>
  );
  
  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute lg:flex hidden  lg:-left-7 left-0 top-1/3 cursor-pointer z-30"
      onClick={onClick}
    > 
    <div className=" w-10 h-10 bg-white/80  rounded-full flex items-center justify-center shadow-md">

      <FaArrowLeftLong color="#767676" size={20} />
    </div>
    </div>
  ); 

  
  const settings: Settings = {
    infinite: false,
    speed: 500,
    initialSlide: 0,
    // arrows: true, 
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000, 
    nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        style={{
          width: "35px",
          height: "3px",
          borderRadius: "5px",
          backgroundColor: i === activeIndex ? "#ED6923" : "#D3D3D3",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginTop: "20px"
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          gap: "10px"
        }}
      >
        {dots}
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }; 
   



  return (
    <div className="py-[72px] flex items-center justify-center lg:w-full md:w-[600px] w-[400px] lg:px-0 px-10 lg:mt-0 mt-[50px] "> 
    <div>

      {/* Heading */}
      <div className=" lg:pb-[36px] pb-[20px] container ">
          <CommontypeTitle className="" title="Category" /> 
        <Heading title1="Popular" title2="Categories" className=" " />
        </div>

      {/* Slider */}
      <div className="w-full ">
      <div className=" lg:w-[1300px] md:w-[600px]  w-[400px] ">
          <Slider {...settings}>
       
            {foodData.map((data) => (
              <div
                key={data.id}
                onClick={() => router.push(`/category?category=${data.name}`)}
                className="flex justify-center items-center relative p-4 cursor-pointer "
              >
                <div
                  className="lg:w-40 w-36 lg:h-[128px] h-[120px] rounded-lg  flex flex-col justify-end items-center pt-1  "
                  style={{ backgroundColor: data.bgColor }}
                > 
                  <div className=" z-20  absolute -top-0 ">
                    <Image
                      src={data.image}
                      alt={data.name} 
                      width={139} 
                      height={94}
                    
                 className="z-20 pt-1 "
                    />
                  </div>
                  <p className="text-white text-lg font-semibold px-4">
                    {data.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div> 
        
        </div>
    </div>
      </div>
   
  );
};

export default PopularCategory;
