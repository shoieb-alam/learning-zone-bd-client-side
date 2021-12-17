import React from 'react';
import { Container } from 'react-bootstrap';
import Img from './../../../images/aboutus.png';
import './About.css'

const About = () => {
    return (
        <div >
            <div id="about" className="body text-center py-5 bg-light">
                <h1 className='pt-5'>About Us</h1>
                <Container>

                    <div className="row pt-5 my-5 d-flex justify-content-between align-items-center">

                        {/* about us image  */}
                        <div className="col-md-6">
                            <img className="w-100" src={Img} alt="" />
                        </div>

                        {/* about us text  */}
                        <div className="col-md-6 p-5 about bg-white">
                            <h2>What you think about us?</h2>
                            <br />
                            <p className="text-start">Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.<br /> Educational website can include websites that have games, videos or topic related resources that act as tools to enhance learning and supplement classroom teaching.These websites help make the process of learning entertaining and attractive to the student, especially in today's age. <br />Using HTML(HyperText Markup Language), CSS(Cascading Style Sheet), JavaScript, we can make learning more easier and in a interesting way.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;