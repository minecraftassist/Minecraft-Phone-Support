
import React, { useState } from 'react';
import { Plus, Minus, Phone, HelpCircle } from 'lucide-react';
import { FAQS, PHONE_NUMBER, PHONE_URI } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <HelpCircle className="w-16 h-16 text-mc-green mx-auto mb-6" />
        <h1 className="mc-font text-2xl md:text-3xl mb-4">Common Questions</h1>
        <p className="text-gray-400">Everything you need to know about Minecraft technical support in the USA.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden">
            <button 
              className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-bold text-lg pr-4">{faq.question}</span>
              {openIndex === i ? <Minus className="text-mc-green" /> : <Plus className="text-mc-green" />}
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800 pt-6">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 bg-[#1a1a1a] p-10 rounded-3xl border border-mc-green text-center">
        <h3 className="mc-font text-lg mb-6">Still Have Questions?</h3>
        <p className="text-gray-400 mb-8">Our support team is available 24/7 at +1 (510)-370-1986 to help you with any game-related technical difficulties.</p>
        <a 
          href={PHONE_URI}
          className="inline-flex items-center space-x-3 bg-mc-green text-white px-10 py-5 rounded-2xl font-black text-2xl hover:brightness-110 shadow-2xl transition-all"
        >
          <Phone className="w-6 h-6" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default FAQ;
