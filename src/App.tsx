import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLayout from '@/templates/PageLayout/PageLayout';
import Dashboard from '@/templates/Dashboard/Dashboard';
import TestFlow from '@/templates/TestFlow/TestFlow';
import TestResults from '@/templates/TestResults/TestResults';
import Testing from '@/templates/Testing/Testing';

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
      <Route path="/test" element={<TestFlow />} />
      <Route path="/components" element={<Testing />} />
      <Route path="/results" element={<TestResults />} />
    </Routes>
  );
};

export default App;
