import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLayout from '@/templates/PageLayout/PageLayout';
import Dashboard from '@/templates/Dashboard/Dashboard';
import Test from '@/templates/Test/Test';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout title="Dashboard" actions>
            <Dashboard />
          </PageLayout>
        }
      />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;
