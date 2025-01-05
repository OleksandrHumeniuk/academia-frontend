import React from 'react';
import { Mic, Square, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface SpeakingSectionProps {
  onNext: () => void;
  question: string;
}

const SpeakingSection = ({ onNext, question }: SpeakingSectionProps) => {
  const [isRecording, setIsRecording] = React.useState(false);
  const [recordingComplete, setRecordingComplete] = React.useState(false);

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      setRecordingComplete(true);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Speaking Assessment</h1>
        <p className="text-gray-600">Please respond to the following prompt:</p>
      </div>

      <Card className="p-6">
        <p className="mb-6 text-lg font-medium">{question}</p>

        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            variant={isRecording ? 'destructive' : 'default'}
            className="w-full max-w-sm"
            onClick={handleRecord}
          >
            {isRecording ? (
              <>
                <Square className="mr-2 size-4" /> Stop Recording
              </>
            ) : (
              <>
                <Mic className="mr-2 size-4" /> Start Recording
              </>
            )}
          </Button>

          {recordingComplete && (
            <div className="w-full max-w-sm space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Play className="size-4" /> Recording saved
              </div>
              <Button className="w-full" onClick={onNext}>
                Continue
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default SpeakingSection;
