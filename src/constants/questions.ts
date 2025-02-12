// eslint-disable-next-line import/prefer-default-export
export const MOCK_QUESTIONS = {
  // vocabulary: [
  //   {
  //     text: 'Complete the sentence: The project was a great _____, bringing together experts from various fields.',
  //     answer: 'collaboration',
  //     options: ['collaboration', 'collection', 'collation', 'coalition'],
  //   },
  //   {
  //     text: "Fill in the blank: The company's _____ to sustainability has led to numerous environmental initiatives.",
  //     answer: 'commitment',
  //     options: ['commitment', 'commission', 'commendation', 'communion'],
  //   },
  //   {
  //     text: "What's the word? The researcher made a significant _____ in cancer treatment.",
  //     answer: 'breakthrough',
  //     options: ['breakthrough', 'breakout', 'breakdown', 'breakup'],
  //   },
  //   {
  //     text: 'Complete: The _____ of the ancient ruins provided valuable insights into the civilization.',
  //     answer: 'excavation',
  //     options: ['excavation', 'execution', 'examination', 'exploration'],
  //   },
  //   {
  //     text: "Fill in: The speaker's _____ delivery made the complex topic easy to understand.",
  //     answer: 'articulate',
  //     options: ['articulate', 'artistic', 'artificial', 'arduous'],
  //   },
  // ],
  grammar: [
    {
      text: 'He _____ working on the database migration right now',
      options: ['is', 'are', 'am', 'wa'],
      correctAnswer: 1,
    },
    // {
    //   text: 'Select the right tense:',
    //   options: ['I am study English', 'I studying English', 'I am studying English', 'I studies English'],
    //   correctAnswer: 2,
    // },
    // {
    //   text: 'Pick the correct sentence:',
    //   options: [
    //     'If I would know, I will tell you',
    //     'If I knew, I would tell you',
    //     'If I know, I would tell you',
    //     'If I knew, I will tell you',
    //   ],
    //   correctAnswer: 1,
    // },
    // {
    //   text: 'Choose the right form:',
    //   options: [
    //     'She has been to Paris last year',
    //     'She went to Paris last year',
    //     'She have gone to Paris last year',
    //     'She had been going to Paris last year',
    //   ],
    //   correctAnswer: 1,
    // },
    // {
    //   text: 'Select the correct option:',
    //   options: [
    //     'Neither of the students have finished',
    //     'Neither of the students has finished',
    //     'Neither of the students are finished',
    //     'Neither of the students were finished',
    //   ],
    //   correctAnswer: 1,
    // },
  ],
  vocabulary: {
    passage: `Version control systems (VCS) help software developers track changes in their code. They allow teams to work together without losing important updates. One of the most popular version control systems is **Git**.

With Git, developers can **save different versions** of their code, **undo mistakes**, and **collaborate** with others. They use platforms like **GitHub** or **GitLab** to store and share their projects.

Version control makes software development **faster and safer** because it prevents lost code and helps teams stay organised. That’s why learning Git is an important skill for every software developer.`,
    questions: [
      {
        text: 'Why do developers use platforms like GitHub or GitLab?',
        options: ['To store and manage code online', 'To create websites', 'To write documentation only'],
        correctAnswer: 1,
      },
      // {
      //   text: 'According to the passage, what is one major concern about AI?',
      //   options: [
      //     'The cost of development',
      //     'The speed of advancement',
      //     'The impact on employment',
      //     'The complexity of systems',
      //   ],
      //   correctAnswer: 2,
      // },
      // {
      //   text: 'What does the passage suggest is necessary for AI development?',
      //   options: ['Faster implementation', 'More funding', 'Guidelines and regulations', 'Better technology'],
      //   correctAnswer: 2,
      // },
    ],
  },
  writing: {
    prompt: 'What has been the most challenging concept in coding so far, and how did you overcome it?',
    minWords: 150,
  },
};
