"use client";
import React, { useState, useEffect, useRef } from "react";
import { SendHorizonal, X, MessageCircle } from "lucide-react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ type: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  interface ChatbotResponses {
    plans: string[];
    "churnDNA results": string[];
    features: string[];
    "ai models": { low_data: string };
    "digital twins": { description: string };
    greetings: string[];
    "how it works": string[];
    pricing: string[];
    support: string[];
    informal: string[];
    fallback: string;
  }
  
  const [responses, setResponses] = useState<ChatbotResponses | null>(null);

  useEffect(() => {
    // Fetch chatbot responses from JSON
    fetch("/data/chatbot-responses.json")
      .then((res) => res.json())
      .then((data) => setResponses(data));
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage: { type: "user" | "bot"; text: string } = { type: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // Generate bot reply
      const botReply = generateReply(input);
      setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
    }
  };

  const generateReply = (message: string): string => {
    if (!responses) return "Loading responses...";

    const lowerMessage = message.toLowerCase();

    // Iterate over keys in the responses object
    for (const key in responses) {
      const regex = new RegExp(key, "i"); // Create a case-insensitive regex for the key
      if (regex.test(lowerMessage)) {
        const response = responses[key as keyof ChatbotResponses];

        // Handle different response types (array, object, string)
        if (Array.isArray(response)) {
          return response[Math.floor(Math.random() * response.length)];
        } else if (typeof response === "object" && response !== null) {
          return Object.values(response)[0]; // Return the first value in the object
        } else if (typeof response === "string") {
          return response;
        }
      }
    }

    // Fallback response if no match is found
    return responses.fallback || "I'm sorry, I couldn't understand that.";
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90%] sm:w-[22rem] h-[32rem] bg-white/30 backdrop-blur-lg shadow-2xl border border-gray-200 rounded-xl flex flex-col z-50">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex justify-between items-center px-4 py-3 rounded-t-xl">
            <span className="font-bold text-lg">💬 AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`transition-all duration-300 max-w-[85%] px-4 py-2 rounded-2xl shadow border ${
                  msg.type === "user"
                    ? "bg-indigo-100 text-indigo-800 self-end ml-auto"
                    : "bg-white text-gray-800 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

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
