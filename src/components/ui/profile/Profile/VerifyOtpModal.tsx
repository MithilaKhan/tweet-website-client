"use client";
import { Form, Modal, Typography } from 'antd';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import Swal from 'sweetalert2';
const { Text } = Typography; 

const VerifyOtpModal = ({open, setopen}: {open: boolean, setopen: React.Dispatch<React.SetStateAction<boolean>>}) => { 
 
    const [otp, setOtp] = useState<string>(""); 
    const onFinish = async(values:{otp:string}) => {  
 console.log(values); 

 Swal.fire({
    position: "center",
    icon: "success",
    title: "Congratulations",
    showConfirmButton: false, 
    text: "Your Phone number has been successfully updated.",
    timer: 1500, 
    customClass: {
      popup: "swal-popup",
      title: "swal-title",
    },
  }); 
  
    };
  
  
    const handleResendEmail = async() => {
  
    }; 

    return (
        <Modal
        open={open}
        onCancel={() => setopen(false)} 
        centered
        footer={null}
        width={450}
        title={<p className=' flex items-center justify-center text-[24px] font-semibold'> Verification code </p>}
        className=""
      > 
    <div>

<div className=" mb-4 text-center">
  
  <p className=" text-[#818181] font-normal w-[70%] mx-auto text-[16px] ">We sent a 5-digit OTP to  +316 123456. 
  Enter the code to proceed.</p>
</div>


<Form layout="vertical" onFinish={onFinish}>

  <div className="flex items-center justify-center mb-4">
    <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={5}
      inputStyle={{
        height: 50,
        width: 50,
        borderRadius: "8px",
        margin: "8px",
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
    Verify Code
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
      </Modal>
    );
};

export default VerifyOtpModal;