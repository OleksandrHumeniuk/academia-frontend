import React from 'react';
import { ChevronRight } from 'lucide-react';

import AppDialog from '@/components/AppDialog/AppDialog';
import AppTextarea from '@/components/AppTextarea/AppTextarea';
import AppButton from '@/components/AppButton/AppButton';

interface IProps {
  open: boolean;
  onClose: () => void;
  type: 'speaking' | 'writing';
}

interface Message {
  id: number;
  sender: string;
  text: string;
}

const speaking: Message[] = [
  { id: 1, sender: 'HR', text: 'Hi! Thanks for joining the interview today. How are you?' },
  { id: 2, sender: 'You', text: 'Hi! I’m doing well, thank you. Excited to be here.' },
  { id: 3, sender: 'HR', text: 'Alright, let’s dive in. Can you tell me a little bit about yourself?' },
  {
    id: 4,
    sender: 'You',
    text: 'Sure! I recently finished my studies in web development, and I’ve been working on personal projects to improve my skills. I really enjoy frontend development, especially working with JavaScript and React.',
  },
  { id: 5, sender: 'HR', text: 'Nice! What got you into frontend development in the first place?' },
  {
    id: 6,
    sender: 'You',
    text: 'I’ve always been fascinated by how websites are <span>build*(The verb "build" should be in its past participle form "built" because it is used as part of the passive voice ("are built")</span>. Seeing an idea turn into something people can actually <span>interact on*(The correct preposition to use with the verb "interact" is "with," not "on.”)</span> is really exciting for me.',
  },
  { id: 7, sender: 'HR', text: 'Love that! So, what kind of projects have you worked on?' },
  {
    id: 8,
    sender: 'You',
    text: 'I built my own portfolio website and worked on a small e-commerce site where users could filter and search for products. It was a great learning experience!',
  },
  { id: 9, sender: 'HR', text: 'That sounds awesome! What do you usually do when you run into a tricky bug?' },
  {
    id: 10,
    sender: 'You',
    text: 'First, I check the console for <span>error*(The word "error" should be in its plural form "errors" because you\'re likely referring to multiple possible errors that can appear in the console. In this context, it\'s more natural to use the plural form.)</span>. Then, I try debugging with console.log or browser <span>dev tool*(The phrase "dev tool" should be in the plural form "dev tools." "Dev tools" is a common expression used to refer to the various development tools available in a browser (like the Chrome Developer Tools), and it\'s typically plural.)</span>. If I’m stuck, I’ll look for solutions online or ask someone more experienced.',
  },
  { id: 11, sender: 'HR', text: 'Smart approach! How do you feel about working in a team?' },
  {
    id: 12,
    sender: 'You',
    text: 'I really enjoy it! In my projects, I’ve worked with GitHub for version control, and I like discussing ideas and learning from others.',
  },
  {
    id: 13,
    sender: 'HR',
    text: 'That’s great to hear! How do you stay up to date with new frontend trends and technologies?',
  },
  {
    id: 14,
    sender: 'You',
    text: 'I follow blogs, watch YouTube tutorials, and try out small projects with new tools. It helps me learn and stay curious!',
  },
];

const writing: Message[] = [
  {
    id: 1,
    sender: 'You',
    text: "<b>@Alice</b> Hey, I think we have an issue—I'm getting a 500 error on all requests. The production server might be down.",
  },
  { id: 2, sender: 'Alice (Senior Dev)', text: 'Thanks for flagging this! Did you check the monitoring dashboard?' },
  { id: 3, sender: 'You', text: 'Yeah, I saw a CPU usage spike right before it went down. No recent deployments.' },
  {
    id: 4,
    sender: 'Alice (Senior Dev)',
    text: 'Got it. I’ll check the logs… Looks like a memory issue. Restarting the services now.',
  },
  { id: 5, sender: 'You', text: 'Okay, let me know when it’s back up, and I’ll test again.' },
  { id: 6, sender: 'Alice (Senior Dev)', text: 'Just restarted. Can you check?' },
  { id: 7, sender: 'You', text: 'Yep, everything’s working now! Thanks, Alice.' },
  { id: 8, sender: 'Alice (Senior Dev)', text: 'No problem! Let’s dig into the root cause later.' },
];

const CommunicatingPractice: React.FC<IProps> = ({ open, onClose, type }) => {
  const messages = type === 'writing' ? writing : speaking;

  return (
    <AppDialog open={open} onOpenChange={onClose}>
      <AppDialog.Content className="min-h-[600px] w-[800px] bg-white p-0">
        <div className="flex h-full flex-col p-6">
          <div className="flex-1">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {type === 'speaking' ? 'Interview with HR - 10.12.2024' : 'Reporting an Incident on Slack/Teams'}
                </div>
              </div>

              {/* Chat messages container */}
              <div
                className={`${type === 'writing' ? 'h-[400px]' : 'h-[500px]'} overflow-y-auto rounded-lg bg-gray-50 p-4`}
              >
                <div className="flex flex-col gap-4">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender !== 'You' ? 'bg-gray-700 text-white' : 'bg-white shadow-sm'
                        }`}
                      >
                        <div className="mb-1 text-xs font-semibold">{message.sender}</div>
                        <div
                          className="text-sm [&>b]:text-blue-400 [&>span]:mt-1 [&>span]:italic [&>span]:text-red-500"
                          dangerouslySetInnerHTML={{ __html: message.text }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {type === 'writing' ? (
            <div className="mt-auto">
              <AppTextarea placeholder="Type your message..." className="mb-2" rows={3} />
              <div className="flex justify-end">
                <AppButton>
                  Send Message
                  <ChevronRight className="size-4" />
                </AppButton>
              </div>
            </div>
          ) : (
            <AppButton onClick={onClose}>Close</AppButton>
          )}
        </div>
      </AppDialog.Content>
    </AppDialog>
  );
};

export default CommunicatingPractice;
