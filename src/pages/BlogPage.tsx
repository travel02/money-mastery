import { motion } from 'framer-motion';

export default function BlogPage() {
  const blogs = [
    {
      title: "Understanding Money Mastery: The Key to Financial Control",
      content: `Money mastery isn’t just about earning more; it’s about managing, growing, and retaining your wealth over time. It’s a concept I delve into deeply in my book, *Money Mastery: A Simple Path to Inner Wealth and Financial Success*, and one that has transformed my own financial journey.  

      The first step in money mastery is understanding your current financial habits. Are they helping or hindering your goals? In Chapter 2 of my book, I explore how habits, shaped by upbringing, emotions, and mindset, influence financial decisions.  

      Next comes evaluating your financial standing, which includes tracking your net worth, understanding your Lifetime Wealth Ratio (LWR), and reviewing your income patterns. This analysis not only gives clarity but also provides a roadmap for improvement.  

      Money mastery is about aligning your financial habits with your goals. It’s a journey of continuous learning, discipline, and self-awareness. My book offers practical steps and tools to help you take control of your finances and unlock a life of abundance.`,
    },
    {
      title: "Financial Freedom Guide: A Roadmap to Abundance",
      content: `What does financial freedom mean to you? For some, it’s retiring early; for others, it’s pursuing passions without worrying about money. Whatever your vision, financial freedom requires a clear plan, and I’ve outlined this roadmap in my book, *Money Mastery: A Simple Path to Inner Wealth and Financial Success*.  

      Here are the key steps:  

      1. **Set Clear Financial Goals**: Define your short-term, medium-term, and long-term objectives. In Chapter 7 of my book, I explain how to plan for necessities, luxury purchases, and retirement.  

      2. **Build Multiple Income Streams**: Relying on a single source of income can be risky. Diversify by exploring investments, side businesses, or freelancing.  

      3. **Prioritize Saving and Investing**: My formula, *Saving = Income - Ego*, highlights the importance of living below your means and directing savings toward wealth-building investments.  

      4. **Understand the Stages of Money Mastery**: Financial freedom is a progression. In Chapter 4, I discuss the eight stages, from dependence to abundance, and how to move forward.  

      5. **Monitor and Adjust**: Regularly review your financial plan and adapt to changes in income, expenses, or life goals.  

      Financial freedom is achievable for anyone willing to commit to disciplined habits and strategic planning. Let *Money Mastery* be your guide on this empowering journey.`,
    },
    {
      title: "Breaking Free from Financial Struggles: My Journey to Financial Mastery",
      content: `Financial struggles can feel overwhelming, but they often hold the key to life-changing transformations. In 2014, I faced a turning point: losing my job after 22 years, left with just ₹7,000 in my account, ₹19 lakh in loans, and defaulting EMIs. It was a time of despair, but it also sparked my journey toward financial mastery.  

      Through resilience, strategic thinking, and disciplined money habits, I not only rebuilt my life but also doubled my net worth in three years. My book, *Money Mastery: A Simple Path to Inner Wealth and Financial Success*, shares the principles that helped me rise from financial adversity to stability and beyond.  

      This journey taught me that wealth is not just about earning but also about understanding your habits, setting clear goals, and having the courage to start over. If you're ready to transform your financial life, my story—and the strategies I share in my book—can guide you toward success.`,
    },
    {
      title: "Comfort Zone = Income Zone: Expanding Your Financial Boundaries",
      content: `Most people underestimate the link between their comfort zone and their income zone. Staying within familiar financial habits might feel safe, but it limits your potential for growth.  

      In *Money Mastery: A Simple Path to Inner Wealth and Financial Success*, I explain how stepping out of your comfort zone can redefine your financial trajectory. For me, this meant transitioning from a secure corporate career to exploring the stock market, mutual funds, and real estate investments after 30 years in traditional roles.  

      Growth requires embracing change, taking calculated risks, and continuously upgrading your financial literacy. Ask yourself: Is your comfort zone holding you back from achieving your financial goals? Let my book help you push those boundaries and unlock new opportunities.`,
    },
    {
      title: "The Lifetime Wealth Ratio: A Measure of Financial Success",
      content: `Have you ever wondered how much of your lifetime income you've retained as wealth? This is what the Lifetime Wealth Ratio (LWR) measures, and it’s a concept I emphasize in my book, *Money Mastery: A Simple Path to Inner Wealth and Financial Success*.  

      When I first calculated my LWR in 2014, it was a shocking 4%. Despite earning over ₹1 crore during my career, poor money habits left me with little to show for it. By focusing on saving, investing, and minimizing financial leaks, I raised my LWR to over 70% within a decade.  

      Your LWR is a reflection of how effectively you manage your money. Improving it requires evaluating your financial habits, tracking your net worth, and aligning your spending with long-term goals. Discover actionable steps in my book to help you achieve financial success.`,
    },
    {
      title: "Mindset Matters: How Rich People Think and Act Differently",
      content: `What separates the financially successful from others? It’s not just the size of their paycheck—it’s their mindset. In *Money Mastery: A Simple Path to Inner Wealth and Financial Success*, I explore the habits and thought patterns that distinguish wealthy individuals.  

      Rich people focus on creating value, building assets, and thinking long-term. They invest in self-development and prioritize financial literacy. This mindset shift was pivotal in my journey, helping me recover from financial setbacks and build a more secure future.  

      As someone who transitioned from financial struggles to stability, I can attest that adopting a wealth-building mindset is the first step toward lasting success. My book offers practical advice and examples to help you think and act like the financially successful.`,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-500 mb-12">Blog Posts</h1>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">{blog.title}</h2>
                <p className="text-gray-300 whitespace-pre-line">{blog.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
