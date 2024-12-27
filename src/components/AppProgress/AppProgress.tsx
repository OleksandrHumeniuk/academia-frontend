import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import cn from '@/utils/cn';

const AppProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn('relative h-4 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="size-full flex-1 bg-zinc-900 transition-all dark:bg-zinc-50"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

AppProgress.displayName = 'AppProgress';

export default AppProgress;
