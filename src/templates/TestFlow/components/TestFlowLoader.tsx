import React, { useEffect, useState } from 'react';
import { Brain, PieChart, Target, Trophy } from 'lucide-react';

type LoadingStep = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const LOADING_STEPS: LoadingStep[] = [
  {
    icon: <Brain className="size-8" />,
    title: 'Analyzing Responses',
    description: 'Processing your answers across all sections...',
  },
  {
    icon: <Target className="size-8" />,
    title: 'Calculating Proficiency',
    description: 'Determining your CEFR level and skill scores...',
  },
  {
    icon: <PieChart className="size-8" />,
    title: 'Generating Insights',
    description: 'Identifying your strengths and areas for improvement...',
  },
  {
    icon: <Trophy className="size-8" />,
    title: 'Preparing Results',
    description: 'Creating your personalized assessment report...',
  },
];

type TestFlowLoaderProps = {
  onComplete: () => void;
};

const TestFlowLoader: React.FC<TestFlowLoaderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    setCurrentStep(Math.min(Math.floor((progress / 100) * LOADING_STEPS.length), LOADING_STEPS.length - 1));
  }, [progress]);

  const currentStepData = LOADING_STEPS[currentStep];

  return (
    <div className="w-full max-w-[700px] space-y-8 rounded-xl bg-white p-8 text-center shadow-sm">
      <div className="relative">
        <div className="relative mx-auto size-32">
          <svg className="size-full -rotate-90">
            <circle cx="64" cy="64" r="60" className="stroke-gray-200" strokeWidth="8" fill="none" />
            <circle
              cx="64"
              cy="64"
              r="60"
              className="stroke-black"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: 377,
                strokeDashoffset: 377 - (377 * progress) / 100,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">{currentStepData.icon}</div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
        <p className="text-gray-500">{currentStepData.description}</p>
      </div>

      <div className="text-sm text-gray-500">{Math.round(progress)}%</div>
    </div>
  );
};

export default TestFlowLoader;
