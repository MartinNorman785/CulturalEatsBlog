import { MainLayout } from "@/components/layout/MainLayout";
import { FeaturedRestaurant } from "@/components/blog/FeaturedRestaurant";
import { RestaurantCard } from "@/components/blog/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Get the first restaurant as featured
  const featuredRestaurant = restaurants[0];

  // Get the next 4 restaurants for the recent section
  const recentRestaurants = restaurants.slice(1, 5);

  return (
    <MainLayout>
      <section className="container py-8">
        <FeaturedRestaurant restaurant={featuredRestaurant} />
      </section>

      <section className="container py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Recently Reviewed
          </h2>
          <Button asChild variant="outline">
            <Link to="/restaurants">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
