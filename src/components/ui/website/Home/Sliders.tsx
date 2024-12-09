/* eslint-disable @next/next/no-img-element */

"use client"
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider ,{ Settings } from 'react-slick';


const sliderImages = [
    {
        image1:"/foodSlider1.svg" ,
        image2:"/foodSlider2.svg"
    } ,
    {
        image1:"/foodSlider1.svg" ,
        image2:"/foodSlider2.svg"
    } ,
    {
        image1:"/foodSlider1.svg" ,
        image2:"/foodSlider2.svg"
    } ,

]

const Sliders = () => {  
    const [activeIndex, setActiveIndex] = useState(0);  
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
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
        <div  
        className="h-[684px] flex items-center justify-center z-30"
        style={{
          backgroundImage: `url('/bg.svg')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          width: "100%", 
          height: "684px", 
        }}
        > 

        <div className="container   ">
  
   <Slider {...settings}> 
    {
        sliderImages?.map((item, index) => (
            <div key={index} className=' flex  '>  
            <div className='flex items-center  justify-center gap-6'> 

         
                <img src={item.image1} alt="Slider 1" className=' h-[370px]  ' />
        
          
              <img src={item.image2} alt="Slider 2" className='  ' /> 
            </div>
               
          </div>
        ))
    }

   </Slider> 

   
    </div>
        </div>
    );
};

export default Sliders;