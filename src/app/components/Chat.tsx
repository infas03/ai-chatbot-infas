"use client";

import { useEffect, useRef } from "react";
import { ChatProps } from "../types/index";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chat({ conversation }: ChatProps) {
  const endOfChatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  return (
    <div className="space-y-4">
      {conversation.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === "User" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] p-4 rounded-lg shadow-sm ${
              message.role === "User"
                ? "bg-blue-500 text-white"
                : message.role === "Mark"
                ? "bg-green-500 text-white"
                : "bg-blue-100 text-gray-800"
            }`}
          >
            <div className="flex items-center mb-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold ${
                  message.role === "User"
                    ? "bg-blue-600"
                    : message.role === "Mark"
                    ? "bg-green-600"
                    : "bg-blue-200"
                }`}
              >
                {message.role === "User"
                  ? "👤"
                  : message.role === "Mark"
                  ? "🤖"
                  : "🤖"}
              </span>
              <strong className="ml-2">{message.role}</strong>
            </div>
            <div className="text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
      <div ref={endOfChatRef} />
    </div>
  );
}
