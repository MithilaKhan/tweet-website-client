import { Modal } from 'antd';
import Image from 'next/image';
import React from 'react'; 
import { PiForkKnife } from 'react-icons/pi';
import { TiLocation } from 'react-icons/ti';

interface modalType { 
    open: boolean; 
    setOpen:(open:boolean)=> void
}

const OrderDetailsModal = ({open , setOpen}:modalType) => {
    return ( 
        <Modal
        open={open}
        onCancel={() => setOpen(false)} 
        centered
        footer={null}
        width={500}
        title={<p className=' flex items-center justify-center text-[24px] font-semibold'> Order Details </p>}
        className=""
      > 
        <div className="">
      <div className="flex items-center gap-3 mb-1">
        <Image
          src="/burgerking.svg"
          alt="Starbucks"
          width={45}
          height={50}
          className="rounded-lg"
        />
        <div>
          <h2 className="font-medium text-[#3D3D3D] text-lg">Starbucks</h2>
        </div>
      </div>
          <p className="text-sm text-[#3D3D3D] flex items-center gap-1 mb-6">
            <span className=""><TiLocation size={18} color='#F1874F' /> </span>
            93, Songbird Cir, Blackville, SC, USA-29817
          </p>
 

 <div className='  flex lg:flex-row flex-col  gap-3  w-full mb-6 '> 

      <div className="  border border-[#E8E8E8] rounded-md w-full">
        <div className=' border-b border-dotted border-gray-300 mx-4 pb-2 p-2.5'>
          <p className="text-sm text-gray-600">Order Id</p>
          <p className="font-medium">#ACB12345613</p>
        </div>

        <div className=' p-2.5 mx-4'>
          <p className="text-sm text-gray-600">Date & Time</p>
          <p className="font-medium">10 Dec 2024, 05:00 PM</p>
        </div>
      </div> 


      <div className=" border border-[#E8E8E8] rounded-md w-full">
        <div className="flex-1 border-b border-dotted border-gray-300 mx-4 pb-2 p-2.5">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
              <span className=""><PiForkKnife size={14} color='#F1874F' /> </span>
            </span>
            <p className="font-medium">Restaurant</p>
          </div>
          <p className="text-sm text-gray-600 ml-6">Starbucks</p>
        </div>

        <div className="flex-1  p-2.5  mx-4 ">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
              <span className=""><TiLocation size={14} color='#F1874F' /></span>
            </span>
            <p className="font-medium">Delivery Address</p>
          </div>
          <p className="text-sm text-gray-600 ml-6">Blackville</p>
        </div>
      </div> 

 </div> 


      <div className="space-y-3 mb-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-[16px] text-[#3D3D3D]">Mexican Pizza</p>
            <p className="text-sm text-[#747474]">Qty:2</p>
          </div>
          <p className="font-medium text-[16px] ">€30</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-[16px] text-[#3D3D3D]">Burger</p>
            <p className="text-sm text-[#747474]">Qty:2</p>
          </div>
          <p className="font-medium text-[16px]">€30</p>
        </div>
      </div>

      <div className="space-y-1 border-t border-gray-300 pt-4 ">
        <div className="flex justify-between text-[#3D3D3D] text-[16px] font-medium">
          <p>Total</p>
          <p>€60</p>
        </div>
        <div className="flex justify-between text-[#3D3D3D] text-[16px] font-medium border-b border-gray-200 pb-4">
          <p>Delivery Charge</p>
          <p>€10</p>
        </div>
        <div className="flex justify-between font-medium text-[16px] pt-2">
          <p>Grand Total</p>
          <p>€70</p>
        </div>
      </div>
    </div> 

        </Modal>
    );
};

export default OrderDetailsModal;