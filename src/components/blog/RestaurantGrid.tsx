import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { CuisineFilter } from "./CuisineFilter";
import { RestaurantType } from "@/types/restaurant";

interface RestaurantGridProps {
  restaurants: RestaurantType[];
  cuisines: { value: string; label: string }[];
}

export function RestaurantGrid({ restaurants, cuisines }: RestaurantGridProps) {
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const filteredRestaurants = selectedCuisine
    ? restaurants.filter((restaurant) => restaurant.cuisine === selectedCuisine)
    : restaurants;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">All Restaurants</h2>
        <div className="w-full sm:w-[240px]">
          <CuisineFilter cuisines={cuisines} onSelect={setSelectedCuisine} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No restaurants found. Try a different filter.
          </p>
        </div>
      )}
    </div>
  );
}
