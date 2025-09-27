'use client';
import React from 'react'; import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
export function PoolLine({ data }: { data: { date: string; nav: number }[] }) {
  return (<div style={{ height: 300 }}><ResponsiveContainer width="100%" height="100%"><AreaChart data={data}><defs><linearGradient id="navGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#000" stopOpacity={0.25} /><stop offset="100%" stopColor="#000" stopOpacity={0} /></linearGradient></defs><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="date" /><YAxis /><Tooltip /><Area type="monotone" dataKey="nav" stroke="#000" fill="url(#navGradient)" /></AreaChart></ResponsiveContainer></div>);
}
