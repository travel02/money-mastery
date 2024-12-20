import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase'; // Ensure you have this setup

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage(null);
  
    console.log('Form Data:', formData); // Log the form data for debugging
  
    try {
      const { error } = await supabase.from('messages').insert([formData]);
  
      if (error) {
        console.error('Supabase Insert Error:', error); // Log detailed Supabase error
        throw error;
      }
  
      setFeedbackMessage('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' }); // Reset the form on success
    } catch (error) {
      console.error('Submission Error:', error); // Log any catch-level errors
      setFeedbackMessage('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
                  rows={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {feedbackMessage && (
                <p className={`text-center mt-4 ${feedbackMessage.includes('Thank') ? 'text-green-500' : 'text-red-500'}`}>
                  {feedbackMessage}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
