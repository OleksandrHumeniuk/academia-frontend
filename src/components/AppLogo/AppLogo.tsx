import React from 'react';

import logoImage from '@/assets/logo-black.png';
import cn from '@/utils/cn';

type AppLogoProps = {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const AppLogo: React.FC<AppLogoProps> = ({ className = '', size = 'md', showText = false }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={cn(`flex items-center gap-3`, className)}>
      <img src={logoImage} alt="logo" className="h-8" />
      {showText && (
        <span className={`font-medium ${sizes[size]} from-primary to-primary/70 bg-clip-text`}>Explore</span>
      )}
    </div>
  );
};

export default AppLogo;
