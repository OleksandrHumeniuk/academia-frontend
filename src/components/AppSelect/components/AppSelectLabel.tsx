import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import cn from '@/utils/cn';

type AppSelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;

const AppSelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, AppSelectLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectPrimitive.Label ref={ref} className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
    );
  },
);

AppSelectLabel.displayName = 'AppSelectLabel';

export default AppSelectLabel;
