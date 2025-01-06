import React from 'react';
import { useParams } from 'react-router-dom';

import TopicSelector from './TopicSelector';
import {
  MOCK_GRAMMAR_TOPICS,
  MOCK_READING_TOPICS,
  MOCK_VOCABULARY_TOPICS,
  MOCK_WRITING_TOPICS,
} from '@/constants/topics';

import type { Topic } from '@/types/topic';

const PracticeSection: React.FC = () => {
  const { section } = useParams() as { section: string };

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
