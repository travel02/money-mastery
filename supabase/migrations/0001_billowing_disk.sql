/*
  # Initial Schema Setup

  1. New Tables
    - `blogs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `created_at` (timestamp)
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text)
      - `content` (text)
      - `rating` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policies for blogs
CREATE POLICY "Allow public read access for blogs"
  ON blogs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin write access for blogs"
  ON blogs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.role() = 'authenticated');

-- Policies for reviews
CREATE POLICY "Allow public read access for reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public write access for reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);