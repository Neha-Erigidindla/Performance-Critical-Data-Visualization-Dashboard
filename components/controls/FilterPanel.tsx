"use client";
import React from "react";

const FilterPanel = () => {
  return (
    <div className="flex gap-2 items-center bg-gray-100 p-2 rounded-lg shadow-sm">
      <button className="px-3 py-1 bg-blue-500 text-white rounded">
        1 Min
      </button>
      <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">
        5 Min
      </button>
      <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">
        1 Hour
      </button>
    </div>
  );
};

export default FilterPanel;
