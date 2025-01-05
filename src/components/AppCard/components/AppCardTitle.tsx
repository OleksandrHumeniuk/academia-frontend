import React from 'react';

import cn from '@/utils/cn';

type AppCardTitleProps = React.HTMLAttributes<HTMLDivElement>;

const AppCardTitle = React.forwardRef<HTMLDivElement, AppCardTitleProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />;
});

AppCardTitle.displayName = 'AppCardTitle';

export default AppCardTitle;
