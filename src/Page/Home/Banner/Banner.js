import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner text-white text-center">
            <div className="bg-color">
                <div className="text-border">
                    <h2 className="fs-3 m-3 p-2">LEARNING ZONE</h2>
                </div>
                <div>
                    <h4 className="fs-2 my-4">First you Learn, then you remove the 'L'
                    </h4>
                    <p className="fs-5 my-4">An easy and organized way to explore the  world of coding through the window of our website
                    </p>

                    <Button as={HashLink} to='/home#footer' variant="outline-success" size='lg' className="border-3 rounded-pill my-4">GIVE US A SUGGESTION</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;