// src/app/page.tsx
'use client';

import { useState, useCallback } from 'react';
import { Message } from './types';
import InputForm from './components/InputForm';
import Chat from './components/Chat';

export default function Home() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleStart = useCallback(async (prompt: string) => {
    setIsLoading(true);
    setConversation([{ role: 'User', content: prompt }]); // Reset conversation with the user prompt

    let currentPrompt = prompt;

    for (let i = 0; i < 5; i++) {
      try {
        // Mark responds
        const res1 = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: currentPrompt }),
        });
        const data1 = await res1.json();
        const response1 = data1.message;

        // Update conversation with Mark's response
        setConversation((prev) => [
          ...prev,
          { role: 'Mark', content: response1 },
        ]);

        // Max responds to Mark's message
        const res2 = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: response1 }),
        });
        const data2 = await res2.json();
        const response2 = data2.message;

        // Update conversation with Max's response
        setConversation((prev) => [...prev, { role: 'Max', content: response2 }]);

        // Update the prompt for the next iteration
        currentPrompt = response2;
      } catch (error) {
        console.error('Error generating conversation:', error);
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(false);
  }, []);

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-6">
        Self Chat-bot Infas
      </h1>
      <div className="flex-1 overflow-y-auto mb-4">
        <Chat conversation={conversation} />
      </div>
      <div className="sticky bottom-0 bg-white pt-4">
        <InputForm onStart={handleStart} isLoading={isLoading} />
      </div>
    </div>
  );
}