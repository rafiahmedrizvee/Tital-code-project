import React from 'react';

const CategoryFilter = ({ selected, onChange }) => {
         const categories = ['All', 'Apps', 'Website'];

        return (
                <div className="flex gap-4 justify-center my-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full ${
            selected === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
        );
};

export default CategoryFilter;