// lib/types.ts
export interface DataPoint {
  timestamp: number; // ms epoch
  value: number;
  category?: string;
  metadata?: Record<string, any>;
}

export interface PerformanceMetrics {
  fps: number;
  memoryUsage?: number;
  renderTime?: number;
  dataProcessingTime?: number;
}
