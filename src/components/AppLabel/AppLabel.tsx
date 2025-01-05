import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import cn from '@/utils/cn';

const AppLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer',
        className,
      )}
      {...props}
    />
  );
});

AppLabel.displayName = 'AppLabel';

export default AppLabel;
