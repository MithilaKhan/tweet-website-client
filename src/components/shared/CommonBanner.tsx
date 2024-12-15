
import React from 'react';

const CommonBanner = ({title }:{title:string}) => {
    return ( 
        <div className=' '>
        <header className="bg-center bg-no-repeat bg-cover lg:h-[244px] h-[200px] flex items-center justify-center"
        style={{ backgroundImage: `url('/banner.svg')` }} >
     
          <h1 className="lg:text-[36px] text-[24px] font-bold  text-white tracking-wide ">{title}</h1>
      
      </header>
   
        </div>

    );
};

export default CommonBanner;