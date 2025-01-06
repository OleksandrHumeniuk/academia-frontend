import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppDialog from '@/components/AppDialog/AppDialog';
import AppSelect from '@/components/AppSelect/AppSelect';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppButton from '@/components/AppButton/AppButton';

export type DashboardInitialModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const DashboardInitialModal: React.FC<DashboardInitialModalProps> = ({ visible, setVisible }) => {
  const navigate = useNavigate();

  const [profession, setProfession] = useState<string>('tech');
  const [englishLevel, setEnglishLevel] = useState<string>('A1');

  const handleStartAssessment = (): void => {
    localStorage.setItem('isInitialModalOpened', 'true');
    navigate('/test');
  };

  return (
    <AppDialog open={visible} onOpenChange={setVisible}>
      <AppDialog.Content className="sm:max-w-md">
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Welcome to Explore!</h2>
            <p className="text-gray-500">Before we begin, please tell us about yourself</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <AppLabel>Current English Level</AppLabel>
              <AppSelect value={englishLevel} onValueChange={setEnglishLevel}>
                <AppSelect.Trigger>
                  <AppSelect.Value placeholder="Select your level" />
                </AppSelect.Trigger>
                <AppSelect.Content>
                  <AppSelect.Item value="A1">A1 (Beginner)</AppSelect.Item>
                  <AppSelect.Item value="A2">A2 (Elementary)</AppSelect.Item>
                  <AppSelect.Item value="B1">B1 (Intermediate)</AppSelect.Item>
                  <AppSelect.Item value="B2">B2 (Upper Intermediate)</AppSelect.Item>
                  <AppSelect.Item value="C1">C1 (Advanced)</AppSelect.Item>
                  <AppSelect.Item value="C2">C2 (Proficient)</AppSelect.Item>
                </AppSelect.Content>
              </AppSelect>
            </div>

            <div className="space-y-2">
              <AppLabel>Profession</AppLabel>
              <AppSelect value={profession} onValueChange={setProfession}>
                <AppSelect.Trigger>
                  <AppSelect.Value placeholder="Select your profession" />
                </AppSelect.Trigger>
                <AppSelect.Content>
                  <AppSelect.Item value="tech">Tech / Software engineer </AppSelect.Item>
                  <AppSelect.Item value="sales">Sales / Marketing / PR</AppSelect.Item>
                  <AppSelect.Item value="support">Customer Support / Customer Success</AppSelect.Item>
                  <AppSelect.Item value="hr">HR</AppSelect.Item>
                  <AppSelect.Item value="business">General Business English</AppSelect.Item>
                  <AppSelect.Item value="general">General English</AppSelect.Item>
                </AppSelect.Content>
              </AppSelect>
            </div>
          </div>

          <AppButton className="w-full" disabled={!englishLevel || !profession} onClick={handleStartAssessment}>
            Start Initial Assessment
          </AppButton>
        </div>
      </AppDialog.Content>
    </AppDialog>
  );
};

export default DashboardInitialModal;
