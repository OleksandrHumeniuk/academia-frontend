import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import AppCard from '@/components/AppCard/AppCard';
import AppProgress from '@/components/AppProgress/AppProgress';
import PracticeExercise from './PracticeExercise';

import type { Topic } from '@/types/topic';
import { PracticeTopic } from '@/types/practice';

type TopicSelectorProps = {
  topics: PracticeTopic[] | undefined;
  onSelectTopic?: (topicId: string) => void;
};

const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, onSelectTopic = () => {} }) => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleTopicSelect = (topic: Topic) => {
    if (Math.round((topic.progress / topic.questions.length) * 100) === 100) {
      return;
    }
    setSelectedTopic(topic);
    onSelectTopic(topic.id);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {topics.map(topic => (
          <AppCard
            key={topic.id}
            className="cursor-pointer p-6 transition-shadow hover:shadow-md"
            onClick={() => handleTopicSelect(topic)}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{topic.name}</h3>
                  <ChevronRight className="size-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">{topic.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {topic.progress} of {topic.questions.length} exercises
                  </span>
                  <span className="font-medium">{Math.round((topic.progress / topic.questions.length) * 100)}%</span>
                </div>
                <AppProgress value={Math.round((topic.progress / topic.questions.length) * 100)} className="h-1.5" />
              </div>
            </div>
          </AppCard>
        ))}
      </div>

      {selectedTopic && (
        <PracticeExercise
          open={!!selectedTopic}
          totalQuestions={selectedTopic.questions.length}
          onClose={() => setSelectedTopic(null)}
          topicTitle={selectedTopic.name}
          questions={selectedTopic.questions}
          initalQuestionIndex={selectedTopic.progress}
        />
      )}
    </>
  );
};

export default TopicSelector;
