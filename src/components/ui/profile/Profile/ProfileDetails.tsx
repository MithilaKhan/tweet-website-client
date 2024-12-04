import React from 'react';
import TextInput from '@/components/shared/TextInput';
import { Form } from 'antd'; 
const ProfileDetails = () => {
    return (
        <div className='  rounded-xl'> 
          
             <Form  layout='vertical' className='p-10 ' initialValues={{
                name: 'MD.Asadujjaman',
                email: 'asadhasan594@gmail.com',
                address: '123 Main St, Anytown, USA',
             }}>  
                <TextInput  name={"name"} label={"Name"}  />
            <TextInput name={"email"} label={"Email"} />  
            <TextInput name={"address"} label={"Address"} />   

            <Form.Item className='flex items-center justify-end mt-5' > 
                <button type="submit" className='bg-primary text-white py-2 px-9 mt-5 rounded-md'>Submit</button>
            </Form.Item>
                </Form> 
        </div>
    );
};

export default ProfileDetails;