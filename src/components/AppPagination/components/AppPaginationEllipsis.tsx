import React from 'react';
import { MoreHorizontal } from 'lucide-react';

import cn from '@/utils/cn';

const AppPaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => {
  return (
    <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
};

AppPaginationEllipsis.displayName = 'AppPaginationEllipsis';

export default AppPaginationEllipsis;
