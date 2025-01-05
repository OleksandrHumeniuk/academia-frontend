import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import cn from '@/utils/cn';

const AppAvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800',
        className,
      )}
      {...props}
    />
  );
});

AppAvatarFallback.displayName = 'AppAvatarFallback';

export default AppAvatarFallback;
