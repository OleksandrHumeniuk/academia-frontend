import React from 'react';

import AppButton from '@/components/AppButton/AppButton';

interface IProps {
  onClose: () => void;
  messages: { role: string; message: string }[];
}

const Chat: React.FC<IProps> = ({ onClose, messages }) => {
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}.${month}.${year}`;
  };

  const title = `Interview with HR - ${formatDate(new Date())}`;

  return (
    <div className="flex h-full flex-col p-6">
      <div className="flex-1">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{title}</div>
          </div>

          {/* Chat messages container */}
          <div className="h-[500px] overflow-y-auto rounded-lg bg-gray-50 p-4">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={`flex ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      index % 2 === 0 ? 'bg-gray-700 text-white' : 'bg-white shadow-sm'
                    }`}
                  >
                    <div className="mb-1 text-xs font-semibold">{index % 2 === 0 ? 'HR' : 'You'}</div>
                    <div
                      className="text-sm [&>b]:text-blue-400 [&>span]:mt-1 [&>span]:italic [&>span]:text-red-500"
                      dangerouslySetInnerHTML={{ __html: message.message }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AppButton onClick={onClose}>Close</AppButton>
    </div>
  );
};

export default Chat;
