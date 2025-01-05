// eslint-disable-next-line import/prefer-default-export
export const MOCK_ANSWERS = {
  vocabulary: [
    {
      selectedAnswer: 'collaboration',
      isCorrect: true,
    },
    {
      selectedAnswer: 'commission',
      isCorrect: false,
    },
    {
      selectedAnswer: 'breakthrough',
      isCorrect: true,
    },
    {
      selectedAnswer: 'excavation',
      isCorrect: true,
    },
    {
      selectedAnswer: 'artistic',
      isCorrect: false,
    },
  ],

  grammar: [
    {
      selectedAnswer: 1, // "I have been working here for three years"
      isCorrect: true,
    },
    {
      selectedAnswer: 2, // "I am studying English"
      isCorrect: true,
    },
    {
      selectedAnswer: 3, // "If I know, I would tell you"
      isCorrect: false,
    },
    {
      selectedAnswer: 1, // "She went to Paris last year"
      isCorrect: true,
    },
    {
      selectedAnswer: 1, // "Neither of the students has finished"
      isCorrect: true,
    },
  ],

  reading: [
    {
      selectedAnswer: 1, // "The impact and challenges of AI in society"
      isCorrect: true,
    },
    {
      selectedAnswer: 2, // "The impact on employment"
      isCorrect: true,
    },
    {
      selectedAnswer: 2, // "Guidelines and regulations"
      isCorrect: true,
    },
  ],

  writing: {
    response: `Artificial intelligence is poised to revolutionize education in several transformative ways. First, AI will enable truly personalized learning experiences by adapting to each student's pace, learning style, and areas of difficulty. For example, AI-powered educational platforms could automatically adjust the difficulty of problems, provide targeted practice exercises, and offer real-time feedback tailored to individual needs.

Furthermore, AI will assist teachers by automating administrative tasks like grading multiple-choice assessments and tracking student progress, allowing educators to focus more on meaningful interactions with students and complex teaching activities. AI teaching assistants could provide 24/7 support to students, answering common questions and offering explanations in multiple ways to accommodate different learning preferences.

Another significant role will be in making education more accessible and inclusive. AI-powered translation tools could help break down language barriers in real-time, while adaptive technologies could better support students with learning disabilities. Virtual and augmented reality combined with AI could create immersive learning experiences, allowing students to conduct virtual science experiments, explore historical sites, or practice complex procedures in a safe environment.

However, it's crucial to maintain the human element in education. AI should complement, not replace, human teachers, who provide essential emotional support, critical thinking guidance, and creative inspiration that AI cannot replicate.`,
    wordCount: 178,
  },
};
