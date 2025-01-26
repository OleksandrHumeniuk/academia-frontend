import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthAPI from '@/api/AuthAPI/AuthAPI';
import PracticeAPI from '@/api/PracticeAPI/PracticeAPI';
import TestAPI from '@/api/TestAPI/TestAPI';
import PageLayout from '@/layouts/PageLayout/PageLayout';
import TestFlowLayout from '@/layouts/TestFlowLayout/TestFlowLayout';
import Dashboard from '@/templates/Dashboard/Dashboard';
import TestFlow from '@/templates/TestFlow/TestFlow';
import TestResults from '@/templates/TestResults/TestResults';
import Testing from '@/templates/Testing/Testing';
import Practice from '@/templates/Practice/Practice';
import History from '@/templates/History/History';
import PracticeSection from '@/templates/PracticeSection/PracticeSection';
import Profile from '@/templates/Profile/Profile';
import Login from '@/templates/Login/Login';
import Loading from '@/templates/Loading/Loading';
import useStore from '@/context/store/useStore';

const App: React.FC = () => {
  const { setUser, setPractice, setTest } = useStore();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const loadUserData = async (): Promise<void> => {
    if (!localStorage.getItem('token')) {
      setIsLoading(false);
      setIsAuthenticated(false);
      return;
    }

    try {
      const [user, practice, test] = await Promise.all([
        AuthAPI.getMe(), //
        PracticeAPI.getUserPractice(),
        TestAPI.getUserTest(),
      ]);

      setUser(user);
      setPractice(practice);
      setTest(test);

      setIsAuthenticated(true);
      setIsLoading(false);
    } catch {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  if (isLoading) {
    return (
      <Routes>
        <Route path="*" element={<Loading />} />
      </Routes>
    );
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

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
      <Route
        path="/practice"
        element={
          <PageLayout title="Practice">
            <Practice />
          </PageLayout>
        }
      />
      <Route
        path="/practice/:section"
        element={
          <PageLayout title="Practice" backActions>
            <PracticeSection />
          </PageLayout>
        }
      />
      <Route
        path="/history"
        element={
          <PageLayout title="History">
            <History />
          </PageLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <PageLayout title="Profile">
            <Profile />
          </PageLayout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/test"
        element={
          <TestFlowLayout>
            <TestFlow />
          </TestFlowLayout>
        }
      />
      <Route
        path="/results/:resultId"
        element={
          <TestFlowLayout>
            <TestResults />
          </TestFlowLayout>
        }
      />
      <Route path="/components" element={<Testing />} />
    </Routes>
  );
};

export default App;
