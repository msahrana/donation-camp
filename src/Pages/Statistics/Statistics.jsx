
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const [donation, setDonation] = useState([])
    const donationItems = JSON.parse(localStorage.getItem('donation'))
    setDonation(donationItems)
    console.log(donation)
    useEffect(()=>{

    },[])

    const x = setDonation/12*100
    const y = 100 - x 
    
const data = [
    { name: 'Group A', value: x },
    { name: 'Group B', value: y },
  
  ];

  const COLORS = [ '#00C49F', '#FFBB28', ];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  

    return (
        <><h1>Statistics</h1>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer></>
        
    );
};

export default Statistics;