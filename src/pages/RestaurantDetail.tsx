import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { restaurants } from "@/data/restaurants";
import { RatingStars } from "@/components/blog/RatingStars";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <MainLayout>
        <div className="container py-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Restaurant Not Found</h1>
          <p className="mb-8">
            We couldn't find the restaurant you're looking for.
          </p>
          <Button asChild>
            <Link to="/restaurants">
              <ArrowLeft className="mr-2" />
              Back to Restaurants
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-end pb-8 text-white">
          <Button
            asChild
            variant="outline"
            className="mb-4 w-fit border-white text-white hover:bg-white/20 hover:text-white"
          >
            <Link to="/restaurants">
              <ArrowLeft className="mr-2" />
              Back to Restaurants
            </Link>
          </Button>
          <Badge className="mb-2 w-fit">{restaurant.cuisine}</Badge>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {restaurant.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <RatingStars rating={restaurant.rating} className="text-white" />
            <Badge variant="outline" className="border-white text-white">
              {restaurant.priceRange}
            </Badge>
            <div className="flex items-center text-sm">
              <MapPin className="mr-1 h-4 w-4" />
              {restaurant.location}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Column */}
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground">{restaurant.description}</p>
            </div>

            <Separator />

            {/* Popular Dishes */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Popular Dishes</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {restaurant.popularDishes.map((dish, index) => (
                  <Card key={index}>
                    {dish.imageUrl && (
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                        <img
                          src={dish.imageUrl}
                          alt={dish.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{dish.name}</CardTitle>
                        <div className="font-medium">{dish.price}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription>{dish.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <Button>Write a Review</Button>
              </div>
              <div className="space-y-4">
                {restaurant.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <User className="h-5 w-5 mr-2 text-muted-foreground" />
                          <CardTitle className="text-base">
                            {review.author}
                          </CardTitle>
                        </div>
                        <RatingStars rating={review.rating} />
                      </div>
                      <CardDescription className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {review.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm">{restaurant.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm">{restaurant.contactInfo.phone}</p>
                </div>
                {restaurant.contactInfo.website && (
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a
                      href={`https://${restaurant.contactInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {restaurant.contactInfo.website}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Hours</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                {Object.entries(restaurant.hours).map(([day, hours]) => (
                  <div key={day} className="flex items-start justify-between">
                    <div className="capitalize text-sm">{day}</div>
                    <div className="text-sm text-right">{hours}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {restaurant.features.map((feature, index) => (
                    <Badge key={index} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RestaurantDetail;
