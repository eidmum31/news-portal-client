import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegEye , FaRegStar ,FaStar } from "react-icons/fa";
import Rating from 'react-rating';
const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, total_view, rating } = news;
    return (
        <div>
            <Card className="mt-3">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="bottom" src={image_url} />
                    <Card.Text className='mt-3'>
                        {details.length <= 250 ? details :
                            <>
                                {details.slice(0, 250)}.......
                               <Link to={`/news/${_id}`} className='text-decoration-none text-danger'>Read more</Link>
                            </>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>
                        <Rating
                            placeholderRating={rating.number}
                            emptySymbol= {<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                            readonly
                        />

                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaRegEye />
                        <span className='ms-2'>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;