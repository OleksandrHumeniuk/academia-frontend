import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play } from 'lucide-react';

import AppButton from '@/components/AppButton/AppButton';
import TestFlowPlaceholder from '@/templates/TestFlow/components/TestFlowPlaceholder';
import useAudio from '@/hooks/useAudio/useAudio';
import gif from '../../../../public/ai.gif';

import type { SpeakingQuestion } from '@/types/test';

type ConversationSectionProps = {
  onNext: (recordings: Blob[]) => void;
  questions: SpeakingQuestion[];
};

const RECORDING_DURATION = 40;

const SpeakingSection: React.FC<ConversationSectionProps> = ({ onNext, questions }) => {
  const { playAudio, isPlaying } = useAudio();
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const [isStarted, setIsStarted] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState<Blob[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(RECORDING_DURATION);
  const timerRef = useRef<NodeJS.Timer>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (mediaRecorder.current?.state === 'recording') {
        mediaRecorder.current.stop();
      }
    };
  }, []);

  const stopRecording = () => {
    if (mediaRecorder.current?.state === 'recording') {
      mediaRecorder.current.stop();
      mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsRecording(false);

    if (currentPrompt < questions.length - 1) {
      setCurrentPrompt(prev => prev + 1);
    } else {
      onNext(recordings);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = event => {
        if (event.data.size > 0) {
          setRecordings(prev => [...prev, event.data]);
        }
      };

      mediaRecorder.current.start();
      setIsRecording(true);
      setTimeLeft(RECORDING_DURATION);

      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            stopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleStartSection = () => {
    setIsStarted(true);
  };

  const playPrompt = () => {
    playAudio(questions[currentPrompt].text);
  };

  if (!isStarted) {
    return (
      <TestFlowPlaceholder
        buttonText="Start the section"
        title="Part 4 - Speaking"
        subtitles="Now it's time for the final part of the test: Speaking. In this section, you'll answer 2 open-ended questions by speaking aloud. For each question, you'll have 40 seconds to respond, and it's important to speak for the entire duration."
        audioUrl="/audio/speaking.mp3"
        speed={300}
        delay={1000}
        onStart={handleStartSection}
      />
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="mb-4 text-2xl font-semibold">Part 4 – Speaking</h1>

      <div className="text-center text-gray-600">
        <p>Question {currentPrompt + 1} of 1</p>
        {isRecording && <p className="mt-2 text-xl">Time remaining: {timeLeft}s</p>}
      </div>

      <div className="relative mx-auto mt-8 size-[350px] h-auto max-w-full">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4">
          <AppButton
            variant="outline"
            className="w-[200px] rounded-3xl"
            onClick={playPrompt}
            disabled={isPlaying || isRecording}
          >
            <Play className="mr-2" />
            Listen to Prompt
          </AppButton>

          {!isRecording ? (
            <AppButton
              variant="outline"
              className="w-[200px] rounded-3xl"
              onClick={startRecording}
              disabled={isPlaying}
            >
              <Mic className="mr-2" />
              Start Recording
            </AppButton>
          ) : (
            <AppButton variant="outline" className="w-[200px] rounded-3xl bg-red-100" onClick={stopRecording}>
              <Square className="mr-2" />
              Stop Recording
            </AppButton>
          )}
        </div>
        <img src={gif} alt="AI assistant" />
      </div>

      <p className="max-w-xl text-center text-gray-500">{questions[currentPrompt].text}</p>
    </div>
  );
};

export default SpeakingSection;
