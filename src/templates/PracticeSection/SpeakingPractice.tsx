import React from 'react';

import AppDialog from '@/components/AppDialog/AppDialog';
import { AppConversation } from '@/components/AppConversation/AppConversation';
import AppTextarea from '@/components/AppTextarea/AppTextarea';

type SpeakingPracticeProps = {
  open?: boolean;
  onClose?: () => void;
  topicTitle?: string;
};

const ReadingPractice: React.FC<SpeakingPracticeProps> = ({ open = true, onClose = () => {} }) => {
  return (
    // <AppDialog open={open} onOpenChange={onClose}>
    //   <AppDialog.Content className="min-h-[600px] w-[800px] bg-white p-0">
    //     <AppDialog.Title>What would you like to discuss?</AppDialog.Title>
    //     <AppConversation />
    //   </AppDialog.Content>
    // </AppDialog>
    <div>
      <h2>What would you like to discuss?</h2>
      <AppTextarea />
    </div>
  );
};

export default ReadingPractice;
