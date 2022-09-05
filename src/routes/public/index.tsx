import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../screens';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;