import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }


    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form'>
            <h1 className='text-center'>Please Register</h1>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='enter your name' required />

                <input type="email" name="email" id="" placeholder='enter your email' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please login</Link></p>
        </div>
    );
};

export default Register;