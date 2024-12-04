
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {  Form, Input } from 'antd';
import React from 'react';

const ChangePassword = () => { 
    const [form] = Form.useForm();


    const handleChangePassword = (values: any) => {
       
        console.log(values);

    }; 

    return (
        <div className="">
    
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={handleChangePassword}
                    className="w-full "
                >

              
                        <Form.Item
                            name="current_password"
                            label={<p className="block">Current Password</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your current password!",
                                },
                            ]}
                            className="mb-5"
                        >
                            <Input.Password
                                placeholder="Enter Password"
                                style={{
                                    height: 45,
                                    border: "1px solid #d9d9d9",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "white"
                                }}
                            />
                        </Form.Item>
                   

              

                    <Form.Item
                        name="new_password"
                        label={<p className="block">New Password</p>}
                        dependencies={["current_password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("current_password") === value) {
                                        return Promise.reject(
                                            new Error("The new password and current password do not match!")
                                        );
                                    }
                                    return Promise.resolve();
                                },
                            }),
                        ]}
                        className="mb-5"
                    >
                        <Input.Password
                            placeholder="Enter password"
                            style={{
                                height: 45,
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                backgroundColor: "white"
                            }}
                        />
                    </Form.Item> 
                  


              
                    <Form.Item
                        name="confirm_password"
                        label={<p className="block">Re-Type Password</p>}
                        dependencies={["new_password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("new_password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error("The new password that you entered does not match!")
                                    );
                                },
                            }),
                        ]}
                        className="mb-10"
                    >
                        <Input.Password
                            placeholder="Enter password"
                            style={{
                                height: 45,
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                backgroundColor: "white"
                            }}
                        />
                    </Form.Item> 
                  

                    <Form.Item className='flex items-center justify-end mt-5' > 
                <button type="submit" className='bg-primary text-white py-2 px-9 mt-5 rounded-md'>Submit</button>
            </Form.Item>
                </Form>
    
        </div>
    );
};

export default ChangePassword;