import React, { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';

import formatTimer from '@/utils/formatTimer';

export type TimerProps = {
  time: number;
  onTimeOver: () => void;
};

const TestTimer: React.FC<TimerProps> = ({ time, onTimeOver }) => {
  const [timeLeft, setTimeLeft] = useState<number>(time);

  useEffect(() => {
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

    // eslint-disable-next-line consistent-return
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="right-[12px] top-[6px] flex items-center gap-2 font-medium sm:absolute">
      <Timer className="size-4" />
      {formatTimer(timeLeft)}
    </div>
  );
};

export default TestTimer;
