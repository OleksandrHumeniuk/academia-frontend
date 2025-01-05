import React from 'react';
import { Play, Volume2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ListeningSectionProps {
  onNext: () => void;
  question: {
    audioUrl: string;
    text: string;
    options: string[];
  };
}

const ListeningSection = ({ onNext, question }: ListeningSectionProps) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
  const [hasPlayed, setHasPlayed] = React.useState(false);

  const handlePlay = () => {
    // In a real app, play the audio file
    setHasPlayed(true);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Listening Assessment</h1>
        <p className="text-gray-600">Listen to the audio and answer the question:</p>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <Button variant="outline" size="lg" className="w-full" onClick={handlePlay}>
            <Volume2 className="mr-2 size-4" />
            Play Audio
          </Button>

          {hasPlayed && (
            <>
              <div className="pt-4">
                <h3 className="mb-4 text-lg font-medium">{question.text}</h3>
                <RadioGroup value={selectedAnswer || ''} onValueChange={setSelectedAnswer} className="space-y-4">
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button className="mt-4 w-full" disabled={!selectedAnswer} onClick={onNext}>
                Continue
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ListeningSection;
