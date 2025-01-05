import React from 'react';

import cn from '@/utils/cn';

type AppCardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const AppCardFooter = React.forwardRef<HTMLDivElement, AppCardFooterProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />;
});

AppCardFooter.displayName = 'AppCardFooter';

export default AppCardFooter;
