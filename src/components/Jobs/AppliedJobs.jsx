import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    console.log(appliedJobs)


    return (
        <div className='space-y-5 '>
            {appliedJobs.map(job => (
                <div className='flex w-full justify-between items-center border p-3'>
                    <div>
                        <img className='w-96' src= {job.company_logo} alt="" />


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