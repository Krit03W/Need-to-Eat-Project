export interface Restaurant {
  name: string;
  location: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Food {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  restaurant: Restaurant;
}

export interface FoodCategory {
  id: string;
  name: string;
}

export interface HistoryItem {
  id: number;
  foodId: number;
  timestamp: number;
}

export interface UserLocation {
  lat: number;
  lng: number;
}

export type RadiusOption = 2 | 3 | 5 | 7 | 10;

export interface GooglePlace {
  place_id: string;
  name: string;
  vicinity: string;
  rating?: number;
  photos?: Array<{
    photo_reference: string;
    height: number;
    width: number;
  }>;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}