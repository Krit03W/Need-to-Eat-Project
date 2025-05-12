import { Food, FoodCategory } from '../types';

export const foodData: Food[] = [
  {
    id: 1,
    name: "Pad Thai",
    description: "Classic Thai stir-fried noodles with eggs, tofu, bean sprouts, peanuts, and lime.",
    image: "https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg",
    category: "Thai",
    restaurant: {
      name: "Thai Delight",
      location: "Sukhumvit 55, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Thai+Delight+Bangkok",
      coordinates: {
        lat: 13.7373169,
        lng: 100.5642171
      }
    }
  },
  {
    id: 2,
    name: "Green Curry",
    description: "Spicy Thai curry made with green chili, coconut milk, eggplant, and your choice of protein.",
    image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
    category: "Thai",
    restaurant: {
      name: "Bangkok Kitchen",
      location: "Silom, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Bangkok+Kitchen",
      coordinates: {
        lat: 13.7246666,
        lng: 100.5341571
      }
    }
  },
  {
    id: 3,
    name: "Sushi Platter",
    description: "Assorted fresh sushi including nigiri, maki, and sashimi with wasabi and pickled ginger.",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    category: "Japanese",
    restaurant: {
      name: "Sakura Sushi",
      location: "Thonglor, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Sakura+Sushi",
      coordinates: {
        lat: 13.7278957,
        lng: 100.5867644
      }
    }
  },
  {
    id: 4,
    name: "Ramen",
    description: "Rich broth with wheat noodles, soft-boiled egg, chashu pork, and green onions.",
    image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
    category: "Japanese",
    restaurant: {
      name: "Ramen House",
      location: "Asok, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Ramen+House",
      coordinates: {
        lat: 13.7370069,
        lng: 100.5602569
      }
    }
  },
  {
    id: 5,
    name: "Bibimbap",
    description: "Korean rice bowl topped with sautéed vegetables, chili paste, and a fried egg.",
    image: "https://images.pexels.com/photos/5339079/pexels-photo-5339079.jpeg",
    category: "Korean",
    restaurant: {
      name: "Seoul Food",
      location: "Phrom Phong, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Seoul+Food",
      coordinates: {
        lat: 13.7331803,
        lng: 100.5698657
      }
    }
  },
  {
    id: 6,
    name: "Korean BBQ",
    description: "Grilled marinated meats served with lettuce wraps and side dishes.",
    image: "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg",
    category: "Korean",
    restaurant: {
      name: "Korean Grill",
      location: "Ekkamai, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Korean+Grill",
      coordinates: {
        lat: 13.7258731,
        lng: 100.5858092
      }
    }
  },
  {
    id: 7,
    name: "Burger & Fries",
    description: "Classic beef burger with cheese, lettuce, tomato, and crispy fries on the side.",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    category: "Western",
    restaurant: {
      name: "Burger Joint",
      location: "Siam, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Burger+Joint",
      coordinates: {
        lat: 13.7455337,
        lng: 100.5340117
      }
    }
  },
  {
    id: 8,
    name: "Pasta Carbonara",
    description: "Spaghetti with creamy sauce made from eggs, cheese, pancetta and black pepper.",
    image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
    category: "Western",
    restaurant: {
      name: "Italian Bistro",
      location: "Sathorn, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Italian+Bistro",
      coordinates: {
        lat: 13.7199867,
        lng: 100.5189406
      }
    }
  },
  {
    id: 9,
    name: "Quinoa Bowl",
    description: "Nutritious bowl with quinoa, roasted vegetables, avocado, and tahini dressing.",
    image: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg",
    category: "Healthy",
    restaurant: {
      name: "Green Plate",
      location: "Ari, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Green+Plate",
      coordinates: {
        lat: 13.7791511,
        lng: 100.5456778
      }
    }
  },
  {
    id: 10,
    name: "Acai Bowl",
    description: "Blended acai berries topped with granola, fresh fruits, and honey.",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    category: "Healthy",
    restaurant: {
      name: "Smoothie Heaven",
      location: "On Nut, Bangkok",
      googleMapsUrl: "https://maps.google.com/?q=Smoothie+Heaven",
      coordinates: {
        lat: 13.7055701,
        lng: 100.6020336
      }
    }
  }
];

export const categories: FoodCategory[] = [
  { id: "all", name: "All" },
  { id: "Thai", name: "Thai" },
  { id: "Japanese", name: "Japanese" },
  { id: "Korean", name: "Korean" },
  { id: "Western", name: "Western" },
  { id: "Healthy", name: "Healthy" }
];

export const radiusOptions: RadiusOption[] = [2, 3, 5, 7, 10];