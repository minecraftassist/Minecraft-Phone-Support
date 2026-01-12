
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Phone } from 'lucide-react';
import { BLOG_POSTS, PHONE_NUMBER, PHONE_URI } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
        <h1 className="mc-font text-3xl md:text-4xl text-white">Troubleshooting Blog</h1>
        <p className="text-gray-400 text-lg">
          Detailed guides, news, and expert tips for Minecraft players. If these guides don't solve your issue, call us at {PHONE_NUMBER}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group flex flex-col bg-[#1a1a1a] rounded-3xl overflow-hidden border border-gray-800 hover:border-mc-green transition-all shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-mc-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl">
                Technical Guide
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center space-x-4 text-gray-500 text-xs mb-4">
                <div className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</div>
                <div className="flex items-center"><User className="w-3 h-3 mr-1" /> By {post.author}</div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-mc-green transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto space-y-6">
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-mc-green font-bold group-hover:underline"
                >
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                
                <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-gray-500 text-xs">Need help with this?</span>
                  <a href={PHONE_URI} className="text-mc-green font-black flex items-center space-x-1 hover:brightness-125">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 p-12 bg-mc-green rounded-3xl text-center text-white">
        <h3 className="mc-font text-2xl mb-6">Expert Technicians Ready</h3>
        <p className="mb-10 text-white/90 max-w-2xl mx-auto">
          Our blog covers common issues, but Minecraft updates frequently. If you're facing a new or persistent error, speak to a human expert immediately.
        </p>
        <a 
          href={PHONE_URI}
          className="inline-flex items-center space-x-4 bg-white text-mc-green px-12 py-5 rounded-2xl font-black text-2xl hover:scale-105 shadow-2xl transition-transform"
        >
          <Phone className="w-8 h-8" />
          <span>{PHONE_NUMBER}</span>
        </a>
      </div>
    </div>
  );
};

export default Blog;
