import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer
} from 'recharts';

const BrushBarChart = ({ data, xKey = 'name', yKey = 'value', barColor = '#8884d8' }) => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yKey} fill={barColor} />
          <Brush 
            dataKey={xKey}
            height={30}
            stroke="#8884d8"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BrushBarChart;