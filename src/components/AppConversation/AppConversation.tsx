import { useConversation } from '@11labs/react';
import { useCallback, useState } from 'react';
import AppTextarea from '../AppTextarea/AppTextarea';
import AppButton from '../AppButton/AppButton';
import ConversationTimer from '@/containers/ConversationTimer/ConversationTimer';
import { Loader, PhoneOff } from 'lucide-react';
import useStore from '@/context/store/useStore';
import PracticeAPI from '@/api/PracticeAPI/PracticeAPI';

export function AppConversation() {
  const { user, practice } = useStore();

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isConversation, setIsConveration] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ message: string; source: string }[]>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [isAnalysing, setIsAnalysing] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(60 * 80); // change it to the value from practice

  const handleLetsGoPress = () => {
    setIsConveration(true);
  };

  const handleStartPress = () => {
    setIsStarted(true);
    startConversation();
  };

  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message: { message: string; source: string }) => {
      console.log('Message:', message);
      setMessages(prev => [...prev, message]);
    },
    onError: (error: string) => console.error('Error:', error),
  });

  const startConversation = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      await conversation.startSession({
        agentId: import.meta.env.ELEVENLABS_AGENT_ID as string,
        dynamic_vars: {
          //@ts-ignore
          user_name: user?.name,
          user_prompt: prompt,
        },
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    setIsStarted(false);
    setIsAnalysing(true);

    PracticeAPI.submitPracticeConversation(practice?._id, messages, 60 * 80 - timeLeft) // remove hardcode, fix it
      .then(res => {
        console.log({ res });
        setAnalysis(res);
      })
      .catch(e => console.log(e))
      .finally(() => {
        setIsAnalysing(false);
      });

    await conversation.endSession();
    // send it to backend to generate results
  }, [conversation]);

  if (isAnalysing) {
    return <Loader />;
  }

  if (analysis.length !== 0) {
    return <p>{analysis}</p>;
  }
  return (
    <>
      {!isConversation ? (
        <div className="flex flex-col items-center gap-4 mt-auto mb-auto">
          <div className="flex flex-col w-full max-w-[700px] space-y-8 rounded-xl bg-white p-8 shadow-sm justify-center">
            <div>
              <div className="flex gap-5 items-center">
                <div className="rounded-full overflow-hidden min-w-12 min-h-12">
                  <img src="/ai.gif" alt="Ai gif" width={48} height={48} className="min-w-12 min-h-12" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">What would you like to discuss?</h2>
              </div>
            </div>
            <AppTextarea value={prompt} onChange={e => setPrompt(e.target.value)} />
            <AppButton onClick={handleLetsGoPress}>Okaaaay let's go</AppButton>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 mt-auto mb-auto">
          <ConversationTimer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimeOver={stopConversation}
            isRunning={isStarted}
          />
          <div className="flex rounded-full overflow-hidden w-[350px] h-[350px] items-center justify-center relative">
            <img src="/ai.gif" alt="Ai gif" width={350} height={350} className="" />
            {!isStarted ? (
              <AppButton
                variant="outline"
                className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
                onClick={handleStartPress}
              >
                Start conversation
              </AppButton>
            ) : (
              <AppButton
                variant="default"
                className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-zinc-900"
              >
                {isAnalysing ? 'Analyzing conversation' : conversation.isSpeaking ? 'Speaking' : 'Listening'}
              </AppButton>
            )}
          </div>

          <div className="h-[40px]">
            {isStarted && (
              <AppButton variant="default" onClick={stopConversation} style={{ borderRadius: 100 }}>
                <PhoneOff />
                Finish
              </AppButton>
            )}
          </div>
        </div>
      )}
    </>
  );
}
