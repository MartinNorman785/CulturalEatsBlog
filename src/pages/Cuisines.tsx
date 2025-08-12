import React from 'react'
import { MainLayout } from "@/components/layout/MainLayout";
import { cuisines, restaurants } from "@/data/restaurants";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Utensils } from "lucide-react";

const CuisinesPage = () => {
  // Create a map of cuisines to their restaurant counts
  const cuisineCounts = cuisines.map((cuisine) => ({
    ...cuisine,
    count: restaurants.filter((r) => r.cuisine === cuisine.value).length,
  }));

  return (
    <MainLayout>
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Cuisines</h1>
          <p className="text-muted-foreground">
            Discover restaurants by cuisine type and explore culinary traditions
            from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cuisineCounts.map((cuisine) => (
            <Link
              key={cuisine.value}
              to={`/restaurants?cuisine=${cuisine.value}`}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{cuisine.label}</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Utensils className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <CardDescription>
                    {cuisine.count}{" "}
                    {cuisine.count === 1 ? "restaurant" : "restaurants"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Explore authentic {cuisine.label} cuisine from restaurants
                    that preserve traditional flavors and techniques.
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CuisinesPage;
