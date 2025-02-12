import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import AppCard from '@/components/AppCard/AppCard';
import AppProgress from '@/components/AppProgress/AppProgress';
import PracticeExercise from './PracticeExercise';
import ReadingPractice from './ReadingPractice';
import WritingPractice from './WritingPractice';
import CommunicatingPractice from '@/templates/PracticeHistory/CommunicatingPractice.tsx';

import type { Topic } from '@/types/topic';

type TopicSelectorProps = {
  topics: Topic[];
  onSelectTopic?: (topicId: string) => void;
};

const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, onSelectTopic = () => {} }) => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const navigate = useNavigate();

  const handleTopicSelect = (topic: Topic) => {
    if (topic.id === 'interview-with-hr') {
      navigate(`/practice/speaking/practice-history`);
    } else {
      setSelectedTopic(topic);
      onSelectTopic(topic.id);
    }
  };

  const renderPracticeComponent = () => {
    if (!selectedTopic) return null;

    switch (selectedTopic.type) {
      case 'reading':
        return (
          <ReadingPractice
            open={!!selectedTopic}
            onClose={() => setSelectedTopic(null)}
            topicTitle={selectedTopic.title}
          />
        );
      case 'writing':
        if (selectedTopic.id === 'reporting-an-incident-on-slack') {
          return <CommunicatingPractice open={!!selectedTopic} onClose={() => setSelectedTopic(null)} type="writing" />;
        }
        return (
          <WritingPractice
            open={!!selectedTopic}
            onClose={() => setSelectedTopic(null)}
            topicTitle={selectedTopic.title}
          />
        );
      default:
        return (
          <PracticeExercise
            open={!!selectedTopic}
            type={selectedTopic.type}
            onClose={() => setSelectedTopic(null)}
            topicTitle={selectedTopic.title}
          />
        );
    }
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
                  <h3 className="text-lg font-semibold">{topic.title}</h3>
                  <ChevronRight className="size-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500">{topic.description}</p>
                {topic.type !== 'speaking' && (
                  <>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {topic.completed} of {topic.exercises} exercises
                      </span>
                      <span className="font-medium">{topic.progress}%</span>
                    </div>
                    <AppProgress value={topic.progress} className="h-1.5" />
                  </>
                )}
              </div>
            </div>
          </AppCard>
        ))}
      </div>

      {selectedTopic && renderPracticeComponent()}
    </>
  );
};

export default TopicSelector;
