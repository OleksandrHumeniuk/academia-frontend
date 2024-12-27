import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import AppAvatarImage from './components/AppAvatarImage';
import AppAvatarFallback from './components/AppAvatarFallback';
import cn from '@/utils/cn';

const AppAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  );
});

AppAvatar.displayName = 'AppAvatar';

export default Object.assign(AppAvatar, {
  Image: AppAvatarImage,
  Fallback: AppAvatarFallback,
});
