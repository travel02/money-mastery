import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback('');

    try {
      const { error } = await supabase.from('messages').insert([formData]);
      if (error) throw error;

      setFeedback('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting message:', error);
      setFeedback('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Follow Us</h3>
            <div className="space-y-2">
              <a
                href="mailto:moneymasterysanjay@gmail.com"
                className="flex items-center space-x-2 hover:text-teal-500 transition-colors"
              >
                <Mail size={16} />
                <span>moneymasterysanjay@gmail.com</span>
              </a>
              <a
                href="tel:+917070000000"
                className="flex items-center space-x-2 hover:text-teal-500 transition-colors"
              >
                <Phone size={16} />
                <span>+91 7070000000</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/book" className="hover:text-indigo-500 transition-colors">
                  Book
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-indigo-500 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {feedback && <p className="text-sm mt-2 text-center">{feedback}</p>}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">Copyright © 2024. All rights reserved.</p>
          <p className="text-gray-500">This website is owned by Dr. Sanjay Srivastava.</p>
          <p className="text-xs text-gray-600 mt-2">Made by Anvay Srivastava</p>
        </div>
      </div>
    </footer>
  );
}
