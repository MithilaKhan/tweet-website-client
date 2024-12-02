/* eslint-disable @next/next/no-img-element */
import Heading from '@/components/shared/Heading';
import React from 'react'; 


const AboutTweet = () => {
    return (
   
      <div className=" pt-[32px] pb-[59px]">
    
    <div className=' container flex items-center justify-between gap-x-5   '>

        <div className='  w-[100%] mb-3 lg:mb-0   '>
            <Heading className='py-7   ' title1='About' title2=' Tweet ' />

            <p className=' text-[#5C5C5C] font-[400] lg:text-[16px] text-[14px]  '>Founded in 2024, Tweet is Austria’s newest food delivery platform, here to bring the freshest meals directly to your doorstep. Whether you&apos;re craving Austrian classics like Wiener Schnitzel, Käsespätzle, or Apfelstrudel, or international favorites like kebabs, burgers, sushi, and pizzas, Tweet offers a diverse range of dishes to satisfy every appetite.</p> 

            <p className=' text-[#5C5C5C] font-[400] lg:text-[16px] text-[14px] mt-7  '>With a rapidly expanding network of over 5,000 partner restaurants and a selection of more than 100,000 menu items, Tweet is dedicated to bringing the best culinary experiences right to you. Our dependable Tweet Runners are committed to delivering each order fresh, fast, and with friendly service. </p> 

            <p className=' text-[#5C5C5C] font-[400] lg:text-[16px] text-[14px] mt-7  '>From a quiet dinner at home to hosting family and friends, Tweet connects you to Austria&apos;s top restaurants and global cuisine—all in one app. Download the Tweet app today and discover a new, exciting way to enjoy food in Austria.</p>
        </div>

        <div className=' w-full '>
            <img src="/aboutTweet.svg" alt=''  className=' h-[400px] w-[588px] mt-5 ' />
        </div>


    </div>
</div> 
       
    );
};

export default AboutTweet;