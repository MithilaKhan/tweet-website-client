 "use client"
 import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails';
import ChangePassword from './ChangePassword';
import ChangePhoneNum from './ChangePhoneNum';
 
 const tabs = [
    { id: "1", label: "Profile Details", component: <ProfileDetails />  },
  
    { id: "2", label: "Change Password", component: <ChangePassword /> }, 

    { id: "3", label: "Change Phone Number", component: <ChangePhoneNum /> },
  ]; 

 const Profile = () => { 
    const [activeTab, setActiveTab] = useState("1");
    const handleTabClick = (id: string) => {
        setActiveTab(id);
      }; 

    return (
        <div className=' bg-white/70 p-10 rounded-xl  h-[70vh]   '>
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

          <div className="   container border-dotted border-2 border-gray-300 bg-white/80 p-10 rounded-xl   ">
            {tabs.find((tab) => tab.id === activeTab)?.component}
          </div>  


        </div>
    );
 };
 
 export default Profile;