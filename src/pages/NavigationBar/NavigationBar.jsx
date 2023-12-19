import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import user from '../../assets/user.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
const NavigationBar = () => {
    const { user ,logOut  } = useContext(AuthContext);

    const handleLogout=()=>{
        logOut()
        .then()
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary my-3" data-bs-theme="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='link-underline-light text-dark' to="/">Home</Link>
                            <Link className='link-underline-light text-dark mx-3' to='/about'>About</Link>
                            <Link className='link-underline-light text-dark' to='/career'>Career</Link>


                        </Nav>
                        <Nav>
                            {
                                user?.displayName&&<p className='my-auto mx-1 text-danger'>{user?.displayName}</p>
                            }

                            {user?.photoURL && <img className='profile' style={{ borderRadius: "50%" }} src={user.photoURL} alt="" />}
                            
                            {
                                user ? <Button variant="dark" onClick={handleLogout}>Logout</Button> : <Button variant="dark"><Link className='text-decoration-none text-light' to={`/login`}>Login</Link></Button>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;