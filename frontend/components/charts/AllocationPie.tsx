'use client';
import React from 'react'; import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
export function AllocationPie({ data }: { data: { name: string; value: number }[] }) {
  return (<div style={{ height: 300 }}><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>{data.map((_,i)=>(<Cell key={i} />))}</Pie><Legend /><Tooltip /></PieChart></ResponsiveContainer></div>);
}
