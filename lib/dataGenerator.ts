// lib/dataGenerator.ts
import { DataPoint } from "./types";

export function createRandomPoint(): DataPoint {
  const now = Date.now();
  const value = Math.sin(now / 5000) * 30 + Math.random() * 6 + 50; // some waveform + noise
  return { timestamp: now, value, category: "A" };
}

export function generateInitialDataset(count = 10000): DataPoint[] {
  const arr: DataPoint[] = [];
  const start = Date.now() - count * 100;
  for (let i = 0; i < count; i++) {
    arr.push({
      timestamp: start + i * 100,
      value:
        Math.sin((i / count) * Math.PI * 8) * 30 +
        60 +
        (Math.random() - 0.5) * 6,
      category: "A",
    });
  }
  return arr;
}
