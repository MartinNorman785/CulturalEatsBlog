export interface RestaurantType {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  location: string;
  review: string;
  address: string;
  rating: number;
  priceRange: string;
  ratings: {
    atmosphere: number;
    service: number,
    authenticity: number
    taste: number
  }
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

  popularDishes: {
    name: string;
    description: string;
    price: string;
    imageUrl?: string;
  }[];
  features: string[];
}
