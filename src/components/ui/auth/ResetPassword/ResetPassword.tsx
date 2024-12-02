"use client"
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ResetPassword = () => { 
    const router = useRouter()

    const onFinish = async(values:{newPassword:string , confirmPassword:string}) => { 
      console.log(values);
      router.push(`/login`);
    }; 

    return (
        <div>

        <div className=" mb-6">
          <h1 className="text-[25px] font-semibold text-[#333333] text-center mb-2 ">Set a new password</h1> 
          <p className="text-[#5C5C5C]  text-center"> Please enter your email and password to continue</p>
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
        >

            <Form.Item
              name="newPassword" 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
              
                className="font-semibold "
              >
                New Password
              </p>}
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password
                type="password"
                placeholder="Enter New password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "45px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }} 
                className=""
              />
            </Form.Item>       
           
            <Form.Item
              style={{ marginBottom: 0 }} 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
                className="font-semibold"
              >
                Confirm Password
              </p>}
              name="confirmPassword"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter Confirm password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "45px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }} 
                className=""
              />
            </Form.Item>
      

            <Form.Item style={{marginBottom: 0}}>
            <button
              type="submit"
              style={{
                width: '100%',
                height: 45,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
               
              }} 
              className=" bg-primary rounded-lg "
            >
             Update
            </button>
          </Form.Item>


         
        </Form>


    </div>
    );
};

export default ResetPassword;