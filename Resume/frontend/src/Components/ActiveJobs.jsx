
import React, { useEffect, useState } from "react";
import axios from "axios";

const ActiveJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jd/active").then((res) => {
      setJobs(res.data.jobs);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Active Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Experience:</strong> {job.parsed_json.experience}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Education:</strong> {job.parsed_json.education}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Skills:</strong> {job.parsed_json.skills?.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveJobs;
