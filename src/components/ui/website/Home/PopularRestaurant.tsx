"use client"
import CommontypeTitle from '@/components/shared/CommontypeTitle';
import Heading from '@/components/shared/Heading';
import SingleRestaurantCard from '@/components/shared/SingleRestaurantCard';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Slider, { Settings } from 'react-slick'; 

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

]; 

const PopularRestaurant = () => { 
    const [activeIndex, setActiveIndex] = useState(0);  
    const router = useRouter();
  const CustomNextArrow = ({ onClick  }: { onClick?: () => void }) => (
    <div
 className=" absolute lg:flex hidden  -right-10 top-1/3 cursor-pointer  "
      onClick={onClick}
    > 
    <div className="w-10 h-10 bg-white/80  rounded-full flex items-center justify-center shadow-md">

      <FaArrowRightLong color="#767676" size={20} />
    </div>
    </div>
  );
  
  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute lg:flex hidden   -left-10 top-1/3 cursor-pointer"
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
    slidesToShow: 4,
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
          borderRadius: "5px",
          backgroundColor: i === activeIndex ? "#ED6923" : "#D3D3D3",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginTop: "20px"
        }} 
         className=' lg:w-[35px] w-[20px] h-[3px]'
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px"
        }}
      >
        {dots}
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };  
    return (
        <div className='lg:py-[75px] py-[50px] flex items-center justify-center lg:w-full md:w-[600px] w-[400px] '>  

        <div>
    
          <div className="pb-[36px] container">
            <div className='flex lg:flex-row flex-col lg:items-center lg:justify-between'>
              <div>
                <CommontypeTitle title="Popular Restaurant" className="" />
                <Heading title1="Popular" title2=" Restaurant Near me" className="" />
              </div>
    
              <button  onClick={() => router.push(`/restaurants`)} className=' border border-primary text-primary  px-8 rounded-lg h-[48px] hover:bg-primary hover:text-white font-medium lg:mt-0 mt-3'  > View All </button>
            </div>
          </div>  
    
          {/* Slider */}
          <div className="w-full ">
          <div className="  lg:w-[1300px]  md:w-[600px] w-[400px] ">
              <Slider {...settings}>
         
    
              {foodItems.map((item) => <div key={item.id} className=' mx-4 cursor-pointer' onClick={() => router.push(`/restaurants`)}> <SingleRestaurantCard item={item} /></div>)}
           
              </Slider>
            </div> 
            
            </div>  
    
        </div>
    
    
    
        </div>
    );
};

export default PopularRestaurant;