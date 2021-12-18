import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
        <div className="courses-bg py-5">
            <div className="py-5">
                <h1 className="courses-header">
                    Exclusive COURSES
                </h1>
            </div>

            <div className="course-bg">
                <Row xs={1} md={2} lg={4}>
                    {
                        courses.map(course => <Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Courses;