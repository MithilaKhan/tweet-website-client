/* eslint-disable @next/next/no-img-element */
"use client";

import { Input, Rate } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Image from "next/image"; 
import { Rancho } from "next/font/google";
import { IoMdLocate } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";

const rancho = Rancho({ subsets: ["latin"], weight: "400" }); 

const HeroSection = () => {
    return (
        <main className="bg-gradient-to-r from-[#fddac6] to-[#f8e4da] h-[calc(775px)] flex items-center justify-center">
        <div className="container mx-auto relative flex items-center">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Left Section */}
            <div className="w-full">
              <h2 className={`text-primary text-[100px] font-normal tracking-tight  ${rancho.className}`}>Hungry?</h2>
              <h1 className="text-[72px] font-[#000000] font-bold tracking-tight  ">
                Let Us <span className="text-primary">Bring</span>
              </h1>
              <h1 className="text-[72px] font-bold text-primary mb-2 tracking-tight">The Feast to You</h1>
      
              <p className="text-gray-700 text-lg mb-8 max-w-xl">
                Explore hundreds of delicious options from top restaurants and enjoy fast, reliable delivery right to you.
              </p>
      
              {/* Search Bar */}
              <div className="flex gap-2 max-w-xl">
                <Input
                 
                  placeholder="Enter your location"
                  prefix={<EnvironmentOutlined className="text-gray-400" size={20} />} 
                  suffix={ 
                    <div className=" flex items-center gap-1">

                        <button className="text-primary hover:text-[#FF8B35] text-[16px] flex items-center gap-1 px-3"> <span> <IoMdLocate size={16}/>  </span> <span> Locate me </span> </button> 
                        <button style={{
                                                height: 64,
                                            }}
                                            type="submit"
                                            className="bg-primary text-white px-5 text-xl font-medium  rounded-r-lg flex items-center justify-center">
                  Find Food
                </button>
                    </div>
                  } 

                  style={{ 
                    height: 64
                  }}
                  className="flex-grow heroInput"
                />

              </div>
            </div>
      
            {/* Right Section - Hero Image */}
            <div className="w-full relative "> 
                <div className=" mx-auto w-full"> </div>
              <img
                src="/bannerimg.svg"
                alt="Happy customer with burger"
               
                className="object-cover h-[533px] w-[690px] rounded-md "
              />
      
              {/* Customer Reviews Card */}
              <div className="absolute left-[20px] top-0 bg-white rounded-xl p-4 ">
                <div className="flex flex-col items-center gap-[10px]">
                  <div className="flex -space-x-2">
                    <Image
                      src="https://i.pravatar.cc/40?img=1"
                      alt="Customer"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://i.pravatar.cc/40?img=2"
                      alt="Customer"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://i.pravatar.cc/40?img=3"
                      alt="Customer"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border-2 border-white">
                      <span className="text-sm text-gray-600">+</span>
                    </div>
                  </div> 

                  <div>
                    <p className="font-semibold text-center pb-2.5 ">Satisfied Customer</p>
                    <div className="flex items-center gap-1">
                     <FaStar size={18} color="#F4C700" />
                      <span className="text-sm text-gray-500">5.0</span>
                      <span className="text-sm text-gray-500">(3K Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Restaurant Card */}
              <div className="absolute left-0 -bottom-14 bg-white/50 backdrop-blur	 p-[15px] rounded-lg shadow-lg">
                <div className="w-[322px] ">
                  <div className="flex gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                      alt="Restaurant"
                      width={110}
                      height={113}
                      className="rounded-lg "
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-[16px]">Flavor Fusion Bistro</h3>
                          <p className="text-sm text-gray-500">Kaliurang, Seleman</p>
                        </div>
                       
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        <Rate disabled defaultValue={4.9} count={1} className="text-primary" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* 24/7 Delivery Badge */}
              <div className="absolute right-0 -bottom-10 bg-white/50 backdrop-blur rounded-xl p-5 shadow-lg flex items-center gap-4 px-6"> 
              <div className=" bg-[#F5EAE3] w-9 h-9 rounded-full flex items-center justify-center "> 
                 <p><LiaShippingFastSolid size={23} color="#ED6923"  /></p>
                 </div>
                
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-sm text-gray-500">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    );
};

export default HeroSection;