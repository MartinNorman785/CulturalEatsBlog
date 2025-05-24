import { Button } from "@/components/ui/button";
import { RatingStars } from "./RatingStars";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantType } from "@/types/restaurant";

interface FeaturedRestaurantProps {
  restaurant: RestaurantType;
}

export function FeaturedRestaurant({ restaurant }: FeaturedRestaurantProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-end p-6 text-white h-[500px]">
        <div className="space-y-2 mb-8">
          <Badge className="mb-2">{restaurant.cuisine}</Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {restaurant.name}
          </h1>
          <p className="max-w-3xl text-base text-gray-200 md:text-lg">
            {restaurant.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              <RatingStars rating={restaurant.rating} className="text-white" />
            </div>
            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              {restaurant.priceRange}
            </div>
            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              {restaurant.location}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to={`/restaurant/${restaurant.id}`}>Read Review</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
