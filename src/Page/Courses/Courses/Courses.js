import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="py-5">
            <div className="py-5">
                <h3 className="fw-bold">
                    Exclusive <span className="brand text-success"> COURSES </span>
                </h3>
            </div>

            <Container className="course-bg">
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

export default Courses;