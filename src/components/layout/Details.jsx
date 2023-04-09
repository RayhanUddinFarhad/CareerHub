import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();
    const [job, setJob] = useState(null);

  useEffect(() => {
    fetch('/features.json')
      .then((response) => response.json())
      .then((data) => {
        const job = data.find((job) => job.id.toString() === id);
        setJob(job);
      });
  }, [id]);

  console.log (job)

    return (
        <div>
            I am details
            
        </div>
    );
};

export default Details;