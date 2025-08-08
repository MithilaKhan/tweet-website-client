"use client"
import CommontypeTitle from '@/components/shared/CommontypeTitle';
import Heading from '@/components/shared/Heading';
import SingleRestaurantCard from '@/components/shared/SingleRestaurantCard';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

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
    const router = useRouter();

    return (
    <section className="py-12 md:py-16 lg:py-20  ">
      <div className="container mx-auto px-2 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-10 w-full">
          <div className="mb-6 lg:mb-0 w-full">
            <CommontypeTitle title="Popular Restaurant" className="text-lg font-semibold text-gray-600" />
            <Heading
              title1="Popular"
              title2="Restaurant Near me"
              className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
            />
          </div> 
          <div className='  '> 
          <button
            onClick={() => router.push('/restaurants')}
            className="flex items-center justify-center w-[120px] h-[45px] px-5  text-base font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All
          </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            // pagination={{
            //   clickable: true,
            //   el: '.swiper-pagination',
            //   bulletClass: 'swiper-pagination-bullet',
            //   bulletActiveClass: 'swiper-pagination-bullet-active',
            // }}
            autoplay={{
              delay: 3000,
              // disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper "
          >
            {foodItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="cursor-pointer px-2 flex items-center justify-center pb-3"
                  onClick={() => router.push('/food/1')}
                >
                  <SingleRestaurantCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
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

          {/* Custom Pagination */}
          {/* <div className="swiper-pagination mt-6 flex justify-center gap-2" />  */}
        </div>
      </div>
    </section>
    );
};

export default PopularRestaurant;