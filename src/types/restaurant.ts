export interface RestaurantType {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  location: string;
  address: string;
  rating: number;
  priceRange: string;
  imageUrl: string;
  contactInfo: {
    phone: string;
    email: string;
    website?: string;
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  reviews: {
    id: string;
    author: string;
    rating: number;
    date: string;
    comment: string;
  }[];
  popularDishes: {
    name: string;
    description: string;
    price: string;
    imageUrl?: string;
  }[];
  features: string[];
}
