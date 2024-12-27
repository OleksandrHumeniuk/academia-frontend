import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export default cn;
