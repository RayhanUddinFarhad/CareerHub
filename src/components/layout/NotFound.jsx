import React from 'react';
import error from "../Home/error.json";
import Lottie from "lottie-react";



const NotFound = () => {
    return (
        <div>
            
            <Lottie animationData={error} loop={true} />;
            
        </div>
    );
};

export default NotFound;