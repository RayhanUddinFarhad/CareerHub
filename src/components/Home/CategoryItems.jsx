import React from 'react';

const CategoryItems = ({data}) => {
    return (
        <div className='text-left bg-blue-50 p-10 space-y-2'>
            <img src={data.logo} alt="" />
            <h1 className='font-bold'>{data.name}</h1>
            <p>{data.jobs_available}</p>

            
        </div>
    );
};

export default CategoryItems;