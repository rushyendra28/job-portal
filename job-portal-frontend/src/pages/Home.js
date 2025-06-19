// src/pages/Home.js
import React from 'react';
import JobList from '../components/JobList';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>All Job Listings</h2>
    <Link to="/add">+ Add Job</Link>
    <JobList />
  </div>
);

export default Home;
