import React, { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';

import formatTimer from '@/utils/formatTimer';

export type TimerProps = {
  timeLeft: number;
  onTimeOver: () => void;
  isRunning: boolean;
  setTimeLeft: (prev: number) => void;
};

const ConversationTimer: React.FC<TimerProps> = ({ timeLeft, setTimeLeft, onTimeOver, isRunning }) => {
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          onTimeOver();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, onTimeOver]);

  return (
    <div className="flex items-center gap-2 font-medium">
      <Timer className="size-4" />
      {formatTimer(timeLeft)}
    </div>
  );
};

export default ConversationTimer;
