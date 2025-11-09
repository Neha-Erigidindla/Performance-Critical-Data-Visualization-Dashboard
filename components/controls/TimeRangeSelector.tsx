"use client";
import React from "react";

const TimeRangeSelector = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg shadow-sm">
      <label className="text-sm text-gray-700">Time Range:</label>
      <select className="border rounded px-2 py-1">
        <option value="1m">1 Min</option>
        <option value="5m">5 Min</option>
        <option value="1h">1 Hour</option>
      </select>
    </div>
  );
};

export default TimeRangeSelector;
