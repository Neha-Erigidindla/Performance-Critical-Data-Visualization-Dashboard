"use client";
import React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ScatterChart,
  Scatter,
  CartesianGrid,
} from "recharts";

// Generate color based on value (blue gradient)
const getColor = (value: number, min: number, max: number) => {
  const intensity = Math.floor(((value - min) / (max - min)) * 255);
  return `rgb(${255 - intensity}, ${intensity}, 255)`; // Purple-blue tone
};

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "#1e1e2f",
          border: "1px solid #4f46e5",
          padding: "8px 12px",
          borderRadius: "8px",
          color: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        <p>
          <strong>X:</strong> {data.x}
        </p>
        <p>
          <strong>Y:</strong> {data.y}
        </p>
        <p>
          <strong>Value:</strong> {data.value}
        </p>
      </div>
    );
  }
  return null;
};

// Gradient Legend
const HeatmapLegend = ({ min, max }: { min: number; max: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
    //   marginBottom: 10,
      color: "#e0e0ff",
      fontSize: "0.9rem",
    }}
  >
    <span>{min}</span>
    <div
      style={{
        flex: 1,
        height: 8,
        borderRadius: 4,
        background: `linear-gradient(to right, rgb(255,255,255), rgb(128,0,255))`,
      }}
    ></div>
    <span>{max}</span>
  </div>
);

const Heatmap = () => {
  const data = [
    { x: 1, y: 2, value: 40 },
    { x: 2, y: 3, value: 70 },
    { x: 3, y: 4, value: 30 },
    { x: 4, y: 1, value: 90 },
    { x: 5, y: 2, value: 55 },
    { x: 6, y: 3, value: 80 },
  ];

  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 10, bottom: 10, left: 10 }}>
          <CartesianGrid stroke="#2a2a40" strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" stroke="#9ca3af" />
          <YAxis type="number" dataKey="y" stroke="#9ca3af" />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#4f46e5" }} />
          <Scatter
            data={data}
            shape={(props: any) => {
              const { cx, cy, payload } = props;
              const color = getColor(payload.value, min, max);
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={10}
                  fill={color}
                  stroke="#fff"
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.2s, r 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(0.3)")
                  }
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
      <HeatmapLegend min={min} max={max} />
    </div>
  );
};

export default Heatmap;
