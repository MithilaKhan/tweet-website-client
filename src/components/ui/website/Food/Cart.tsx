// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';


const items = [
    {
        id: 1,
        imgSrc: "/food4.png",
        title: "1 x Burger",
        size: "Small",
        originalPrice: 40,
        discountedPrice: 35,
        details: [
            "Packaging Cost (€1)",
            "More Topping (€1)",
            "Medium Crust (free)"
        ],
        quantity: 1
    },
    {
        id: 2,
        imgSrc: "/food5.png",
        title: "1 x Pizza",
        size: "Medium",
        originalPrice: 50,
        discountedPrice: 45,
        details: [
            "Packaging Cost (€2)",
            "Extra Cheese (€2)",
            "Thin Crust (free)"
        ],
        quantity: 2
    }
]; 

const  Cart = () => { 
    const router =  useRouter()
    const [quantities, setQuantities] = useState(
        items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
    );

    const handleIncrement = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const handleDecrement = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 0) }));
    };

    // Calculate subtotal
    const subtotal = items.reduce(
        (total, item) => total + item.discountedPrice * quantities[item.id],
        0
    );

    // Fixed amounts for delivery fee and VAT
    const deliveryFee = 10;
    const vat = 5;

    // Calculate total
    const total = subtotal + deliveryFee + vat;

    return (
        <div className="bg-white rounded-lg p-[50px] shadow-sm sticky top-10 lg:mb-20">
            <div className="   mb-[50px]  flex items-center justify-center">
                <p className=" flex flex-col  py-2 bg-primary text-white w-[177px] rounded text-center   ">
                    <span className=' font-medium  text-[14px]'> Delivery in </span>

                    <span className=' font-normal text-[12px]'> 30 min</span>
                </p>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex items-start gap-3 border-b border-dotted pb-4 border-[#C0C0C0]"
                >
                    <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-[12px] text-[#495057] font-[300]">
                                    {item.size}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[#ADB5BD] text-[14px] line-through">
                                    € {item.originalPrice}
                                </div>
                                <div className="text-sm text-[#6C757D]">
                                    € {item.discountedPrice}
                                </div>
                            </div>
                        </div>
                        <div className="text-[12px] flex flex-col gap-1 text-gray-500 mt-1">
                            {item.details.map((detail, index) => (
                                <div key={index}>• {detail}</div>
                            ))}
                        </div>
                        <div className="flex items-center justify-end lg:mt-1  mt-4">
                            <div className="flex items-center px-4 py-2 justify-between bg-white border border-[#FDF0E9] rounded-md shadow-md w-[120px] gap-3 shadow-[#FDF0E9]">
                                <Button
                                    size="small"
                                    icon={<FiMinus className="text-primary" />}
                                    onClick={() => handleDecrement(item.id)}
                                    disabled={quantities[item.id] === 0}
                                    style={{
                                        border: "1px solid #F1874F",
                                        color: "#F1874F"
                                    }}
                                />
                                <span>{quantities[item.id]}</span>
                                <Button
                                    size="small"
                                    icon={<FiPlus className="text-primary" />}
                                    onClick={() => handleIncrement(item.id)}
                                    style={{
                                        border: "1px solid #F1874F",
                                        color: "#F1874F"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>

            {/* Order Summary */} 

            <div className="pt-4 space-y-2"> 
                <p className=' text-[14px] font-semibold pb-3 '>Order Summary </p>
                <div className="flex justify-between text-[12px] text-[#262626]">
                    <span>Subtotal</span>
                    <span>€ {subtotal}</span>
                </div>
                <div className="flex justify-between text-[12px] text-[#262626]">
                    <span>Delivery Fee</span>
                    <span>€ {deliveryFee}</span>
                </div>
                <div className="flex justify-between text-[12px] text-[#262626]">
                    <span>VAT</span>
                    <span>€ {vat}</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total <span className=' text-[12px] text-[#212529] '> (Incl. VAT)  </span> </span>
                    <span className="text-primary">€ {total}</span>
                </div>
            </div>

            <button
                type="submit"
                className="mt-7 bg-primary text-white h-[56px] w-full text-center hover:bg-orange-600 rounded-lg text-[20px]" 
                onClick={() => router.push("/checkout")}
            >
                Go to Checkout
            </button>
        </div>
    );
};

export default Cart;