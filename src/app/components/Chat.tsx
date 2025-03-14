"use client";

import { ChatProps } from "../types/index";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chat({ conversation }: ChatProps) {
  return (
    <div className="space-y-4">
      {conversation.map((message, index) => (
        <div
          key={index}
          className={`p-4 rounded ${
            message.role === "User"
              ? "bg-gray-100"
              : message.role === "Mark"
              ? "bg-green-100"
              : "bg-blue-100"
          }`}
        >
          <strong className="font-semibold">{message.role}:</strong>{" "}
          <div className="text-sm">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}
