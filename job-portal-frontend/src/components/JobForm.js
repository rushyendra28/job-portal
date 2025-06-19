// src/components/JobForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JobForm = ({ jobId }) => {
  const [form, setForm] = useState({ title: '', description: '', location: '', salary: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (jobId) {
      axios.get(`http://localhost:5000/api/jobs`)
        .then(res => {
          const job = res.data.find(j => j._id === jobId);
          setForm(job);
        });
    }
  }, [jobId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jobId) {
      await axios.put(`http://localhost:5000/api/jobs/${jobId}`, form);
    } else {
      await axios.post('http://localhost:5000/api/jobs', form);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
      <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
      <input type="text" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} required />
      <input type="number" placeholder="Salary" value={form.salary} onChange={e => setForm({ ...form, salary: e.target.value })} required />
      <button type="submit">{jobId ? "Update Job" : "Post Job"}</button>
    </form>
  );
};

export default JobForm;
