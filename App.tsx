
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SupportChat from './components/SupportChat';
import Home from './pages/Home';
import SupportPage from './pages/SupportPage';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:slug" element={<SupportPage />} />
          {/* Catch-all for support sub-paths */}
          <Route path="/blog/:slug" element={<SupportPage />} /> 
        </Routes>
        <SupportChat />
      </Layout>
    </Router>
  );
};

export default App;
