import React from 'react';

import AppButton from '@/components/AppButton/AppButton';

export type AppAgentProps = {
  buttonText?: string;
  onClick?: () => void;
};

const AppAgent: React.FC<AppAgentProps> = ({ buttonText, onClick }) => {
  return (
    <div className="relative mx-auto mt-8 size-[350px] h-auto max-w-full">
      {buttonText && (
        <AppButton
          variant="outline"
          className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
          onClick={onClick}
        >
          {buttonText}
        </AppButton>
      )}
      <img src="/ai.gif" alt="Ai gif" />
    </div>
  );
};

export default AppAgent;
