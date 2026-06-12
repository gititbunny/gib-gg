import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all 10 page placeholders
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Temporary Navigation Header (We will style this beautifully later) */}
        <header style={{ background: '#f5f5f5', padding: '15px', borderBottom: '1px solid #ddd' }}>
          <nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/process">Process</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        {/* The Main Dynamic Content Area */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {/* Temporary Footer Links */}
        <footer style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
          <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <Link to="/terms" style={{ color: '#fff' }}>Terms & Conditions</Link>
            <Link to="/refund-policy" style={{ color: '#fff' }}>Refund Policy</Link>
            <Link to="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Get It Bunny. All rights reserved.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;