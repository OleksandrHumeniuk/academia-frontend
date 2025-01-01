import React from 'react';
import { BookOpenCheck, ChartSpline, FileClock, GraduationCap, NotebookText } from 'lucide-react';

import AppSidebar from '@/components/AppSidebar/AppSidebar';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: ChartSpline,
      isActive: true,
    },
    {
      title: 'Test',
      url: '#',
      icon: BookOpenCheck,
    },
    {
      title: 'Practice',
      url: '#',
      icon: NotebookText,
      items: [
        { title: 'Vocabulary', url: '#' },
        { title: 'Grammar', url: '#' },
      ],
    },
    {
      title: 'History',
      url: '#',
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
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <span className="text-xl font-semibold">Explore</span>
              </a>
            </AppSidebar.MenuButton>
          </AppSidebar.MenuItem>
        </AppSidebar.Menu>
      </AppSidebar.Header>
      <AppSidebar.Content>
        <AppSidebar.Group>
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
        </AppSidebar.Group>
      </AppSidebar.Content>
      <AppSidebar.Rail />
    </AppSidebar>
  );
};

export default PageLayoutSidebar;
