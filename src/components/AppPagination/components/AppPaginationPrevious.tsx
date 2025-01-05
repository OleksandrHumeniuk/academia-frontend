import React from 'react';
import { ChevronLeft } from 'lucide-react';

import AppPaginationLink from './AppPaginationLink';
import cn from '@/utils/cn';

const AppPaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof AppPaginationLink>) => (
  <AppPaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="size-4" />
    <span>Previous</span>
  </AppPaginationLink>
);

AppPaginationPrevious.displayName = 'AppPaginationPrevious';

export default AppPaginationPrevious;
