// eslint-disable-next-line import/prefer-default-export
export const MOCK_QUESTIONS = {
  vocabulary: [
    {
      text: 'He ____ a software developer.',
      answer: 'is',
      options: ['is', 'are', 'am', 'be'],
    },
    {
      text: 'You ____ check the API documentation before making changes.',
      answer: 'should',
      options: ['must', 'should', 'could', 'might'],
    },
    {
      text: 'Although the deadline was tight, the team managed to deliver the project ____ issues.',
      answer: 'without any',
      options: ['without any', 'despite of', 'with no', 'besides'],
    },
  ],
  grammar: [
    {
      text: `Continuous Integration (CI) is a software development practice where developers frequently integrate their code into a shared repository. The main goal of CI is to identify and address bugs as early as possible, reducing the risk of integration issues during later stages of development. Typically, CI systems automate the process by running a series of tests whenever new code is pushed to the repository.

A CI pipeline usually includes steps like build automation, unit testing, and code quality checks. For example, when a developer commits their changes, the pipeline compiles the code, executes automated tests, and provides immediate feedback on whether the changes meet predefined quality standards. If the pipeline fails, the developer must resolve the issues before merging their code.

CI tools such as Jenkins, CircleCI, and GitHub Actions are widely used in the industry. These tools can be configured to include additional steps, like deploying code to staging environments or running performance benchmarks. CI is an integral part of DevOps practices, enabling teams to collaborate more efficiently and deliver higher-quality software.

Adopting CI requires a cultural shift, as developers must commit to frequent integrations and embrace the "fail fast, fix fast" mindset, fostering a more agile development process.`,
      questions: [
        {
          text: 'What is the primary goal of Continuous Integration (CI)?',
          options: [
            'To write better documentation',
            'To find and fix bugs early',
            'To reduce deployment time',
            'To create new repositories',
          ],
          correctAnswer: 1,
        },
        {
          text: 'What happens when a CI pipeline fails?',
          options: [
            'The code is merged automatically',
            'The developer must resolve the issue',
            'The repository is locked',
            'The project is abandoned',
          ],
          correctAnswer: 2,
        },
      ],
    },
    {
      text: `Situation: Weekly Team Planning Call

Team Lead: Hi everyone, thanks for joining. Let’s start with the sprint goals. By Friday, we need to finalize the authentication feature. Alex, are you still blocked by the API issues?

Alex: Not anymore! The backend team resolved it yesterday. I’ll integrate the new endpoints today.

Team Lead: Perfect. Anna, how’s the UI for the dashboard coming along?

Anna: It’s 80% done. I’ll polish the CSS and add responsiveness tomorrow.

Team Lead: Sounds good. For next week, we’ll focus on performance optimization. There’s a noticeable lag when rendering large datasets. Let’s prioritize lazy loading and caching strategies.

Alex: Agreed. Should we also review the database indexing?

Team Lead: Yes, that’s part of it. Make sure to document any findings in Confluence. Anything else?

Anna: Not from me.

Team Lead: Great, let’s stay on track. Talk soon!`,
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
  writing: [
    {
      prompt: 'Describe a technical problem you recently solved at work. What steps did you take to fix it?',
      minWords: 70,
    },
    {
      prompt:
        'How do you see the role of AI and automation in the future of software development? Share your thoughts and give examples.',
      minWords: 70,
    },
  ],
};
