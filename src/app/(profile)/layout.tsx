import CommonBanner from '@/components/shared/CommonBanner';
import Navbar from '@/components/shared/Navbar';
import DashboardSidebar from '@/components/ui/profile/DashboardSidebar';
import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (  
        <div> 
        <Navbar />
        <CommonBanner title="Profile" />
        <div className="py-[40px] bg-[#FDF0E9]">
            <div className="container grid grid-cols-12 gap-4">
                <div className="lg:col-span-3 col-span-12 rounded-lg shadow-lg bg-white lg:h-[80vh] h:[60vh] lg:sticky top-10">
                    <DashboardSidebar />
                </div>
                <div className="lg:col-span-9 col-span-12 rounded-xl ">{children}</div>
            </div>
        </div>
    </div>
    );
};

export default layout;