"use client";
import React, { useState, useEffect, useRef } from "react";
import { SendHorizonal, X, MessageCircle } from "lucide-react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Icon Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90%] sm:w-[22rem] h-[32rem] bg-white/30 backdrop-blur-lg shadow-2xl border border-gray-200 rounded-xl flex flex-col z-50">
          {/* Header with Close */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex justify-between items-center px-4 py-3 rounded-t-xl">
            <span className="font-bold text-lg">💬 AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="transition-all duration-300 bg-white text-gray-800 max-w-[85%] px-4 py-2 rounded-2xl shadow border border-indigo-100 self-end ml-auto"
              >
                {msg}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="p-4 border-t border-gray-200 bg-white/60 backdrop-blur-md rounded-b-xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white transition-transform duration-200 hover:scale-105"
              >
                <SendHorizonal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
