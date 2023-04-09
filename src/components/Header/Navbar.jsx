import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>

            <div>


                <h1 className='text-4xl font-extrabold'>DevJobs</h1>
            </div>

            <div className='space-x-6'>


                <Link to= "/">Home</Link>
                <Link>Statics</Link>
                <Link>Applied Jobs</Link>
                <Link>Blog</Link>
            </div>

            <div>

                <button className='btn-primary'>Start Applying</button>



            </div>

            
        </div>
    );
};

export default Navbar;