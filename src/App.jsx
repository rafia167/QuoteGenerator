import React, { useState } from 'react';
import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
import CategorySelector from './components/CategorySelector';
import ActionButtons from './components/ActionButtons';


const App = () => {
  const categories = [
    'Motivational',
    'Life',
    'Success',
    'Love',
    'Wisdom',
    'Happiness',
    'Inspiration',
    'Leadership'
  ];

  const [selectedCategory, setSelectedCategory] = useState('Motivational');
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateQuote = async () => {
    setLoading(true);
    setCopied(false);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();

      const quoteData = {
        quote: data.quote,
        author: data.author,
        category: selectedCategory
      };

      const newQuotes = [...quotes, quoteData];
      setQuotes(newQuotes);
      setCurrentIndex(newQuotes.length - 1);
    } catch (error) {
      console.log("Error:", error);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (currentIndex >= 0 && quotes[currentIndex]) {
      const currentQuote = quotes[currentIndex];
      navigator.clipboard.writeText(`"${currentQuote.quote}" — ${currentQuote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    setCopied(false);
  };

  const handleNext = () => {
    if (currentIndex < quotes.length - 1) setCurrentIndex(currentIndex + 1);
    setCopied(false);
  };

  const currentQuote = currentIndex >= 0 ? quotes[currentIndex] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-6">
        <Header />

        <CategorySelector
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <QuoteCard
  quote={currentQuote?.quote}
  author={currentQuote?.author}
  onCopy={handleCopy}
  copied={copied}
  loading={loading}
  onPrevious={handlePrevious}
  onNext={handleNext}
  disablePrev={currentIndex === 0}
  disableNext={currentIndex === quotes.length - 1}
/>

        <ActionButtons
          onGenerate={generateQuote}
          onCopy={handleCopy}
          copied={copied}
          disabled={!currentQuote}
          loading={loading}
        />

       

        <div className="text-center text-gray-500 text-sm mt-4">
          Select a category and generate unique quotes
        </div>
      </div>
    </div>
  );
};

export default App;
