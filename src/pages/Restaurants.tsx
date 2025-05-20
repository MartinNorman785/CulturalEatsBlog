import { MainLayout } from "@/components/layout/MainLayout";
import { RestaurantGrid } from "@/components/blog/RestaurantGrid";
import { restaurants, cuisines } from "@/data/restaurants";

const RestaurantsPage = () => {
  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Restaurant Reviews</h1>
          <p className="text-muted-foreground">
            Explore our collection of authentic cultural restaurant reviews from
            around the world
          </p>
        </div>

        <RestaurantGrid restaurants={restaurants} cuisines={cuisines} />
      </div>
    </MainLayout>
  );
};

export default RestaurantsPage;
