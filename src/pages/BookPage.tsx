import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import bookCover from './assets/book.jpg'; // Ensure this file exists in the specified directory

interface ReviewFormData {
  name: string;
  content: string;
  rating: number;
}

interface Review {
  id: number;
  name: string;
  content: string;
  rating: number;
}

export default function BookPage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    content: '',
    rating: 5,
  });
  const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch reviews from the database
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase.from('reviews').select('*');
      if (error) {
        console.error('Error fetching reviews:', error);
      } else {
        setReviews(data || []);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('reviews').insert([formData]);

      if (error) throw error;

      setIsReviewModalOpen(false);
      setFormData({ name: '', content: '', rating: 5 });
      if (data) {
        setReviews((prevReviews) => [...prevReviews, ...data]);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Book Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Money Mastery - A Simple Path to Inner Wealth and Financial Success</h1>
              <p className="text-gray-300 mb-6">
                Money Mastery is not just a book; it’s a roadmap to achieving financial freedom and lasting wealth. It simplifies complex financial concepts and provides practical steps to help readers take control of their finances. The book guides readers through understanding money habits, setting financial goals, creating multiple income streams, and moving through the eight stages of money mastery.
              </p>
              <h2 className="text-2xl font-bold mt-6 mb-2">Transform Your Life Today</h2>
              <p className="text-gray-300 mb-6">
                <strong>Money Mastery: A Simple Path to Inner Wealth and Financial Success</strong> is your ultimate guide to understanding, managing, and multiplying your wealth.
              </p>
              <p>This book offers:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Practical Tools:</strong> From budgeting to investment strategies, master the skills to take control of your finances.
                </li>
                <li>
                  <strong>Real-Life Insights:</strong> Learn from the experiences of someone who rebuilt their financial life from scratch.
                </li>
                <li>
                  <strong>Proven Strategies:</strong> Discover the 8 stages of money mastery and how to navigate them.
                </li>
                <li>
                  <strong>Mindset Shifts:</strong> Break free from limiting beliefs and adopt habits of the financially successful.
                </li>
              </ul>
              <p>
                <strong>Money Mastery</strong> isn’t just about earning more—it’s about redefining your relationship with money and achieving the life you’ve always dreamed of.
              </p>
              <p>
                Let this book be your companion on the journey to abundance and financial freedom. Take the first step today!
              <h3 className="text-2xl font-bold mt-6 mb-5">Unlock the Secrets to Financial Freedom and Inner Wealth</h3>
              </p>
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Buy now
              </a>
            </div>
            <div className="relative">
              <img
                src={bookCover}
                alt="Money Mastery Book Cover"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
{/* About the Book */}
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-4">About the Book</h2>
  <p className="text-gray-300">
    <em>Money Mastery - A Simple Path to Inner Wealth and Financial Success</em> is not just a book; it’s a roadmap to achieving financial freedom and lasting wealth. It simplifies complex financial concepts and provides practical steps to help readers take control of their finances. The book guides readers through understanding money habits, setting financial goals, creating multiple income streams, and moving through the eight stages of money mastery.
  </p>
</section>

{/* Author's Motivation */}
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-4">My Motivation to Write the Book</h2>

  <p className="text-gray-300">
  In 2014, I faced a financial crisis that left me jobless, with only ₹7,000 in my account and a staggering ₹19 lakh in debt. With no steady income, I had no choice but to rebuild my life from the ground up. This challenging period taught me invaluable lessons about resilience, the importance of disciplined money habits, and the power of smart financial planning. These principles not only transformed my financial reality but also inspired me to share my journey through Money Mastery.
Through this book, I share practical strategies to help others avoid financial pitfalls and fast-track their journey to success. If I could turn my life around, so can you. Let Money Mastery guide you to financial freedom.
  </p>
</section>

{/* Key Learnings */}
<section className="mb-12">
  <h2 className="text-3xl font-bold mb-4">What You’ll Learn in This Book</h2>
  <ul className="list-disc pl-6 space-y-2 text-gray-300">
    <li>Understanding Money Habits: How your upbringing, emotions, and beliefs shape your financial decisions.</li>
    <li>Setting Lifetime Financial Goals: Crafting a roadmap for necessities, luxuries, and retirement.</li>
    <li>The 8 Stages of Money Mastery: Moving from financial dependence to true abundance.</li>
    <li>Lifetime Wealth Ratio (LWR): A unique method to measure and improve your financial efficiency.</li>
    <li>Saving = Income - Ego: A personal formula to prioritize wealth-building over lifestyle inflation.</li>
  </ul>
</section>

{/* Reader Reviews */}
<div className="mb-12">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">Reader Reviews</h2>
    <button
      onClick={() => setIsReviewModalOpen(true)}
      className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
    >
      Write a Review
    </button>
  </div>
  {/* Review Grid */}
  <div className="grid md:grid-cols-3 gap-6">
    {reviews.map((review) => (
      <motion.div
        key={review.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-gray-800 p-6 rounded-lg"
      >
        <div className="flex items-center mb-4">
          <div className="flex-1">
            <h3 className="font-semibold">{review.name}</h3>
            <div className="flex text-yellow-500">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-300">{review.content}</p>
      </motion.div>
    ))}
  </div>
</div>

{/* Review Modal */}
{isReviewModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-800 rounded-lg p-6 max-w-md w-full"
    >
      <h3 className="text-2xl font-bold mb-4">Write a Review</h3>
      <form onSubmit={handleSubmitReview}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Rating</label>
          <select
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg"
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Stars
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Review</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg"
            rows={4}
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => setIsReviewModalOpen(false)}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Submit Review
          </button>
        </div>
      </form>
    </motion.div>
  </div>
)}
      </div>
    </div>
  );
}
