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
import category5 from "@/assests/category5.svg" 
import Heading from "@/components/shared/Heading"; 
import CommontypeTitle from "@/components/shared/CommontypeTitle";


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
  

  return (
    <div className="py-[72px] container">
      {/* Heading */}
      <div className=" pb-[36px]  ">
          <CommontypeTitle className="" title="Category" /> 
        <Heading title1="Popular" title2="Categories" className=" " />
        </div>

      {/* Slider */}
      <div className="w-full flex items-center justify-center container">
        <div className=" flex  gap-3 ">
       
            {foodData.map((data) => (
              <div
                key={data.id}
                onClick={() => router.push("/contractor")}
                className="flex justify-center items-center"
              >
                <div
                  className="w-40 h-40 rounded-lg shadow-lg flex flex-col justify-center items-center p-4"
                  style={{ backgroundColor: data.bgColor }}
                >
                  <div className="relative w-24 h-24">
                    <Image
                      src={data.image}
                      alt={data.name}
                      layout="fill"
                      objectFit=""
                    />
                  </div>
                  <p className="text-white text-lg font-semibold mt-4">
                    {data.name}
                  </p>
                </div>
              </div>
            ))}
        
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
