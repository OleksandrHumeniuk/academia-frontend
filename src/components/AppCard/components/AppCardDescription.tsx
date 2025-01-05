import React from 'react';

import cn from '@/utils/cn';

type AppCardDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

const AppCardDescription = React.forwardRef<HTMLDivElement, AppCardDescriptionProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('text-sm text-zinc-500 dark:text-zinc-400', className)} {...props} />;
});

AppCardDescription.displayName = 'AppCardDescription';

export default AppCardDescription;
