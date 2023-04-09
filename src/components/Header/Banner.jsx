import React from 'react';

const Banner = () => {
    return (
        <div className='bg-blue-100 p-10'>

           <div className='lg:flex items-center'>

            <div className='text-left space-y-5'>

                <h1 className='text-7xl font-bold '>

                One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span>
                </h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn-primary'>Get Started</button>



            </div>


            <div>


                <img src="https://i.postimg.cc/02H4vtBp/P3-OLGJ1-copy-1.png" alt="" />
            </div>


            
           </div>
            
        </div>
    );
};

export default Banner;