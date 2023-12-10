import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter ,FaInstagram  } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button variant="outline-primary" className='mb-2'><FaGoogle />
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
        </div>
    );
};

export default RightNav;