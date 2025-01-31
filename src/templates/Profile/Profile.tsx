import React from 'react';

import AppCard from '@/components/AppCard/AppCard';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppInput from '@/components/AppInput/AppInput';
import useStore from '@/context/store/useStore';

const Profile: React.FC = () => {
  const { user } = useStore();

  return (
    <main className="flex-1 px-2 py-4 sm:px-8">
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500">Your personal information</p>
      </div>

      <AppCard className="space-y-8 p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <AppLabel htmlFor="name">Full Name</AppLabel>
            <AppInput id="name" readOnly value={user?.name} placeholder="Enter your full name" />
          </div>

          <div className="space-y-2">
            <AppLabel htmlFor="email">Email</AppLabel>
            <AppInput id="email" type="email" value={user?.email} placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <AppLabel htmlFor="profession">Profession</AppLabel>
            <AppInput id="profession" value={user?.profession} placeholder="Enter your profession" />
          </div>
        </div>
      </AppCard>
    </main>
  );
};

export default Profile;
