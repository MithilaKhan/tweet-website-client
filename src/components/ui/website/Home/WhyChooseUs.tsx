/* eslint-disable @next/next/no-img-element */
import CommontypeTitle from '@/components/shared/CommontypeTitle';
import Heading from '@/components/shared/Heading';
import React from 'react';

const WhyChooseUs = () => { 
    const features = [
        {
          image: "/choose1.svg",
          title: "Super fast Delivery",
          description: "Faster than your cravings can blink. Experience the super-fast delivery and get fresh food."
        },
        {
          image: "/choose2.svg",
          title: "Live Order Tracking",
          description: "Track your order while it is delivered to your doorstep from the restaurant."
        },
        {
          image: "/choose3.svg",
          title: "Lower Delivery Fees",
          description: "Affordable Delivery, Unbeatable Value. Our lower delivery fees mean you save more on every order."
        }
      ] 
      
    return (
        <div 
        className="h-[694px] flex items-center justify-center z-30"
        style={{
          backgroundImage: `url('/bg.svg')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          width: "100%", 
          height: "694px", 
        }}
        > 
         <div> 

        <div className=' text-center pb-[50px]'> 
      <CommontypeTitle className="" title='Why Tweet?' /> 
          <Heading className="" title1="Why you " title2="Choose Us ?" />
       
        </div> 

   
      <div className="container mx-auto">
  
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg text-center transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-6"> 
                <img src={feature.image} alt={feature.title}  className='h-[100px] w-[100px]' />
               
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-[#262626] text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

         </div>

        </div>
    );
};

export default WhyChooseUs;