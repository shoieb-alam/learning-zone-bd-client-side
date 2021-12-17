import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import Reviews from '../Review/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <FeaturedCourses></FeaturedCourses>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;