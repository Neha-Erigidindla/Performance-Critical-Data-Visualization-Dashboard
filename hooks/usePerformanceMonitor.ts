// hooks/usePerformanceMonitor.ts
"use client";
import { useEffect, useRef, useState } from "react";

export function usePerformanceMonitor() {
  const last = useRef<number | null>(null);
  const frames = useRef(0);
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    function loop(t: number) {
      if (last.current == null) last.current = t;
      frames.current++;
      const dt = t - last.current;
      if (dt >= 1000) {
        setFps(Math.round((frames.current * 1000) / dt));
        frames.current = 0;
        last.current = t;
        // memory (non-standard) - best-effort
        if ((performance as any).memory) {
          const mem = (performance as any).memory;
          setMemory(Math.round((mem.usedJSHeapSize / 1024 / 1024) * 100) / 100);
        }
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return { fps, memory };
}
