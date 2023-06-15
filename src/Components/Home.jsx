import React from 'react';
import MainBanner from './MainBanner';
import Service from './Service';
import Review from './Review';
import Doctors from './Doctors';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <Service></Service>
            <Review></Review>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;