"use client";
import React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "CPU", value: 65 },
  { name: "Memory", value: 78 },
  { name: "Disk", value: 45 },
  { name: "Network", value: 90 },
];

const BarChart: React.FC = () => {
  return (
    <div
      className="relative bg-[#0b0b13] border border-[#1f1f2e] p-6 rounded-xl text-[#d0d0ff] overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,200,0.25)]"
      style={{
        boxShadow: "inset 0 0 20px rgba(0, 255, 200, 0.05)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Subtle monitor scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,rgba(0,255,180,0.3)_0px,rgba(0,255,180,0.3)_1px,transparent_1px,transparent_4px)] animate-scan" />

      {/* Header with active LED */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#22ff99]" />
        <h3 className="text-sm tracking-widest text-[#00ffaa] uppercase font-semibold">
          System Resource Monitor
        </h3>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <ReBarChart data={data} barSize={45}>
          <defs>
            {/* Green to Blue gradient */}
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22ff99" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#0099ff" stopOpacity={0.5} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.1)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#ffffff"
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />
          <YAxis stroke="#ffffff" tick={{ fill: "#ffffff", fontSize: 12 }} />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
            contentStyle={{
              backgroundColor: "#0f0f1f",
              border: "1px solid #22ff99",
              borderRadius: "6px",
              color: "#d0f0ff",
              fontSize: "0.85rem",
            }}
          />
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[8, 8, 0, 0]}
            animationBegin={0}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </ReBarChart>
      </ResponsiveContainer>

      {/* Monitor scan line animation */}
      <style jsx>{`
        @keyframes scan {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 20px;
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BarChart;
