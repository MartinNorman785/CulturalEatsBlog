import { MainLayout } from "@/components/layout/MainLayout";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About CulturalEats
        </h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Cultural food"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              At CulturalEats, we're passionate about celebrating the rich
              diversity of cultural cuisines from around the world. Our mission
              is to help food enthusiasts discover authentic dining experiences
              that represent the true flavors and traditions of various
              cultures.
            </p>
            <p className="text-muted-foreground">
              Founded in 2023, our blog has quickly become a trusted resource
              for honest reviews, cultural insights, and recommendations for the
              best ethnic restaurants in the city.
            </p>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold">Our Review Process</h2>
          <p className="text-muted-foreground">
            We believe in transparent and fair restaurant reviews that help both
            diners and restaurant owners. Here's how we approach our reviews:
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium">Multiple Visits</h3>
              <p className="text-sm text-muted-foreground">
                We visit each restaurant at least twice before publishing a
                review to ensure consistency.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Anonymous Dining</h3>
              <p className="text-sm text-muted-foreground">
                Our reviewers dine anonymously and pay for all meals to ensure
                an authentic experience.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Cultural Context</h3>
              <p className="text-sm text-muted-foreground">
                We research the cultural background of cuisines to provide
                context and authenticity benchmarks.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Comprehensive Ratings</h3>
              <p className="text-sm text-muted-foreground">
                Our ratings consider food quality, authenticity, service,
                ambiance, and value.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold">Meet Our Team</h2>
          <p className="text-muted-foreground">
            Our diverse team of food critics and writers brings varied cultural
            backgrounds and culinary expertise to our reviews.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <div className="aspect-square w-40 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-medium">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">
                Founder & Lead Critic
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square w-40 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-medium">Michael Patel</h3>
              <p className="text-sm text-muted-foreground">
                Asian Cuisine Specialist
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square w-40 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-medium">Elena Rodriguez</h3>
              <p className="text-sm text-muted-foreground">
                Latin American Expert
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 mb-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="mailto:contact@culturaleats.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
