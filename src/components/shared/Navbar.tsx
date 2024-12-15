/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Link from 'next/link';



import { AiOutlineMenu } from 'react-icons/ai';

import { useState } from 'react';

// import { usePathname } from 'next/navigation'; 
import { ConfigProvider, Select } from 'antd';

import { TbChevronDown, TbWorld } from 'react-icons/tb';
import MobileDrawer from '../ui/sharedComponents/MobileDrawer';
import NavItems from '../ui/sharedComponents/NavItems';
import { BadgeInfo, BriefcaseBusiness, ContactRound, Heart, House, ShoppingCart } from 'lucide-react';
import { IoRestaurantOutline } from 'react-icons/io5';

const Navbar = () => {
      const [showDrawer, setShowDrawer] = useState(false);
      //   const pathname = usePathname(); 

      const languageOptions = [
            { value: 'en', label: 'English', shortLabel: 'EN' },
            { value: 'bn', label: 'Bengali', shortLabel: 'BN' },
            { value: 'hi', label: 'Hindi', shortLabel: 'HI' },
            { value: 'es', label: 'Spanish', shortLabel: 'ES' },
      ];

      const customLabel = (option: any) => (
            <div className="flex items-center gap-2">
                  <span>{option.label}</span>
            </div>
      );

      const items = [
            { key: 'home', label: 'Home', path: '/', icon: <House size={22} /> },
            { key: 'restaurants', label: 'Restaurants', path: '/restaurants', icon: <IoRestaurantOutline size={22} /> },
            { key: 'how-we-work', label: 'How we work', path: '/how-we-work', icon: <BriefcaseBusiness size={22} /> },
            { key: 'about-us', label: 'About Us', path: '/about-us', icon: <BadgeInfo size={22} /> },
            { key: 'contact-us', label: 'Contact Us', path: '/contact', icon: <ContactRound size={22} /> },
      ];
      return (
            <div>
                  {/* 1st navbar   */}
                  <div className=' bg-primary  h-[50px] flex items-center justify-center font-[400] lg:text-[16px] text-[14px] text-white '>
                        Free Delivery on Your First Order – Order Now!
                  </div>
                  {/* 2nd navbar   */}
                  <header className={`bg-[#FFFFFF] shadow w-full`}>
                        <nav className="container  h-[100px]  relative z-10 w-full">
                              <div className="flex justify-between items-center h-full w-full ">  
                                    <div className='flex items-center lg:gap-0 gap-1'>

                              <div className="md:hidden">
                                          <AiOutlineMenu
                                                onClick={() => setShowDrawer(!showDrawer)}
                                                className="text-primaryText cursor-pointer"
                                                size={24}
                                          />
                                    </div> 
                                    {/* Logo */}
                                    <Link href={'/'}>
                                          <Image alt="Logo" src="/logo.svg" width={131} height={30} />
                                    </Link>
                                    </div>
                                    {/* Nav Items for Desktop */}
                                    <div className="hidden md:flex  p-2 items-center gap-5">
                                          <NavItems items={items} />
                                    </div>

                                    <div className="flex items-center space-x-4">
                                          <Link href={'/favorite'} className='hidden md:flex' ><Heart size={26} color='#ED6923' /></Link>
                                          <Link href={`/food/1`} className='hidden md:flex'><ShoppingCart size={26} color='#ED6923' /></Link>

                                          <Link href={'/profile'} className=' flex items-center gap-2' >
                                                <Image src="/person.png" alt="" height={40} width={40} className=" h-auto w-auto rounded-full border-[2px] border-primary" />
                                                <p>Asad</p>
                                          </Link>
 

 <div className='hidden md:flex'>
                                          <ConfigProvider
                                                theme={{
                                                      components: {
                                                            Select: {
                                                                  optionSelectedColor: '#ffffff',
                                                                  optionSelectedBg: '#ED6923',
                                                                  optionActiveBg: '#fdf0e9',
                                                            },
                                                      },
                                                }}
                                          >
                                                <Select
                                                      defaultValue="en"
                                                      options={languageOptions}
                                                      variant={'borderless'}
                                                      prefix={<TbWorld size={26} color='#ED6923' />}
                                                      suffixIcon={
                                                            <div className="ms-2">
                                                                  <TbChevronDown size={20} color='#ED6923' />
                                                            </div>
                                                      }
                                                      labelInValue
                                                      optionLabelProp="label"
                                                      menuItemSelectedIcon={null}
                                                      onChange={(value) => console.log(value)}
                                                      optionRender={customLabel}
                                                />
                                          </ConfigProvider>
 </div>
                                    </div>

                               
                              </div>
                        </nav>

                        {/* Mobile Drawer */}
                        <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} />
                  </header>
            </div>
      );
};

export default Navbar; 
