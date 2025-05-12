import React from 'react';
import { FoodCategory } from '../../types';

interface CategorySelectorProps {
  categories: FoodCategory[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              selectedCategory === category.id
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-200 hover:bg-orange-50'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;