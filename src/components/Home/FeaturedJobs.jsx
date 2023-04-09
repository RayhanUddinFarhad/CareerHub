import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({data}) => {
    return (
        <div>

            <div>

            <div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Shoes" /></figure>
  <div className="card-body text-left space-y-2">
    <h2 className="card-title">{data.job_title}</h2>
    <p>{data.company_name}</p>

    <div className='flex space-x-5'>


        <button className='outline outline-2 outline-indigo-400 px-2'>{data.remote_or_onsite}</button>
        <button className='outline outline-2 outline-indigo-400 px-2'>{data.fulltime_or_parttime}</button>

    </div>

    <div className='flex justify-around'>


        <p>{data.location}</p>
        <p>{data.salary}</p>
    </div>

    <div className=" justify-end">

        <Link to={`/details/${data.id}`}>      <button className="btn-primary">View Details</button>
</Link>
    </div>
  </div>
</div>



            </div>
            
        </div>
    );
};

export default FeaturedJobs;