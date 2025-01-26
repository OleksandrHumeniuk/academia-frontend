import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpenCheck } from 'lucide-react';

import TopicSelector from './TopicSelector';
import {
  MOCK_GRAMMAR_TOPICS,
  MOCK_READING_TOPICS,
  MOCK_VOCABULARY_TOPICS,
  MOCK_WRITING_TOPICS,
} from '@/constants/topics';
import useStore from '@/context/store/useStore';
import AppAlert from '@/components/AppAlert/AppAlert';
import AppButton from '@/components/AppButton/AppButton';

import type { Topic } from '@/types/topic';

const PracticeSection: React.FC = () => {
  const { section } = useParams() as { section: string };

  const { practice } = useStore();

  const getTopics = (): Topic[] => {
    switch (section) {
      case 'vocabulary':
        return MOCK_VOCABULARY_TOPICS;
      case 'grammar':
        return MOCK_GRAMMAR_TOPICS;
      case 'reading':
        return MOCK_READING_TOPICS;
      case 'writing':
        return MOCK_WRITING_TOPICS;
      default:
        return [];
    }
  };

  if (!practice) {
    return (
      <main className="flex-1 px-2 py-4 sm:px-8">
        <div className="mx-auto mb-4 space-y-8 mb-6">
          <div>
            <div>
              <h2 className="mb-1 text-2xl font-semibold text-gray-900">
                {section.charAt(0).toUpperCase() + section.slice(1)} Topics
              </h2>
              <p className="text-gray-500">Select a topic to practice {section}</p>
            </div>
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
    );
  }

  return (
    <main className="flex-1 px-2 py-4 sm:px-8">
      <div className="mx-auto space-y-8">
        <div>
          <div>
            <h2 className="mb-1 text-2xl font-semibold text-gray-900">
              {section.charAt(0).toUpperCase() + section.slice(1)} Topics
            </h2>
            <p className="text-gray-500">Select a topic to practice {section}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <TopicSelector topics={getTopics()} onSelectTopic={topicId => console.log('Selected topic:', topicId)} />
      </div>
    </main>
  );
};

export default PracticeSection;
