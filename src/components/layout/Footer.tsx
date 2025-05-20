import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">CulturalEats</h3>
            <p className="text-sm text-muted-foreground">
              Discovering and celebrating authentic cultural restaurants around
              the world.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/restaurants"
                  className="text-muted-foreground hover:text-foreground"
                >
                  All Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to="/cuisines"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cuisines
                </Link>
              </li>
              <li>
                <Link
                  to="/top-rated"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  to="/recent"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Recently Added
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 mt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CulturalEats. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground">
              Privacy
            </a>
            <a href="/terms" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
