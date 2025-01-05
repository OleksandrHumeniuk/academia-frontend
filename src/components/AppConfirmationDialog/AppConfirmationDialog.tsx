import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { buttonVariants } from '@/components/AppButton/AppButton';
import cn from '@/utils/cn';

type AppAlertDialogProps = {
  visible: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  cancelLabel?: string;
  onCancel?: () => void;
};

const AppAlertDialog: React.FC<AppAlertDialogProps> = ({
  visible,
  onOpenChange,
  title,
  description,
  actions,
  cancelLabel = 'Cancel',
  onCancel,
}) => {
  return (
    <AlertDialogPrimitive.Root open={visible} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Trigger asChild />
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          )}
        />
        <AlertDialogPrimitive.Content
          className={cn(
            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-zinc-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-zinc-800 dark:bg-zinc-950',
          )}
        >
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <AlertDialogPrimitive.Title className="text-lg font-semibold">{title}</AlertDialogPrimitive.Title>
            {description && (
              <AlertDialogPrimitive.Description className="text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </AlertDialogPrimitive.Description>
            )}
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <AlertDialogPrimitive.Cancel
              onClick={onCancel}
              className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0')}
            >
              {cancelLabel}
            </AlertDialogPrimitive.Cancel>
            {actions}
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export default AppAlertDialog;
