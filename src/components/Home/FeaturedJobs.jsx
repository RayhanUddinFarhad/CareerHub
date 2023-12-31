import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, CurrencyDollarIcon, DeviceTabletIcon, PhoneIcon, InboxIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/solid'


const FeaturedJobs = ({ data }) => {
    return (
        <div>

            <div>

                <div style={{height : "392px"}} className="card h-96 bg-base-100 shadow-xl">
                    <figure ><img className='object-cover w-3/12' src= {data.company_logo} alt="Shoes" /></figure>
                    <div className="card-body text-left space-y-2">
                        <h2 className="card-title">{data.job_title}</h2>
                        <p>{data.company_name}</p>

                        <div className='flex space-x-5'>


                            <button className='outline outline-2 outline-indigo-400 px-2'>{data.remote_or_onsite}</button>
                            <button className='outline outline-2 outline-indigo-400 px-2'>{data.fulltime_or_parttime}</button>

                        </div>

                        <div className='flex justify-around'>


                            <p className='flex'><MapPinIcon className='w-6'></MapPinIcon> {data.location}</p>
                            <p className='flex'><CurrencyDollarIcon className='w-6 '></CurrencyDollarIcon>{data.salary}</p>
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