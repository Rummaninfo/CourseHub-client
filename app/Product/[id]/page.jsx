import React from 'react';

const ServicesDetailsPage = ({params}) => {
    let id = params.id



    return (
        <div>
            <h1>Details</h1>
            <p>Id: {id}</p>
            
        </div>
    );
};

export default ServicesDetailsPage;