import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "./RatingStars";
import { RestaurantType } from "@/types/restaurant";


interface RestaurantCardProps {
  restaurant: RestaurantType;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (

    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <a href="https://imgbb.com/">
            <img className="h-full w-full object-cover" src={restaurant.imageUrl} alt={restaurant.name} />
          </a>
        </div>
        <CardHeader className="p-4">
          <div className="flex items-start justify-between">
            <CardTitle className="line-clamp-1 text-lg">
              {restaurant.name}
            </CardTitle>
            <Badge variant="outline" className="ml-2">
              {restaurant.cuisine}
            </Badge>
          </div>
          <CardDescription className="line-clamp-1">
            {restaurant.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {restaurant.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <RatingStars rating={restaurant.rating} />
          <div className="text-sm text-muted-foreground">
            {restaurant.priceRange}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
