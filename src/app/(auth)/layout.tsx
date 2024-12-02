import React from 'react'; 
import { Poppins } from 'next/font/google'; 
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div
        className="w-full flex items-center justify-center relative bg-[#FDF0E9]"
        style={{
            height: "100vh",
        }}
    >
        
     
     
        <div
            style={{
                background: '#ffffff',
              
                borderRadius: 10,
                width: 550,
                position: 'relative',
                zIndex: 2,
            }} 
            className={` ${poppins.className}  shadow-2xl p-[30px] pt-[55px]`}
        >
           {children}
        </div>
    </div>
    );
};

export default layout;