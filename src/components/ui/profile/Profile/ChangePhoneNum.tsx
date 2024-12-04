import TextInput from '@/components/shared/TextInput';
import { Form } from 'antd';
import React, { useState } from 'react';
import VerifyOtpModal from './VerifyOtpModal';

const ChangePhoneNum = () => { 

    const [open, setOpen] = useState(false);
    return (
        <div className='  rounded-xl'> 
          
        <Form  layout='vertical' className='p-10 ' initialValues={{
         phone:"01812345678"
        }}>  
           <TextInput  name={"phone"} label={"Current Phone Number "}  />
       <TextInput name={"new-phone"} label={"New Phone Number "} />  
     

       <Form.Item className='flex items-center justify-end mt-5' > 
           <button type="submit" className='bg-primary text-white py-2 px-9 mt-5 rounded-md' onClick={() => setOpen(true)}>Submit</button>
       </Form.Item>
           </Form>  

           <VerifyOtpModal open={open} setopen={setOpen} />
   </div>
    );
};

export default ChangePhoneNum;