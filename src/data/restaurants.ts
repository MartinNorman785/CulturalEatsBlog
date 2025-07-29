import { RestaurantType } from "@/types/restaurant";

export const restaurants: RestaurantType[] = [
  {
    id: "1",
    name: "Thai Orchid",
    cuisine: "Thai",
    description:
      "Authentic Thai cuisine in a cozy atmosphere with traditional decor and spices imported directly from Thailand.",
    location: "Downtown",
    address: "123 Main St, City Center",
    rating: 4.7,
    priceRange: "$$$",
    imageUrl:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    contactInfo: {
      phone: "(555) 123-4567",
      email: "info@thaiorchid.com",
      website: "www.thaiorchid.com",
    },
    review: "",
    ratings: {
      service: 2,
      atmosphere: 4.3,
      taste: 4.7,
      authenticity: 4.9
    },
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },

    popularDishes: [
      {
        name: "Pad Thai",
        description:
          "Rice noodles stir-fried with eggs, tofu, bean sprouts, and peanuts",
        price: "$16.95",
        imageUrl:
          "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      },
      {
        name: "Green Curry",
        description:
          "Spicy curry with coconut milk, bamboo shoots, and Thai basil",
        price: "$18.95",
      },
    ],
    features: ["Vegetarian Options", "Full Bar", "Outdoor Seating", "Delivery"],
  },
  {
    id: "1",
    name: "Thai Orchid",
    cuisine: "Thai",
    description:
      "Authentic Thai cuisine in a cozy atmosphere with traditional decor and spices imported directly from Thailand.",
    location: "Downtown",
    address: "123 Main St, City Center",
    rating: 4.7,
    priceRange: "$$$",
    imageUrl:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    contactInfo: {
      phone: "(555) 123-4567",
      email: "info@thaiorchid.com",
      website: "www.thaiorchid.com",
    },
    review: "",
    ratings: {
      service: 2,
      atmosphere: 4.3,
      taste: 4.7,
      authenticity: 4.9
    },
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },

    popularDishes: [
      {
        name: "Pad Thai",
        description:
          "Rice noodles stir-fried with eggs, tofu, bean sprouts, and peanuts",
        price: "$16.95",
        imageUrl:
          "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      },
      {
        name: "Green Curry",
        description:
          "Spicy curry with coconut milk, bamboo shoots, and Thai basil",
        price: "$18.95",
      },
    ],
    features: ["Vegetarian Options", "Full Bar", "Outdoor Seating", "Delivery"],
  }
  
];

export const cuisines = [
  { value: "Thai", label: "Thai" },
  { value: "Italian", label: "Italian" },
  { value: "Japanese", label: "Japanese" },
  { value: "Mexican", label: "Mexican" },
  { value: "Indian", label: "Indian" },
  { value: "Greek", label: "Greek" },
  { value: "Chinese", label: "Chinese" },
  { value: "French", label: "French" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Korean", label: "Korean" },
  { value: "Mediterranean", label: "Mediterranean" },
  { value: "Middle Eastern", label: "Middle Eastern" },
];
