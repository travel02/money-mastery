import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@moneymasterysanjay.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    <Mail size={20} />
                    <span>contact@moneymasterysanjay.com</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    <Phone size={20} />
                    <span>+1 (234) 567-890</span>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
                  rows={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}