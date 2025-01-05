import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import cn from '@/utils/cn';

type AppSelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;

const AppSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  AppSelectSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800', className)}
      {...props}
    />
  );
});

AppSelectSeparator.displayName = 'AppSelectSeparator';

export default AppSelectSeparator;
