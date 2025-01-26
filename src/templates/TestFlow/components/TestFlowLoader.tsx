import React, { useEffect, useState } from 'react';
import { Brain, PieChart, Target, Trophy } from 'lucide-react';

const LOADING_STEPS = [
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

const TestFlowLoader: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % LOADING_STEPS.length);
    }, 2000);

    return () => clearInterval(stepInterval);
  }, []);

  const currentStepData = LOADING_STEPS[currentStep];

  return (
    <div className="w-full max-w-[700px] space-y-8 rounded-xl bg-white p-8 text-center shadow-sm">
      <div className="relative">
        <div className="relative mx-auto size-32">
          <svg className="size-full animate-spin">
            <circle cx="64" cy="64" r="60" className="stroke-gray-200" strokeWidth="8" fill="none" />
            <circle
              cx="64"
              cy="64"
              r="60"
              className="stroke-black"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="188.5"
              strokeDashoffset="94.25"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">{currentStepData.icon}</div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
        <p className="text-gray-500">{currentStepData.description}</p>
      </div>
    </div>
  );
};

export default TestFlowLoader;
