import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logo.png"
import './Header.css'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import user from '../../../assets/user.png';
import { Link } from 'react-router-dom';
const Header = () => {


    return (
        <div>
            <div className="top-nav-bar text-center mt-5">
                <img src={logo} alt="" />
                <h4>Journalism Without Fear or Favour</h4>
                <h4 className='date'>{moment().format("ddd, MMMM D, YYYY")}</h4>
            </div>
            <div className="latest-news d-flex">
                <Button variant="danger" className=''>Latest</Button>

                <Marquee pauseOnHover={true} speed={100} className='text-danger'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis iste accusamus expedita officiis excepturi Blanditiis iste accusamus expedita officiis excepturi............
                </Marquee>

            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary my-3" data-bs-theme="light">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"><Link className='link-underline-light text-dark' to="/">Home</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link className='link-underline-light text-dark' to='/about'>About</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link className='link-underline-light text-dark' to='/career'>Career</Link></Nav.Link>
                            
                     
                        </Nav>
                        <Nav>
                            <img className='profile' src={user} alt="" />
                            <Button variant="dark">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;