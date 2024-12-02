"use client"

import TextInput from "@/components/shared/TextInput";
import {  Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => { 
    const router = useRouter()


    const onFinish = async(values:{email:string , password:string}) => { 
      console.log(values);
  
            router.push("/")
          
     
    }; 

    return (
        <div 
    >
        <div className=" mb-6 text-center ">
          <h1 className="text-[25px] font-semibold mb-2 text-[#333333]">Sign in to your account</h1>
          <p className="text-[#5C5C5C]"> Please enter your email and password to continue</p>
        </div>
        <Form
          onFinish={onFinish}
          layout="vertical"
        >

          <TextInput name={"email"} label={"Email"} />

            <Form.Item
              name="password"
              label={<p>Password</p>}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
                style={{
                  height: 45,
                  border: "1px solid #d9d9d9",
                  outline: "none",
                  boxShadow: "none"
                }}
              />
            </Form.Item>

            <div className="flex items-center justify-between ">
              <Form.Item style={{marginBottom: 0}} name="remember" valuePropName="checked">
                <Checkbox className="font-medium">Remember me</Checkbox>
              </Form.Item>

              <Link
                className=" "
                href="/forgot-password"
              > <p className=" text-primary font-semibold">  Forgot password </p>
               
              </Link>
          </div>

          <Form.Item style={{marginBottom: 0}}>
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
              {/* {isLoading? < Spinner/> : "Sign in"} */} Sign in
            </button>
          </Form.Item>

          
        </Form> 

        <div className=" flex items-center justify-center gap-1 py-4">
            <p className="text-[#636363]">Don’t have any account?</p> 
            <Link href="/register" className="text-[#F1874F] font-semibold" > Sign Up</Link>
        </div>
    </div>
    );
};

export default Login;