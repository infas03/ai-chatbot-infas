'use client';

import { useState } from 'react';
import { InputFormProps } from '../types/index';

export default function InputForm({ onStart, isLoading }: InputFormProps) {
  const [prompt, setPrompt] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(prompt);
    setPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter initial prompt"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        required
      />
      <button
        type="submit"
        disabled={!prompt || isLoading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isLoading ? 'Starting...' : 'START'}
      </button>
    </form>
  );
}