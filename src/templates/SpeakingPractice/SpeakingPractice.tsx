import React, { useCallback, useState } from 'react';
import { useConversation } from '@11labs/react';
import OpenAI from 'openai';
import { DialogTitle } from '@radix-ui/react-dialog';

import AppDialog from '@/components/AppDialog/AppDialog';
import Agent from './AgentLayout';
import Chat from './ChatLayout';

const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY as string, dangerouslyAllowBrowser: true });

const GPT_INSTRUCTION = `Analyze the provided conversation in JSON format.

CONTEXT:
***
Your task is to analyze the array of messages that form the dialogue between an AI agent and a user. An AI agent asks questions, and the user provides answers to them. Messages of the user may contain mistakes. 
***

TASK:
***
For user answers, identify and highlight this types of mistake:
grammar,
stylistic,
tone of voice or
contextual mistakes in each message.

Never identify and highlight punctuation and spelling mistakes and never correct any of those mistakes.

For each mistake, provide an explanation in the same message. Output that message inside parentheses () immediately after mistaken word or phrase. Wrap the corrected mistakes and explanation with <span> tags. 

The output should consist of only a plain string formatted as JSON object (without \`\`\`json\`\`\`) and contain all messages with "role": "agent" without any modifications.
***

EXAMPLE OF CORRECTION:
***
      {
        "role": "user",
        "message": "I <span>has(The verb "has" is incorrect because the subject "I" requires "have" instead)</span> a background in software testing with a focus on web applications."
      },
      {
        "role": "user",
        "message": "The project deadline is next week, so <span>let’s hustle and get this thing wrapped up ASAP!(The phrase "let’s hustle" and "get this thing wrapped up ASAP" are too informal and casual for a professional setting. While the sentence conveys urgency, it lacks professionalism. Better version: so let’s ensure we complete all tasks on time and meet our commitments)</span>."
      },
      {
        "role": "user",
        "message": "Our marketing strategy must be adjusted immediately, <span>or else we’re totally screwed(The phrase "or else we’re totally screwed" is too informal and unprofessional for a business or professional setting. Better version “or we risk significant negative consequences”)</span>."
      },
      {
        "role": "user",
        "message": "<span>The blockchain was originally developed by Google(Blockchain was first introduced in 2008 by an anonymous person or group known as Satoshi Nakamoto as the underlying technology for Bitcoin. Google had no role in its development)</span> to improve data security in cloud computing."
      }
***
`;

const SpeakingPractice: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  // const [messages, setMessages] = useState<{ message: string; source: string }[]>([]);
  const [isAnalysing, setIsAnalysing] = useState<boolean>(false);
  const [displayChatLayout, setDisplayChatLayout] = useState(false);
  const [conversationId, setConversationId] = useState('');
  // const [finalMessages, setFinalMessages] = useState<{ role: string; message: string }[]>([]);
  const [highlightedMessages, setHighlightedMessages] = useState<{ role: string; message: string }[]>([]);

  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message: { message: string; source: string }) => {
      console.log('Message:', message);
      // setMessages(prev => [...prev, message]);
    },
    onError: (error: string) => console.error('Error:', error),
  });

  const startConversation = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const currentConversationId = await conversation.startSession({
        agentId: import.meta.env.VITE_ELEVENLABS_AGENT_ID as string,
      });
      setConversationId(currentConversationId);
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  const handleStart = async () => {
    setIsStarted(true);
    await startConversation();
  };

  const getMessages = async () => {
    const response = await fetch(`https://api.elevenlabs.io/v1/convai/conversations/${conversationId}`, {
      method: 'GET',
      headers: {
        'xi-api-key': import.meta.env.VITE_ELEVENLABS_API_KEY as string,
      },
    });

    return response.json();
  };

  const stopConversation = useCallback(async () => {
    setIsAnalysing(true);
    await conversation.endSession();
    setTimeout(async () => {
      // console.log('stop conversation');
      // console.log(messages);
      const currentMessages = (await getMessages()) as { transcript: unknown[] };
      // console.log('currentMessages', currentMessages);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const newMessages = currentMessages?.transcript?.map(({ role, message }: { role: string; message: string }) => ({
        role,
        message,
      })) as { role: string; message: string }[];

      console.log('newMessages', newMessages);
      // setFinalMessages(newMessages);

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: `
{
  "instruction": ${GPT_INSTRUCTION},
  "input_format": {
    "conversation": ${JSON.stringify(newMessages)}
  },
  "output_format": {
    "conversation": [
      {
        "role": "user",
        "message": "I <span>has ('has' should be 'have' because 'I' takes 'have')</span> <span>a ('a' should be 'an' before a vowel sound)</span> apple in my bag."
      },
      {
        "role": "agent",
        "message": "That sounds great! Do you like apples?"
      }
    ]
  }
}
`,
          },
        ],
        response_format: { type: 'json_object' },
        store: true,
        temperature: 0.5,
        top_p: 0.5,
      });
      // console.log('completion', completion);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      const correctedConversation = JSON.parse(completion?.choices[0]?.message.content)?.conversation;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setHighlightedMessages(correctedConversation);
      localStorage.setItem('completion', JSON.stringify(completion));
      setIsStarted(false);
      setIsAnalysing(false);
      setDisplayChatLayout(true);
    }, 2000);
  }, [conversation]);

  const getLabel = () => {
    if (isAnalysing) return 'Analyzing conversation';
    if (conversation.isSpeaking) return 'Speaking';
    return 'Listening';
  };

  return (
    <AppDialog open={open} onOpenChange={onClose}>
      <AppDialog.Content aria-describedby={undefined} className="min-h-[600px] w-[800px] bg-white p-8">
        <DialogTitle />
        {displayChatLayout ? (
          <Chat onClose={onClose} messages={highlightedMessages} />
        ) : (
          <Agent
            isStarted={isStarted}
            isAnalysing={isAnalysing}
            handleStart={handleStart}
            getLabel={getLabel}
            stopConversation={stopConversation}
          />
        )}
      </AppDialog.Content>
    </AppDialog>
  );
};

export default SpeakingPractice;
