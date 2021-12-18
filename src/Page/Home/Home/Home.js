import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import Reviews from '../Review/Reviews/Reviews';
import Success from '../Success/Success';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <FeaturedCourses></FeaturedCourses>
            <Reviews></Reviews>
            <Success></Success>
        </div>
    );
};

export default Home;