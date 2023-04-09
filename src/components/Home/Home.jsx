import React, { useState } from 'react';
import Banner from '../Header/Banner';
import Category from './Category';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    const [seeAll, setSeeAll] = useState(false)

    const showMore = () => {


        setSeeAll(true)



    }

    return (
        <div>
            <Banner></Banner>
            <Category></Category>

            <div>

                <h1 className='text-4xl font-bold my-2'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>


                <div className='grid lg:grid-cols-2 gap-5'>


                    {

                        data &&


                        data.slice(0, seeAll ? 6 : 4).map(data => <FeaturedJobs key={data.id} data={data}></FeaturedJobs>
                        )
                    }
                </div>

                <button onClick={showMore} className='btn-primary my-5'>See All Jobs</button>
            </div>


        </div>
    );
};

export default Home;