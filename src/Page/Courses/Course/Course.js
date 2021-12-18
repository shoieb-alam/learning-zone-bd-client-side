import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const { _id, name, price, description1, img1 } = course;

    return (
        // courses card items
        <div className="p-3">

            <Card className="card h-100">
                <Card.Img variant="top" src={img1} className="h-100 w-50 mx-auto" />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div className="mx-auto">
                            <p>
                                {description1}
                            </p>
                        </div>
                        <div className="py-3">
                            <h5 className="text-danger">USD: ${price}</h5>
                        </div>
                        <Link to={`/buying/${_id}`}>
                            <Button variant="outline-success" className="px-5 rounded-pill">Buy This Course</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;