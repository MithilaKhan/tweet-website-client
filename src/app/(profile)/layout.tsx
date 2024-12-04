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
                <div className="col-span-3 rounded-lg shadow-lg bg-white h-[80vh] sticky top-10">
                    <DashboardSidebar />
                </div>
                <div className="col-span-9 rounded-xl ">{children}</div>
            </div>
        </div>
    </div>
    );
};

export default layout;