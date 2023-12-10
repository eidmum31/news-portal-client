import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logo.png"
import './Header.css'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
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

                <Marquee pauseOnHover={true} speed={100} className='text-dark fw-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis iste accusamus expedita officiis excepturi Blanditiis iste accusamus expedita officiis excepturi.
                </Marquee>

            </div>
        </div>
    );
};

export default Header;