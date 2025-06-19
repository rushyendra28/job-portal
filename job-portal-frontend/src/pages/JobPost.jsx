import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const [form, setForm] = useState({ title: '', company: '', location: '', description: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/jobs', form);
      navigate('/jobs');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
        <input type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
        <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange} required className="w-full border px-4 py-2 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;