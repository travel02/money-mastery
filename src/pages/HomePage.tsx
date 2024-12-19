import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const dummyImage = "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80";

export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen py-10">
      {/* Outer Container */}
      <div className="container mx-auto px-4 space-y-12 rounded-lg bg-gray-800 p-6 md:p-10 shadow-lg">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">
                Your Money Mastery Coach
                <span className="block text-yellow-500">Dr. Sanjay Srivastava</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Unlock your financial potential with tailored coaching and effective strategies.
              </p>
              <div className="text-center md:text-left">
                <Link
                  to="/book"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                >
                  View the Book
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={dummyImage}
                alt="Dr. Sanjay Srivastava"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 mb-6">
                
With over three decades of leadership experience, Dr. Sanjay Srivastava’s journey took a transformative financial turn in 2014. From facing severe financial challenges to achieving stability and success, his inspiring story culminated in the creation of Money Mastery: A Simple Path to Inner Wealth and Financial Success. Today, he empowers individuals to take charge of their finances, develop disciplined money habits, and build sustainable wealth for the future.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                Learn More <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={dummyImage} alt="About 1" className="rounded-lg" />
              <img src={dummyImage} alt="About 2" className="rounded-lg mt-4" />
            </motion.div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-6"
          >
            Our Goals
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Empower individuals with financial knowledge",
              "Create sustainable wealth building strategies",
              "Guide you towards financial independence"
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <p className="text-lg">{goal}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* This is for You Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6">This is for You If...</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "You want to achieve financial freedom",
              "You're looking to grow your wealth",
              "You need expert guidance for investments"
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <p className="text-lg">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
