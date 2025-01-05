import React from 'react';

import cn from '@/utils/cn';

export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const AppAlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h5
        ref={ref} //
        className={cn('mb-1 font-medium leading-none tracking-tight', className)}
        {...props}
      >
        {children}
      </h5>
    );
  },
);

AppAlertTitle.displayName = 'AppAlertTitle';

export default AppAlertTitle;
