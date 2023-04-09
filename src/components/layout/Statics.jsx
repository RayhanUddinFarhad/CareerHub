import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    const [opacity, setOpacity] = useState({
        marks: 1,
      });
    
      const handleMouseEnter = (o) => {
        const { dataKey } = o;
    
        setOpacity({
          ...opacity,
          [dataKey]: 0.5,
        });
      };
    
      const handleMouseLeave = (o) => {
        const { dataKey } = o;
    
        setOpacity({
          ...opacity,
          [dataKey]: 1,
        });
      };
   
    return (
        <div>
             <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" dataKey="marks" strokeOpacity={opacity.marks} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
            
        </div>
    );
};

export default Statics;