import CommontypeTitle from '@/components/shared/CommontypeTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const JoinWithUs = () => {
    return (
        <div className=' container py-[100px]'>
               {/* Join With Us Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative  rounded-lg ">
          <Image
            src="/joinWithus.svg"
            alt="Restaurant Chef"
            width={590} 
            height={473}
            className=" "
          />
        </div>
        <div className="space-y-6">
          <div>
            <CommontypeTitle className="text-gray-600 mb-2" title='Restaurant listing' /> 
            <div  className={` text-[#343B46]  font-[600] lg:text-[40px] text-[28px] leading-tight`} >
   <span className=' text-primary'>  Join With us  </span>  <span> and </span> 
   <span className=' text-primary'>  Grow Your Business</span>&apos;s  Reach
  </div>
            
          </div>
          <p className="text-gray-600 leading-relaxed text-[16px] tracking-wide">
            Join us and make it easy to fast known across the city to find and order from your restaurant. With our platform, you can grow your brand, increase your orders, and reach new customers every day.
          </p>
          <p className="text-gray-600 leading-relaxed tracking-wide pb-6">
            We&apos;re here to help you grow your business through digital marketing. As a restaurant partner with us, we&apos;ll work together to make your restaurant thrive in the community. Start today, and see how many more people you can reach!
          </p> 

          <Link  href={"/partner-registration"} className='' > 
          <button 
            className="bg-primary hover:border hover:border-primary hover:bg-transparent hover:text-primary text-white px-4 h-[56px] text-lg rounded-md"
          >
            Become a Partner
          </button>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default JoinWithUs;