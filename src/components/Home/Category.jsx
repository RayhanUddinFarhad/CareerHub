import React, { useEffect, useState } from 'react';
import CategoryItems from './CategoryItems';

const Category = () => {

    const [category, setCategory] = useState()

    useEffect (() => { 


        fetch ('category.json')
        .then (response => response.json())
        .then (data => setCategory (data))
    }, [])


    
    return (
        <div className='my-10 space-y-5'>


            <h1 className='text-5xl font-bold '>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-4 gap-5'>

                { category &&

                    category.map(category => <CategoryItems key={category.id} data = {category}></CategoryItems> )






                }






            </div>



            <div>




            </div>
            
        </div>
    );
};

export default Category;