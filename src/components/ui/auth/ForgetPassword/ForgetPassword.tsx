"use client"
import TextInput from "@/components/shared/TextInput";
import {  Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ForgetPassword = () => { 
    const router  = useRouter()

    const onFinish = async(values:{email:string}) => { 
        localStorage.setItem("userType","forget")
  
          router.push(`/verify-otp?email=${values?.email}`);
  
    };
  
    return (
        <div>

        <div className="text-center mb-4">
          <h1 className="text-[25px] font-semibold text-[#333333] ">Forgot Password ?</h1>
        
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          
        <TextInput name={"email"} label={"Email"} /> 

          <Form.Item>
            <button
             
              type="submit"
              style={{
                width: '100%',
                height: 45,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
           
                marginTop: 20
              }}
              className="flex items-center justify-center bg-primary rounded-lg"
            >
             Send Code
            </button>
          </Form.Item>
        </Form>
    </div>
    );
};

export default ForgetPassword;