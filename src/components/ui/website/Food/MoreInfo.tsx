/* eslint-disable @next/next/no-img-element */
import { Modal } from 'antd';
import { MapPin } from 'lucide-react';
import React from 'react';
interface ModalProps {
    open: boolean;
  onClose: () => void;
  
} 

const MoreInfo: React.FC<ModalProps>= ({open, onClose }) => {
    return (
        <Modal
        open={open}
        onCancel={onClose}
        footer={null}
   centered
        width={500} 
        className='food'
      >
           <div className="  flex items-center justify-center  z-50">
      <div className="bg-white rounded-lg w-full  ">
   

        {/* Hero Image */}
        <div className="w-full h-64 relative z-0">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Burger"
            className="w-full h-full object-fill "
          />
        </div>

        {/* Content */}
        <div className="py-3">
          <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-gray-300 pb-4">Burger King</h2>
          
          {/* Location */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={20} className="text-primary" />
            <p className="text-gray-600">Burger King- Vienna</p>
          </div>

          {/* Delivery Fee Section */}
          <div className="mb-4 border-b-2 border-gray-200 pb-4    ">
            <h3 className="font-semibold text-[20px] mb-2">Delivery Fee</h3>
            <p className="text-[#767676] font-[400] text-sm">
              Delivery fee is charged based on time of day and distance.
            </p>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Opening Hours</h3>
            <div className="space-y-2">
              {[
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ].map((day) => (
                <div key={day} className="flex items-center gap-3 text-sm text-gray-600 pb-2 font-[400]">
                  <span>{day}</span>
                  <span>(12:00 PM - 10:45 PM)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>    
        </Modal>
    );
};

export default MoreInfo;