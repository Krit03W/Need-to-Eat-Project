import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFood } from '../context/FoodContext';
import CategorySelector from '../components/ui/CategorySelector';
import FoodDisplay from '../components/FoodDisplay';
import Button from '../components/ui/Button';
import { Utensils } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    currentFood,
    generateRandomFood
  } = useFood();

  const [animate, setAnimate] = React.useState(false);

  useEffect(() => {
    if (currentFood) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentFood]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          What Should I Eat Today?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Not sure what to eat? Let us help you decide! Select a category and hit the button for a random food suggestion.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <Button
          onClick={() => {}}
          primary={!false}
        >
          Random Suggestion
        </Button>
        <Button
          onClick={() => navigate('/testnearby')}
          primary={true}
        >
          Nearby Restaurants
        </Button>
      </div>

      <div className="space-y-6 mb-10">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="flex justify-center mb-12">
        <Button
          onClick={generateRandomFood}
          primary
          className="flex items-center text-lg py-4 px-8"
        >
          <Utensils className="mr-2 h-5 w-5" />
          Find Something to Eat!
        </Button>
      </div>

      {currentFood ? (
        <div className={`transition-opacity duration-300 ${animate ? 'opacity-0' : 'opacity-100'}`}>
          <FoodDisplay food={currentFood} />
        </div>
      ) : (
        <div className="text-center p-12 bg-orange-50 rounded-lg border border-orange-100">
          <p className="text-gray-600">Click the button above to get a food suggestion!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
