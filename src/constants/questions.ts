// eslint-disable-next-line import/prefer-default-export
export const MOCK_QUESTIONS = {
  vocabulary: [
    {
      text: 'Complete the sentence: The project was a great _____, bringing together experts from various fields.',
      answer: 'collaboration',
      options: ['collaboration', 'collection', 'collation', 'coalition'],
    },
    {
      text: "Fill in the blank: The company's _____ to sustainability has led to numerous environmental initiatives.",
      answer: 'commitment',
      options: ['commitment', 'commission', 'commendation', 'communion'],
    },
    {
      text: "What's the word? The researcher made a significant _____ in cancer treatment.",
      answer: 'breakthrough',
      options: ['breakthrough', 'breakout', 'breakdown', 'breakup'],
    },
    {
      text: 'Complete: The _____ of the ancient ruins provided valuable insights into the civilization.',
      answer: 'excavation',
      options: ['excavation', 'execution', 'examination', 'exploration'],
    },
    {
      text: "Fill in: The speaker's _____ delivery made the complex topic easy to understand.",
      answer: 'articulate',
      options: ['articulate', 'artistic', 'artificial', 'arduous'],
    },
  ],
  grammar: [
    {
      text: 'Choose the correct form:',
      options: [
        'I have been working here since three years',
        'I have been working here for three years',
        'I am working here for three years',
        'I work here since three years',
      ],
      correctAnswer: 1,
    },
    {
      text: 'Select the right tense:',
      options: ['I am study English', 'I studying English', 'I am studying English', 'I studies English'],
      correctAnswer: 2,
    },
    {
      text: 'Pick the correct sentence:',
      options: [
        'If I would know, I will tell you',
        'If I knew, I would tell you',
        'If I know, I would tell you',
        'If I knew, I will tell you',
      ],
      correctAnswer: 1,
    },
    {
      text: 'Choose the right form:',
      options: [
        'She has been to Paris last year',
        'She went to Paris last year',
        'She have gone to Paris last year',
        'She had been going to Paris last year',
      ],
      correctAnswer: 1,
    },
    {
      text: 'Select the correct option:',
      options: [
        'Neither of the students have finished',
        'Neither of the students has finished',
        'Neither of the students are finished',
        'Neither of the students were finished',
      ],
      correctAnswer: 1,
    },
  ],
  reading: {
    passage: `Artificial Intelligence (AI) has become an integral part of our daily lives, transforming how we work, communicate, and solve problems. From virtual assistants to autonomous vehicles, AI technologies are revolutionizing various industries. However, this rapid advancement also raises important ethical questions about privacy, job displacement, and the future role of humans in an AI-driven world.

While AI offers numerous benefits, such as increased efficiency and improved decision-making, it also presents challenges that society must address. One major concern is the potential impact on employment, as automation may replace certain jobs. Another consideration is the need for transparent and unbiased AI systems that serve all members of society equally.

As we continue to develop and implement AI technologies, it's crucial to establish proper guidelines and regulations. This will help ensure that AI advancement benefits humanity while minimizing potential risks and ethical concerns.`,
    questions: [
      {
        text: 'What is the main theme of the passage?',
        options: [
          'The history of AI development',
          'The impact and challenges of AI in society',
          'How to build AI systems',
          'The future of employment',
        ],
        correctAnswer: 1,
      },
      {
        text: 'According to the passage, what is one major concern about AI?',
        options: [
          'The cost of development',
          'The speed of advancement',
          'The impact on employment',
          'The complexity of systems',
        ],
        correctAnswer: 2,
      },
      {
        text: 'What does the passage suggest is necessary for AI development?',
        options: ['Faster implementation', 'More funding', 'Guidelines and regulations', 'Better technology'],
        correctAnswer: 2,
      },
    ],
  },
  writing: {
    prompt:
      'What role do you think artificial intelligence will play in education in the future? Provide specific examples and explain your reasoning.',
    minWords: 150,
  },
};
