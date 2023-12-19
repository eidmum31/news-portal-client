import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Reg = () => {
    const {createUser,updateUserProfile,verifyEmail}=useContext(AuthContext);
    const handleRegistration=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photoUrl=form.photo.value;
        const password=form.password.value;
        createUser(email,password)
        .then(user=>{
            verifyEmail()
            .then(()=>{
                console.log("email verification sent");
                updateUserProfile(photoUrl,name)
                .then(()=>{
                    console.log("profile upated");
                })
            })
        
            
        })
        .catch(error=>{
            console.log(error);
        })
        
     
    }
    return (
        <div>
            <h2 className='text-center'>Register your account</h2>
            <Form className='w-50 mx-auto' onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo Url</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Photo Url" name="photo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Conditions" name='accept' />
                </Form.Group>
                <Button variant="dark" size='lg' type="submit">
                    Register
                </Button>
                <p></p>
                <Form.Text className="text-muted">
                    Already have an account ? <Link to={`/login`}>Login</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Reg;