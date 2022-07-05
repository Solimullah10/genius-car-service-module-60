import React from 'react';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-5'>
            <p className='text-center bg-dark text-white p-3 mb-0'>
                <small>copyright &copy; {year} Name</small>
            </p>
        </footer>
    );
};

export default Footer;

