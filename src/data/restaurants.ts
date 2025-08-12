import { RestaurantType } from "@/types/restaurant";

export const restaurants: RestaurantType[] = [
  {
    id: "1",
    name: "Mami's Casa Latina",
    cuisine: "Mexican",
    description:
      "Classic Mexican restaurant with a family-style atmosphere.",
    location: "Bondi",
    address: "123 Bondi Rd, Bondi, NSW 2026",
    rating: 4.3,
    priceRange: "$$",
    imageUrl:
      "https://i.ibb.co/Ldtnq7t9/download-2.jpg",
    contactInfo: {
      phone: "0450 626 477",
      email: "info@mamicasa.com",
      website: "www.mamicasa.com.au",
    },
    review: "Tucked away in the heart of Bondi, Mami Casa delivers a warm, homely atmosphere matched by the friendliness of its staff and the authenticity of its food. We recently visited and tried a range of dishes from burritos to birria tacos and left satisfied, though with a few notes.\nThe burrito was a standout packed with flavour and generous in both taste and portion. It balanced richness and spice well, showcasing the kind of depth you’d expect from a traditional kitchen. The Currascho No. 1 offered incredibly tender meat, clearly cooked with care, though the portion size was on the smaller side compared to the other dishes. \n We sampled both lamb and birria tacos, which were well-made and traditional in presentation. The lamb edged out the birria for overall flavour and texture, though both were enjoyable. That said, the taco servings could have been a bit larger especially for those coming in hungry.\n The burrito bowl came exactly as described: hearty, colourful, and generous in portion. Each ingredient was fresh and well-seasoned, making it a perfect option for those wanting something lighter but still filling. \n What really set the experience apart was the warm service. The staff at Mami Casa were incredibly welcoming and made us feel right at home. The restaurant leans into tradition, both in flavour and hospitality, and it shows.\n Verdict: A solid spot for authentic Mexican fare in Bondi. Go for the burrito or burrito bowl if you're hungry, and don't skip the lamb tacos. Just be mindful that some portions like the tacos or currascho run smaller than others.",    ratings: {
      service: 3.4,
      atmosphere: 4,
      taste: 4.3,
      authenticity: 4.8
    },
    hours: {
      monday: "10:00 AM - 8:30 PM",
      tuesday: "10:00 AM - 9:00 PM",
      wednesday: "10:00 AM - 9:00 PM",
      thursday: "10:00 AM - 9:00 PM",
      friday: "10:00 AM - 9:00 PM",
      saturday: "10:00 PM - 9:00 PM",
      sunday: "10:00 PM - 8:30 PM",
    },

    popularDishes: [
      {
        name: "Burrito",
        description:
          "A flavour-packed favourite, loaded with traditional fillings and spice. Generous portion and a great go-to option.",
        price: "$19.50",
        imageUrl:
          "",
      },
      {
        name: "Burrito Bowl",
        description:
          "Hearty, colourful, and filled with fresh, well-seasoned ingredients. Arrived exactly as expected—big on portion, big on taste.",
        price: "$16.00",
      },
      {
      name: "Lamb and Birra Tacos",
        description:
          "Both traditional and tasty, but the lamb stood out with better flavour and texture. The only downside? The tacos could use a slightly larger serving size.",
        price: "$6.00",
        imageUrl:
          "",
      },
      {
       name: " Currascho No. 1",
        description:
          "Extremely tender, well-marinated meat—authentic and delicious. Portion size is smaller but the quality makes up for it.",
        price: "$18.00",
        imageUrl:
          "",
      }
    ],
    features: ["Vegetarian Options", "Outdoor Seating", "BYO Deals"],
  },
  {
    id: "2",
    name: "Menya Noodle Bar",
    cuisine: "Japanese",
    description:
      "Authentic Ramen restaurant hidden away near Darling Habour",
    location: "Darling Harbour",
    address: "Shop 2, 1 Market Street, Sydney NSW 2000",
    rating: 4.5,
    priceRange: "$$",
    imageUrl:
      "https://i.ibb.co/v4hBqYNB/image.png",
    contactInfo: {
      phone: "02 9267 4649",
      email: "",
      website: "https://www.menya.com.au/",
    },
    review: "Menya Noodle Bar offers an authentic and satisfying taste of Japanese cuisine right in the heart of Sydney. The food was absolutely delicious — the tonkotsu ramen was rich and full of depth, with perfectly chewy noodles and tender slices of pork. The menu showcases a strong cultural presence, from traditional broths to Japanese-style rice bowls and gyoza, making it feel like a quick escape to Tokyo. For the quality of the food, the prices were very reasonable, and the combo meals in particular offer great value. It’s a perfect spot for anyone craving genuine Japanese flavours without breaking the bank. The only slight downside was the wait — the food took a little longer than expected to arrive, especially during the lunch rush. However, once it came out, it was well worth it. Altogether, Menya delivers on flavour, authenticity, and affordability. Highly recommended for ramen lovers!",
    ratings: {
      service: 3.5,
      atmosphere: 4.2,
      taste: 4.8,
      authenticity: 5
    },
    hours: {
      monday: "11:00 AM - 2:30 PM, 5:30pm - 8:30pm",
      tuesday: "11:00 AM - 2:30 PM, 5:30pm - 8:30pm",
      wednesday: "11:00 AM - 2:30 PM, 5:30pm - 8:30pm",
      thursday: "11:00 AM - 2:30 PM, 5:30pm - 9:00pm",
      friday: "11:00 AM - 2:30 PM, 5:30pm - 9:00pm",
      saturday: "11:00 AM - 2:30 PM, 5:30pm - 8:30pm",
      sunday: "CLOSED",
    },

    popularDishes: [
      {
        name: "Chicken Katsu Curry Rice Bowl",
        description:
          "Japanese style curry served with rice and crispy golden deep-frid chicken cutlet",
        price: "$11.90",
        imageUrl:
          "",
      },
      {
        name: "Vegetable Lovers Ramen",
        description:
          "A vegetarian ramen featuring egg noodles in a savoury vegetable-based broth, topped with stir-fried mixed vegetables, shallots, and sesame seeds",
        price: "$16.90",
      },
    ],
    features: ["Vegetarian Options", "Full Bar", "Hidden Treasure"],
  },
  {
    id: "3",
    name: "Momo House 8848",
    cuisine: "Nepalese",
    description:
      "Tucked away in the busy streets of Sydney’s CBD, Momo House 8848 is a cozy, open-style restaurant serving up authentic Nepalese food",
    location: "Town Hall",
    address: "456 Kent St, Level 2, Shop 45, Sydney NSW 2000",
    rating: 3.8,
    priceRange: "$$",
    imageUrl:
      "https://i.ibb.co/zqXv09w/image.png",
    contactInfo: {
      phone: "02 8022 8365 ",
      email: "",
      website: "www.8848momos.com.au",
    },
    review: "Conveniently located near Town Hall Station, Momo House 8848 is an excellent choice for anyone craving a delicious, affordable Nepalese meal. The restaurant has a welcoming open-style layout and a casual atmosphere that makes you feel instantly at ease.\n We recommend ordering plates to share as the serving sizes are generous, and it’s the best way to experience a variety of meals on offer. We sampled a range of dumplings, including steamed, chilli, and pan-fried varieties, with fillings like vegetable, chicken, and pork. Each type had its own features, with the pan-fried chicken momos standing out as a favourite for their crisp base and juicy filling. \n The service was excellent, staff were attentive, friendly, and happy to answer questions and give recommendations. Whether you’re new to Nepalese food or a longtime fan of momos, the experience here is both accessible and enjoyable.",
    ratings: {
      service: 5,
      atmosphere: 4.2,
      taste: 3,
      authenticity: 3
    },
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 9:00 PM",
      saturday: "11:00 AM - 9:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },

    popularDishes: [
      {
        name: "Pan Fried Chicken Momo's",
        description:
          "Pan fried momos are Nepalese filled dumplings which have a crispy texture on one side and smooth on the other, filled with flavourful chicken and spices. Perfect for sharing",
        price: "$18.00",
        imageUrl:
          "",
      },
    ],
    features: ["Vegetarian Options", "Full Bar", "Hidden Treasure"],
  }
  
];

export const cuisines = [
  { value: "Thai", label: "Thai" },
  { value: "Italian", label: "Italian" },
  { value: "Japanese", label: "Japanese" },
  { value: "Mexican", label: "Mexican" },
  { value: "Indian", label: "Indian" },
  { value: "Greek", label: "Greek" },
  { value: "Chinese", label: "Chinese" },
  { value: "French", label: "French" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Korean", label: "Korean" },
  { value: "Mediterranean", label: "Mediterranean" },
  { value: "Nepalese", label: "Nepalese" },
];
