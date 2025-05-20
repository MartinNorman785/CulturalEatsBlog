import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  return (
    <div className="rounded-lg bg-muted p-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h3 className="text-2xl font-bold">Subscribe to our newsletter</h3>
        <p className="text-muted-foreground">
          Get the latest reviews and recommendations delivered directly to your
          inbox.
        </p>
        <div className="w-full max-w-md space-y-2">
          <div className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1"
            />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
