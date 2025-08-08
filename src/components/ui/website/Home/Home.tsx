import React from 'react';
import HeroSection from './HeroSection';
import PopularCategory from './PopularCategory'; 
import PopularFood from './PopularFood';
import PopularRestaurant from './PopularRestaurant';
import Sliders from './Sliders';
import JoinWithUs from './JoinWithUs';
import EnhanceExperience from './EnhanceExperience';
import WhyChooseUs from './WhyChooseUs';
import CustomerSaying from './CustomerSaying';


const Home = () => {
    return (
        <div>
             <HeroSection /> 
             <PopularCategory /> 
             <PopularFood /> 
             <PopularRestaurant /> 
             <Sliders /> 
             <JoinWithUs /> 
             <EnhanceExperience /> 
             <WhyChooseUs /> 
             <CustomerSaying />
        </div>
    );
};

export default Home;