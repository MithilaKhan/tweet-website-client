/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';
import { CiEdit } from 'react-icons/ci';
import { useState } from 'react'; 
import { LuHistory } from "react-icons/lu"
import { MdOutlineLocalOffer } from "react-icons/md"

import { RiLogoutBoxLine } from "react-icons/ri"
import { PiSealPercent } from 'react-icons/pi';


const sidebarItems = [
  {
    title: 'Profile',
    href: '/profile',
    icon: <User className="w-5 h-5" />,
  },

  {
    title: 'Order History',
    href: '/order-history',
    icon: <LuHistory className="w-5 h-5" />,
  },
  {
    title: 'Track Order',
    href: '/track-order',
    icon: <MdOutlineLocalOffer className="w-5 h-5" />,
},
{
  title: 'StampCard',
  href: '/stampCard',
  icon: <PiSealPercent className="w-5 h-5" />,
},
  {
    title: 'Log Out',
    href: '/login',
    icon: <RiLogoutBoxLine className="w-5 h-5" />,
  },
]
 

const DashboardSidebar = () => { 
    const pathname = usePathname(); 
    const [imgFile, setImgFile] = useState("");
    const [imgUrl, setImgUrl] = useState(""); 
  
    console.log(imgFile);
  

  
    
    //   profile
    const onImageChange = async (e: any) => {
      const file = e.target.files[0];
      if (!file) return;
      setImgFile(file);
      setImgUrl(URL.createObjectURL(file));
      const formData = new FormData();
      if (file) {
        formData.append("avatar", file);
      }
  
    }; 

    return ( 
        <div> 

            <div className='h-[150px] w-full bg-gradient-to-r from-[#FFD3B0] to-[#FF8D2F] relative rounded-t-lg '> </div>

        <div className="flex flex-col h-full">
      {/* User Profile Section */}
      <div className="flex flex-col items-center space-y-3 -mt-[75px]  ">

              {/* profile Image  */}
              <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={imgUrl? imgUrl : "/person.png"}
                alt="host-profile"
                className=" h-[120px] w-[120px] rounded-full p-1 "
                
              />

              <label
                htmlFor="imageUpload"
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: -8,
                  backgroundColor: "#FDF0E9",
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CiEdit size={25} color="#ED6923" />
              </label>

              <input
                id="imageUpload"
                type="file"
                src=""
                onChange={(e) => onImageChange(e)}
                style={{ display: "none" }}
                alt=""
              />
            </div>

        <div className="text-center flex flex-col gap-[6px]  ">
          <h3 className="font-semibold text-lg text-[#3D3D3D]">MD.Asadujjaman</h3>
          <p className="text-sm text-[#747474]">asadhasan594@gmail.com</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2 my-3 mx-4 ">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`
            flex items-center  gap-4  px-4 py-3 rounded-lg transition-colors hover:bg-[#FFD3B0] hover:shadow-sm  ${ pathname === item.href ? "bg-[#FFD3B0] shadow-sm text-gray-600" : "text-gray-600"} `}
          > 
          <span> {item.icon} </span>
            <span className="font-medium">{item.title}</span>
            
          </Link>
        ))}
      </nav>
    </div>
        </div>
    );
};

export default DashboardSidebar;