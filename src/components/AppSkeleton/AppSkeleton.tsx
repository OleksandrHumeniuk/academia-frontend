import React from 'react';

import cn from '@/utils/cn';

const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn('animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800', className)} {...props} />;
};

export default Skeleton;
