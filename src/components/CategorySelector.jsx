import React from 'react';
import { Sparkles } from 'lucide-react';

const CategorySelector = ({ categories, selected, onChange }) => {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow border border-emerald-100">
      <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-emerald-500" />
        Choose Quote Category
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-2 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
              selected === category
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
