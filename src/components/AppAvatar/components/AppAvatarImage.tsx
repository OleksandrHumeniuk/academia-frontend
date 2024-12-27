import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import cn from '@/utils/cn';

const AppAvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image
      ref={ref} //
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  );
});

AppAvatarImage.displayName = 'AppAvatarImage';

export default AppAvatarImage;
