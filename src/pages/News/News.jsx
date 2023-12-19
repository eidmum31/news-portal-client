import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news=useLoaderData();
    console.log(news);
    const { _id, title, image_url, details, category_id } = news;
    return (
        <div className='mt-5'>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;