import React from 'react';

import AppCard from '@/components/AppCard/AppCard';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppInput from '@/components/AppInput/AppInput';

const Profile: React.FC = () => {
  return (
    <main className="flex-1 px-8 py-4">
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500">Your personal information</p>
      </div>

      <AppCard className="space-y-8 p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <AppLabel htmlFor="name">Full Name</AppLabel>
            <AppInput id="name" readOnly value="John Doe" placeholder="Enter your full name" />
          </div>

          <div className="space-y-2">
            <AppLabel htmlFor="email">Email</AppLabel>
            <AppInput id="email" type="email" value="john.doe@example.com" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <AppLabel htmlFor="profession">Profession</AppLabel>
            <AppInput id="profession" value="Software Engineer" placeholder="Enter your profession" />
          </div>
        </div>
      </AppCard>
    </main>
  );
};

export default Profile;
