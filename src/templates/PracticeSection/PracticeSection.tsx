import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpenCheck } from 'lucide-react';

import TopicSelector from './TopicSelector';
import useStore from '@/context/store/useStore';
import AppAlert from '@/components/AppAlert/AppAlert';
import AppButton from '@/components/AppButton/AppButton';

import { AppConversation } from '@/components/AppConversation/AppConversation';
import AppDialog from '@/components/AppDialog/AppDialog';
import AppTextarea from '@/components/AppTextarea/AppTextarea';
import { PracticeTopic } from '@/types/practice';

const PracticeSection: React.FC = () => {
  const { section } = useParams() as { section: string };
  const [showGenerateModal, setShowGenerateModal] = useState<boolean>(false);

  const { practice } = useStore();

  const getTopics = (): PracticeTopic[] | undefined => {
    switch (section) {
      case 'vocabulary':
        return practice?.vocabulary;
      case 'grammar':
      // return practice?.graamer;
      default:
        return [];
    }
  };

  if (!practice) {
    return (
      <>
        <AppDialog open={showGenerateModal} />
        <main className="flex-1 px-2 py-4 sm:px-8">
          <div className="mx-auto space-y-8 mb-6">
            <div>
              <h2 className="mb-1 text-2xl font-semibold text-gray-900">
                {section.charAt(0).toUpperCase() + section.slice(1)} Topics
              </h2>
            </div>
          </div>

          <AppAlert>
            <BookOpenCheck className="size-4" />
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-2">
              <div>
                <AppAlert.Description className="mb-2">
                  Please complete your initial assessment to generate practice exercises
                </AppAlert.Description>
                <AppAlert.Title>
                  To provide you with personalized insights and recommendations, we need you to complete the initial
                  assessment. This will help us understand your needs better and deliver more relevant results.
                </AppAlert.Title>
              </div>

              <AppButton size="lg" asChild className="w-full sm:w-auto">
                <Link to="/test">Start Assessment</Link>
              </AppButton>
            </div>
          </AppAlert>
        </main>
      </>
    );
  }

  if (section === 'speaking') {
    return <AppConversation />;
  }

  return (
    <main className="flex-1 px-2 py-4 sm:px-8">
      <div className="mx-auto space-y-8">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="mb-1 text-2xl font-semibold text-gray-900">
              {section.charAt(0).toUpperCase() + section.slice(1)} Topics
            </h2>
            <p className="text-gray-500">Select a topic to practice {section}</p>
          </div>
          <AppButton variant="default" onClick={() => setShowGenerateModal(true)}>
            Generate topic
          </AppButton>
        </div>
      </div>

      <div className="mt-6">
        <TopicSelector topics={getTopics()} onSelectTopic={topicId => console.log('Selected topic:', topicId)} />
      </div>

      <AppDialog open={showGenerateModal} onOpenChange={() => setShowGenerateModal(false)}>
        <AppDialog.Content>
          <AppTextarea></AppTextarea>
          <AppButton>Generate</AppButton>
        </AppDialog.Content>
      </AppDialog>
    </main>
  );
};

export default PracticeSection;
