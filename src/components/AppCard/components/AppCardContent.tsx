import React from 'react';

import cn from '@/utils/cn';

type AppCardContentProps = React.HTMLAttributes<HTMLDivElement>;

const AppCardContent = React.forwardRef<HTMLDivElement, AppCardContentProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
});

AppCardContent.displayName = 'AppCardContent';

export default AppCardContent;
