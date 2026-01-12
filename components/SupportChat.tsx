import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { PHONE_NUMBER } from '../constants';

const SupportChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! I'm your Minecraft Support Assistant. How can I help you today? You can also call us directly at " + PHONE_NUMBER }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Initialize GoogleGenAI strictly using process.env.API_KEY as per the @google/genai guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a helpful customer support agent for 'Minecraft Phone Support'. 
          Your goal is to help players solve technical issues like APK downloads, lagging, login errors, and Windows 11 bugs.
          Always mention that for deep technical help or immediate solutions, they should call our USA support number: ${PHONE_NUMBER}.
          Keep answers professional, friendly, and gaming-focused.`,
        }
      });

      const botResponse = response.text || "I'm sorry, I'm having trouble connecting. Please call our support line at " + PHONE_NUMBER;
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Service temporarily busy. Please call us at " + PHONE_NUMBER + " for instant help." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-[#1a1a1a] border border-mc-green w-80 md:w-96 rounded-xl shadow-2xl flex flex-col h-[500px] overflow-hidden">
          {/* Header */}
          <div className="bg-mc-green p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold">Live Support Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-mc-green text-white rounded-br-none' 
                    : 'bg-[#2a2a2a] text-gray-200 rounded-bl-none border border-gray-700'
                }`}>
                  <div className="flex items-center space-x-2 mb-1 opacity-50 text-[10px] uppercase font-bold">
                    {msg.role === 'user' ? <><User className="w-3 h-3" /> <span>You</span></> : <><Bot className="w-3 h-3" /> <span>MC Support</span></>}
                  </div>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#2a2a2a] p-3 rounded-lg animate-pulse text-xs text-gray-400">
                  Assistant is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-800 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your issue..."
              className="flex-grow bg-[#0f0f0f] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:border-mc-green outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-mc-green text-white p-2 rounded-lg hover:brightness-110 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-mc-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default SupportChat;
