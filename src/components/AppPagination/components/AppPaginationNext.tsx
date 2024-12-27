import React from 'react';
import { ChevronRight } from 'lucide-react';

import AppPaginationLink from './AppPaginationLink';
import cn from '@/utils/cn';

const AppPaginationNext = ({ className, ...props }: React.ComponentProps<typeof AppPaginationLink>) => {
  return (
    <AppPaginationLink aria-label="Go to next page" size="default" className={cn('gap-1 pr-2.5', className)} {...props}>
      <span>Next</span>
      <ChevronRight className="size-4" />
    </AppPaginationLink>
  );
};

AppPaginationNext.displayName = 'AppPaginationNext';

export default AppPaginationNext;
