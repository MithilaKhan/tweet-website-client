import { Card } from 'antd';
import Image from 'next/image';
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
        image: "/stamp1.png"
        },
        {
          number: "03",
          title: "Collect",
          description: "Collect five stamp cards from the same restaurant to unlock a special discount",
       image: "/stamp1.png"
        },
        {
          number: "04",
          title: "Get Rewarded",
          description: "Your total saved stamps become a voucher for your discount, valid for 3 months at the same restaurant.",
          image: "/stamp1.png"
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
            <h1 className="text-4xl font-bold">
              <span className="text-[#FF5C28]">StampCards</span> – Your Reward for Loyalty
            </h1>
            <p className="mt-6 text-gray-600">
              With our StampCards program, every time you order, we&apos;ll save 10% of your order value towards a special discount.
              Once you complete 5 orders, we&apos;ll release your total saved discount as a personal voucher just for you! Your
              voucher will be valid for 3 months from the date it&apos;s issued and can only be redeemed at the restaurant you&apos;ve
              been ordering from.
            </p>
          </div>
  
    
          <div className="mt-6">
            <h2 className="text-2xl font-bold">How it Works</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {steps.map((step) => (
                <Card
                  key={step.number}
                  className="relative overflow-hidden border-dashed border-primary bg-white p-6"
                >
                 
                  <div className="mb-4 text-[#FF5C28]"> 
                    <Image src={step.image} alt='' height={150} width={150} />
                    </div>
                  <h3 className="mb-2 font-semibold text-xl text-primary">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div> 

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Why You&apos;ll Love StampCards:</h2>
            <ul className="mt-4 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="mr-2 text-[#FF5C28]">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600">
              Start collecting your rewards today and make your orders even more rewarding!
            </p>
          </div>
  
        </div>
      </div>
    );
};

export default StampCardsDetails;