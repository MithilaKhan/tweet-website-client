"use client"
import React, { useState } from 'react';
import ExclusiveDeals from './ExclusiveDeals';
import StampCardsDetails from './StampCardsDetails';

const StampCard = () => { 
    const tabs = [
        { id: "1", label: "Exclusive Deals", component: <ExclusiveDeals />  },
      
        { id: "2", label: "StampCards", component: <StampCardsDetails /> }, 
    
        
      ];  

      const [activeTab, setActiveTab] = useState("1"); 

      const handleTabClick = (id: string) => {
        setActiveTab(id);
      }; 

    return (
        <div>
             <div className="flex lg:flex-row items-center justify-center  flex-wrap lg:gap-4 gap-2 pb-10 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`lg:px-6 px-2 h-[45px] rounded-xl font-medium lg:text-[16px] text-[11px] ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-[#fcd6b7] text-[#6B6B6B] "
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div> 

          <div className="   container  ">
            {tabs.find((tab) => tab.id === activeTab)?.component}
          </div>   
        </div>
    );
};

export default StampCard;