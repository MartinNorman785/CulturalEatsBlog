import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              CulturalEats
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link
              to="/restaurants"
              className="transition-colors hover:text-foreground/80"
            >
              Restaurants
            </Link>
            <Link
              to="/cuisines"
              className="transition-colors hover:text-foreground/80"
            >
              Cuisines
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-foreground/80"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="sm" className="px-2">
            <span className="font-bold">CulturalEats</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
