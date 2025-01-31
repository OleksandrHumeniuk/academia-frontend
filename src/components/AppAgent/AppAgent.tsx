import React from 'react';

import AppButton from '@/components/AppButton/AppButton';

export type AppAgentProps = {
  buttonText?: string;
  onClick?: () => void;
  size?: number;
};

const AppAgent: React.FC<AppAgentProps> = ({ buttonText, onClick, size }) => {
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
      <div className="rounded-full overflow-hidden">
        <img src="/ai.gif" alt="Ai gif" width={size} height={size} />
      </div>
    </div>
  );
};

export default AppAgent;
