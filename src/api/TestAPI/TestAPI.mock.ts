import type { Test } from '@/types/test';
import type { TestResult } from '@/types/result';

// eslint-disable-next-line import/prefer-default-export
export const mockTest: Test = {
  _id: '1',
  createdAt: '2021-10-01T12:00:00.000Z',
  updatedAt: '2021-10-01T12:00:00.000Z',
  grammar: {
    questions: [
      {
        text: 'He ____ a software developer.',
        correctAnswer: 0,
        options: ['is', 'are', 'am', 'be'],
      },
      {
        text: 'You ____ check the API documentation before making changes.',
        correctAnswer: 1,
        options: ['must', 'should', 'could', 'might'],
      },
      {
        text: 'Although the deadline was tight, the team managed to deliver the project ____ issues.',
        correctAnswer: 0,
        options: ['without any', 'despite of', 'with no', 'besides'],
      },
    ],
  },
  vocabulary: {
    passages: [
      {
        text: `Continuous Integration (CI) is a software development practice where developers frequently integrate their code into a shared repository. The main goal of CI is to identify and address bugs as early as possible, reducing the risk of integration issues during later stages of development. Typically, CI systems automate the process by running a series of tests whenever new code is pushed to the repository. A CI pipeline usually includes steps like build automation, unit testing, and code quality checks. For example, when a developer commits their changes, the pipeline compiles the code, executes automated tests, and provides immediate feedback on whether the changes meet predefined quality standards. If the pipeline fails, the developer must resolve the issues before merging their code. CI tools such as Jenkins, CircleCI, and GitHub Actions are widely used in the industry. These tools can be configured to include additional steps, like deploying code to staging environments or running performance benchmarks. CI is an integral part of DevOps practices, enabling teams to collaborate more efficiently and deliver higher-quality software. Adopting CI requires a cultural shift, as developers must commit to frequent integrations and embrace the "fail fast, fix fast" mindset, fostering a more agile development process.`,
        questions: [
          {
            text: 'What is the primary goal of Continuous Integration (CI)?',
            correctAnswer: 1,
            options: [
              'To write better documentation',
              'To find and fix bugs early',
              'To reduce deployment time',
              'To create new repositories',
            ],
          },
          {
            text: 'What happens when a CI pipeline fails?',
            correctAnswer: 2,
            options: [
              'The code is merged automatically',
              'The developer must resolve the issue',
              'The repository is locked',
              'The project is abandoned',
            ],
          },
        ],
      },
      {
        text: `Situation: Weekly Team Planning Call. Team Lead: Hi everyone, thanks for joining. Let’s start with the sprint goals. By Friday, we need to finalize the authentication feature. Alex, are you still blocked by the API issues?. Alex: Not anymore! The backend team resolved it yesterday. I’ll integrate the new endpoints today. Team Lead: Perfect. Anna, how’s the UI for the dashboard coming along? Anna: It’s 80% done. I’ll polish the CSS and add responsiveness tomorrow. Team Lead: Sounds good. For next week, we’ll focus on performance optimization. There’s a noticeable lag when rendering large datasets. Let’s prioritize lazy loading and caching strategies. Alex: Agreed. Should we also review the database indexing? Team Lead: Yes, that’s part of it. Make sure to document any findings in Confluence. Anything else? Anna: Not from me. Team Lead: Great, let’s stay on track. Talk soon!`,
        questions: [
          {
            text: 'What feature is the team aiming to finalize by Friday?',
            options: ['Lazy loading', 'Dashboard UI', 'Authentication', 'Performance optimization'],
            correctAnswer: 2,
          },
          {
            text: 'What was Alex previously blocked by?',
            options: ['UI bugs', 'API issues', 'Database indexing', 'CSS responsiveness'],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
  writing: {
    questions: [
      'Describe a technical problem you recently solved at work. What steps did you take to fix it?',
      'How do you see the role of AI and automation in the future of software development? Share your thoughts and give examples.',
    ],
  },
  speaking: {
    questionAudios: [
      {
        text: 'You’ve just fixed a critical bug in the application that was causing errors in the user login process. During your daily stand-up meeting, your task is to explain the following to a team member or a QA engineer.',
        url: '/audio/test.mp3',
      },
    ],
  },
};

export const mockTestResult: TestResult = {
  _id: '1',
  testId: '1',
  userId: 'user123',
  createdAt: '2024-01-26T12:00:00.000Z',
  updatedAt: '2024-01-26T12:00:00.000Z',
  scores: [
    { skill: 'Vocabulary', score: 75 },
    { skill: 'Grammar', score: 80 },
    { skill: 'Speaking / Pronunciation', score: 85 },
    { skill: 'Fluency', score: 70 },
    { skill: 'Writing', score: 90 },
  ],
  englishLevel: 'B2',
  scoreToNext: 82,
  grammar: {
    answers: [
      { selectedAnswer: 0, isCorrect: true, comment: 'Good choice of "is" for singular subject' },
      { selectedAnswer: 2, isCorrect: false, comment: 'Consider using "should" for recommendations' },
      { selectedAnswer: 0, isCorrect: true, comment: 'Correct usage of "without any"' },
    ],
  },
  vocabulary: {
    passages: [
      {
        questions: [
          { selectedAnswer: 1, isCorrect: true, comment: 'Excellent understanding of CI concepts' },
          { selectedAnswer: 1, isCorrect: true, comment: 'Good grasp of CI workflow' },
        ],
      },
      {
        questions: [
          { selectedAnswer: 2, isCorrect: true, comment: 'Accurate identification of project goals' },
          { selectedAnswer: 1, isCorrect: true, comment: 'Clear understanding of technical blockers' },
        ],
      },
    ],
  },
  writing: {
    answers: [
      {
        answer: 'Last week, I encountered a memory leak in our React application...',
        comment: 'Good structure and technical detail. Consider adding more about the debugging process.',
      },
      {
        answer: 'AI will significantly transform software development through automated code generation...',
        comment: 'Well-reasoned perspective with relevant examples. Could elaborate on potential challenges.',
      },
    ],
  },
  speaking: {
    answers: [
      {
        audioUrl: '/responses/answer1.mp3',
        comment: 'Clear explanation of the bug fix. Good technical vocabulary and coherent structure.',
      },
    ],
  },
  strengths: [
    'Strong understanding of technical concepts',
    'Clear communication in written responses',
    'Excellent grasp of software development practices',
  ],
  weaknesses: ['Could improve on modal verbs usage', 'Need more detailed explanations in technical writing'],
  comment:
    'Your current proficiency level is B1 (Intermediate). You show solid comprehension skills and a strong grasp of basic grammar. Your vocabulary is well-suited for everyday communication and context-specific situations.\n' +
    '\n' +
    'To move to the B2 level, focus on enhancing your use of complex sentence structures and improving your academic writing. Regular practice with native-speed listening materials will also help boost your listening skills.\n' +
    '\n' +
    'Explore will create a personalized learning program based on this test to help you reach your goals faster and more efficiently.',
};
