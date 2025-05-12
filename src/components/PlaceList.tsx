import React from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';

interface GooglePhoto {
  photo_reference: string;
}

interface GooglePlace {
  place_id: string;
  name: string;
  rating?: number;
  vicinity: string;
  photos?: GooglePhoto[];
}

interface PlaceListProps {
  places: GooglePlace[];
  googleApiKey: string;
}

const PlaceList: React.FC<PlaceListProps> = ({ places, googleApiKey }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {places.map((place) => (
        <div
          key={place.place_id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {/* รูปภาพ */}
          {place.photos?.[0] ? (
            <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${googleApiKey}`}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              No image available
            </div>
          )}

          {/* รายละเอียด */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{place.name}</h3>

            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{place.vicinity}</span>
            </div>

            {place.rating && (
              <div className="flex items-center text-gray-600 mb-3">
                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                <span>{place.rating}</span>
              </div>
            )}

            <a
              href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-500 hover:text-orange-600"
            >
              <span className="mr-1">View on Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceList;
