import React, { useState } from 'react';
import { Check, X, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ProficiencyProgress from '@/containers/ProficiencyProgress/ProficiencyProgress';
import SkillsRadarChart from '@/containers/SkillsRadarChart/SkillsRadarChart';
import AppButton from '@/components/AppButton/AppButton';
import AppLogo from '@/components/AppLogo/AppLogo';
import AppScrollArea from '@/components/AppScrollArea/AppScrollArea';
import AppCard from '@/components/AppCard/AppCard';
import AppDialog from '@/components/AppDialog/AppDialog';
import { MOCK_ANSWERS } from '@/constants/answers';
import { MOCK_QUESTIONS } from '@/constants/questions';

import type { EnglishLevel } from '@/types/level';

type TestResultsProps = {
  level?: EnglishLevel;
  percentage?: number;
  scores?: Array<{ skill: string; score: number }>;
};

const TestResults: React.FC<TestResultsProps> = ({
  level = 'B1',
  percentage = 75,
  scores = [
    { skill: 'Speaking', score: 75 },
    { skill: 'Listening', score: 80 },
    { skill: 'Reading', score: 85 },
    { skill: 'Writing', score: 70 },
    { skill: 'Grammar', score: 90 },
  ],
}) => {
  const navigate = useNavigate();

  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  const answers = MOCK_ANSWERS;
  const questions = MOCK_QUESTIONS;

  const strengths = [
    'Strong vocabulary usage in context',
    'Excellent reading comprehension',
    'Good grasp of basic grammar structures',
  ];

  const areasToImprove = [
    'Complex sentence formation',
    'Academic writing style',
    'Listening to native speakers at natural speed',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl p-6">
        <div className="space-y-8 rounded-lg bg-white p-8 shadow-sm">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <h1 className="text-3xl font-bold">Test Complete!</h1>
            <p className="text-gray-600">
              Based on your performance, here is a detailed analysis of your English proficiency
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Overall Proficiency</h3>
              <div className="flex justify-center">
                <ProficiencyProgress level={level} nextLevel="B2" percentage={percentage} />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Skills Breakdown</h3>
              <SkillsRadarChart scores={scores} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <AppCard className="p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Check className="size-5 text-green-500" />
                Strengths
              </h3>
              <ul className="space-y-2">
                {strengths.map(strength => (
                  <li key={strength} className="flex items-start gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-green-500" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </AppCard>

            <AppCard className="p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <X className="size-5 text-red-500" />
                Areas to Improve
              </h3>
              <ul className="space-y-2">
                {areasToImprove.map(area => (
                  <li key={area} className="flex items-start gap-2">
                    <X className="mt-1 size-4 shrink-0 text-red-500" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </AppCard>
          </div>

          <AppCard className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Comprehensive Analysis</h3>
            <p className="leading-relaxed text-gray-600">
              Your English proficiency is at the B1 (Intermediate) level. You demonstrate strong comprehension skills
              and good command of basic grammar. Your vocabulary usage is particularly impressive in contextual
              situations. To progress to B2 level, focus on developing more complex sentence structures and academic
              writing skills. Regular practice with native-speed listening materials will also help improve your
              listening comprehension.
            </p>
          </AppCard>

          <div className="flex justify-center gap-4 pt-4">
            <AppButton
              size="lg"
              variant="outline"
              onClick={() => setShowAnswers(true)}
              className="flex items-center gap-2"
            >
              <Eye className="size-4" />
              Review Answers
            </AppButton>
            <AppButton size="lg" onClick={() => navigate('/')} className="bg-black text-white hover:bg-gray-800">
              Go to Dashboard
            </AppButton>
          </div>
        </div>
      </div>

      <footer className="h-16">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-center gap-2 px-6">
          Made by <AppLogo />
        </div>
      </footer>

      <AppDialog open={showAnswers} onOpenChange={setShowAnswers}>
        <AppDialog.Content className="max-h-[80vh] max-w-3xl">
          <AppDialog.Header>
            <AppDialog.Title>Your Test Answers</AppDialog.Title>
          </AppDialog.Header>
          <AppScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-8 py-4">
              {/* Vocabulary Section */}
              {answers?.vocabulary && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Vocabulary</h3>
                  {questions.vocabulary.map((question, index) => (
                    <AppCard key={index} className="space-y-4 p-4">
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">Question:</p>
                        <p>{question.text}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">Your Answer:</p>
                        <div
                          className={`flex items-center gap-2 ${answers.vocabulary[index].isCorrect ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {answers.vocabulary[index].isCorrect ? (
                            <Check className="size-4" />
                          ) : (
                            <X className="size-4" />
                          )}
                          <p>{answers.vocabulary[index].selectedAnswer}</p>
                        </div>
                        {!answers.vocabulary[index].isCorrect && (
                          <div className="mt-2 flex items-center gap-2 text-green-600">
                            <Check className="size-4" />
                            <p>Correct answer: {question.answer}</p>
                          </div>
                        )}
                      </div>
                    </AppCard>
                  ))}
                </div>
              )}

              {/* Grammar Section */}
              {answers?.grammar && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Grammar</h3>
                  {questions.grammar.map((question, index) => (
                    <AppCard key={index} className="space-y-4 p-4">
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">Question:</p>
                        <p>{question.text}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-gray-600">Your Answer:</p>
                        <div
                          className={`flex items-center gap-2 ${answers.grammar[index].isCorrect ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {answers.grammar[index].isCorrect ? <Check className="size-4" /> : <X className="size-4" />}
                          <p>{question.options[answers.grammar[index].selectedAnswer]}</p>
                        </div>
                        {!answers.grammar[index].isCorrect && (
                          <div className="mt-2 flex items-center gap-2 text-green-600">
                            <Check className="size-4" />
                            <p>Correct answer: {question.options[question.correctAnswer]}</p>
                          </div>
                        )}
                      </div>
                    </AppCard>
                  ))}
                </div>
              )}

              {/* Reading Section */}
              {answers?.reading && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Reading Comprehension</h3>
                  <AppCard className="space-y-6 p-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">Passage:</p>
                      <p className="text-sm">{questions.reading.passage}</p>
                    </div>
                    {questions.reading.questions.map((question, index) => (
                      <div key={index} className="space-y-4 border-t pt-4">
                        <div>
                          <p className="mb-2 text-sm font-medium text-gray-600">Question {index + 1}:</p>
                          <p>{question.text}</p>
                        </div>
                        <div>
                          <p className="mb-2 text-sm font-medium text-gray-600">Your Answer:</p>
                          <div
                            className={`flex items-center gap-2 ${answers.reading[index].isCorrect ? 'text-green-600' : 'text-red-600'}`}
                          >
                            {answers.reading[index].isCorrect ? <Check className="size-4" /> : <X className="size-4" />}
                            <p>{question.options[answers.reading[index].selectedAnswer]}</p>
                          </div>
                          {!answers.reading[index].isCorrect && (
                            <div className="mt-2 flex items-center gap-2 text-green-600">
                              <Check className="size-4" />
                              <p>Correct answer: {question.options[question.correctAnswer]}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </AppCard>
                </div>
              )}

              {/* Writing Section */}
              {answers?.writing && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Writing Response</h3>
                  <AppCard className="space-y-4 p-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">Prompt:</p>
                      <p>{questions.writing.prompt}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">
                        Your Response ({answers.writing.wordCount} words):
                      </p>
                      <p>{answers.writing.response}</p>
                    </div>
                  </AppCard>
                </div>
              )}
            </div>
          </AppScrollArea>
        </AppDialog.Content>
      </AppDialog>
    </div>
  );
};

export default TestResults;
