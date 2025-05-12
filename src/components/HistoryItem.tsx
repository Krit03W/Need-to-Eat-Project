import React from 'react';
import { Food, HistoryItem as HistoryItemType } from '../types';
import { Clock, MapPin } from 'lucide-react';

interface HistoryItemProps {
  historyItem: HistoryItemType;
  food: Food;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ historyItem, food }) => {
  // Format the date
  const formattedDate = new Date(historyItem.timestamp).toLocaleString();
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-40 sm:h-auto sm:w-48 flex-shrink-0">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex flex-col h-full">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-800">{food.name}</h3>
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">{food.category}</span>
            </div>
            
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">{food.description}</p>
          </div>
          
          <div className="mt-auto pt-3 text-xs text-gray-500 border-t border-gray-100">
            <div className="flex items-center mb-1">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{food.restaurant.name}</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;