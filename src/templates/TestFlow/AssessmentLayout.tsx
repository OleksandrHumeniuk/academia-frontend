import React from 'react';

import AppProgress from '@/components/AppProgress/AppProgress';
import AppLogo from '@/components/AppLogo/AppLogo';
import AppAvatar from '@/components/AppAvatar/AppAvatar';

type AssessmentLayoutProps = {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  showAvatar?: boolean;
  timer?: React.ReactNode;
};

const AssessmentLayout: React.FC<AssessmentLayoutProps> = ({
  children,
  currentStep,
  totalSteps,
  timer,
  showAvatar = true,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed inset-x-0 top-0 z-50 h-1">
        <AppProgress value={(currentStep / totalSteps) * 100} className="h-full rounded-none" />
      </div>

      {/* <header className="fixed inset-x-0 top-0 z-40 h-16 border-b bg-white"> */}
      {/*  <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-6"> */}
      {/*    <AppLogo /> */}
      {/*    {timer} */}
      {/*  </div> */}
      {/* </header> */}

      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-2xl space-y-8 rounded-xl bg-white p-8 shadow-sm">
          <div className="rounded-lg bg-white p-8 shadow-sm">{children}</div>
        </div>
      </div>

      <footer className="h-16">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-center gap-2 px-6">
          Made By <AppLogo />
        </div>
      </footer>

      {showAvatar && (
        <div className="fixed bottom-8 left-8">
          <AppAvatar className="size-16 border-2 border-white shadow-lg">
            <AppAvatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
          </AppAvatar>
        </div>
      )}
    </div>
  );
};

export default AssessmentLayout;
