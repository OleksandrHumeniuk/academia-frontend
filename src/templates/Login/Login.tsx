import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppCard from '@/components/AppCard/AppCard';
import AppInput from '@/components/AppInput/AppInput';
import AppButton from '@/components/AppButton/AppButton';
import AppLabel from '@/components/AppLabel/AppLabel';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <AppCard className="w-full max-w-md space-y-8 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Explore</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <AppLabel htmlFor="email">Email</AppLabel>
            <AppInput
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <AppLabel htmlFor="password">Password</AppLabel>
            <AppInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <AppButton type="submit" className="w-full">
            Sign In
          </AppButton>
        </form>
      </AppCard>
    </div>
  );
};

export default Login;
