import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Menu, X } from 'lucide-react';
import { quotes } from '../data/quotes';
import logo from './assets/logo.png';

export default function Header() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="py-4 flex justify-between items-center">
          <Link to="/" className="h-16">
            <img src={logo} alt="Money Mastery Logo" className="h-20 w-auto object-contain" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link to="/book" className="hover:text-yellow-500 transition-colors">Book</Link>
            <Link to="/blogs" className="hover:text-yellow-500 transition-colors">Blogs</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-yellow-500 transition-colors"><Youtube size={20} /></a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
              <Link to="/book" className="hover:text-yellow-500 transition-colors">Book</Link>
              <Link to="/blogs" className="hover:text-yellow-500 transition-colors">Blogs</Link>
              <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </motion.div>
        )}

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-2 text-center border-t border-b border-gray-800 my-4"
        >
          <p className="text-sm italic">"{currentQuote.text}"</p>
          <p className="text-xs text-gray-400">- {currentQuote.author}</p>
        </motion.div>
      </div>
    </header>
  );
}
