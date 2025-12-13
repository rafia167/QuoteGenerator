import React from 'react';
import { Sparkles, Copy, Check, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

const QuoteCard = ({ quote, author, onCopy, copied, loading, onPrevious, onNext, disablePrev, disableNext }) => {
  if (loading) {
    return (
      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-emerald-100 min-h-[200px] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin mx-auto" />
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-emerald-100 min-h-[200px] flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
          <p className="text-gray-600 text-sm text-center">Select a category and click Generate Quote</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-emerald-100 min-h-[200px] flex flex-col justify-center items-center">

      <button
        onClick={onPrevious}
        disabled={disablePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-emerald-100 p-2 rounded-full shadow hover:shadow-md disabled:opacity-40"
      >
        <ChevronLeft className="w-6 h-6 text-emerald-700" strokeWidth={2.5} />
      </button>


      <button
        onClick={onNext}
        disabled={disableNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-100 p-2 rounded-full shadow hover:shadow-md disabled:opacity-40"
      >
        <ChevronRight className="w-6 h-6 text-emerald-700" strokeWidth={2.5} />
      </button>

      <div className="absolute top-0 left-0 text-emerald-100 text-6xl font-serif leading-none p-2 opacity-50">"</div>

      <div className="relative z-10 w-full">
        <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed text-center mb-3">
          {quote}
        </p>
        <div className="flex items-center justify-center mb-3">
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
        </div>
        <p className="text-emerald-600 text-sm md:text-base font-semibold text-center">
          — {author}
        </p>
      </div>

      <button
        onClick={onCopy}
        className="absolute top-2 right-2 p-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 shadow transition-all duration-200 hover:scale-110"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-emerald-600" />}
      </button>
    </div>
  );
};

export default QuoteCard;
