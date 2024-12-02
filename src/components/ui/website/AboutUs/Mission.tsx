/* eslint-disable @next/next/no-img-element */
import Heading from '@/components/shared/Heading';
import React from 'react';

const Mission = () => {
    return (
        <div className=" py-[100px]">
    
        <div className=' container flex items-center justify-between gap-x-5   '>
    
            <div className='  w-[100%] mb-3 lg:mb-0   '>
                <Heading className='py-7   ' title1='Our' title2=' Mission & Vision ' />
    
                <p className=' text-[#5C5C5C] font-[400] lg:text-[16px] text-[14px]  '>Our mission is to provide fast, reliable, and convenient food delivery, making every meal an enjoyable experience for our customers across Austria. We aim to connect local restaurants with hungry customers, creating a seamless, user-friendly service that’s built on trust and efficiency. Our vision is to be Austria’s leading food delivery platform, empowering communities and supporting local businesses while offering an exceptional, personalized experience for every rider and customer. We’re here to redefine convenience and elevate the food delivery experience, one meal at a time.</p> 
    
             
            </div>
    
            <div className=' w-full '>
                <img src="/mission.svg" alt=''  className=' h-[382px] w-[588px] mt-5 ' />
            </div>
    
    
        </div>
    </div> 
    );
};

export default Mission;