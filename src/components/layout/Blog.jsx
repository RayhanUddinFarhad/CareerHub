import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='card shadow-md'>


           <h1 className='text-4xl font-bold my-5 '>When should you use context API?</h1>
           <p>Context API is typically used in React applications when you need to share data or state between components that are not directly related or nested within each other. It provides a way to avoid prop drilling and simplify the process of passing data down through multiple layers of components.</p>
           </div>


           <div className='card shadow-md'>

            <h1 className='text-4xl font-bold my-5'>What is a custom hook?</h1>
            <p>A custom hook is a function in React that allows you to extract logic or state management from a component and reuse it in other components. Custom hooks can be used to share common logic or stateful behavior across multiple components.</p>



           </div>

           <div className='card shadow-md'>

            <h1 className='text-4xl font-bold my-5'>What is useRef?</h1>
            <p>useRef is a hook in React that returns a mutable object that can be used to store a reference to a DOM element or a value. It is typically used when you need to access or modify a DOM element directly from within a functional component.</p>


           </div>
           <div className='card shadow-md'>

            <h1 className='text-4xl font-bold my-5'> What is useMemo?</h1>
            <p>useMemo is a hook in React that allows you to memoize the result of a function so that it is only recomputed when one of its dependencies changes. It can be used to optimize the performance of components that have expensive computations or render frequently.</p>
           </div>
        </div>
    );
};

export default Blog;