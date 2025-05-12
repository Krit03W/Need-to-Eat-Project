export async function fetchNearbyRestaurantsFromGoogle({
  lat,
  lng,
  radius,
  apiKey
}: {
  lat: number;
  lng: number;
  radius: number; // in meters
  apiKey: string;
}) {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=restaurant&key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch from Google Places API");
  }

  const data = await response.json();
  return data.results;
}
