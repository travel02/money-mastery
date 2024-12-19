import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-500 mb-12">Blog Posts</h1>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog 1 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Understanding Money Mastery: The Key to Financial Control</h2>
              <p className="text-gray-300 mb-4">
                Money mastery isn’t just about earning more; it’s about managing, growing, and retaining your wealth over time. It’s a concept I delve into deeply in my book, <i>Money Mastery: A Simple Path to Inner Wealth and Financial Success</i>, and one that has transformed my own financial journey.
              </p>
              <p className="text-gray-300 mb-4">
                The first step in money mastery is understanding your current financial habits. Are they helping or hindering your goals? Habits, shaped by upbringing, emotions, and mindset, influence financial decisions.
              </p>
            </div>
          </motion.article>

          {/* Blog 2 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Financial Freedom Guide: A Roadmap to Abundance</h2>
              <p className="text-gray-300 mb-4">
                What does financial freedom mean to you? For some, it’s retiring early; for others, it’s pursuing passions without worrying about money. Whatever your vision, financial freedom requires a clear plan.
              </p>
              <p className="text-gray-300 mb-4">
                Key steps include setting clear goals, building multiple income streams, and prioritizing saving and investing. Learn how to progress through the stages of money mastery and achieve financial freedom.
              </p>
            </div>
          </motion.article>

          {/* Blog 3 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Breaking Free from Financial Struggles: My Journey to Financial Mastery</h2>
              <p className="text-gray-300 mb-4">
                Financial struggles can feel overwhelming but often hold the key to transformation. In 2014, I faced a turning point: losing my job and being burdened with debt. This sparked my journey toward financial mastery.
              </p>
              <p className="text-gray-300 mb-4">
                Through resilience and disciplined money habits, I rebuilt my life and doubled my net worth in three years. My book shares the principles that guided my rise from financial adversity.
              </p>
            </div>
          </motion.article>

          {/* Blog 4 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Comfort Zone = Income Zone: Expanding Your Financial Boundaries</h2>
              <p className="text-gray-300 mb-4">
                Most people underestimate the link between their comfort zone and their income zone. Staying within familiar financial habits limits growth potential.
              </p>
              <p className="text-gray-300 mb-4">
                Growth requires embracing change, taking calculated risks, and upgrading financial literacy. Push your boundaries to unlock new opportunities.
              </p>
            </div>
          </motion.article>

          {/* Blog 5 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">The Lifetime Wealth Ratio: A Measure of Financial Success</h2>
              <p className="text-gray-300 mb-4">
                The Lifetime Wealth Ratio (LWR) measures how much of your lifetime income you’ve retained as wealth. When I first calculated my LWR, it was a shocking 4%.
              </p>
              <p className="text-gray-300 mb-4">
                By focusing on saving, investing, and minimizing financial leaks, I raised my LWR to over 70% within a decade. Learn how to calculate and improve your LWR.
              </p>
            </div>
          </motion.article>

          {/* Blog 6 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Mindset Matters: How Rich People Think and Act Differently</h2>
              <p className="text-gray-300 mb-4">
                What separates the financially successful from others? It’s their mindset. Rich people focus on creating value, building assets, and thinking long-term.
              </p>
              <p className="text-gray-300 mb-4">
                Adopting a wealth-building mindset is the first step toward success. Discover practical advice to help you think and act like the financially successful.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
