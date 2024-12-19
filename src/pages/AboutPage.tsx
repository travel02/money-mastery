import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const dummyImage = "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80";

export default function AboutPage() {
  return (
    <div className="space-y-20 py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-20 text-gray-100"
        >
          Know More About
          <span className="block text-yellow-500">Dr. Sanjay Srivastava</span>
        </motion.h1>

        <div className="relative flex flex-col md:flex-row items-center md:space-x-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={dummyImage}
            alt="Dr. Sanjay Srivastava"
            className="rounded-lg shadow-2xl md:w-1/3 mb-8 md:mb-0"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl md:w-2/3 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              I am Sanjay Srivastava, an engineer by education and a finance enthusiast by passion. With a robust foundation in engineering, I spent over three decades working in senior leadership roles in multinational companies. My career journey includes navigating through the complexities of supply chain management and strategic planning, where I honed my problem-solving skills and built a reputation for delivering innovative solutions.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              However, my journey took an unexpected turn in January 2014 when I lost my job after 22 years of a steady corporate career. With just ₹7,000 in my account, ₹19 lakh in loans, and mounting EMI defaults, I faced one of the toughest periods of my life. Despite a lifetime income of over ₹1 crore, my Lifetime Wealth Ratio (LWR) was just 4%, reflecting the gap between earning and retaining wealth.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Determined to rebuild my life, I transitioned from a conventional corporate mindset to a more entrepreneurial and financially disciplined approach. In September 2014, I restarted my career at Hero MotoCorp Ltd., where I worked for nearly nine years. During this time, I significantly improved my financial standing, raising my LWR to over 70% and doubling my net worth in just three years. My commitment to personal growth and resilience even helped me recover from a brain stroke in 2021, which left me temporarily paralyzed on my left side.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Post my corporate journey, I have dedicated the past 18 months to expanding my horizons in the stock market, mutual funds, real estate, and other investment avenues. This transition from a corporate leader to a financial strategist has inspired me to pen my learnings and experiences in my book, <em>Money Mastery: A Simple Path to Inner Wealth and Financial Success</em>. This book encapsulates the wealth-building principles that helped me rise from financial despair to stability and success, offering readers a practical guide to mastering their inner game of wealth.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              My journey stands as a testament to resilience, strategic thinking, and the power of disciplined financial habits. Today, I am on a mission to empower individuals to take control of their finances and transform their lives by understanding and mastering their money habits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">My Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Over 1000+ successful clients", "Published author of Money Mastery", "Featured in leading financial publications"].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gray-600 transition-colors duration-300"
              >
                <Trophy className="text-yellow-500" size={28} />
                <p className="text-lg text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
