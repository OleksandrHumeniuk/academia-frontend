import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import AppRadioGroupItem from './components/AppRadioGroupItem';
import cn from '@/utils/cn';

const AppRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});

AppRadioGroup.displayName = 'AppRadioGroup';

export default Object.assign(AppRadioGroup, {
  Item: AppRadioGroupItem,
});
