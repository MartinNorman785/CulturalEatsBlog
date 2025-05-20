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
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    reviews: [
      {
        id: "r1",
        author: "Sarah Johnson",
        rating: 5,
        date: "2023-09-15",
        comment:
          "The Pad Thai was incredible! So much flavor and the perfect amount of spice.",
      },
      {
        id: "r2",
        author: "Michael Chen",
        rating: 4.5,
        date: "2023-08-22",
        comment:
          "Great atmosphere and attentive service. The green curry is a must-try.",
      },
    ],
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
    id: "2",
    name: "Mama's Italian",
    cuisine: "Italian",
    description:
      "Family-owned restaurant serving traditional Italian recipes passed down through generations, featuring homemade pasta and wood-fired pizzas.",
    location: "Westside",
    address: "456 Olive Ave, Westside District",
    rating: 4.9,
    priceRange: "$$",
    imageUrl:
      "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    contactInfo: {
      phone: "(555) 987-6543",
      email: "reservations@mamasitalian.com",
      website: "www.mamasitalian.com",
    },
    hours: {
      monday: "Closed",
      tuesday: "5:00 PM - 10:00 PM",
      wednesday: "5:00 PM - 10:00 PM",
      thursday: "5:00 PM - 10:00 PM",
      friday: "5:00 PM - 11:00 PM",
      saturday: "4:00 PM - 11:00 PM",
      sunday: "4:00 PM - 9:00 PM",
    },
    reviews: [
      {
        id: "r1",
        author: "David Rodriguez",
        rating: 5,
        date: "2023-09-10",
        comment:
          "The carbonara is the best I've had outside of Rome. Authentic flavors and generous portions.",
      },
      {
        id: "r2",
        author: "Emma Wilson",
        rating: 4.8,
        date: "2023-08-30",
        comment:
          "Cozy atmosphere with excellent service. Their homemade pasta is exceptional.",
      },
    ],
    popularDishes: [
      {
        name: "Carbonara",
        description:
          "Spaghetti with egg, pecorino romano, pancetta, and black pepper",
        price: "$19.95",
        imageUrl:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1741&q=80",
      },
      {
        name: "Margherita Pizza",
        description:
          "Fresh mozzarella, tomatoes, and basil on wood-fired crust",
        price: "$16.95",
      },
    ],
    features: ["Homemade Pasta", "Wine List", "Family-Friendly", "Takeout"],
  },
  {
    id: "3",
    name: "Sushi Zen",
    cuisine: "Japanese",
    description:
      "Modern Japanese restaurant with master sushi chefs preparing the freshest fish and traditional dishes in an elegant setting.",
    location: "Financial District",
    address: "789 Bay Street, Financial District",
    rating: 4.6,
    priceRange: "$$$$",
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    contactInfo: {
      phone: "(555) 456-7890",
      email: "info@sushizen.com",
      website: "www.sushizen.com",
    },
    hours: {
      monday: "12:00 PM - 2:30 PM, 5:30 PM - 10:00 PM",
      tuesday: "12:00 PM - 2:30 PM, 5:30 PM - 10:00 PM",
      wednesday: "12:00 PM - 2:30 PM, 5:30 PM - 10:00 PM",
      thursday: "12:00 PM - 2:30 PM, 5:30 PM - 10:00 PM",
      friday: "12:00 PM - 2:30 PM, 5:30 PM - 11:00 PM",
      saturday: "5:30 PM - 11:00 PM",
      sunday: "5:30 PM - 9:30 PM",
    },
    reviews: [
      {
        id: "r1",
        author: "Jennifer Lee",
        rating: 4.7,
        date: "2023-09-05",
        comment:
          "The Omakase experience was exceptional. Each piece of sushi was perfectly prepared.",
      },
      {
        id: "r2",
        author: "Brian Taylor",
        rating: 4.5,
        date: "2023-08-18",
        comment:
          "Elegant atmosphere and impeccable service. The sake selection is impressive.",
      },
    ],
    popularDishes: [
      {
        name: "Omakase",
        description: "Chef's selection of premium sushi and sashimi",
        price: "$85.00",
        imageUrl:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      },
      {
        name: "Dragon Roll",
        description:
          "Eel, avocado, and cucumber roll topped with avocado and eel sauce",
        price: "$24.95",
      },
    ],
    features: ["Omakase", "Sake Selection", "Private Dining", "Lunch Specials"],
  },
  {
    id: "4",
    name: "El Mariachi",
    cuisine: "Mexican",
    description:
      "Vibrant Mexican restaurant serving authentic regional dishes with fresh ingredients and house-made tortillas in a colorful atmosphere.",
    location: "Mission District",
    address: "321 Valencia St, Mission District",
    rating: 4.4,
    priceRange: "$$",
    imageUrl:
      "https://images.unsplash.com/photo-1653881189982-a66800798ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    contactInfo: {
      phone: "(555) 234-5678",
      email: "info@elmariachi.com",
      website: "www.elmariachi.com",
    },
    hours: {
      monday: "11:30 AM - 10:00 PM",
      tuesday: "11:30 AM - 10:00 PM",
      wednesday: "11:30 AM - 10:00 PM",
      thursday: "11:30 AM - 10:00 PM",
      friday: "11:30 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    reviews: [
      {
        id: "r1",
        author: "Carlos Mendez",
        rating: 4.5,
        date: "2023-09-12",
        comment:
          "The tacos al pastor are fantastic! Reminds me of the street food in Mexico City.",
      },
      {
        id: "r2",
        author: "Sophia Garcia",
        rating: 4.3,
        date: "2023-08-25",
        comment:
          "Great atmosphere with live music on weekends. The margaritas are strong and delicious.",
      },
    ],
    popularDishes: [
      {
        name: "Tacos Al Pastor",
        description: "Marinated pork tacos with pineapple, onion, and cilantro",
        price: "$12.95",
        imageUrl:
          "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      },
      {
        name: "Enchiladas Verdes",
        description:
          "Chicken enchiladas with green tomatillo sauce and queso fresco",
        price: "$16.95",
      },
    ],
    features: [
      "Live Music",
      "Tequila Selection",
      "Happy Hour",
      "Outdoor Seating",
    ],
  },
  {
    id: "5",
    name: "Taj Mahal",
    cuisine: "Indian",
    description:
      "Elegant Indian restaurant offering a diverse menu of traditional dishes from various regions of India, with a focus on tandoor specialties.",
    location: "East Village",
    address: "567 Broadway, East Village",
    rating: 4.5,
    priceRange: "$$$",
    imageUrl:
      "https://images.unsplash.com/photo-1566480047210-a9c2f05c7f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    contactInfo: {
      phone: "(555) 345-6789",
      email: "reservations@tajmahal.com",
      website: "www.tajmahalrestaurant.com",
    },
    hours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:30 PM",
    },
    reviews: [
      {
        id: "r1",
        author: "Priya Patel",
        rating: 4.6,
        date: "2023-09-08",
        comment:
          "The butter chicken and garlic naan were outstanding. Very authentic flavors.",
      },
      {
        id: "r2",
        author: "James Wilson",
        rating: 4.4,
        date: "2023-08-20",
        comment:
          "Elegant dining room with attentive service. The lamb biryani is spectacular.",
      },
    ],
    popularDishes: [
      {
        name: "Butter Chicken",
        description: "Tender chicken in a rich tomato and butter sauce",
        price: "$19.95",
        imageUrl:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      },
      {
        name: "Lamb Biryani",
        description:
          "Fragrant basmati rice cooked with lamb and aromatic spices",
        price: "$21.95",
      },
    ],
    features: [
      "Vegetarian Options",
      "Spice Level Customization",
      "Catering",
      "Buffet Lunch",
    ],
  },
  {
    id: "6",
    name: "Athena's Gyros",
    cuisine: "Greek",
    description:
      "Casual Greek eatery specializing in authentic gyros, souvlaki, and Mediterranean favorites made with family recipes and imported ingredients.",
    location: "North Beach",
    address: "890 Columbus Ave, North Beach",
    rating: 4.3,
    priceRange: "$$",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    contactInfo: {
      phone: "(555) 567-8901",
      email: "info@athenasgyros.com",
      website: "www.athenasgyros.com",
    },
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "11:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM",
    },
    reviews: [
      {
        id: "r1",
        author: "Nikos Papadopoulos",
        rating: 4.5,
        date: "2023-09-14",
        comment:
          "The gyros taste like the ones I had in Athens! Very authentic and delicious.",
      },
      {
        id: "r2",
        author: "Amanda Lewis",
        rating: 4.2,
        date: "2023-08-27",
        comment:
          "Great casual spot with friendly service. The Greek salad is fresh and generous.",
      },
    ],
    popularDishes: [
      {
        name: "Lamb Gyro",
        description:
          "Sliced lamb with tomatoes, onions, and tzatziki in warm pita",
        price: "$12.95",
        imageUrl:
          "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      },
      {
        name: "Souvlaki Plate",
        description: "Grilled chicken skewers with Greek salad, rice, and pita",
        price: "$16.95",
      },
    ],
    features: ["Quick Service", "Family-Friendly", "Takeout", "Catering"],
  },
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
