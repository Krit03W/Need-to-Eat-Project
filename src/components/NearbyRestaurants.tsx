// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { GooglePlace, UserLocation, RadiusOption } from '../types';
// import { MapPin, Star, ExternalLink } from 'lucide-react';
// import RadiusSelector from './ui/RadiusSelector';

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL!,
//   import.meta.env.VITE_SUPABASE_ANON_KEY!
// );

// interface NearbyRestaurantsProps {
//   userLocation: UserLocation | null;
//   locationError: string | null;
// }

// const NearbyRestaurants: React.FC<NearbyRestaurantsProps> = ({ userLocation, locationError }) => {
//   const [restaurants, setRestaurants] = useState<GooglePlace[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedRadius, setSelectedRadius] = useState<RadiusOption>(2);

//   const fetchNearbyRestaurants = async () => {
//     if (!userLocation) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const { data, error } = await supabase.functions.invoke('nearby-restaurants', {
//         query: {
//           lat: userLocation.lat.toString(),
//           lng: userLocation.lng.toString(),
//           radius: (selectedRadius * 1000).toString(),
//         },
//       } as any);

//       console.log("Response from function:", data);
//       console.error("Function error:", error);

//       if (error) throw error;
//       if (!data?.results) throw new Error("No results returned from API");

//       setRestaurants(data.results);
//     } catch (err) {
//       console.error("Caught fetch error:", err);
//       setError('Failed to fetch nearby restaurants');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (userLocation) {
//       fetchNearbyRestaurants();
//     }
//   }, [userLocation, selectedRadius]);

//   if (locationError) {
//     return (
//       <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
//         <p>Please enable location services to see nearby restaurants.</p>
//       </div>
//     );
//   }

//   if (!userLocation) {
//     return (
//       <div className="bg-gray-50 p-4 rounded-lg text-gray-600">
//         <p>Getting your location...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-center mb-6">
//         <RadiusSelector
//           options={[2, 3, 5, 7, 10]}
//           selectedRadius={selectedRadius}
//           onSelectRadius={setSelectedRadius}
//         />
//       </div>

//       {loading ? (
//         <div className="text-center py-8">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Finding restaurants near you...</p>
//         </div>
//       ) : error ? (
//         <div className="bg-red-50 p-4 rounded-lg text-red-700">
//           <p>{error}</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {restaurants.map((restaurant) => (
//             <div key={restaurant.place_id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               {restaurant.photos?.[0] ? (
//                 <img
//                   src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}
//                   alt={restaurant.name}
//                   className="w-full h-48 object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
//                   No image available
//                 </div>
//               )}

//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>

//                 <div className="flex items-center text-gray-600 mb-2">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   <span className="text-sm">{restaurant.vicinity}</span>
//                 </div>

//                 {restaurant.rating && (
//                   <div className="flex items-center text-gray-600 mb-3">
//                     <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
//                     <span>{restaurant.rating}</span>
//                   </div>
//                 )}

//                 <a
//                   href={`https://www.google.com/maps/place/?q=place_id:${restaurant.place_id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-orange-500 hover:text-orange-600"
//                 >
//                   <span className="mr-1">View on Maps</span>
//                   <ExternalLink className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NearbyRestaurants;

import React, { useState, useEffect } from 'react';
import { GooglePlace, UserLocation, RadiusOption } from '../types';
import { MapPin, Star, ExternalLink } from 'lucide-react';
import RadiusSelector from './ui/RadiusSelector';
import PlaceList from './PlaceList';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY!;
const SUPABASE_FUNCTION_URL = 'https://iptvtjecwjcqarjgxdybd.functions.supabase.co/nearby-restaurants';

interface NearbyRestaurantsProps {
  userLocation: UserLocation | null;
  locationError: string | null;
}

const NearbyRestaurants: React.FC<NearbyRestaurantsProps> = ({ userLocation, locationError }) => {
  const [restaurants, setRestaurants] = useState<GooglePlace[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedRadius, setSelectedRadius] = useState<RadiusOption>(2); // in km

  const fetchNearbyRestaurants = async () => {
    if (!userLocation) return;

    setLoading(true);
    setError(null);

    try {
      const query = new URLSearchParams({
        lat: userLocation.lat.toString(),
        lng: userLocation.lng.toString(),
        radius: (selectedRadius * 1000).toString() // convert km to meters
      });

      const response = await fetch(`${SUPABASE_FUNCTION_URL}?${query}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      if (!data.results) throw new Error('No results');

      setRestaurants(data.results);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userLocation) {
      fetchNearbyRestaurants();
    }
  }, [userLocation, selectedRadius]);

  if (locationError) {
    return (
      <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
        <p>⚠️ Please enable location services to see nearby restaurants.</p>
      </div>
    );
  }

  if (!userLocation) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg text-gray-600">
        <p>📍 Getting your location...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <RadiusSelector
          options={[2, 3, 5, 7, 10]}
          selectedRadius={selectedRadius}
          onSelectRadius={setSelectedRadius}
        />
      </div>

      {loading && <p className="text-center">Loading nearby places...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && restaurants.length > 0 && (
        <PlaceList places={restaurants} googleApiKey={GOOGLE_API_KEY} />
      )}
    </div>
  );
};

export default NearbyRestaurants;

