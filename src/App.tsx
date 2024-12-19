import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/book" element={<div>Book Page</div>} />
            <Route path="/blogs" element={<div>Blogs Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}