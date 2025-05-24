import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

export function RatingStars({
  rating,
  maxRating = 5,
  className,
}: RatingStarsProps) {
  // Create an array of stars based on the rating
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`star-${i}`}
        className="fill-yellow-500 text-yellow-500"
        size={20}
        strokeWidth={2}
      />,
    );
  }

  // Add half star if needed
  if (hasHalfStar && stars.length < maxRating) {
    stars.push(
      <StarHalf
        key="half-star"
        className="text-yellow-500"
        size={20}
        strokeWidth={2}
      />,
    );
  }

  // Add empty stars
  const emptyStars = maxRating - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star
        key={`empty-star-${i}`}
        className="text-gray-400"
        size={20}
        strokeWidth={2}
      />,
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      {stars}
      <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}
