import Layout from "@/components/layout";
import { Link, useRoute, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

/* ===============================
   CATEGORY DATA (WITH ICONS)
================================ */

const CATEGORIES = [
  {
    id: "cloud-gateways",
    name: "Cloud Gateways",
    image: "/images/icons/icon-cloud-gateways.fd169efc.png",
  },
  {
    id: "switching",
    name: "Switching",
    image: "/images/icons/icon-switching.0fe78dd4.png",
  },
  {
    id: "wifi",
    name: "WiFi",
    image: "/images/icons/icon-wifi.10459860.png",
  },
  {
    id: "camera-security",
    name: "Camera Security",
    image: "/images/icons/icon-camera-security.f70cc582.png",
  },
  {
    id: "door-access",
    name: "Door Access",
    image: "/images/icons/icon-door-access.f5ce13b9.png",
  },
  {
    id: "integrations",
    name: "Integrations",
    image: "/images/icons/icon-new-integrations.e6104f51.png",
  },
  {
    id: "advanced-hosting",
    name: "Advanced Hosting",
    image: "/images/icons/icon-cloud-keys-gateways.c3a4111b.png",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/images/icons/icon-accessories.5446cef0.png",
  },
];

/* ===============================
   SUBFILTERS
================================ */

const SUBFILTERS: Record<string, { name: string; count: number }[]> = {
  "cloud-gateways": [
    { name: "All", count: 11 },
    { name: "Enterprise Scale", count: 1 },
    { name: "Large Scale", count: 3 },
    { name: "Compact", count: 3 },
    { name: "WiFi Integrated", count: 4 },
  ],
  switching: [
    { name: "All", count: 54 },
    { name: "Aggregation", count: 4 },
    { name: "Enterprise", count: 5 },
    { name: "Professional Max & XG", count: 13 },
    { name: "Professional", count: 6 },
    { name: "Standard", count: 5 },
    { name: "WAN", count: 2 },
    { name: "Utility", count: 20 },
  ],
  wifi: [
    { name: "All", count: 42 },
    { name: "Enterprise", count: 5 },
    { name: "Flagship", count: 13 },
    { name: "Wall", count: 8 },
    { name: "Outdoor", count: 7 },
    { name: "Mega Capacity", count: 2 },
    { name: "Bridging", count: 7 },
    { name: "Special Devices", count: 1 },
  ],
  "camera-security": [
    { name: "All", count: 119 },
    { name: "NVRs and Edge Devices", count: 10 },
    { name: "Dome & Turret", count: 14 },
    { name: "Bullet", count: 9 },
    { name: "Compact", count: 15 },
    { name: "PTZ", count: 4 },
    { name: "Doorbells", count: 5 },
    { name: "SuperLink Sensors", count: 9 },
    { name: "Camera Accessories", count: 53 },
  ],
  "door-access": [
    { name: "All", count: 51 },
    { name: "Readers", count: 12 },
    { name: "Hubs", count: 6 },
    { name: "Kits", count: 7 },
    { name: "Intercoms", count: 3 },
    { name: "NVRs", count: 5 },
    { name: "Door Access Accessories", count: 21 },
  ],
  integrations: [
    { name: "All", count: 32 },
    { name: "Network Storage", count: 5 },
    { name: "Power Tech", count: 6 },
    { name: "Managed VoIP", count: 7 },
    { name: "Premium IoT", count: 7 },
    { name: "LTE/5G", count: 7 },
  ],
  "advanced-hosting": [{ name: "All", count: 9 }],
  accessories: [
    { name: "RJ45 & Copper", count: 17 },
    { name: "SFP & Fiber", count: 29 },
    { name: "SFP Liberation Day", count: 6 },
    { name: "Storage", count: 7 },
    { name: "Rack Mount", count: 38 },
    { name: "PoE & Power", count: 27 },
    { name: "For APs", count: 21 },
    { name: "For Cameras", count: 53 },
    { name: "For Door Access", count: 21 },
    { name: "Others", count: 27 },
  ],
};

import { products as staticProducts } from "@/lib/data";

export default function Collection() {
  const [match, params] = useRoute("/collections/:category");
  const [, setLocation] = useLocation();

  const [activeCategory, setActiveCategory] = useState("cloud-gateways");
  const [activeSubfilter, setActiveSubfilter] = useState("All");

  useEffect(() => {
    if (params?.category) {
      const found = CATEGORIES.find(c => c.id === params.category);
      if (found) {
        setActiveCategory(found.id);
        setActiveSubfilter(found.id === "accessories" ? "RJ45 & Copper" : "All");
      }
    }
  }, [params?.category]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubfilter(catId === "accessories" ? "RJ45 & Copper" : "All");
    setLocation(`/collections/${catId}`);
  };

  // Get products based on category and subfilter
  // First try to find static products from data.ts
  const categoryProducts = staticProducts.filter(p => {
      // Normalize category checking
      const pCat = p.category.toLowerCase().replace(/\s+/g, '-');
      const categoryMatch = pCat === activeCategory || (activeCategory === "cloud-gateways" && p.category === "Cloud Gateways");
      
      if (!categoryMatch) return false;
      
      // If "All" is selected, return all products in this category
      if (activeSubfilter === "All") return true;
      
      // If a specific subfilter is selected, check if product's subfilter matches it
      return p.subfilter === activeSubfilter;
  });

  const displayProducts = categoryProducts;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">

        {/* CATEGORY */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-border/50 pb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                "flex flex-col items-center gap-3 p-4 rounded-2xl transition-all group min-w-[110px]",
                activeCategory === cat.id
                  ? "bg-secondary text-primary"
                  : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="w-20 h-20 rounded-2xl bg-background border flex items-center justify-center shadow-sm transition-all">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-20 h-20 object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* SUBFILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
          {SUBFILTERS[activeCategory]?.map((sub) => (
            <button
              key={sub.name}
              onClick={() => setActiveSubfilter(sub.name)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all border",
                activeSubfilter === sub.name
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                  : "bg-transparent text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
              )}
            >
              {sub.name}
              <span className="opacity-60 text-[10px] ml-1">
                ({sub.count})
              </span>
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <a className="group block bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

                <div className="aspect-square bg-secondary/10 flex items-center justify-center p-6">
                  <img
                    src={product.image || "/images/placeholder-product.png"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 rounded-2xl transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-black text-sm uppercase group-hover:text-primary transition-colors mb-3">
                    {product.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-muted-foreground">
                      {product.subfilter}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </a>
            </Link>
          ))}
        </div>

      </div>
    </Layout>
  );
}