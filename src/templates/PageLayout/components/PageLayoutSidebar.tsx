import React from 'react';
import { BookOpenCheck, ChartSpline, CircleUser, FileClock, LogOut, NotebookText } from 'lucide-react';

import AppSidebar from '@/components/AppSidebar/AppSidebar';
import AppLogo from '@/components/AppLogo/AppLogo';
import AppSeparator from '@/components/AppSeparator/AppSeparator';

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: ChartSpline,
      isActive: true,
    },
    {
      title: 'Test',
      url: '/test',
      icon: BookOpenCheck,
    },
    {
      title: 'Practice',
      url: '/practice',
      icon: NotebookText,
      items: [
        { title: 'Vocabulary', url: '/practice/vocabulary' },
        { title: 'Grammar', url: '/practice/grammar' },
        { title: 'Reading', url: '/practice/reading' },
        { title: 'Writing', url: '/practice/writing' },
      ],
    },
    {
      title: 'History',
      url: '/history',
      icon: FileClock,
    },
  ],
};

const PageLayoutSidebar: React.FC = () => {
  return (
    <AppSidebar className="bg-white">
      <AppSidebar.Header>
        <AppSidebar.Menu>
          <AppSidebar.MenuItem>
            <AppSidebar.MenuButton size="lg" asChild>
              <a href="/">
                <AppLogo />
              </a>
            </AppSidebar.MenuButton>
          </AppSidebar.MenuItem>
        </AppSidebar.Menu>
      </AppSidebar.Header>
      <AppSidebar.Content>
        <AppSidebar.Group className="flex h-full flex-col justify-between">
          <AppSidebar.Menu>
            {data.navMain.map(item => (
              <AppSidebar.MenuItem key={item.title}>
                <AppSidebar.MenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    {item.title}
                  </a>
                </AppSidebar.MenuButton>
                {!!item.items?.length && (
                  <AppSidebar.MenuSub>
                    {item.items.map(childItem => (
                      <AppSidebar.MenuSubItem key={childItem.title}>
                        <AppSidebar.MenuSubButton asChild>
                          <a href={childItem.url}>{childItem.title}</a>
                        </AppSidebar.MenuSubButton>
                      </AppSidebar.MenuSubItem>
                    ))}
                  </AppSidebar.MenuSub>
                )}
              </AppSidebar.MenuItem>
            ))}
          </AppSidebar.Menu>

          <AppSidebar.Menu>
            <AppSeparator />
            <div className="space-y-2 py-2">
              <AppSidebar.MenuButton asChild>
                <a href="/profile">
                  <CircleUser />
                  Profile
                </a>
              </AppSidebar.MenuButton>

              <AppSidebar.MenuButton className="w-full justify-start gap-2 text-red-500 hover:bg-red-50 hover:text-red-600 active:bg-red-50 active:text-red-600">
                <LogOut />
                Logout
              </AppSidebar.MenuButton>
            </div>
          </AppSidebar.Menu>
        </AppSidebar.Group>
      </AppSidebar.Content>
      <AppSidebar.Rail />
    </AppSidebar>
  );
};

export default PageLayoutSidebar;
