import React from "react";
import { generateInitialDataset } from "../../lib/dataGenerator";
import DataProvider from "../../components/providers/DataProvider";
import PerformanceDashboardClient from "../../components/ui/PerformanceDashboardClient";



export default async function Page() {
  // Server-side data generation
  const initialData = generateInitialDataset(10000);

  return (
    <DataProvider initialData={initialData}>
      <PerformanceDashboardClient />
    </DataProvider>
  );
}
