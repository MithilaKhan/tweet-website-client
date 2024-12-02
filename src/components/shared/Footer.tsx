
'use client';
import React from 'react';

import { ConfigProvider, Form, Input, message } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { Send } from 'lucide-react';

// Icons

interface SubscribeFormData {
    email: string;
}

const socialLinks = [
    { Icon: FaFacebookF, href: '#' },
    { Icon: FaTwitter, href: '#' },
    { Icon: FaLinkedinIn, href: '#' },
    { Icon: BsWhatsapp, href: '#' },
];

const linkSections = [
    {
        title: 'Useful Link',
        links: [
            { label: 'About Us', href: '/about-us' },
            { label: 'How We works', href: '/how-we-work' },
            { label: 'Career', href: '/career' },
            { label: 'Help & Support', href: '/help' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms & Conditions', href: '/terms' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Become a Rider', href: '/rider' },
        ],
    },
];

export const Footer = () => {
    const [form] = Form.useForm<SubscribeFormData>();

    const onFinish = (values: SubscribeFormData) => {
        console.log('Success:', values);
        message.success('Successfully subscribed!');
        form.resetFields();
    };

    return (
        <footer className="bg-[#000000] text-[#EFFBF0]">
            <div className="container px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                    {/* Logo and Description Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Link href={'/'}>
                                <Image alt="Logo" src="/logo.svg" width={131} height={30} />
                            </Link>
                        </div>
                        <p className=" text-[#A5A5A5] text-[16px] font-[400]"> Your go-to choice for fast and fresh delivery, bringing the best to your door in no time.</p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="w-10 h-10  flex items-center justify-center rounded-full bg-[#1C2125] hover:bg-primary transition-colors" 
                                >
                                    <Icon className="w-4 h-4" fill='white' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 gap-8">
                            {linkSections.map((section) => (
                                <div key={section.title}>
                                    <h3 className="font-medium mb-4 text-[24px]">{section.title}</h3>
                                    <ul className="space-y-2">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <a href={link.href} className=" transition-colors text-[16px] font-[400] text-[#A5A5A5]">
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subscribe Form Section */}
                    <div>
                        <div className="w-full">
                            <h3 className="font-medium mb-4 text-[24px]">Newsletter</h3>
                            <p className=" mb-4 text-[16px] font-normal text-[#A5A5A5]">Subscribe Our newsletter to get our
                            Latest Update & News.</p>
                            <Form form={form} name="subscribe" onFinish={onFinish} autoComplete="off" className="flex items-center w-full"> 
                            <ConfigProvider
  theme={{
    token: {
        colorTextPlaceholder: '#A5A5A5',
    },
  }}
> 
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Please input your email!' },
                                        { type: 'email', message: 'Please enter a valid email!' },
                                    ]}
                                >
                                    <Input
                                        style={{
                                            height: 42,
                                        }}
                                        placeholder="Enter Email"
                                        className=" bg-[#181D21] border border-transparent placeholder-[#A5A5A5] rounded-lg  footerInput" 
                                        suffix={ <button 
                                            style={{
                                                height: 42,
                                            }}
                                            type="submit"
                                            className="bg-primary text-white w-16 rounded-lg flex items-center justify-center"
                                        >
                                            <Send size={24} />
                                        </button>}
                                    />
                                </Form.Item>
 </ConfigProvider>
                              
                            </Form>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p>All right reserved Hightimes Barcelona {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};
