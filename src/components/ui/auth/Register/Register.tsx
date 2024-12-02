"use client";

import TextInput from "@/components/shared/TextInput";
import { Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ValuesType {
  name: string;
  email: string;
  contact: string;
  password: string;
  confirm_password: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: ValuesType) => {
    console.log(values);
    localStorage.setItem("userType", "register");
    router.push(`/verify-otp?email=${values.email}`);
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-[25px] font-semibold mb-2">Register Now</h1>
        <p className="text-[#5C5C5C]">
       Please Share Your Details to Get Started
        </p>
      </div>
      <ConfigProvider
        theme={{
   
          components: {
            Input: {
            //   borderColor: "#d9d9d9",  
              hoverBorderColor: "#d9d9d9",
            },
          },
        }}
      >
        <Form onFinish={onFinish} layout="vertical">
          <TextInput name="name" label="Full Name" />
          <TextInput name="email" label="Email" />
          <TextInput name="contact" label="Contact Number" />

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
           
          >
            <Input.Password
              placeholder="Enter password"
              className="border border-gray-300 h-[50px] bg-white rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords do not match!")
                  );
                },
              }),
            ]}
            
          >
            <Input.Password
              placeholder="Confirm password"
              className="border border-gray-300 h-[50px] bg-white rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator(_, value) {
                  return value
                    ? Promise.resolve()
                    : Promise.reject(new Error("You must agree to continue!"));
                },
              },
            ]}
          >
            <Checkbox>
            I agree to Tweet’s <span className=" text-primary font-medium"> Terms of conditions </span>  and <span className=" text-primary font-medium">  Privacy Policy </span>.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full h-[45px] text-white font-medium text-lg bg-primary rounded-lg flex items-center justify-center "
            >
              Sign up
            </button>
          </Form.Item>
        </Form>
      </ConfigProvider>

      <div className="flex items-center justify-center gap-1 pt-2">
        <p className="text-[#636363]">Have an account?</p>
        <Link href="/login" className="text-primary font-semibold">
        Sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;
