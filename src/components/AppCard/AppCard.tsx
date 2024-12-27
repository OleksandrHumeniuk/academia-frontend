import React from 'react';

import AppCardHeader from './components/AppCardHeader';
import AppCardTitle from './components/AppCardTitle';
import AppCardDescription from './components/AppCardDescription';
import AppCardContent from './components/AppCardContent';
import AppCardFooter from './components/AppCardFooter';
import cn from '@/utils/cn';

type AppCardProps = React.HTMLAttributes<HTMLDivElement>;

const AppCard = React.forwardRef<HTMLDivElement, AppCardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50',
        className,
      )}
      {...props}
    />
  );
});

AppCard.displayName = 'AppCard';

export default Object.assign(AppCard, {
  Header: AppCardHeader,
  Title: AppCardTitle,
  Description: AppCardDescription,
  Content: AppCardContent,
  Footer: AppCardFooter,
});
