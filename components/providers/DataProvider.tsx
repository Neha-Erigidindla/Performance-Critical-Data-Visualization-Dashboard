// components/providers/DataProvider.tsx
"use client";
import React, { createContext, useContext, useRef, useState } from "react";
import { DataPoint } from "../../lib/types";

type ProviderProps = { initialData: DataPoint[]; children: React.ReactNode };

interface DataContextShape {
  pushPoints: (pts: DataPoint[]) => void;
  getWindow: () => DataPoint[];
  subscribe: (cb: () => void) => () => void;
}

const DataContext = createContext<DataContextShape | null>(null);

export default function DataProvider({ initialData, children }: ProviderProps) {
  const bufferRef = useRef<DataPoint[]>(initialData ?? []);
  const subscribers = useRef(new Set<() => void>());

  const pushPoints = (pts: DataPoint[]) => {
    bufferRef.current.push(...pts);
    // keep sliding window by timestamp or length (e.g., keep last 60k)
    if (bufferRef.current.length > 120000)
      bufferRef.current.splice(0, bufferRef.current.length - 120000);
    subscribers.current.forEach((cb) => cb());
  };

  const getWindow = () => bufferRef.current;

  const subscribe = (cb: () => void) => {
    subscribers.current.add(cb);
    return () => subscribers.current.delete(cb);
  };

  const ctx: DataContextShape = { pushPoints, getWindow, subscribe };

  return <DataContext.Provider value={ctx}>{children}</DataContext.Provider>;
}

export function useDataProvider() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useDataProvider must be used within DataProvider");
  return ctx;
}
