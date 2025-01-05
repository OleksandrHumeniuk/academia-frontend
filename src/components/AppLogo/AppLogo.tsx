import React from 'react';
import { GraduationCap } from 'lucide-react';

import cn from '@/utils/cn';

type AppLogoProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const Logo: React.FC<AppLogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={cn(`flex items-center gap-2`, className)}>
      <GraduationCap className={`${sizes[size]} text-primary`} />
      <span className={`font-bold ${sizes[size]} from-primary to-primary/70 bg-gradient-to-r bg-clip-text`}>
        Explore
      </span>
    </div>
  );
};

export default Logo;
