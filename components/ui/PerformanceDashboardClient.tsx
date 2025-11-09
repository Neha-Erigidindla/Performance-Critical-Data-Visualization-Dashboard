"use client";

import React from "react";
import LineChart from "../../components/charts/LineChart";
import BarChart from "../../components/charts/BarChart";
import ScatterPlot from "../../components/charts/ScatterPlot";
import  Heatmap from "../../components/charts/Heatmap";
import PerformanceMonitor from "../../components/ui/PerformanceMonitor";
import FilterPanel from "../../components/controls/FilterPanel";
import TimeRangeSelector from "../../components/controls/TimeRangeSelector";
import DataTable from "../../components/ui/DataTable";
import useDataStream from "../../hooks/useDataStream";
import "../../components/ui/dashboardClient.css";

export default function PerformanceDashboardClient() {
  const { dataWindow, controls } = useDataStream();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Real-Time Performance Dashboard</h1>
        <p>
          Stream Size: <strong>{dataWindow.length}</strong> points
        </p>
      </header>

      {/* Controls */}
      <section className="dashboard-controls">
        <FilterPanel />
        <TimeRangeSelector />
      </section>

      {/* Charts Grid */}
      <section className="charts-grid">
        <div className="chart-card">
          <h3>Live Line Chart</h3>
          <LineChart data={dataWindow} width={560} height={300} />
        </div>
        <div className="chart-card">
          <h3>Bar Chart</h3>
          <BarChart data={dataWindow} width={600} height={300} />
        </div>
        <div className="chart-card">
          <h3>Scatter Plot</h3>
          <ScatterPlot data={dataWindow} width={600} height={300} />
        </div>
        <div className="chart-card">
          <h3>Heatmap</h3>
          <Heatmap data={dataWindow} width={600} height={300} />
        </div>
      </section>

      {/* Data Table and Monitor */}
      <section className="bottom-section">
        <div className="table-wrapper">
          <h3>Live Data Stream </h3>
          <DataTable data={dataWindow.slice(-15)} />
        </div>

        <div className="monitor-wrapper">
          <h3>System Performance </h3>
          <PerformanceMonitor />
          <div className="data-rate">
            <center>
              <label>Data Rate:</label> <span>{controls.rate} ms</span>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
}
