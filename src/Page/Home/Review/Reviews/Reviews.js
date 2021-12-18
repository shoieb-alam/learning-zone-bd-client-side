import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        // review showing on homepage 
        <div id="reviews" className="py-5">
            <div className="py-5">
                <h2 className="fw-bold">
                    Our <span className="text-success">Students</span> Says
                </h2>
            </div>

            <Container className="review-bg">
                <Row xs={1} md={2} lg={3}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;