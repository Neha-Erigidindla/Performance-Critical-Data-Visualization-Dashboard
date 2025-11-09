// app/dashboard/layout.tsx
import React from "react";
export const metadata = {
  title: "Dashboard - Performance Dashboard",
  description: "Dashboard layout for performance monitoring",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      {children}
    </div>
  );
}

