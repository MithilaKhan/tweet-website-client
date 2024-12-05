import React from 'react';
import HeroSection from './HeroSection';
import PopularCategory from './PopularCategory';
import PopularFood from './PopularFood';

const Home = () => {
    return (
        <div>
             <HeroSection /> 
             <PopularCategory /> 
             <PopularFood />
        </div>
    );
};

export default Home;