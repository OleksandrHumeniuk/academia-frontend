import React from 'react';

const AppPaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => {
    return <li ref={ref} className={className} {...props} />;
  },
);

AppPaginationItem.displayName = 'AppPaginationItem';

export default AppPaginationItem;
