import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BuyingCourse = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${courseId}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [courseId])

    const onSubmit = data => {
        console.log(data);
        axios.post(`http://localhost:5000/boughtcourses`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Course Bought Successfully');
                    reset();
                }
            })
    };

    return (
        // Course details 
        <div className="body mt-5 text-start">

            <Container>
                <div className="d-flex justify-content-between">
                    <h2 className="text-success">{course.name}</h2>
                    <div>
                        <h4 className="text-danger">USD: ${course.price}</h4>
                    </div>
                </div>

                <Row className="py-3 my-2 rounded-3">
                    <Col xs={1} md={6} lg={8} className="bg-light pt-2">
                        <img className="w-100 pb-3 rounded-3" src={course.img1} alt="" />
                        <div>
                            <h4 className="text-success">{course.heading}</h4>
                            <p>{course.description}</p>
                        </div>
                    </Col>

                    <Col xs={1} md={6} lg={4}>
                        {/* BuyingCourse form  */}
                        <div className="add-course py-5 mb-5 text-center text-white h-100">
                            <h4>Buy This Course</h4>
                            <form className="" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name")} />

                                <input defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}

                                <input defaultValue={course.name} {...register("course", { required: true })} />

                                <input defaultValue={course.price} {...register("price", { required: true })} />

                                <input placeholder="Phone Number" defaultValue="" {...register("phone", { required: true })} />

                                <input type="submit" value="Buy This Course" className="btn-outline-success" />
                            </form>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default BuyingCourse;