import { MainLayout } from "@/components/layout/MainLayout";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import React from 'react'

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
              We are a group of passionate students on a flavorful journey to explore, experience,
              and share the rich diversity of cultural foods from around the world. 
              As part of our school’s CAS (Creativity, Activity, Service) project, we’ve launched this
              initiative to broaden our understanding of different cultures through one of the most
              universal languages — food.
            </p>
            <p className="text-muted-foreground">
              Each week, we sample dishes from different cultural cuisines — whether from
              family kitchens, local restaurants, or community events — and write honest,
              respectful reviews. We research the history and significance of each dish, 
              try our hand at cooking when possible, and reflect on how food can
              connect people across traditions and borders.
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
                <li>
                <b>Service</b></> – How welcoming, attentive, and helpful the staff are. We value warmth and hospitality,
                especially in cultural spaces where service often reflects tradition.
                </li>

                <li>
                  <b>Authenticity</b> – How well the food reflects the cultural origins it represents. 
                  We research traditional ingredients, cooking methods, and presentation, and compare this to our dining experience.

                </li>
                              
                <li>
                  <b>Atmosphere</b> – The ambiance and environment of the restaurant or food venue, including décor,
                 cultural touches, and overall comfort.
                </li>

                <li>
                  <b>Taste</b> – The most subjective category, but one we approach thoughtfully.
                  We consider flavour, balance, seasoning, texture, and overall enjoyment of the dish.
                </li>
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
              <h3 className="font-medium">Dominic Spender McGuinness</h3>
            </div>
            <div className="text-center">
              <h3 className="font-medium">Oliver Patrick</h3>
            </div>
            <div className="text-center">
              <h3 className="font-medium">Martin Norman</h3>
            </div>
          </div>
 

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <h3 className="font-medium">Andrea Trahana</h3>
            </div>
            <div className="text-center">
              <h3 className="font-medium">Stephanie Whetters</h3>
            </div>
            <div className="text-center">
              <h3 className="font-medium">Keet Van de Zande</h3>
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

      </div>
    </MainLayout>
  );
};

export default About;
