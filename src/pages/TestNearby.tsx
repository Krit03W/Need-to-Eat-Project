
import React, { useState, useEffect } from 'react';
import PlaceList from '../components/PlaceList'; // <- path ตามจริงของคุณ
import { GooglePlace } from '../types';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY!;
const SUPABASE_FUNCTION_URL = 'https://ipvtjiecwjcqarjgdybd.functions.supabase.co/nearby-restaurants';

const TestNearby: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [places, setPlaces] = useState<GooglePlace[]>([]);
  const [loading, setLoading] = useState(false);
  const [radius, setRadius] = useState(2000); // meters
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      },
      (err) => {
        setError('Failed to get user location');
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
      fetchPlaces();
    }
  }, [location, radius]);

  const fetchPlaces = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = new URLSearchParams({
        lat: location!.lat.toString(),
        lng: location!.lng.toString(),
        radius: radius.toString()
      });

      const response = await fetch(`${SUPABASE_FUNCTION_URL}?${query}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      if (!data.results) throw new Error('No results');

      setPlaces(data.results);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">🔍 Nearby Restaurants</h1>

      <div className="mb-6">
        <label className="text-sm mr-2 font-medium">Search Radius (km):</label>
        <select
          className="border rounded px-2 py-1"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
        >
          {[1000, 2000, 3000, 5000, 7000].map((r) => (
            <option key={r} value={r}>
              {r / 1000} km
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading nearby places...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && places.length > 0 && (
        <PlaceList places={places} googleApiKey={GOOGLE_API_KEY} />
      )}
    </div>
  );
};

export default TestNearby;
