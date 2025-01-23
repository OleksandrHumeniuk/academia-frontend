import React, { useState, useEffect } from 'react';

type AppSubtitlesProps = {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
};

const AppSubtitles: React.FC<AppSubtitlesProps> = ({
  text, //
  speed = 200,
  delay = 0,
  onComplete,
}) => {
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const wordArray = text?.trim() ? text.trim().split(' ') : [];
    setWords(wordArray);
    setCurrentIndex(0);
    setIsComplete(false);
    setIsStarted(false);
  }, [text]);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
    if (currentIndex === words.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, words.length, speed, isComplete, onComplete, isStarted]);

  return (
    <p className="max-w-xl text-gray-500">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`mx-[2px] inline-block transition-opacity duration-500 ${
            index < currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export default AppSubtitles;
