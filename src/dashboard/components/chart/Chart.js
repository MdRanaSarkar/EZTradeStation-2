import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid,
     Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Chart({title,data,dataKey,grid}) {
   
    return (
        <div className="Chart">
            <h3 className="ChartTitle">
               {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                 <LineChart data={data}>
                     <XAxis dataKey="name" stroke="#5550bd"/>
                   <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
                   <Tooltip/>
                {grid &&    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/> }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
