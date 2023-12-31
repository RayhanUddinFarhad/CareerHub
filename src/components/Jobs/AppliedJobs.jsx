import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, CurrencyDollarIcon, DeviceTabletIcon, PhoneIcon, InboxIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/solid'


const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectOption = (event) => {
        setSelectedOption(event.target.value);
    };

    const filteredJobs = selectedOption === 'remote' ? 
        appliedJobs.filter(job => job.remote_or_onsite === 'Remote') :
        selectedOption === 'onsite' ?
        appliedJobs.filter(job => job.remote_or_onsite === 'Onsite') :
        appliedJobs;

    console.log(appliedJobs)


    return (
        <div className='space-y-5 '>
            <div className='h-96 flex justify-center items-center bg-blue-100 mb-5'>
        <h1 className='text-3xl font-bold'>Applied Jobs</h1>





      </div>



            <select className="select select-bordered w-full max-w-xs" value={selectedOption} onChange={handleSelectOption}>
                <option value="">All Jobs</option>
                <option value="remote">Remote Jobs</option>
                <option value="onsite">Onsite Jobs</option>
            </select>

            {filteredJobs.map(job => (
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
                            <p className='flex'> <MapPinIcon className='w-6'></MapPinIcon> {job.location}</p>
                            <p className='flex'><CurrencyDollarIcon className='w-6 '></CurrencyDollarIcon>{job.salary}</p>
                        </div>
                    </div>

                    <div>
                        <Link to={`/details/${job.id}`}>
                            <button className="btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppliedJobs;