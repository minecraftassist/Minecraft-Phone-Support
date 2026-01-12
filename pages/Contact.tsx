
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { PHONE_NUMBER, PHONE_URI } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="mc-font text-3xl text-white">Contact USA Support</h1>
            <p className="text-gray-400 text-lg">
              Get direct assistance for your Minecraft issues. We serve all 50 states in the USA with 24/7 availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-mc-green/10 p-3 rounded-xl"><Phone className="text-mc-green w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-white mb-1">Phone</h4>
                <a href={PHONE_URI} className="text-gray-400 hover:text-mc-green">{PHONE_NUMBER}</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-mc-green/10 p-3 rounded-xl"><Clock className="text-mc-green w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-white mb-1">Availability</h4>
                <p className="text-gray-400">24/7 Support</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-mc-green/10 p-3 rounded-xl"><MapPin className="text-mc-green w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-white mb-1">Coverage</h4>
                <p className="text-gray-400">USA Nationwide</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-mc-green/10 p-3 rounded-xl"><Mail className="text-mc-green w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-white mb-1">Email</h4>
                <p className="text-gray-400">support@mc-phone.com</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 space-y-4">
            <h3 className="font-bold text-xl mb-4">Our Service Coverage</h3>
            <div className="aspect-video w-full bg-gray-900 rounded-xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/usa-map/800/450" 
                alt="USA Coverage Map" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-mc-green text-white px-4 py-2 rounded-full font-bold shadow-2xl animate-pulse">
                  Active Nationwide
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-xs text-center italic">
              *Real-time technical support coverage across all United States regions.
            </p>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl h-fit">
          <h2 className="mc-font text-xl mb-8">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-[10px]">Full Name</label>
                <input type="text" className="w-full bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 focus:border-mc-green outline-none" placeholder="Steve Jobs" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-[10px]">Email Address</label>
                <input type="email" className="w-full bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 focus:border-mc-green outline-none" placeholder="steve@minecraft.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-[10px]">Issue Category</label>
              <select className="w-full bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 focus:border-mc-green outline-none appearance-none">
                <option>Select an Issue...</option>
                <option>APK Download Problems</option>
                <option>Login Errors</option>
                <option>Lag / Performance</option>
                <option>Windows 11 Bugs</option>
                <option>Xbox Troubleshooting</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-widest text-[10px]">Detailed Problem</label>
              <textarea rows={4} className="w-full bg-[#0f0f0f] border border-gray-700 rounded-xl px-4 py-3 focus:border-mc-green outline-none resize-none" placeholder="Please describe what happens when you try to launch the game..."></textarea>
            </div>
            <button className="w-full bg-mc-green text-white py-4 rounded-xl font-black text-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Submit Ticket</span>
            </button>
            <p className="text-center text-gray-500 text-xs">
              For immediate results, call <a href={PHONE_URI} className="text-mc-green font-bold">{PHONE_NUMBER}</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
