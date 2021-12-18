import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }

    return (
        <div className="admin-bg">
            <h2 className="text-white">Make an Admin</h2>

            <Form onSubmit={handleAdminSubmit} className="bg-light w-50 mx-auto rounded-pill py-5 mt-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        className="w-50 mx-auto"
                        onBlur={handleOnBlur}
                        placeholder="Enter Email"
                        required
                    />
                </Form.Group>
                {success && <Alert variant={'success'}>successfully Made an Admin !</Alert>}
                <Button type="submit" variant="light" className="btn-outline-success">Make Admin</Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;