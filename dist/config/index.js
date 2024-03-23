"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCategories = exports.perks = void 0;
var lucide_react_1 = require("lucide-react");
exports.perks = [
    {
        name: "Instant Delivery",
        Icon: lucide_react_1.ArrowDownToLine,
        descrioption: "Get your assets delivered instantly after your purchase. No waiting time. No hassle",
    },
    {
        name: "Guaranteed Quality",
        Icon: lucide_react_1.CheckCircle,
        descrioption: "Every assets is verified by our team to ensure highest quality. Not happy with your purchase? We offer a 30-day money-back guarantee",
    },
    {
        name: "For the Planet",
        Icon: lucide_react_1.Leaf,
        descrioption: "We are committed to sustainability. We plant a tree for every purchase made on our platform",
    },
];
exports.productCategories = [
    {
        label: "UI Kits",
        value: "ui-kits",
        featured: [
            { name: "Editor picks", href: "#", imageSrc: "/nav/ui-kits/mixed.jpg" },
            { name: "New Arrivals", href: "#", imageSrc: "/nav/ui-kits/blue.jpg" },
            { name: "Bestsellers", href: "#", imageSrc: "/nav/ui-kits/purple.jpg" },
        ],
    },
    {
        label: "Icons",
        value: "icons",
        featured: [
            {
                name: "Favorite Icon Picks ",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg",
            },
            { name: "New Arrivals", href: "#", imageSrc: "/nav/icons/new.jpg" },
            {
                name: "Bestselling Icons",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
];
