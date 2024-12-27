import React from 'react';

import AppPaginationEllipsis from './components/AppPaginationEllipsis';
import AppPaginationItem from './components/AppPaginationItem';
import AppPaginationLink from './components/AppPaginationLink';
import AppPaginationNext from './components/AppPaginationNext';
import AppPaginationPrevious from './components/AppPaginationPrevious';
import cn from '@/utils/cn';

const AppPagination = ({ className, children, ...props }: React.ComponentProps<'nav'>) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    >
      <ul className={cn('flex flex-row items-center gap-1')}>{children}</ul>
    </nav>
  );
};

AppPagination.displayName = 'AppPagination';

export default Object.assign(AppPagination, {
  Ellipsis: AppPaginationEllipsis,
  Item: AppPaginationItem,
  Link: AppPaginationLink,
  Next: AppPaginationNext,
  Previous: AppPaginationPrevious,
});
