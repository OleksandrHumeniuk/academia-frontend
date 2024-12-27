import React from 'react';

import cn from '@/utils/cn';

export type AppAlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const AppAlertDescription = React.forwardRef<HTMLParagraphElement, AppAlertDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref} //
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
      />
    );
  },
);

AppAlertDescription.displayName = 'AppAlertDescription';

export default AppAlertDescription;
