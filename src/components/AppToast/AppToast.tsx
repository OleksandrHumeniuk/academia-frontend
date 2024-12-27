import React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { X } from 'lucide-react';

import AppToastContent from './components/AppToastContent';
import AppToastAction from './components/AppToastAction';
import useToast from '@/hooks/useToast';

const AppToast: React.FC = () => {
  const { toasts } = useToast();

  return (
    <ToastPrimitives.Provider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <AppToastContent key={id} {...props}>
          <div className="grid gap-1 text-start">
            {title && <ToastPrimitives.Title className="text-sm font-semibold">{title}</ToastPrimitives.Title>}
            {description && (
              <ToastPrimitives.Description className="text-sm opacity-90">{description}</ToastPrimitives.Description>
            )}
          </div>
          {action}
          <ToastPrimitives.Close
            className="absolute right-2 top-2 rounded-md p-1 text-zinc-950/50 opacity-0 transition-opacity hover:text-zinc-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-zinc-50/50 dark:hover:text-zinc-50"
            toast-close=""
          >
            <X className="size-4" />
          </ToastPrimitives.Close>
        </AppToastContent>
      ))}
      <ToastPrimitives.Viewport className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
    </ToastPrimitives.Provider>
  );
};

export default Object.assign(AppToast, {
  Action: AppToastAction,
});
