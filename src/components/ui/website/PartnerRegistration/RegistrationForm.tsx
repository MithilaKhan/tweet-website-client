/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import TextInput from '@/components/shared/TextInput';
import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { PiImageThin } from 'react-icons/pi'; 


interface valuesType{
    name: string ,
    email:string ,
    address:string ,
    contact:string 
}
 

const RegistrationForm = () => { 
    const [imgFile, setImgFile] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);  
    
    console.log(imgFile);

    const handleChange = (e:any) => {
        const file = e.target.files[0];
        if (file) {
          setImgFile(file); 
          //@ts-ignore
          setImgUrl(URL.createObjectURL(file));
        }
      };
    


    
    const handleSubmit = (values:valuesType) =>{
        console.log(values);
           }  

    return (
        <div className='py-10 px-6 bg-[#F9F9F9] rounded-xl'>
             <Form  onFinish={handleSubmit} layout='vertical' className=''> 
                <TextInput name='name' label='Full Name' />  
                <TextInput name='restaurant-name' label='Restaurant Name' />  
                <TextInput name='email' label='Email' />   
                <TextInput name='phone' label='Phone' />  
                <Form.Item name="images" label={<p className="text-[#4E4E4E] text-[16px]">Image</p>}>
        <label htmlFor="image" className="p-3 border border-[#d9d9d9] bg-white block mt-2 mb-2 rounded-lg">
          <div className="flex justify-center items-center w-full h-[110px] ">
            {imgUrl ? (
                <img src={imgUrl} alt="Selected" className="h-[110px] w-full object-contain p-2" />
            ) : (
                <PiImageThin className="text-7xl" />
            )}
          </div> 
          <div className='hidden'>
          <Input
            id="image"
            type="file"
            onChange={handleChange}
            className="hidden"
          />
          </div>
        </label>
      </Form.Item> 
            <TextInput name='address' label='Details Address' /> 

                <Form.Item className='flex items-center justify-end mt-6'>
                    <button className='bg-primary flex items-center justify-center text-white w-[200px] h-10 rounded-lg text-lg'>
                    Save
                    </button>
                </Form.Item>
            </Form>           
        </div>
    );
};

export default RegistrationForm;