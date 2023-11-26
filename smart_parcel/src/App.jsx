import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Index from '../src/PetClinic/Index';
import View from './PetClinic/View';
import Create from './PetClinic/Create';

function AppContent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          {/* Updated Link path to remove the leading dot */}
          <Link to="/PetClinic/Index"><button>Go to Pet Clinic</button></Link>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        {/* Ensure the path matches the route you want to render */}
        <Route path="/PetClinic/Index" element={<Index />} />
        <Route path="/PetClinic/View/:id" element={<View />} />
        <Route path="/PetClinic/Create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;