import React from 'react';

import { buttonVariants } from '@/components/AppButton/AppButton';
import cn from '@/utils/cn';

import type { AppButtonProps } from '@/components/AppButton/AppButton';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<AppButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const AppPaginationLink = ({
  className, //
  children,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

AppPaginationLink.displayName = 'AppPaginationLink';

export default AppPaginationLink;
