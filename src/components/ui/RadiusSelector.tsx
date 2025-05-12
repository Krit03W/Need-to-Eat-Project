import React from 'react';
import { RadiusOption } from '../../types';
import { MapPin } from 'lucide-react';

interface RadiusSelectorProps {
  options: RadiusOption[];
  selectedRadius: RadiusOption;
  onSelectRadius: (radius: RadiusOption) => void;
  disabled?: boolean;
}

const RadiusSelector: React.FC<RadiusSelectorProps> = ({
  options,
  selectedRadius,
  onSelectRadius,
  disabled = false,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <MapPin className="w-5 h-5 text-orange-500" />
      <select
        value={selectedRadius}
        onChange={(e) => onSelectRadius(Number(e.target.value) as RadiusOption)}
        disabled={disabled}
        className={`
          px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
          ${
            disabled
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'
          }
        `}
      >
        {options.map((radius) => (
          <option key={radius} value={radius}>
            Within {radius} km
          </option>
        ))}
      </select>
    </div>
  );
};

export default RadiusSelector;