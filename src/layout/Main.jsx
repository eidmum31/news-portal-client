import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';
import Home from '../pages/Home/Home/Home';

import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={3}>
                        <LeftNav></LeftNav>

                    </Col>
                    <Col md={6}>
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

export default Main;