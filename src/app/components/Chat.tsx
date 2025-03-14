'use client';

import { useEffect, useRef, useMemo } from 'react';
import { ChatProps } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Chat({ conversation }: ChatProps) {
  const endOfChatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  const formattedConversation = useMemo(
    () =>
      conversation.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === 'User' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[80%] p-4 rounded-lg shadow-sm ${
              message.role === 'User'
                ? 'bg-blue-500 text-white'
                : message.role === 'Mark'
                ? 'bg-slate-500 text-white'
                : 'bg-stone-500 text-white'
            }`}
          >
            <div className="flex items-center mb-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold ${
                  message.role === 'User'
                    ? 'bg-blue-600'
                    : message.role === 'Mark'
                    ? 'bg-slate-600'
                    : 'bg-stone-600'
                }`}
              >
                {message.role === 'User'
                  ? '👤'
                  : message.role === 'Mark'
                  ? '🤖'
                  : '🤖'}
              </span>
              <strong className="ml-2">{message.role}</strong>
            </div>
            <div className="text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message?.content ?? "No content available"}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )),
    [conversation]
  );

  return (
    <div className="space-y-4">
      {formattedConversation}
      <div ref={endOfChatRef} />
    </div>
  );
}