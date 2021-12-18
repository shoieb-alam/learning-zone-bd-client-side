import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './CourseAdding.css';

const CourseAdding = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/courses', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Course Added Successfully');
                    reset();
                }
            })
    };

    return (
        // New Course adding form
        <div className="add-course">
            <div className="bg-add-course mx-auto">
                <h2>Add a Course</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, maxLength: 50 })} className='w-25' placeholder="Course Name" />

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5">

                            <textarea {...register("description1")} placeholder="Short Description" />

                            <textarea {...register("description2")} placeholder="Details Description 1" />

                            <textarea {...register("description3")} placeholder="Details Description 2" />

                        </div>
                        <div className="col-md-5">
                            <input {...register("img1")} placeholder="Image 1 URL" />

                            <input {...register("img2")} placeholder="Image 2 URL" />

                            <input {...register("img3")} placeholder="Image 3 URL" />
                            <input type="number" {...register("price", { required: true })} placeholder="Price" />
                        </div>

                    </div>
                    {/* <input {...register("address", { required: true, maxLength: 50 })} placeholder="Address" />

                    <input type="number" {...register("bed", { required: true })} placeholder="Bed" />

                    <input type="number" {...register("bath", { required: true })} placeholder="Bath" />

                    <input type="number" {...register("area", { required: true })} placeholder="Area" />

                    <textarea {...register("heading")} placeholder="Heading" /> */}


                    <input type="submit" value="Add" className="btn-outline-success w-25" />
                </form>

            </div>
        </div>
    );
};

export default CourseAdding;