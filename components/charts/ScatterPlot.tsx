"use client";
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = Array.from({ length: 20 }, (_, i) => ({
  x: i * 10,
  y: Math.random() * 500,
}));

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { x, y } = payload[0].payload;
    return (
      <div
        style={{
          background: "rgba(10, 20, 10, 0.95)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "8px",
          padding: "6px 10px",
          color: "#bbf7d0",
          fontSize: "0.8rem",
          backdropFilter: "blur(6px)",
          boxShadow: "0 0 10px rgba(226, 232, 228, 0.3)",
        }}
      >
        <div>⏱ Time: {x}</div>
        <div>📊 Value: {y.toFixed(2)}</div>
      </div>
    );
  }
  return null;
};

export default function ScatterPlot() {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        position: "relative",
        marginTop: "35px",
      }}
    >
      <ResponsiveContainer>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(74,222,128,0.08)" />
          <XAxis
            dataKey="x"
            stroke="#eaedeeff"
            tick={{ fill: "#dae4e6ff", fontSize: 12 }}
            axisLine={true}
            tickLine={false}
          />
          <YAxis
            dataKey="y"
            stroke="#d9dcdcff"
            tick={{ fill: "#dae5e6ff", fontSize: 12 }}
            axisLine={true}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />

          <Scatter
            data={data}
            shape={(props: any) => {
              const { cx, cy } = props;
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill="rgba(34,197,94,0.9)"
                  stroke="rgba(187,247,208,0.9)"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(34,197,94,0.5))",
                    animation: "blink 3s ease-in-out infinite",
                    transition: "r 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.r = "8";
                    e.currentTarget.style.fill = "rgba(52,211,153,1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.r = "5";
                    e.currentTarget.style.fill = "rgba(34,197,94,0.9)";
                  }}
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
