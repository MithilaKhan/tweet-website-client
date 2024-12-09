"use client"
import CommontypeTitle from '@/components/shared/CommontypeTitle';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider, { Settings } from 'react-slick';

const CustomerSaying = () => {  
    const [activeIndex, setActiveIndex] = useState(0); 

    const reviews = [
        {
            id: 1, 
            name: 'Leon Fischer',
            review: ' Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery.', 
            image: '/person.svg'  ,
            rating:5 
        } , 
        {
            id: 2, 
            name: 'Asadujjaman Mahfuj',
            review: ' Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery.', 
            image: '/person.png'  ,
            rating:4 
        } , 
        {
            id: 3, 
            name: 'John Doe',
            review: ' Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery.', 
            image: '/person.svg'  ,
            rating:5 
        } , 

    ] 

    const settings: Settings = {
        infinite: true,
        speed: 500,
        initialSlide: 0,
        arrows: false,  
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,   
        beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        style={{
          width: i === activeIndex ? "12px" : "10px" ,
          height: i === activeIndex ? "12px" : "10px",
          borderRadius: "100%",
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
          
                padding: "1px",
             
              }} 
              className='flex items-center justify-center'
            >
              {dots}
            </div>
          ),
      };  

    return (
        <div className='py-20'>
          <section className="container w-full">
      <div className="flex  items-center w-full gap-[73px]">
        <div className="space-y-6 w-1/2">
          <div className="space-y-2">
            <CommontypeTitle className="text-sm" title='Testimonial' /> 
            <div  className={` text-[#343B46]  font-[600] lg:text-[40px] text-[28px] `} >
   <span> What </span> <span className=' text-primary'> Customer Saying</span> <br /> About our Services
  </div> 
       
          </div>  

          <Slider {...settings}> 

          {
            reviews.map((review) => (
                <div key={review.id} className="border border-[#FFCABB] rounded-2xl p-[25px] space-y-4 w-[485px]">
                <div className="text-gray-700 tracking-wider ">
                <RiDoubleQuotesL size={20} color="#ED6923" className="" />
        <div>
          <p className='ps-5'> 
             
            Love the convenience of Tweet! Fast, reliable, and super easy to use for
            all your food delivery  <span className='flex'> cravings. <sub>  <RiDoubleQuotesR size={20} color="#ED6923" className="" /> </sub>   </span>
          </p>
        </div>
        
      </div>
                  
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.image}
                      alt="Customer avatar"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-600">Satisfied Customer</p>
                    </div>
                    <div className="ml-auto flex bg-primary p-1 gap-0.5">
                      {Array(review.rating).fill(null).map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-[#ffffff] text-[#ffffff] "
                        />
                      ))}
                    </div>
                  </div>
                </div>
            ))
          }
          </Slider>
      
          
       
        </div>
        
        <div className='w-1/2 flex items-center justify-center'> 
 <Image src="/Container.png" alt='' height={522} width={638} className=' h-auto w-auto object-cover ' /> 
        </div> 

      </div>
    </section>   
        </div>
    );
};

export default CustomerSaying;