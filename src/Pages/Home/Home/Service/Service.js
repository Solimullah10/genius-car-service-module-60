import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>Service Name: {name}</h3>
            <h2>Price: ${price}</h2>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;