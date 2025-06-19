// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">Job Portal</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {/* ...existing nav items... */}
              </ul>
            </div>
          </div>
        </nav>

        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddJob />} />
            <Route path="/edit/:id" element={<EditJob />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
