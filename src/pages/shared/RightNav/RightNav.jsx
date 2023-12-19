import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import './RightNav.css'
import { AuthContext } from '../../../providers/AuthProviders';
const RightNav = () => {
    const {googleSignIn}=useContext(AuthContext);
    const googleLogin=()=>{
            googleSignIn()
            .then(user=>console.log(user.user))
            .catch()
    }
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button onClick={googleLogin} variant="outline-primary" className='mb-2'><FaGoogle />
                    <span className='ms-2 my-auto'>Login with Google</span></Button>
                <Button variant="outline-dark" className='mb-4' ><FaGithub /><span className='ms-2 my-auto'>Login with Github</span></Button>
            </div>
            <div>
                <h4>Find Us On</h4>
                <ListGroup as="ul">
                    <ListGroup.Item as="li">
                        <FaFacebookF /> <span className='ms-2 my-auto'>Facebook</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <FaTwitter /><span className='ms-2 my-auto'>Twitter</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <FaInstagram /> <span className='ms-2 my-auto'>Instragam</span>
                    </ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='advertise text-light text-center mt-5 d-flex flex-column justify-content-center align-items-center'>
                <div className=''>
                    <h4 className=''>Create an Amazing Newspaper</h4>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Danger</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;