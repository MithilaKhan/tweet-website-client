
"use client";
import Image from 'next/image'
import { useState } from 'react';
import OrderDetailsModal from './OrderDetailsModal';
 
export interface Order {
    id: string;
    restaurantName: string;
    restaurantLogo: string;
    transactionId: string;
    date: string;
    status: 'Pending' | 'Delivered' | 'Cancelled';
    amount: number;
  }
  
   
interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) { 

  const [open , setOpen] = useState(false)
   
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Pending':
        return 'text-orange-500'
      case 'Delivered':
        return 'text-green-500'
      case 'Cancelled':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="bg-white rounded-lg p-5 mb-3 shadow-sm">
      <div className="flex items-center justify-between border-b-2 border-dotted border-gray-300 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-[67px] h-[67px] relative">
            <Image
              src={order.restaurantLogo}
              alt={order.restaurantName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-[#3D3D3D]  text-[16px] tracking-wider">{order.restaurantName}</h3>
            <p className="text-sm text-gray-500">Transaction ID: <span className=' text-[#3D3D3D] font-medium'>  {order.transactionId} </span></p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[16px] text-gray-500">{order.date}</p>
          <p className={`text-[16px] ${getStatusColor(order.status)}`}>{order.status}</p>
        </div>
      </div> 

      <div className="flex justify-between items-center mt-6">
        <p className="text-[16px] "> <span className='text-gray-500'> Total Amount: </span> <span className='text-[#3D3D3D] font-medium'> ${order.amount.toFixed(2)} </span> </p>
        <button className="h-[45px] px-6 text-sm border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white " onClick={() => setOpen(true)}>
          Details
        </button>
      </div> 
      <OrderDetailsModal open={open} setOpen={setOpen} />
    </div>
  )
}

