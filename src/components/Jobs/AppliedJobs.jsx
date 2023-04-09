import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    console.log (appliedJobs)


    return (
        <div className='space-y-5'>
           {appliedJobs.map(job => (
            <div className='flex w-full justify-between items-center'>
                <div>
                    <img className='w-96' src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />


                </div>

                <div className='text-left space-y-5'>
                    <h1 className='text-lg font-semibold'>{job.job_title}</h1>
                    <p>{job.company_name}</p>

    <div className='flex space-x-5'>


        <button className='outline outline-2 outline-indigo-400 px-2'>{job.remote_or_onsite}</button>
        <button className='outline outline-2 outline-indigo-400 px-2'>{job.fulltime_or_parttime}</button>

    </div>

    <div className='flex space-x-5'>


        <p>{job.location}</p>
        <p>{job.salary}</p>
    </div>



                </div>


                <div>

                <Link to={`/details/${job.id}`}>      <button className="btn-primary">View Details</button>
</Link>                </div>



            </div>



      ))}
            
        </div>
    );
};

export default AppliedJobs;