import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBook, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Success.css'

const Success = () => {
    return (
        <div id="success" className="pt-5 bg-light">
            <div className="py-5">
                <h3>Features</h3>
            </div>
            <div className="pb-5">
                <Container>

                    <Row xs={1} md={2} lg={4}>
                        <Col>
                            <Card className="success-card p-3 h-100">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faPenAlt} size='4x' />
                                    <Card.Title> Useful Contents
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="success-card p-3 h-100">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faBook} size='4x' />
                                    <Card.Title> Updated Material
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="success-card p-3 h-100">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faTelegram} size='4x' />
                                    <Card.Title> 24/7 Online Support
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="success-card p-3 h-100">
                                <Card.Body>
                                    <FontAwesomeIcon className="my-3" icon={faClock} size='4x' />
                                    <Card.Title> Lifetime Access
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Success;