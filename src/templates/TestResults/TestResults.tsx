import React, { useEffect, useState } from 'react';
import { Check, X, Eye } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import TestAPI from '@/api/TestAPI/TestAPI';
import AppButton from '@/components/AppButton/AppButton';
import AppLogo from '@/components/AppLogo/AppLogo';
import AppScrollArea from '@/components/AppScrollArea/AppScrollArea';
import AppCard from '@/components/AppCard/AppCard';
import AppDialog from '@/components/AppDialog/AppDialog';
import ProficiencyProgress from '@/containers/ProficiencyProgress/ProficiencyProgress';
import SkillsRadarChart from '@/containers/SkillsRadarChart/SkillsRadarChart';
import Loading from '@/templates/Loading/Loading';

import type { TestResult } from '@/types/result';
import type { Test } from '@/types/test';

/* eslint-disable react/no-array-index-key */
const TestResults: React.FC = () => {
  const navigate = useNavigate();

  const { resultId } = useParams<{ resultId: string }>();

  const [results, setResults] = useState<TestResult | null>(null);
  const [test, setTest] = useState<Test | null>(null);
  const [isShowAnswers, setIsShowAnswers] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadResults = () => {
    if (!resultId) return;

    TestAPI.getTestResult(resultId)
      .then(response => {
        setResults(response.results);
        setTest(response.test);
      })
      .catch(() => {
        navigate('/');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(loadResults, [resultId]);

  if (isLoading || !results || !test) {
    return (
      <div className="mx-auto h-full  max-w-4xl flex-1 p-6">
        <Loading />
      </div>
    );
  }

  return (
    <div className="mx-auto h-full  max-w-4xl flex-1 p-6">
      <div className="space-y-8 rounded-lg bg-white p-8 shadow-sm">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <h1 className="text-3xl font-bold">Your English Proficiency Analysis!</h1>
          <p className="text-gray-600">
            Based on your performance, here is a detailed analysis of your English proficiency
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Overall Proficiency</h3>
            <div className="flex justify-center">
              <ProficiencyProgress level={results.englishLevel} percentage={results.scoreToNext} />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Skills Breakdown</h3>
            <SkillsRadarChart scores={results.scores} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AppCard className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Check className="size-5 text-green-500" />
              Strengths
            </h3>
            <ul className="space-y-2">
              {results.strengths.map(strength => (
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
              {results.weaknesses.map(area => (
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
          <p className="leading-relaxed text-gray-600">{results.comment}</p>
        </AppCard>

        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <AppButton
            size="lg"
            variant="outline"
            onClick={() => setIsShowAnswers(true)}
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

      <AppDialog open={isShowAnswers} onOpenChange={setIsShowAnswers}>
        <AppDialog.Content className="max-h-[80vh] max-w-3xl">
          <AppDialog.Header>
            <AppDialog.Title>Your Test Results</AppDialog.Title>
          </AppDialog.Header>

          <AppScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-8 py-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Grammar</h3>
                </div>
                {test.grammar.questions.map((question, index) => (
                  <AppCard key={index} className="space-y-4 p-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">Question:</p>
                      <p>{question.text}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">Your Answer:</p>
                      <div
                        className={`flex items-center gap-2 ${
                          results.grammar.answers[index].isCorrect ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {results.grammar.answers[index].isCorrect ? (
                          <Check className="size-4" />
                        ) : (
                          <X className="size-4" />
                        )}
                        <p>{question.options[results.grammar.answers[index].selectedAnswer]}</p>
                      </div>
                      {!results.grammar.answers[index].isCorrect && (
                        <div className="mt-2 flex items-center gap-2 text-green-600">
                          <Check className="size-4" />
                          <p>Correct answer: {question.options[question.correctAnswer]}</p>
                        </div>
                      )}
                      {results.grammar.answers[index].comment && (
                        <p className="mt-2 text-sm text-gray-600">{results.grammar.answers[index].comment}</p>
                      )}
                    </div>
                  </AppCard>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Vocabulary</h3>
                </div>
                {test.vocabulary.passages.map((passage, passageIndex) => (
                  <div key={passageIndex} className="space-y-4">
                    <AppCard className="p-4">
                      <p className="mb-2 text-sm font-medium text-gray-600">Passage {passageIndex + 1}:</p>
                      <p className="whitespace-pre-wrap">{passage.text}</p>
                    </AppCard>
                    {passage.questions.map((question, questionIndex) => (
                      <AppCard key={questionIndex} className="space-y-4 p-4">
                        <div>
                          <p className="mb-2 text-sm font-medium text-gray-600">Question:</p>
                          <p>{question.text}</p>
                        </div>
                        <div>
                          <p className="mb-2 text-sm font-medium text-gray-600">Your Answer:</p>
                          <div
                            className={`flex items-center gap-2 ${
                              results.vocabulary.passages[passageIndex].questions[questionIndex].isCorrect
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}
                          >
                            {results.vocabulary.passages[passageIndex].questions[questionIndex].isCorrect ? (
                              <Check className="size-4" />
                            ) : (
                              <X className="size-4" />
                            )}
                            <p>
                              {
                                question.options[
                                  results.vocabulary.passages[passageIndex].questions[questionIndex].selectedAnswer
                                ]
                              }
                            </p>
                          </div>
                          {!results.vocabulary.passages[passageIndex].questions[questionIndex].isCorrect && (
                            <div className="mt-2 flex items-center gap-2 text-green-600">
                              <Check className="size-4" />
                              <p>Correct answer: {question.options[question.correctAnswer]}</p>
                            </div>
                          )}
                          {results.vocabulary.passages[passageIndex].questions[questionIndex].comment && (
                            <p className="mt-2 text-sm text-gray-600">
                              {results.vocabulary.passages[passageIndex].questions[questionIndex].comment}
                            </p>
                          )}
                        </div>
                      </AppCard>
                    ))}
                  </div>
                ))}
              </div>

              {/* Writing Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Writing</h3>
                </div>
                {test.writing.questions.map((prompt, index) => (
                  <AppCard key={index} className="space-y-4 p-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">Prompt:</p>
                      <p>{prompt}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">Your Response:</p>
                      <p className="whitespace-pre-wrap">{results.writing.answers[index].answer}</p>
                    </div>
                    {results.writing.answers[index].comment && (
                      <div className="rounded-md bg-gray-50 p-3">
                        <p className="text-sm text-gray-600">{results.writing.answers[index].comment}</p>
                      </div>
                    )}
                  </AppCard>
                ))}
              </div>

              {/* Speaking Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Speaking</h3>
                </div>
                {test.speaking.questionAudios.map((question, index) => (
                  <AppCard key={index} className="space-y-4 p-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600">Question:</p>
                      <p>{question.text}</p>
                    </div>

                    {results.speaking.answers[index].comment && (
                      <div className="rounded-md bg-gray-50 p-3">
                        <p className="text-sm text-gray-600">{results.speaking.answers[index].comment}</p>
                      </div>
                    )}
                  </AppCard>
                ))}
              </div>
            </div>
          </AppScrollArea>
        </AppDialog.Content>
      </AppDialog>
    </div>
  );
};

export default TestResults;
