import { Footer } from '@/components/shared/Footer'; 
import Navbar from '@/components/shared/Navbar'; 
import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div> 
            <Navbar />   
            <div className='bg-[#FDF0E9]'>
             {children} 
            </div>
             <Footer />  
        </div>
    );
};

export default layout;