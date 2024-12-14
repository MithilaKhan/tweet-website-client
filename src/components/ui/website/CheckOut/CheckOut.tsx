/* eslint-disable @next/next/no-img-element */
"use client"
import { Card, ConfigProvider, Input, Radio } from 'antd';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CheckOut = () => {
  return (
    <div className="container  py-[100px] p-6">
      <div className="mx-auto container grid gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <div className=" p-[50px] bg-white rounded-lg">
            <div className="flex items-center justify-between  mb-4">
              <h2 className="text-lg font-semibold">Delivery Address</h2>
              <button className="text-[#F06A28] hover:text-[#F06A28]/90 border border-primary  rounded-lg px-4 py-2">
                Change
              </button>
            </div>
            <div className="flex  gap-3 mb-6">

              <div className='w-full'>
                <p className="text-sm text-gray-500 pb-4 flex items-center gap-1"> <span>  <MapPin className="mt-1 h-4 w-4 text-gray-500" /> </span> <span> Current Location: </span></p>
                <Input placeholder="Current Location" className="w-full h-[53px]" style={{ border: '1px dotted #E1E1E1' }} />

              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">

                <h3 className="font-medium">Instruction</h3>
              </div>
              <Input.TextArea
                placeholder="Add Instruction for Rider"
                className="w-full resize-none"
                rows={4}
                style={{ border: '1px dotted #E1E1E1', resize: 'none' }}
              />
            </div>
          </div>

          <Card className="p-[50px]">
            <h2 className="text-lg font-semibold mb-6">Payment Method</h2>
            <ConfigProvider
              theme={{
                components: {
                  Radio: {
                    buttonCheckedBg: '#F06A28',
                    colorPrimaryActive: '#F06A28',
                    colorPrimary: "#F06A28"
                  },
                },
              }}
            >
              <Radio.Group defaultValue="cash" className="space-y-4 w-full">
                <div className="flex items-center space-x-3 w-full border border-gray-200 p-3 rounded-lg">
                  <Radio value="cash" id="cash">
                    <div className="flex items-center gap-2 ms-3">
                      <div className="rounded flex items-center justify-center">
                        <Image src="/cash.png" alt="cash" className="h-auto w-auto" height={50} width={50} />
                      </div>
                      <span className="text-[#5C5C5C] text-[16px] font-[400]">Cash on Delivery</span>
                    </div>
                  </Radio>
                </div>
                <div className="flex items-center space-x-3 border border-gray-200 p-3 rounded-lg">

                  <Radio value="online" id="online">
                    <div className="flex items-center gap-2 ms-3">
                      <div className="rounded flex items-center justify-center">
                        <Image src="/card.png" alt="card" className="h-auto w-auto" height={50} width={50} />
                      </div>
                      <span className="text-[#5C5C5C] text-[16px] font-[400]">Online Payment</span>
                    </div>
                  </Radio>

                </div>
              </Radio.Group>
            </ConfigProvider>
          </Card>
        </div>

        {/* Right Column */}
        <div className="px-[50px] py-[55px] bg-white rounded-lg">
          <div className="bg-[#F06A28] text-white py-3 px-6 rounded-md mb-[38px] text-[20px] font-semibold text-center">
            Summery
          </div>

          <div className="">
            <div className='pb-4'>
              <h3 className="font-medium mb-2 text-[#5C5C5C] text-[16px]">Your Ordered From</h3>
              <div className="flex items-center gap-2"> 
                <img src="/Mcdonald.svg" alt="" className=' h-[30px] w-[30px]' />
                <p className="font-[300] text-[#5C5C5C] text-[16px]" >
                Burger King 
                </p>
              </div>
            </div>

            <div className='mb-6'>
              <h3 className="font-medium mb-2 text-[#5C5C5C] text-[16px]">Delivery Address</h3>
              <p className="flex items-start gap-2 font-[300] text-[#5C5C5C] text-[16px]">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                Hauptstraße 12/3, 1010 Wien, Österreich
              </p>
            </div>

            <div className="space-y-3 ">
              <div className="flex justify-between border border-dotted border-gray-300 p-3 rounded-lg text-[#262626]">
                <span>1 x Burger</span>
                <span>€2.80</span>
              </div> 
              <div className="flex justify-between border border-dotted border-gray-300 p-3 rounded-lg text-[#262626]">
                <span>1 x Pizza</span>
                <span>€2.80</span>
              </div>
            </div> 
             
             <p className=' border-b-2 border-gray-100 w-full my-8'> </p>

             <div className="flex gap-2 max-w-xl mb-6">
              <Input placeholder="Enter Promo Code"
                  suffix={
                    <button style={{
                      height: 48,
                    }}
                      type="submit"
                      className="bg-primary text-white px-5 text-[16px] font-[400]  rounded-r-lg flex items-center justify-center">
                      Apply
                    </button>
               
                }

                style={{
                  height: 48
                }}
                className="flex-grow checkout"
              />
            </div>

            <div>
              <h3 className="font-semibold text-[16px] mb-4 text-[#333333]">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>€115</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>€10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vat</span>
                  <span>€05</span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <div className='flex items-center gap-1'>
                    <span className="font-semibold text-[18px] text-[#333333]">Total Payable</span>
                    <span className="text-xs text-gray-500 block">(incl. VAT)</span>
                  </div>
                  <span className="text-[#F06A28] font-semibold text-[18px]">€130</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-[50px] bg-[#F06A28] hover:bg-[#F06A28]/90 text-white h-[56px] rounded-lg text-[20px] font-semibold">
              Checkout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;