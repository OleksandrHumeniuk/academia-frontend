import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import cn from '@/utils/cn';

const AppScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation="vertical"
      className={cn(
        'flex touch-none select-none transition-colors',
        'h-full w-2.5 border-l border-l-transparent p-[1px]',
      )}
      {...props}
    >
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <ScrollAreaPrimitive.ScrollAreaThumb className="bg-border relative flex-1 rounded-full" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));

AppScrollArea.displayName = 'ScrollArea';

export default AppScrollArea;
