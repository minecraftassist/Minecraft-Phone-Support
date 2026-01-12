
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowLeft, AlertTriangle } from 'lucide-react';
import { SUPPORT_CATEGORIES, PHONE_NUMBER, PHONE_URI } from '../constants';

const SupportPage: React.FC = () => {
  const { slug } = useParams();
  const category = SUPPORT_CATEGORIES.find(cat => cat.url === `/${slug}`);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mc-font text-2xl mb-4">404 - Issue Category Not Found</h1>
        <Link to="/" className="text-mc-green hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-mc-green mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
            <div className="bg-mc-green/20 text-mc-green px-3 py-1 rounded-full text-xs font-bold w-fit uppercase tracking-widest">
              Support Guide
            </div>
            <h1 className="mc-font text-2xl md:text-4xl text-white">{category.title} Troubleshooting</h1>
            <p className="text-gray-400 text-lg">
              Official support for {category.title.toLowerCase()} issues in the United States. Follow our guide or call {PHONE_NUMBER} for immediate help.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <CheckCircle2 className="text-mc-green mr-3" />
              Recommended Solutions
            </h2>
            <div className="space-y-6">
              {category.content.map((step, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="bg-mc-green text-white w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-300 text-lg pt-0.5 group-hover:text-white transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-950/20 border border-amber-900/50 rounded-2xl p-6 flex items-start space-x-4">
            <AlertTriangle className="text-amber-500 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-amber-500 mb-2">Notice for USA Clients</h3>
              <p className="text-amber-200/70 text-sm">
                If the above steps do not resolve your "{category.title}" issue, it may be related to your specific ISP or device hardware. We recommend calling our technical line for a remote diagnostic session.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-mc-green rounded-3xl p-8 text-white shadow-xl sticky top-28">
            <h3 className="mc-font text-lg mb-4">Instant Expert Help</h3>
            <p className="text-white/90 mb-8">
              Skip the reading! Our USA-based Minecraft experts can fix this issue for you in real-time.
            </p>
            <a 
              href={PHONE_URI}
              className="flex items-center justify-center space-x-3 bg-white text-mc-green w-full py-4 rounded-xl font-black text-xl hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <p className="text-center mt-4 text-xs text-white/70 font-medium">
              Toll-Free in USA: {PHONE_NUMBER}
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8">
            <h3 className="font-bold mb-6 text-mc-green">Other Common Issues</h3>
            <div className="space-y-4">
              {SUPPORT_CATEGORIES.filter(c => c.id !== category.id).slice(0, 4).map(c => (
                <Link 
                  key={c.id} 
                  to={c.url}
                  className="flex items-center justify-between text-sm text-gray-400 hover:text-white group"
                >
                  <span>{c.title}</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
