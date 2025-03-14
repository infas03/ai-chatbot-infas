"use client";

import { useState } from "react";
import { InputFormProps } from "../types/index";
import Spinner from "./Spinner";

export default function InputForm({ onStart, isLoading }: InputFormProps) {
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter initial prompt"
        className="w-full p-2 border border-gray-300 rounded mb-2 "
        required
      />
      <button
        type="submit"
        disabled={!prompt || isLoading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400 flex justify-center"
      >
        {isLoading ? <Spinner /> : "START"}
      </button>
      <div className="text-center">
        {isLoading && (
          <span className="text-center text-xs font-bold text-gray-400">
            Please wait until the conversation is complete. 
          </span>
        )}
      </div>
    </form>
  );
}
