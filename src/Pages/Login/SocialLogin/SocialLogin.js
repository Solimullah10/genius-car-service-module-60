import React from 'react';
import google from '../../../images/logo/google.png';
import facebook from '../../../images/logo/facebook.png';
import github from '../../../images/logo/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className='text-danger text-center'>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/home');
    }



    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ "height": '1px' }} className='w-50 bg-secondary'></div>
                <p className='m-2'>or</p>
                <div style={{ "height": '1px' }} className='w-50 bg-secondary'></div>
            </div>
            {
                errorElement
            }
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info d-block w-50 mx-auto mb-2'>
                    <img width={30} src={google} alt="logo" />
                    <span className='ms-2'>Google Sign</span>
                </button>
                <button className='btn btn-dark d-block w-50 mx-auto mb-2'>
                    <img width={30} src={facebook} alt="logo" />
                    <span className='ms-2'>Facebook Sign</span>
                </button>
                <button className='btn btn-secondary d-block w-50 mx-auto mb-2'>
                    <img width={30} src={github} alt="logo" />
                    <span className='ms-2'>Github Sign</span>
                </button>

            </div>
        </div>

    );
};

export default SocialLogin;