import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='flex justify-between items-center'>

            <div>


                <h1 className='text-4xl font-extrabold'>DevJobs</h1>
            </div>



            <div className='lg:hidden mx-auto' onClick={() => setToggle(!toggle)}>

{

    toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg> :
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  



}






</div>

            <div className={`flex lg:block flex-col lg:flex-wrap lg:flex-row static space-y-2 lg:space-y-0 lg:space-x-5 font-bold text-xl items-center  ${toggle ? 'block p-3 bg-white lg:bg-transparent w-full card-bordered lg:max-w-max ' : 'hidden'}`}>


                <Link to = "/">Home</Link>
                <Link to= "statics">Statics</Link>
                <Link to= "/apply">Applied Jobs</Link>
                <Link to = "blog">Blog</Link>
            </div>  

            <div>

                <button className='btn-primary'>Start Applying</button>



            </div>

            
        </div>
    );
};

export default Navbar;