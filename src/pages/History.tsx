import React from 'react';
import { useFood } from '../context/FoodContext';
import HistoryItem from '../components/HistoryItem';
import Button from '../components/ui/Button';
import { Trash2 } from 'lucide-react';

const History: React.FC = () => {
  const { history, getFoodById, clearHistory } = useFood();

  if (history.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Your Food History</h1>
        <div className="text-center p-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-4">Your history is empty.</p>
          <p className="text-gray-500 text-sm">Generate some food suggestions to see them here!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Your Food History</h1>
        <Button 
          onClick={clearHistory} 
          className="flex items-center text-red-500 border-red-200 hover:bg-red-50"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear History
        </Button>
      </div>

      <div className="space-y-4">
        {history.map(item => {
          const food = getFoodById(item.foodId);
          if (!food) return null;
          
          return (
            <HistoryItem key={item.id} historyItem={item} food={food} />
          );
        })}
      </div>
    </div>
  );
};

export default History;