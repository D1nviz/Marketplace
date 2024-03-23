import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

export const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    descrioption:
      "Get your assets delivered instantly after your purchase. No waiting time. No hassle",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    descrioption:
      "Every assets is verified by our team to ensure highest quality. Not happy with your purchase? We offer a 30-day money-back guarantee",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    descrioption:
      "We are committed to sustainability. We plant a tree for every purchase made on our platform",
  },
];

export const productCategories = [
  {
    label: "UI Kits",
    value: "ui-kits" as const,
    featured: [
      { name: "Editor picks", href: "#", imageSrc: "/nav/ui-kits/mixed.jpg" },
      { name: "New Arrivals", href: "#", imageSrc: "/nav/ui-kits/blue.jpg" },
      { name: "Bestsellers", href: "#", imageSrc: "/nav/ui-kits/purple.jpg" },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon Picks ",
        href: "/products?category=icons",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=icons&sort=desc",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "/products?category=icons",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
