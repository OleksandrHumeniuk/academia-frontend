import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="relative flex h-screen flex-col items-center justify-center">
        <div className="absolute size-36 animate-spin rounded-full bg-black [animation-duration:3s]" />
        <Loader2 className="relative size-32 animate-spin text-white [animation-duration:2s]" />
      </div>
    </div>
  );
};

export default Loading;
