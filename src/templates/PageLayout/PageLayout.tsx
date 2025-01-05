import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpenCheck, NotebookText } from 'lucide-react';

import AppSidebar from '@/components/AppSidebar/AppSidebar';
import AppSeparator from '@/components/AppSeparator/AppSeparator';
import PageLayoutSidebar from './components/PageLayoutSidebar';
import AppButton from '@/components/AppButton/AppButton';

export type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  actions?: boolean;
  backActions?: boolean;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, actions, backActions }) => {
  return (
    <div className="h-screen">
      <AppSidebar.Provider>
        <PageLayoutSidebar />
        <AppSidebar.Inset className="bg-gray-50">
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-white px-4">
            <div className="flex items-center gap-2">
              <AppSidebar.Trigger className="-ml-1" />
              <AppSeparator orientation="vertical" className="mr-2 h-4" />
              <h1 className="text-md font-light">{title}</h1>
            </div>

            {actions && (
              <div className="flex items-center gap-2">
                <AppButton className="flex w-[180px] items-center gap-2" asChild>
                  <Link to="/test">
                    <BookOpenCheck className="size-5" />
                    Take Assessment
                  </Link>
                </AppButton>

                <AppButton variant="outline" className="flex w-[180px] items-center gap-2" asChild>
                  <Link to="/practice">
                    <NotebookText className="size-5" />
                    Practice
                  </Link>
                </AppButton>
              </div>
            )}

            {backActions && (
              <AppButton variant="ghost" className="flex w-[180px] items-center gap-2" asChild>
                <Link to="/practice">
                  <ArrowLeft className="size-5" />
                  Back to Categories
                </Link>
              </AppButton>
            )}
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </AppSidebar.Inset>
      </AppSidebar.Provider>
    </div>
  );
};

export default PageLayout;
