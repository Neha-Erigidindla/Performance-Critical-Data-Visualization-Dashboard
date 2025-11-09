// hooks/useChartRenderer.ts
import { useEffect, useRef } from "react";

type ChartDataPoint = {
  x: number;
  y?: number;
  value?: number;
  timestamp?: number;
};

type UseChartRendererProps = {
  data: ChartDataPoint[];
  renderCallback: (
    ctx: CanvasRenderingContext2D,
    data: ChartDataPoint[]
  ) => void;
  width?: number;
  height?: number;
};

export const useChartRenderer = ({
  data,
  renderCallback,
  width = 600,
  height = 300,
}: UseChartRendererProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;

    const render = () => {
      renderCallback(ctx, data);
      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrame);
  }, [data, renderCallback, width, height]);

  return canvasRef;
};
