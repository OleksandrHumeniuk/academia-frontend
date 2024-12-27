import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check } from 'lucide-react';

import cn from '@/utils/cn';

type AppSelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

const AppSelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, AppSelectItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item
        ref={ref}
        className={cn(
          'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50',
          className,
        )}
        {...props}
      >
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <Check className="size-4" />
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  },
);

AppSelectItem.displayName = 'AppSelectItem';

export default AppSelectItem;
