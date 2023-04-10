import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BeakerIcon, CurrencyDollarIcon, DeviceTabletIcon, PhoneIcon, InboxIcon, MapIcon , MapPinIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const Details = () => {

  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    fetch('/features.json')
      .then((response) => response.json())
      .then((data) => {
        const job = data.find((job) => job.id.toString() === id);
        setJob(job);
      });
  }, [id]);

  const handleApplyNow = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    appliedJobs.push(job);
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    toast.success("Job  applied successfully! ")



  }



  console.log(job)

  return (
    <div>

      <div className='h-96 flex justify-center items-center bg-blue-100 mb-5'>
        <h1 className='text-3xl font-bold'>Job Details</h1>





      </div>

      <button onClick={() => navigate(-1)} className='btn-primary'>Go Back</button>



      {

        job && <div className='lg:flex justify-around space-x-5'>
          <div className='text-left space-y-10 '>

            <h1><span className='text-lg font-bold'>Job Description:</span> {job.job_description}</h1>
            <p><span className='text-lg font-bold'>Job Responsibility :</span> {job.job_responsibility}</p>
            <p><span className='text-lg font-bold'>Educational Requirements: <br /> </span>{job.educational_requirements}</p>
            <p><span className='text-lg font-bold'>Experiences : <br /> </span>{job.experiences}</p>






          </div>

          <div className=' text-left space-y-5 bg-blue-100 p-5'>
            <p className='text-xl font-bold text-left border-b border-indigo-400'>Job Details</p>
            <p className='flex  items-center '> <CurrencyDollarIcon className='w-5 mx-2 text-blue-500'></CurrencyDollarIcon> <span className='text-lg font-bold text-left'>Salary :</span> {job.salary}</p>
            <p className='flex  items-center'><DeviceTabletIcon className='w-5 mx-2 text-blue-500'></DeviceTabletIcon> <span className='text-lg font-bold text-left'>Job Title :</span>{job.job_title}</p>
            <p className='flex  items-center'> <span className='text-xl font-bold text-center border-b border-indigo-400'> Contact Information </span>  </p>
            <p className='flex  items-center'><PhoneIcon className='w-5 mx-2 text-blue-500'></PhoneIcon> <span className='text-lg font-bold text-left'>Phone: </span> {job.contact_information[0].phone}</p>
            <p className='flex  items-center'><InboxIcon className='w-5 mx-2 text-blue-500'></InboxIcon> <span className='text-lg font-bold'>Email: </span> {job.contact_information[0].email} </p>
            <p className='flex  items-center'><MapPinIcon className='w-5 mx-2 text-blue-500'></MapPinIcon> <span className='text-lg font-bold '>Address : </span>{job.location}</p>

            <button onClick={handleApplyNow} className='btn-primary  '>Apply Now</button>





          </div>

        </div>
      }
    </div>
  );
};

export default Details;