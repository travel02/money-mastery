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
            I am Dr. Sanjay Srivastava—an engineer by profession and a finance enthusiast by passion. With over three decades of experience in senior leadership roles across multinational companies, my career has been deeply rooted in delivering innovative, process-driven solutions. I’ve specialized in areas such as supply chain management and customer relationship management, where I developed expertise in problem-solving, cost optimization, and leveraging digitalization and automation to drive efficiency.
            </p>
            <p className="text-lg leading-relaxed mt-4">
            In the last three years, I transformed my approach by applying these principles of process-driven excellence to wealth management. Guided by extraordinary mentors like Dr. John DeMartini, Blair Singer, Thaddeus Lawrence, and Arokiaswamy Velumani, I’ve refined my strategies for financial growth, resilience, and independence. This journey reinforced the power of disciplined systems, self-growth, and smart financial planning.
            </p>
            <p className="text-lg leading-relaxed mt-4">
            All these insights and strategies are captured in my book, Money Mastery. It’s a culmination of my professional expertise and personal transformation, designed to help others create process-driven approaches to building wealth and achieving financial freedom. My mission is to empower individuals to take charge of their finances, optimize their resources, and live abundantly.
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
