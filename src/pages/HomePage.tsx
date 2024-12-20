import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bookCover from './assets/book.jpg'; // Adjusted path to the book image

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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
                alt="Dr. Sanjay Srivastava"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Book Section */}
        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={bookCover}
                alt="Money Mastery Book Cover"
                className="rounded-lg shadow-lg w-full max-h- object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">About the Book</h2>
              <p className="text-gray-300 mb-6">
                <em>Money Mastery: A Simple Path to Inner Wealth and Financial Success </em>is more than just a financial guide—it’s a transformational journey toward reclaiming control of your finances and achieving lasting success. Designed to simplify the complexities of financial management, this book blends practical strategies with real-life insights to empower readers from all walks of life.
              </p>
              <p className="text-gray-300 mb-6">
              The book covers critical aspects of financial growth, including understanding the psychological factors that shape your money habits, mastering budgeting and saving techniques, and learning how to invest wisely. It introduces unique concepts like the Lifetime Wealth Ratio (LWR), which helps you measure and optimize your financial efficiency, and the stages of money mastery, which guide you step-by-step from financial dependence to abundance.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Why You Should Read This Book</h3>
              <p className="text-gray-300 mb-6">
                If you're tired of financial stress or feeling stuck in your money habits, this book is for you.{" "}
                <em>Money Mastery</em> not only teaches practical techniques like budgeting and investing but also
                helps you shift your mindset toward wealth-building. With relatable examples and proven strategies,
                it’s your roadmap to taking control of your finances, building resilience, and achieving true
                financial freedom.</p>
                <p className="text-gray-300 mb-6">
                Unlike other financial books, Money Mastery resonates on a personal level. It’s written by someone who faced significant financial adversity, rebuilt from the ground up, and emerged with invaluable lessons to share. You’ll gain insights into real-world strategies, like creating multiple income streams, managing recurring expenses, and planning for long-term goals such as children’s education, luxury purchases, and retirement.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/book"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                >
                  View the Book
                </Link>
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-colors"
                >
                  Buy Now
                </a>
              </div>
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
