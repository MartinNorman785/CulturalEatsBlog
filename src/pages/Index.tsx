import { MainLayout } from "@/components/layout/MainLayout";
import { FeaturedRestaurant } from "@/components/blog/FeaturedRestaurant";
import { RestaurantCard } from "@/components/blog/RestaurantCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { restaurants, cuisines } from "@/data/restaurants";
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

      <section className="bg-muted py-12">
        <div className="container">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Explore by Cuisine
            </h2>
            <p className="text-muted-foreground">
              Discover restaurants by your favorite cuisine types
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cuisines.slice(0, 6).map((cuisine) => (
              <Link
                key={cuisine.value}
                to={`/restaurants?cuisine=${cuisine.value}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square bg-accent/50 group-hover:bg-accent/70 transition-colors flex items-center justify-center">
                  <span className="font-medium">{cuisine.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-3xl">
          <NewsletterSignup />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
