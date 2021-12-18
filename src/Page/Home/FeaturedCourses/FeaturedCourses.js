import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../../Courses/Course/Course';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 6)));
    }, [])

    return (
        <div id="featured" className="py-5 topcourse-bg">
            <div className="topcourse-header text-white py-5">
                <h3 className="fw-bold"> TOP COURSES </h3>
                <p>Thousands of computer science courses are at your disposal,
                    So what are you waiting for!
                </p>
            </div>

            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        courses.map(course => <Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default FeaturedCourses;