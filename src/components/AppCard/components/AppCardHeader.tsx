import React from 'react';

import cn from '@/utils/cn';

type AppCardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const AppCardHeader = React.forwardRef<HTMLDivElement, AppCardHeaderProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
});

AppCardHeader.displayName = 'AppCardHeader';

export default AppCardHeader;
