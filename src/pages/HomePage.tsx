import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import bookCover from './assets/book.jpg';
import a from './assets/a.jpg';
import b from './assets/b.jpg';
import c from './assets/c.jpg';
import d from './assets/d.jpg';
import e from './assets/e.jpg'; 
import f from './assets/f.jpg';// Adjusted path to the book image

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
                <span className="block text-yellow-500">Dr. SANJAY SRIVASTAVA</span>
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
                src={d}
                alt="Dr.Sanjay Srivastava"
                className="rounded-lg shadow-lg relative h-auto"
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
              className="relative rounded-lg shadow-lg"
            >
              <img
                src={bookCover}
                alt="Money Mastery Book Cover"
                className="rounded-lg shadow-lg realtive h-auto"
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
                With over three decades of leadership experience, Dr. Sanjay Srivastava’s journey took a
                transformative financial turn in 2014. From facing severe financial challenges to achieving
                stability and success, his inspiring story culminated in the creation of{" "}
                <em>Money Mastery: A Simple Path to Inner Wealth and Financial Success</em>. Today, he empowers
                individuals to take charge of their finances, develop disciplined money habits, and build
                sustainable wealth for the future.
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
              <img src={a} alt="About 1" className="rounded-lg h-auto relative" />
              <img src={b} alt="About 2" className="rounded-lg mt-4 h-80 relative"  />
            </motion.div>
          </div>
        </section>
      </div>
      <br></br>
      <div className="min-h-screen bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-100 p-10 rounded-3xl shadow-lg"

        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-6">
              {[
                {
                  heading: "Problem",
                  content:
                    "Financial struggles stem from limited literacy, debt, inconsistent income, poor habits, lack of savings, fear of investing, and unclear goals, leading to instability, missed opportunities, and financial insecurity.",
                  icon: "💡",
                },
                {
                  heading: "Our Vision",
                  content:
                    "To inspire and empower individuals to achieve financial freedom, transforming lives through actionable knowledge and disciplined financial habits.",
                  icon: "🌟",
                },
                {
                  heading: "Our Mission",
                  content:
                    "To provide practical tools, insights, and strategies that guide individuals in overcoming financial challenges, building wealth, and creating a future of lasting abundance.",
                  icon: "🎯",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-white text-gray-900 p-6 rounded-xl shadow-md flex items-start"
                >
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{item.heading}</h3>
                    <p className="text-lg">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-blue-900 bg-blue-50 p-8 rounded-xl shadow-md flex flex-col justify-center"
            >
              <h3 className="text-5xl font-bold mb-8 text-center">
                "Your Journey to Financial Freedom Begins Here"
              </h3>
              <p className="text-lg leading-relaxed text-justify">
                Welcome to <span className="font-bold">Money Mastery</span>, where we simplify the path to wealth and
                financial independence. Inspired by the principles outlined in the bestselling book{" "}
                <span className="italic">Money Mastery: A Simple Path to Inner Wealth and Financial Success</span>, this
                platform is your gateway to mastering money habits, building sustainable wealth, and achieving financial
                freedom. Whether you’re looking to overcome financial struggles, plan for your future, or simply unlock
                the secrets to abundance, we provide tools, insights, and strategies to guide you. Start your journey
                today and take the first step toward a secure and prosperous tomorrow!
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Left Section: Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-xl shadow-md bg-blue-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Core Values</h2>
            <ul className="space-y-4">
              <li>
                <h4 className="text-xl font-semibold text-blue-800">Resilience</h4>
                <p className="text-gray-700">
                  Embracing challenges as opportunities for growth and empowering others to rise above financial
                  setbacks.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-blue-800">Integrity</h4>
                <p className="text-gray-700">
                  Promoting honesty, transparency, and ethical practices in all financial decisions and guidance.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-blue-800">Discipline</h4>
                <p className="text-gray-700">
                  Advocating for consistent and responsible financial habits as the foundation for lasting success.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-blue-800">Growth</h4>
                <p className="text-gray-700">
                  Encouraging a mindset of continuous learning, adaptability, and improvement in personal finance and
                  life.
                </p>
              </li>
              <li>
                <h4 className="text-xl font-semibold text-blue-800">Empowerment</h4>
                <p className="text-gray-700">
                  Equipping individuals with the knowledge and tools to take control of their financial future with
                  confidence.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Right Section: Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-20" 
          >
            <img
              src={c}
              alt="About 1"
              className="rounded-lg shadow-md relative min-h-72 min-w-96"
            />
            <img
              src={e}
              alt="About 2"
              className="rounded-lg shadow-md mt-28 relative"
            />
            <img
              src={f}
              alt="About 3"
              className="rounded-lg shadow-md -mt-44  min-h-72 min-w-96"
            />
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}
