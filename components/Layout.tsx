
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Gamepad, Search } from 'lucide-react';
import { PHONE_NUMBER, PHONE_URI } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="bg-[#1a1a1a] border-b border-mc-green sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-mc-green p-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(25,70,26,1)] group-hover:translate-y-[-2px] transition-transform">
                <Gamepad className="text-white w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="mc-font text-white text-xs md:text-sm tracking-tighter">MC PHONE</span>
                <span className="mc-font text-mc-green text-[10px] md:text-xs">SUPPORT</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              <Link to="/" className="hover:text-mc-green transition-colors">Home</Link>
              <Link to="/faq" className="hover:text-mc-green transition-colors">FAQ</Link>
              <Link to="/blog" className="hover:text-mc-green transition-colors">Blog</Link>
              <Link to="/contact-us" className="hover:text-mc-green transition-colors">Contact</Link>
              <a 
                href={PHONE_URI}
                className="flex items-center space-x-2 bg-mc-green px-4 py-2 rounded text-white font-bold hover:brightness-110 transition-all animate-pulse"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE_NUMBER}</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-b border-mc-green py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <a href={PHONE_URI} className="flex items-center space-x-2 text-mc-green font-bold">
                <Phone className="w-4 h-4" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text"
                  placeholder="Search issues..."
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded px-4 py-2 focus:border-mc-green outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-400">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Gamepad className="text-mc-green w-6 h-6" />
                <span className="mc-font text-xs">MC SUPPORT</span>
              </div>
              <p className="text-gray-400 text-sm">
                The leading technical support provider for Minecraft players across the United States. Fixing your issues 24/7.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-mc-green">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/minecraft-apk-download" className="hover:text-white">APK Help</Link></li>
                <li><Link to="/minecraft-unblocked-not-loading" className="hover:text-white">Unblocked Help</Link></li>
                <li><Link to="/minecraft-not-working-windows-11" className="hover:text-white">Windows 11 Fixes</Link></li>
                <li><Link to="/faq" className="hover:text-white">General FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-mc-green">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/minecraft-login-issues" className="hover:text-white">Login Resolution</Link></li>
                <li><Link to="/minecraft-lagging" className="hover:text-white">Lag Optimization</Link></li>
                <li><Link to="/minecraft-xbox-issues" className="hover:text-white">Xbox Troubleshooting</Link></li>
                <li><Link to="/contact-us" className="hover:text-white">Direct Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-mc-green">Contact Us</h4>
              <p className="text-sm text-gray-400 mb-2">Available in USA Nationwide</p>
              <a href={PHONE_URI} className="text-xl font-bold text-white hover:text-mc-green block mb-4">
                {PHONE_NUMBER}
              </a>
              <div className="bg-[#1a1a1a] p-3 border border-gray-800 rounded">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Support Hours</p>
                <p className="text-sm font-medium">24 Hours / 7 Days</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
            © 2024 Minecraft Phone Support. Minecraft is a trademark of Mojang Synergies AB. This site is not affiliated with Mojang.
          </div>
        </div>
      </footer>

      {/* Persistent CTA Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-mc-green text-white py-3 px-4 flex justify-between items-center z-50 shadow-2xl">
        <span className="font-bold">Need Help?</span>
        <a href={PHONE_URI} className="flex items-center space-x-2 bg-white text-mc-green px-4 py-1.5 rounded-full font-extrabold shadow-lg">
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default Layout;
