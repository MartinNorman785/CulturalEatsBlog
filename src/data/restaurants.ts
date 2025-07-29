import { RestaurantType } from "@/types/restaurant";

export const restaurants: RestaurantType[] = [
  {
    id: "1",
    name: "Mami's Casa Latina",
    cuisine: "Mexican",
    description:
      "Authentic Thai cuisine in a cozy atmosphere with traditional decor and spices imported directly from Thailand.",
    location: "Bondi",
    address: "123 Bondi Rd, Bondi, NSW 2026",
    rating: 4.3,
    priceRange: "$$",
    imageUrl:
      "./public/casamami.jpg",
    contactInfo: {
      phone: "0450 626 477",
      email: "info@mamicasa.com",
      website: "www.mamicasa.com.au",
    },
    review: "",
    ratings: {
      service: 3.4,
      atmosphere: 4,
      taste: 4.3,
      authenticity: 4.8
    },
    hours: {
      monday: "10:00 AM - 8:30 PM",
      tuesday: "10:00 AM - 9:00 PM",
      wednesday: "10:00 AM - 9:00 PM",
      thursday: "10:00 AM - 9:00 PM",
      friday: "10:00 AM - 9:00 PM",
      saturday: "10:00 PM - 9:00 PM",
      sunday: "10:00 PM - 8:30 PM",
    },

    popularDishes: [
      {
        name: "Burrito",
        description:
          "A flavour-packed favourite, loaded with traditional fillings and spice. Generous portion and a great go-to option.",
        price: "$19.50",
        imageUrl:
          "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      },
      {
        name: "Burrito Bowl",
        description:
          "Hearty, colourful, and filled with fresh, well-seasoned ingredients. Arrived exactly as expected—big on portion, big on taste.",
        price: "$16.00",
      },
      {
      name: "Lamb and Birra Tacos",
        description:
          "Both traditional and tasty, but the lamb stood out with better flavour and texture. The only downside? The tacos could use a slightly larger serving size.",
        price: "$6.00",
        imageUrl:
          "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      },
      {
       name: " Currascho No. 1",
        description:
          "Extremely tender, well-marinated meat—authentic and delicious. Portion size is smaller but the quality makes up for it.",
        price: "$18.00",
        imageUrl:
          "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      }
    ],
    features: ["Vegetarian Options", "Outdoor Seating", "BYO Deals"],
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
