import React from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

const ActionButtons = ({ onGenerate, onCopy, copied, disabled, loading }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
      <button
        onClick={onGenerate}
        disabled={loading}
        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Sparkles className="w-4 h-4" />
        Generate Quote
      </button>

      <button
        onClick={onCopy}
        disabled={disabled || loading}
        className="bg-white text-emerald-600 border-2 border-emerald-300 hover:bg-emerald-50 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Quote
          </>
        )}
      </button>
    </div>
  );
};

export default ActionButtons;
