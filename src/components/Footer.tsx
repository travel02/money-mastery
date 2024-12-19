// Footer Component
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Example blog links. Replace with dynamic API data if needed.
  const latestBlogs = [
    { id: 1, title: 'Understanding Money Mastery', url: '/blogs/1' },
    { id: 2, title: 'Financial Freedom Guide', url: '/blogs/2' },
  ];

  return (
    <footer className="bg-black text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Get in Touch</h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@moneymasterysanjay.com"
                className="flex items-center space-x-2 hover:text-yellow-500 transition-colors"
              >
                <Mail size={16} />
                <span>contact@moneymasterysanjay.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 hover:text-yellow-500 transition-colors"
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-indigo-500 transition-colors">
                  Book
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-indigo-500 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest Blogs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Latest Blogs</h3>
            <ul className="space-y-2">
              {latestBlogs.map((blog) => (
                <li key={blog.id}>
                  <Link to={blog.url} className="hover:text-teal-500 transition-colors">
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
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
