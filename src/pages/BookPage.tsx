import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface ReviewFormData {
  name: string;
  content: string;
  rating: number;
}

export default function BookPage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    content: '',
    rating: 5
  });

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([formData]);

      if (error) throw error;

      setIsReviewModalOpen(false);
      setFormData({ name: '', content: '', rating: 5 });
      // Add success notification here
    } catch (error) {
      console.error('Error submitting review:', error);
      // Add error notification here
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
              <h1 className="text-4xl font-bold mb-4">Money Mastery</h1>
              <p className="text-gray-300 mb-6">
                Transform your financial future with proven strategies and expert guidance.
              </p>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                Pre-order Now
              </button>
            </div>
            <div className="relative">
              {/* Replace with actual book cover image */}
              <div className="aspect-[3/4] bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Section */}
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
            {/* Sample reviews - replace with actual data from Supabase */}
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">John Doe</h3>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">
                  "An insightful guide that transformed my approach to financial management."
                </p>
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