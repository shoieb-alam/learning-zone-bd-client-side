import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyCourses = () => {
    const { user } = useAuth();
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myCourses/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, [user.email]);

    const handleDelete = email => {
        axios.delete(`http://localhost:5000/myCourses/${user?.email}`)
            .then(res => {
                console.log(res.data.deletedCount);
                if (res.data.deletedCount > 0) {
                    alert('Are you sure to delete this Course?');
                    console.log(res.data);
                }
            })
    }

    return (
        <div className="manage-courses">
            <h2 className="py-5">Manage Bought Courses</h2>
            {
                courses.map(course => <div key={course._id}>
                    <Row className="m-2 bg-secondary rounded-pill w-75 mx-auto p-3 text-white">
                        <Col>
                            <h4 className="text-start"> {course.house} </h4>
                        </Col>
                        <Col>
                            <Button variant="outline-danger" className="btn-light" onClick={() => { handleDelete(course.email) }}>Delete</Button>
                        </Col>
                    </Row>
                </div>)
            }
        </div>

    );
};

export default MyCourses;