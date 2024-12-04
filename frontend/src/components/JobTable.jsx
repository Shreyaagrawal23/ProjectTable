import React, { useEffect, useState } from "react";

const JobTable = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://projecttabl.onrender.com/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) {
    return <p className="text-center">Loading jobs...</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Created On</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Salary Range</th>
            <th className="px-4 py-2">Experience</th>
            <th className="px-4 py-2">Coding Assessment</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{job.position}</td>
              <td className="px-4 py-2">{job.createdOn}</td>
              <td className="px-4 py-2">{job.status}</td>
              <td className="px-4 py-2">{job.salaryRange}</td>
              <td className="px-4 py-2">{job.experience}</td>
              <td className="px-4 py-2">{job.codingAssessment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
