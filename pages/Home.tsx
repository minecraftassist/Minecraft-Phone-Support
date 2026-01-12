
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronRight, Phone, Star, ShieldCheck, Clock } from 'lucide-react';
import { SUPPORT_CATEGORIES, PHONE_NUMBER, PHONE_URI } from '../constants';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q) setSearch(q);
  }, [location]);

  const filteredCategories = SUPPORT_CATEGORIES.filter(cat => 
    cat.title.toLowerCase().includes(search.toLowerCase()) || 
    cat.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-[url('https://picsum.photos/seed/mc-landscape/1920/1080?grayscale')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="mc-font text-2xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Fix <span className="text-mc-green">Minecraft</span> Issues <br className="hidden md:block" /> Faster Than A Creeper Explodes
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Professional USA technical support for APK downloads, login errors, Windows 11 updates, and game performance.
          </p>
          
          <div className="max-w-xl mx-auto mb-8 relative">
            <input 
              type="text" 
              placeholder="Search your issue (e.g. login, apk, lag)..."
              className="w-full bg-[#1a1a1a] border-2 border-mc-green rounded-xl px-6 py-4 text-white text-lg focus:ring-4 focus:ring-mc-green/20 outline-none transition-all shadow-2xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute right-4 top-4 text-mc-green w-8 h-8" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={PHONE_URI}
              className="flex items-center space-x-3 bg-mc-green hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-[0_4px_0_0_rgba(25,70,26,1)] active:translate-y-1 active:shadow-none transition-all"
            >
              <Phone className="w-6 h-6" />
              <span>Call +1 (510)-370-1986</span>
            </a>
            <Link 
              to="/contact-us"
              className="flex items-center space-x-3 bg-[#2a2a2a] hover:bg-[#333] text-white px-8 py-4 rounded-xl font-bold text-xl border border-gray-700"
            >
              Get Online Help
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="bg-mc-green/10 p-3 rounded-full"><Clock className="text-mc-green w-8 h-8" /></div>
            <div>
              <h3 className="font-bold">24/7 Availability</h3>
              <p className="text-gray-400 text-sm">We're here whenever you game.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-y md:border-y-0 md:border-x border-gray-800 py-4 md:py-0 md:px-8">
            <div className="bg-mc-green/10 p-3 rounded-full"><ShieldCheck className="text-mc-green w-8 h-8" /></div>
            <div>
              <h3 className="font-bold">USA Verified</h3>
              <p className="text-gray-400 text-sm">Expert technicians based in USA.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-mc-green/10 p-3 rounded-full"><Star className="text-mc-green w-8 h-8" /></div>
            <div>
              <h3 className="font-bold">4.9/5 Rating</h3>
              <p className="text-gray-400 text-sm">Trusted by thousands of players.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mc-font text-xl md:text-2xl mb-4">Common Issues We Resolve</h2>
          <div className="w-20 h-1 bg-mc-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.url}
              className="group bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-mc-green transition-all hover:translate-y-[-4px] shadow-lg"
            >
              <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mc-green group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-mc-green transition-colors">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="flex items-center text-mc-green font-bold text-sm">
                <span>View Solutions</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
              </div>
            </Link>
          ))}
          {filteredCategories.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500">
              No categories found for your search. Call us directly for custom help.
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-mc-green to-green-700 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <h2 className="mc-font text-2xl md:text-3xl mb-8 relative z-10">Can't Find Your Problem?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Our expert technicians can diagnose any Minecraft related issue over the phone. Get back to building in minutes.
          </p>
          <a 
            href={PHONE_URI}
            className="inline-flex items-center space-x-4 bg-white text-mc-green px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl relative z-10"
          >
            <Phone className="w-8 h-8" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
