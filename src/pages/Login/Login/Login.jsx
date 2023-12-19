import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';


const Login = () => {
    const {loginUser}=useContext(AuthContext);
    const location=useLocation();
    const dest=location?.state || `/category/0`;
    console.log(dest);
    console.log(location);
    const navigate=useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        loginUser(email,password)
        .then(user=>{
            console.log(user.user);
            navigate(dest);
           
        })
        .catch(err=>{
            console.log(err);
        })
       form.reset();
    }
    return (
        <div>

            <h2 className='text-center'>Login to your account</h2>
            <Form className='w-50 mx-auto' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>
                <Button variant="dark" size='lg' type="submit">
                    Login
                </Button>
                <p></p>
                <Form.Text className="text-muted">
                    Don't have an account ? <Link to={`/reg`}>Register</Link>
                </Form.Text>
            </Form>

        </div>
    );
};

export default Login;