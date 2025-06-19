import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then(res => setJob(res.data));
  }, [id]);

  if (!job) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">{job.title}</h2>
      <p className="text-xl text-gray-800">{job.company}</p>
      <p className="text-gray-600 mb-4">{job.location}</p>
      <p className="text-gray-700 leading-7 whitespace-pre-line">{job.description}</p>
    </div>
  );
};

export default ViewJob;
