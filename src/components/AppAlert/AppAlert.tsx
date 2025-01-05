import React from 'react';
import { cva } from 'class-variance-authority';

import AppAlertDescription from './components/AppAlertTitle';
import AppAlertTitle from './components/AppAlertDescription';
import cn from '@/utils/cn';

import type { VariantProps } from 'class-variance-authority';

// eslint-disable-next-line tailwindcss/no-contradicting-classname
const alertVariants = cva(
  'relative w-full rounded-lg border border-zinc-200 p-4 text-start dark:border-zinc-800 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-zinc-950 dark:[&>svg]:text-zinc-50 [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50',
        destructive:
          'border-red-500/50 text-red-500 dark:border-red-500 dark:border-red-900/50 dark:dark:border-red-900 dark:text-red-900 [&>svg]:text-red-500 dark:[&>svg]:text-red-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AppAlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

const AppAlert = React.forwardRef<HTMLDivElement, AppAlertProps>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref} //
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
});

AppAlert.displayName = 'AppAlert';

export default Object.assign(AppAlert, {
  Title: AppAlertTitle,
  Description: AppAlertDescription,
});
