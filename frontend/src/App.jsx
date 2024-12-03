import React from "react";
import JobTable from "./components/JobTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Job Listings</h1>
      <JobTable />
    </div>
  );
}

export default App;
