import React from 'react';
import { BookOpenCheck, ChartSpline, CircleUser, FileClock, LogOut, NotebookText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import AppSidebar, { useSidebar } from '@/components/AppSidebar/AppSidebar';
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
        { title: 'Speaking', url: '/practice/speaking' },
        // { title: 'Reading', url: '/practice/reading' },
        // { title: 'Writing', url: '/practice/writing' },
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
  const navigate = useNavigate();
  const { isMobile, setOpenMobile } = useSidebar();

  const handleLogOut = (): void => {
    navigate('/login');
  };

  const handleNavigation = (): void => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <AppSidebar className="bg-white">
      <AppSidebar.Header>
        <AppSidebar.Menu>
          <AppSidebar.MenuItem>
            <AppSidebar.MenuButton size="lg" asChild>
              <Link to="/" onClick={handleNavigation}>
                <AppLogo showText />
              </Link>
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
                  <Link to={item.url} onClick={handleNavigation}>
                    <item.icon />
                    {item.title}
                  </Link>
                </AppSidebar.MenuButton>
                {!!item.items?.length && (
                  <AppSidebar.MenuSub>
                    {item.items.map(childItem => (
                      <AppSidebar.MenuSubItem key={childItem.title}>
                        <AppSidebar.MenuSubButton asChild>
                          <Link to={childItem.url} onClick={handleNavigation}>
                            {childItem.title}
                          </Link>
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
                <Link to="/profile" onClick={handleNavigation}>
                  <CircleUser />
                  Profile
                </Link>
              </AppSidebar.MenuButton>

              <AppSidebar.MenuButton
                className="w-full justify-start gap-2 text-red-500 hover:bg-red-50 hover:text-red-600 active:bg-red-50 active:text-red-600"
                onClick={handleLogOut}
              >
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
