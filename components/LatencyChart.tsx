import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { LatencyData } from '../types';

const data: LatencyData[] = [
  { phase: 'L1', function: '感知输入', latency: 3, description: 'FPGA预处理 (IMU/Audio)', color: '#94a3b8' },
  { phase: 'L2', function: '网络传输', latency: 5, description: '5G URLLC / QUIC', color: '#22d3ee' },
  { phase: 'L3-A', function: '直觉反应 (Sys 1)', latency: 8, description: '抢占感知 / 非语言信号', color: '#facc15' },
  { phase: 'L4', function: '预测渲染', latency: 9, description: 'Visual Pre-emption / 3DGS', color: '#c084fc' },
  { phase: 'L5', function: '终端显示', latency: 5, description: 'ATW 补偿', color: '#94a3b8' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded shadow-xl text-xs z-50">
        <p className="font-bold text-polaris-accent mb-1">{`${dataPoint.phase}: ${dataPoint.function}`}</p>
        <p className="text-slate-300">{`耗时: ${dataPoint.latency}ms`}</p>
        <p className="text-slate-400 italic mt-1">{dataPoint.description}</p>
      </div>
    );
  }
  return null;
};

export const LatencyChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full mt-6 bg-slate-900/30 rounded-lg p-4 border border-slate-800 relative">
      <h3 className="text-sm font-mono text-slate-400 mb-4 absolute top-4 left-4">双轨制端到端延迟预算 (Dual-Track Budget)</h3>
      <div className="absolute top-4 right-4 flex items-center space-x-2">
         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
         <span className="text-xs text-red-400 font-mono">TTFR THRESHOLD: 30ms</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 40, right: 30, left: 40, bottom: 5 }}
        >
          <XAxis type="number" domain={[0, 40]} tick={{fill: '#64748b', fontSize: 10}} stroke="#334155" />
          <YAxis type="category" dataKey="phase" tick={{fill: '#94a3b8', fontSize: 12}} stroke="#334155" width={30} />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
          <ReferenceLine x={30} stroke="#ef4444" strokeDasharray="3 3" />
          <Bar dataKey="latency" radius={[0, 4, 4, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};