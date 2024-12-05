/* eslint-disable @next/next/no-img-element */

import React from 'react';

const StampCardsDetails = () => { 
    const steps = [
        {
          number: "01",
          title: "Order",
          description: "Place an order to any of your favorite restaurant to start earning rewards.",
         image: "/stamp1.svg"
        },
        {
          number: "02",
          title: "Earn Stamp",
          description: "Earn a stamp card worth 10% of your order's value for every qualifying order.",
        image: "/stamp2.svg"
        },
        {
          number: "03",
          title: "Collect",
          description: "Collect five stamp cards from the same restaurant to unlock a special discount",
       image: "/stamp4.svg"
        },
        {
          number: "04",
          title: "Get Rewarded",
          description: "Your total saved stamps become a voucher for your discount, valid for 3 months at the same restaurant.",
          image: "/stamp3.svg"
        },
      ]
    
      const benefits = [
        "Explore a wide range of participating restaurants.",
        "Save more with every order you place.",
        "Get rewarded for being a loyal customer.",
        "Enjoy exclusive vouchers from your favorite restaurant.",
      ] 

    return (
        <div className=" ">
        <div className="mx-auto ">
          <div className="">
            <h1 className="text-4xl font-bold text-[#2E2E2E]">
              <span className="text-primary ">StampCards</span> – Your Reward for Loyalty
            </h1>
            <p className="mt-6 text-[#5C5C5C] text-[16px]">
              With our StampCards program, every time you order, we&apos;ll save 10% of your order value towards a special discount.
              Once you complete 5 orders, we&apos;ll release your total saved discount as a personal voucher just for you! Your
              voucher will be valid for 3 months from the date it&apos;s issued and can only be redeemed at the restaurant you&apos;ve
              been ordering from.
            </p>
          </div>
  
    
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#5C5C5C]">How it Works</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4 ">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className=" border border-dashed border-primary bg-white p-2 rounded-xl "
                >
                 
                  <div className="mb-3 flex items-center justify-center "> 
                    <img src={step.image} alt=''  className=' h-[120px] w-[120px]' />
                    </div>
                  <h3 className="mb-2 font-semibold text-[15px] text-center text-primary">{step.title}</h3>
                  <p className="text-[12px]  text-[#333333] text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div> 

          <div className="mt-9">
            <h2 className="text-2xl font-semibold text-[#2E2E2E]">Why You&apos;ll Love StampCards:</h2>
            <ul className="mt-4 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-[#5C5C5C] text-[16px]">
                  <span className="mr-2 ">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
     
          </div>
  
        </div>
      </div>
    );
};

export default StampCardsDetails;