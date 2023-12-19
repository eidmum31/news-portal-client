import React from 'react';
import News from '../pages/News/News';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav/RightNav';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <Container>
            <Header></Header>
            <Container>
                <Row>
                    
                    <Col md={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col md={3}>
                        <RightNav></RightNav>
                    </Col>

                </Row>

            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default NewsLayout;