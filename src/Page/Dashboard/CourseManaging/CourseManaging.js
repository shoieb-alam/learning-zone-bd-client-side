import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './CourseManaging.css';

const CourseManaging = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://still-spire-11888.herokuapp.com/courses`)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    const handleDelete = id => {
        axios.delete(`https://still-spire-11888.herokuapp.com/courses/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('Are you sure to delete this Bought Course?');
                    console.log(res.data.deletedCount);
                    console.log(res.data);
                    const remaining = courses.filter(course => course._id !== id);
                    setCourses(remaining);
                }
            })
    }

    return (
        // Course Managing
        <div className="manage-courses">
            <h2 className="py-5">Manage Courses</h2>
            {
                courses.map(course => <div key={course._id}>
                    <Row className="m-2 bg-secondary rounded-pill w-75 mx-auto p-3 text-white">
                        <Col>
                            <h4 className="text-start"> {course.name} </h4>
                        </Col>
                        <Col>
                            <Button variant="outline-danger" className="btn-dark" onClick={() => { handleDelete(course._id) }}>Delete</Button>
                        </Col>
                    </Row>
                </div>)
            }
        </div>
    );
};

export default CourseManaging;