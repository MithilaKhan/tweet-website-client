"use client"; 
import { MapPin, FileText, Package, Utensils } from "lucide-react";
import CommonBanner from '@/components/shared/CommonBanner';
import React from 'react';  
import img1 from "@/assests/img1.png";
import img2 from "@/assests/img2.png";
import img3 from "@/assests/img3.png";
import img4 from "@/assests/img4.png";
import Image from "next/image";
import Heading from "@/components/shared/Heading";

const steps = [
  {
    number: "01",
    title: "Find a Restaurant",
    description: "Discover the best restaurants near you with just a few clicks. Explore a wide range of cuisines and find the perfect place to satisfy your cravings",
    icon: MapPin,
    image: img1
  },
  {
    number: "02",
    title: "Order Food",
    description: "Browse the menu and select your favorite dishes. Place your order with easy to use minimum online ordering experience directly from your chosen restaurant",
    icon: FileText,
    image: img2
  },
  {
    number: "03",
    title: "Received Food",
    description: "Sit back while our team prepares and delivers your order right to your doorstep. Enjoy fast and reliable delivery service every time.",
    icon: Package,
    image: img3
  },
  {
    number: "04",
    title: "Enjoy Food",
    description: "Unpack your meal and savor the delicious flavors of freshly prepared dishes. Share the joy with friends and family or enjoy a quiet moment of indulgence",
    icon: Utensils,
    image: img4
  }
];

const HowWeWork = () => {
    return (
        <div>
            <CommonBanner title='How we work' /> 

            <div className="py-[100px]"> 
                <div className="container">
                    <div className="mx-auto">
                        <div className="text-center mb-6">
                            <Heading title1="How It " title2="Works" className="" />
                        </div>
        
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#FF642F] opacity-20 hidden lg:block" />
          
                            <div className="space-y-[73px]">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="relative">
                                        <div className={`flex flex-col-reverse items-center  lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-center gap-8`}>
                                            <div className={`lg:w-1/2 w-full flex ${index % 2 === 0 ? 'lg:items-start lg:justify-end lg:me-20' : 'lg:items-end lg:justify-start lg:ms-20'} justify-center`}>
                                                <div className="lg:w-44 w-40 lg:h-44 h-40 bg-[#fde5dc] rounded-full flex items-center justify-center">
                                                    <Image src={step?.image} alt={step?.title} height={120} width={120} />
                                                </div>
                                            </div>
                                          
                                            <div className={`lg:w-1/2 w-full flex flex-col ${index % 2 === 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} items-center text-center`}>
                                                <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                                                    <div className="w-[60px] h-[60px] text-[20px] rounded-full bg-[#FF642F] flex items-center justify-center border-[6px] border-[#f8b8a5] text-white font-semibold">
                                                        {step.number}
                                                    </div>
                                                    <h3 className="text-[24px] font-semibold">{step.title}</h3> 
                                                </div>
                                                <p className={`text-[#767676] text-[16px] w-[90%] lg:w-[390px] lg:ps-20 ${index % 2 === 0 ? 'lg:ps-20 lg:pe-0' : 'lg:pe-20 lg:ps-0'}`}>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Circle connector */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF642F] rounded-full hidden lg:block" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default HowWeWork;
