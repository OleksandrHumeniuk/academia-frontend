import React from 'react';
import { Link } from 'react-router-dom';

import AppLogo from '@/components/AppLogo/AppLogo';

export type TestFlowLayoutProps = {
  children: React.ReactNode;
};

const TestFlowLayout: React.FC<TestFlowLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {children}

      <footer className="h-16">
        <Link to="/" className="mx-auto flex h-full max-w-[1200px] items-center justify-center gap-2 px-6">
          Made by <AppLogo />
        </Link>
      </footer>
    </div>
  );
};

export default TestFlowLayout;
