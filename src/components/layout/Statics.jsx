import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919', '#00E5FF', '#00FF2B'];



const data = [
    {
      id: '1',
      name: 'HTML and raw CSS',
      marks: 60,
    },
    {
      id: '2',
      name: 'Responsive website',
      marks: 60,
    },
    {
      id: '3',
      name: 'CSS framework',
      marks: 60,
    },
    {
      id: '4',
      name: 'Fundamental Javascript',
      marks: 60,
    },
    {
      id: '5',
      name: 'Javascript DOM',
      marks: 60,
    },
    {
      id: '6',
      name: 'API',
      marks: 60,
    },
    {
      id: '7',
      name: 'Debugging',
      marks: 60,
    },
    {
      id: '8',
      name: 'Basic React',
      marks: 60,
    },
  ];    
const Statics = () => {


    
   
      return (
        <div>

          <h1 className='text-4xl font-bold'>Assignments Marks</h1>
          <div style={{ width: '100%' }}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey= "marks"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={(entry) => entry.name}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
      
};

export default Statics;