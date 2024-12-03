import CommonBanner from '@/components/shared/CommonBanner';
import Heading from '@/components/shared/Heading';
import React from 'react';
import RegistrationForm from './RegistrationForm';

const PartnerRegistration = () => {
    return (
        <div>
            <CommonBanner title='Partner Registration' /> 

            <div className='container py-[100px]'>
                <Heading title1='Excited to Partner with Us? Boost Your Revenue Today! 
 Complete the form below!' title2='' className=' text-center pb-6  ' /> 

<p className='text-[#5C5C5C] mb-10 text-center mx-28'>We’re on a mission to deliver the best in life—delicious food and an upgraded shopping experience. Tweet is a fast-growing company that keeps its charm as a locally focused service with a strong community connection.</p>  

<div className='p-9 bg-white rounded-xl '> 
 <p className='text-[24px] font-semibold pb-6 text-[#333333] '>Restaurant Information</p>
<RegistrationForm />
</div>
            </div> 
        </div>
    );
};

export default PartnerRegistration;