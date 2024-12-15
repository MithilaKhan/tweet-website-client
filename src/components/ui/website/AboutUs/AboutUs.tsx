import CommonBanner from '@/components/shared/CommonBanner'; 
import React from 'react';
import AboutTweet from './AboutTweet';  
import Slider from './Slider'; 
import Mission from './Mission'; 

const AboutUs = () => {
    return (
        <div> 
            <CommonBanner title='About Us' />   
            <AboutTweet />   
            <Slider />  
            <Mission /> 
            
        </div>
    );
};

export default AboutUs;