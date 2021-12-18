import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }


    return (
        <div className="body">
            <Container className="row login-card p-5 m-5 mx-auto">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/WkLcSgY/image.png" alt="" />
                </div>
                <div className="col-md-6 mx-auto w-50 text-start">

                    <Form onSubmit={handleLoginSubmit}>

                        <h3 className="text-center mb-5">Login</h3>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                placeholder="Password"
                                required
                            />
                        </Form.Group>

                        {/* showing error/succuss massage  */}
                        <div className="d-flex justify-content-between">
                            <div className="fw-bold">

                                {isLoading && <Spinner animation="grow" variant="success" />}

                                {user?.email && <Alert variant={'success'}>Login successful!</Alert>}

                                {authError && <Alert variant={'danger'}> {authError} </Alert>}
                            </div>
                        </div>

                        <div className="d-flex">
                            <Button
                                variant="dark" type="submit" className="w-50 btn-outline-success rounded-pill fw-bold text-white mt-4 mx-1"> Login </Button>

                            {/* google signin  */}
                            <Button onClick={handleGoogleSignIn} variant="light" type="submit" className="w-50 btn-outline-success rounded-pill fw-bold mt-4 mx-1">
                                <FontAwesomeIcon icon={faGoogle} /> Continue with Google
                            </Button>
                        </div>
                    </Form>

                    <Button as={Link} to="/register" variant="white" type="submit" className="fw-bold mt-4 w-100 mx-auto">Don't have an account? </Button>

                </div>
            </Container >
        </div >
    );
};


export default Login;