"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { DataPoint } from "../lib/types";
import { useDataProvider } from "../components/providers/DataProvider";
import { createRandomPoint } from "../lib/dataGenerator";

// define a clear return type
interface UseDataStreamResult {
  dataWindow: DataPoint[];
  controls: {
    rate: number;
    setRate: React.Dispatch<React.SetStateAction<number>>;
  };
}

export default function useDataStream(): UseDataStreamResult {
  const provider = useDataProvider();
  const [rate, setRate] = useState(100); // ms
  const [windowSize] = useState(10000); // keep last 10k in local window
  const [, force] = useState(0);
  const frame = useRef<number | null>(null);

  // Every `rate` ms push a batch of points (simulate burst)
  useEffect(() => {
    let t = setInterval(() => {
      const batch = new Array(50).fill(0).map(() => createRandomPoint());
      provider.pushPoints(batch);
    }, rate);

    return () => clearInterval(t);
  }, [provider, rate]);

  // Subscribe to provider updates for local rendering buffer
  const windowRef = useRef<DataPoint[]>(
    provider.getWindow().slice(-windowSize)
  );
  useEffect(() => {
    const unsub = provider.subscribe(() => {
      windowRef.current = provider.getWindow().slice(-windowSize);
      if (frame.current === null) {
        frame.current = requestAnimationFrame(() => {
          frame.current = null;
          force((s) => s + 1);
        });
      }
    });
    return () => {
      unsub();
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [provider, windowSize]);

  const dataWindow = useMemo(
    () => windowRef.current.slice(),
    [windowRef.current, rate]
  );

  const controls = { rate, setRate };

  return { dataWindow, controls };
}
