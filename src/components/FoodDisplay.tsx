import React from 'react';
import { Food } from '../types';
import { MapPin, ExternalLink, ChefHat } from 'lucide-react';
import Button from './ui/Button';

interface FoodDisplayProps {
  food: Food;
}

const FoodDisplay: React.FC<FoodDisplayProps> = ({ food }) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 animate-fade-in">
      <div className="relative h-56 sm:h-64">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h2 className="text-white text-2xl font-bold p-6">{food.name}</h2>
        </div>
      </div>
      
      <div className="p-6">
        <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium mb-4">
          {food.category}
        </div>
        
        <p className="text-gray-600 mb-6">
          {food.description}
        </p>
        
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center text-gray-700 mb-3">
            <ChefHat className="w-5 h-5 text-orange-500 mr-2" />
            <span className="font-medium">{food.restaurant.name}</span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 text-orange-400 mr-2" />
            <span>{food.restaurant.location}</span>
          </div>
          
          <a 
            href={food.restaurant.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
          >
            <span className="mr-1">View on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;