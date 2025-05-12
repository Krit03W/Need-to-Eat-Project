import React, { createContext, useState, useContext, useEffect } from 'react';
import { Food, HistoryItem, FoodCategory, RadiusOption, UserLocation } from '../types';
import { foodData, categories, radiusOptions } from '../data/foodData';
import { calculateDistance, getUserLocation } from '../utils/distance';

interface FoodContextType {
  foods: Food[];
  categories: FoodCategory[];
  selectedCategory: string;
  currentFood: Food | null;
  history: HistoryItem[];
  userLocation: UserLocation | null;
  locationError: string | null;
  selectedRadius: RadiusOption;
  radiusOptions: RadiusOption[];
  setSelectedCategory: (category: string) => void;
  setSelectedRadius: (radius: RadiusOption) => void;
  generateRandomFood: () => void;
  clearHistory: () => void;
  getFoodById: (id: number) => Food | undefined;
}

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [foods] = useState<Food[]>(foodData);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentFood, setCurrentFood] = useState<Food | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [selectedRadius, setSelectedRadius] = useState<RadiusOption>(5);

  useEffect(() => {
    const savedHistory = localStorage.getItem('foodHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }

    // Get user location
    getUserLocation()
      .then(setUserLocation)
      .catch((error) => setLocationError(error.message));
  }, []);

  useEffect(() => {
    localStorage.setItem('foodHistory', JSON.stringify(history));
  }, [history]);

  const generateRandomFood = () => {
    let filteredFoods = selectedCategory === "all" 
      ? foods 
      : foods.filter(food => food.category === selectedCategory);

    // Apply location filter if user location is available
    // if (userLocation) {
    //   filteredFoods = filteredFoods.filter(food => {
    //     const distance = calculateDistance(
    //       userLocation.lat,
    //       userLocation.lng,
    //       food.restaurant.coordinates.lat,
    //       food.restaurant.coordinates.lng
    //     );
    //     return distance <= selectedRadius;
    //   });
    // }
    
    if (filteredFoods.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * filteredFoods.length);
    const selectedFood = filteredFoods[randomIndex];
    
    setCurrentFood(selectedFood);
    
    const historyItem: HistoryItem = {
      id: Date.now(),
      foodId: selectedFood.id,
      timestamp: Date.now()
    };
    
    setHistory(prev => [historyItem, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getFoodById = (id: number) => {
    return foods.find(food => food.id === id);
  };

  return (
    <FoodContext.Provider value={{
      foods,
      categories,
      selectedCategory,
      currentFood,
      history,
      userLocation,
      locationError,
      selectedRadius,
      radiusOptions,
      setSelectedCategory,
      setSelectedRadius,
      generateRandomFood,
      clearHistory,
      getFoodById
    }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
};