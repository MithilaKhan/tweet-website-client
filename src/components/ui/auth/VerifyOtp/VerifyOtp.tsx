"use client"
import {  Form, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import OTPInput from "react-otp-input";

const { Text } = Typography;

const VerifyOtp = () => { 
    const router = useRouter()
    const [otp, setOtp] = useState<string>("");
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
      const emailFromQuery = new URLSearchParams(window.location.search).get('email');
      setEmail(emailFromQuery);
    }, []); 

    console.log(email);
  
    const onFinish = async(values:{otp:string}) => {  
        const userType = localStorage.getItem("userType")
        console.log(values); 
        if(userType === "forget"){
            router.push(`/reset-password`);
        }else{
            router.push(`/login`);
        }
    };
  
  
    const handleResendEmail = async() => {
  
    };
    return (
        <div>

        <div className=" mb-6 text-center">
          <h1 className="text-[25px] font-semibold mb-6 text-[#333333] ">Verification code</h1>
          <p className=" text-[#818181] font-light w-[90%] mx-auto ">We sent a reset link to {email} enter 5 digit code that is mentioned in the email.</p>
        </div>


        <Form layout="vertical" onFinish={onFinish}>

          <div className="flex items-center justify-center mb-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{
                height: 50,
                width: 50,
                borderRadius: "8px",
                margin: "16px",
                fontSize: "20px",
                border: "1px solid #818181",
                color: "#2B2A2A",
                outline: "none",
                marginBottom: 10
              }}
              renderInput={(props) => <input {...props} />}
            />

          </div>

        

          <Form.Item style={{marginBottom: 0}}>
            <button
              type="submit"
              style={{
                width: "100%",
                height: 45,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
              
                color: "white"
              }} 
              className="bg-primary rounded-lg "
            >
            Verify
            </button>
          </Form.Item>
        </Form>  

        <div className="flex items-center justify-center mt-4 gap-2 ">
            <Text>You have not received the email?</Text>

            <p
              onClick={handleResendEmail}
              className="underline font-medium text-primary"
              style={{  cursor: "pointer" }}
            >
              Resend
            </p>
          </div> 
    </div>
    );
};

export default VerifyOtp;