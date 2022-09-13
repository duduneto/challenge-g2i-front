import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Quiz, Results } from '../../screens';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default PublicRoutes;