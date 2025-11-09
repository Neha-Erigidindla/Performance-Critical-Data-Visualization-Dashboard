// components/charts/LineChart.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { DataPoint } from "../../lib/types";

type Props = { data: DataPoint[]; width?: number; height?: number };

export default function LineChart({ data, width = 800, height = 300 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // simple drawing: map timestamps to x and values to y
  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let isMounted = true;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    function render() {
      if (!isMounted) return;
      // clear
      ctx.clearRect(0, 0, width, height);

      // background
      ctx.fillStyle = "rgba(10,14,24,0.4)";
      ctx.fillRect(0, 0, width, height);

      // no data
      if (!data || data.length === 0) {
        ctx.fillStyle = "#98a8b9";
        ctx.fillText("No data", 10, 20);
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      // compute bounds
      const len = data.length;
      const minV = Math.min(...data.map((d) => d.value));
      const maxV = Math.max(...data.map((d) => d.value));
      const vRange = maxV - minV || 1;

      // time range
      const startT = data[0].timestamp;
      const endT = data[len - 1].timestamp || startT + 1;
      const tRange = endT - startT || 1;

      // draw line with single stroke for performance
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "#60a5fa";
      ctx.beginPath();

      for (let i = 0; i < len; i++) {
        const p = data[i];
        const x = ((p.timestamp - startT) / tRange) * width;
        const y = height - ((p.value - minV) / vRange) * height;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();

      // lightweight points sampling: draw few points to hint density
      ctx.fillStyle = "#cbe6ff";
      const step = Math.max(1, Math.floor(len / 200)); // at most 200 points drawn
      for (let i = 0; i < len; i += step) {
        const p = data[i];
        const x = ((p.timestamp - startT) / tRange) * width;
        const y = height - ((p.value - minV) / vRange) * height;
        ctx.fillRect(x - 0.6, y - 0.6, 1.2, 1.2);
      }

      rafRef.current = requestAnimationFrame(render);
    }

    render();
    return () => {
      isMounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [data, width, height]);

  return <canvas ref={canvasRef} />;
}
