import Link from 'next/link';
import React from 'react';

const CommonBanner = ({title }:{title:string}) => {
    return ( 
        <div className=' mb-5'>
        <header className="bg-center bg-no-repeat bg-cover h-[244px] flex items-center justify-center"
        style={{ backgroundImage: `url('/banner.svg')` }} >
     
          <h1 className="text-[36px] font-bold  text-white tracking-wide ">{title}</h1>
      
      </header>
          <nav className="flex items-center space-x-1 container text-white -mt-8   ">
            <Link href="/" className="text-sm ">Home</Link>
            <span className="text-sm">/</span>
            <span className="text-sm">{title}</span>
          </nav>
        </div>

    );
};

export default CommonBanner;