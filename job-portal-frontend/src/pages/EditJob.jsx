import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditJob = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', company: '', location: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then(res => setForm(res.data));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`/api/jobs/${id}`, form);
      navigate('/jobs');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Edit Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={form.title} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
        <input type="text" name="company" value={form.company} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
        <input type="text" name="location" value={form.location} onChange={handleChange} required className="w-full border px-4 py-2 rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} required className="w-full border px-4 py-2 rounded h-32"></textarea>
        <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;