"use client";
import React from "react";

interface DataTableProps {
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const formatTimestamp = (ts: string | number | Date) => {
    try {
      const date = new Date(ts);
      return isNaN(date.getTime())
        ? "-"
        : date.toLocaleString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
    } catch {
      return "-";
    }
  };

  return (
    <div
      style={{
        background: "rgba(20, 20, 40, 0.85)",   
        padding: "16px",
        border: "1px solid rgba(150, 150, 255, 0.1)",
        boxShadow: "0 0 20px rgba(100, 100, 255, 0.05)",
        color: "#e0e0ff",
        overflow: "auto",
        maxHeight: "400px",
        transition: "all 0.3s ease-in-out",
        marginTop: "20px",
      }}
    >
      {/* <h3
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#a5b4fc",
          marginBottom: "10px",
          borderBottom: "1px solid rgba(150,150,255,0.1)",
          paddingBottom: "6px",
        }}
      >
        📋 Live Data Stream
      </h3> */}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
        }}
      >
        {/* Header */}
        <thead
          style={{
            position: "sticky",
            top: 0,
            background: "rgba(30, 35, 50, 0.9)",
            color: "#c7d2fe",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: "0.75rem",
          }}
        >
          <tr>
            <th style={{ textAlign: "left", padding: "8px 12px" }}>#</th>
            <th style={{ textAlign: "left", padding: "8px 12px" }}>X Value</th>
            <th style={{ textAlign: "left", padding: "8px 12px" }}>Y Value</th>
            <th style={{ textAlign: "left", padding: "8px 12px" }}>
              Timestamp
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <tr
                key={i}
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(29, 16, 78, 0.82)"
                      : "rgba(35, 40, 50, 0.6)",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(120, 130, 255, 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    i % 2 === 0
                      ? "rgba(25, 30, 40, 0.7)"
                      : "rgba(35, 40, 50, 0.6)";
                }}
              >
                <td style={{ padding: "8px 12px", color: "#dde0e6ff" }}>
                  {i + 1}
                </td>
                <td style={{ padding: "8px 12px", color: "#f6fdfaff" }}>
                  {row.x?.toFixed?.(2) ?? "-"}
                </td>
                <td style={{ padding: "8px 12px", color: "#eaf0eeff" }}>
                  {row.y?.toFixed?.(2) ?? "-"}
                </td>
                <td style={{ padding: "8px 12px", color: "#d3d8dfff" }}>
                  {formatTimestamp(row.timestamp)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                style={{
                  textAlign: "center",
                  padding: "32px",
                  color: "#1a6ce0ff",
                  fontStyle: "italic",
                }}
              >
                No data available. Waiting for stream...
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <style>
        {`
          ::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(84, 61, 216, 0.2);
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(120, 130, 255, 0.35);
          }
        `}
      </style>
    </div>
  );
};

export default DataTable;
