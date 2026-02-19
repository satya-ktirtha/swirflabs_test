export interface Product {
  id: string;
  name: string;
  category: "Cloud Gateways" | "Switching" | "WiFi" | "Camera Security" | "Door Access" | "Others";
  subfilter: string;
  image: string;
  shortDescription: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;
}

export const products: Product[] = [
  // Cloud Gateways
  {
    id: "efg",
    name: "Enterprise Fortress Gateway",
    category: "Cloud Gateways",
    subfilter: "Enterprise Scale",
    image: "/images/Product-Enterprise-Fortress-Gateway.png", // Placeholder
    shortDescription: "Enterprise-grade cloud gateway with 10 Gbps IPS routing and NVR storage.",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: "2x 3.5\" HDD Bays" },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" }
    ],
    isNew: true
  },
  {
    id: "udm-pro-max",
    name: "Dream Machine Pro Max ",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/Product-Dream-Machine-Pro-Max.png", // Placeholder
    shortDescription: "lalalalala",
    specs: [
      { label: "Throughput", value: "10 Gbps IPS" },
      { label: "Ports", value: "8x GbE RJ45, 1x 10G SFP+" },
      { label: "Storage", value: "2x 3.5\" HDD Bays" },
      { label: "Processor", value: "Quad-Core ARM Cortex-A57" }
    ],
    isNew: true
  },
  {
    id: "udm-pro",
    name: "Dream Machine Pro",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/Product-Dream-Machine-Pro.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "udm-se",
    name: "Dream Machine Special Edition",
    category: "Cloud Gateways",
    subfilter: "Large Scale",
    image: "/images/Product-Dream-Machine-Special-Edition.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "ucg-fiber",
    name: "Cloud Gateways Fiber",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/Product-UCG-Fiber.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "ucg-max",
    name: "Cloud Gateways Max",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/Product-UCG-Max.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "ucg-ultra",
    name: "Cloud Gateways Ultra",
    category: "Cloud Gateways",
    subfilter: "Compact",
    image: "/images/Product-UCG-Ultra.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "udr-7",
    name: "Dream Router 7",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UDR-7.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "ux-7",
    name: "UniFi Express 7",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UX-7.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "udr-5g-max",
    name: "Dream Router 5G Max",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "UDW",
    name: "Dream Wall",
    category: "Cloud Gateways",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UDW.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  
  // Switching
  {
    id: "pro-max-24-poe",
    name: "Pro Max 24 PoE",
    category: "Switching",
    subfilter: "Switching",
    image: "/images/switch.jpg",
    shortDescription: "Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" }
    ],
    isNew: true
  },
  {
    id: "pro-max-24-poe",
    name: "Pro Max 24 PoE",
    category: "Switching",
    subfilter: "Switching",
    image: "/images/switch.jpg",
    shortDescription: "Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.",
    specs: [
      { label: "Ports", value: "8x 2.5GbE, 16x GbE" },
      { label: "PoE Budget", value: "400W" },
      { label: "Uplink", value: "2x 10G SFP+" },
      { label: "Layer", value: "Layer 3 Switching" }
    ],
    isNew: true
  },
  
  // WiFi
  {
    id: "udr-5g-max",
    name: "Dream Router 5G Max",
    category: "WiFi",
    subfilter: "WiFi Integrated",
    image: "/images/Product-UDR-5G-Max.png",
    shortDescription: "All-in-one enterprise security gateway and network appliance.",
    specs: [
      { label: "Throughput", value: "3.5 Gbps IPS" },
      { label: "PoE", value: "2x PoE+, 6x PoE" },
      { label: "WAN", value: "2.5 GbE RJ45" },
      { label: "Storage", value: "128GB SSD Integrated" }
    ]
  },
  {
    id: "u6-enterprise",
    name: "UniFi U6 Enterprise",
    category: "WiFi",
    price: 279,
    image: "/images/wifi-ap.jpg",
    shortDescription: "High-performance WiFi 6E access point for high-density environments.",
    specs: [
      { label: "Standard", value: "WiFi 6E" },
      { label: "Throughput", value: "10.2 Gbps Aggregate" },
      { label: "Client Capacity", value: "600+" },
      { label: "Uplink", value: "2.5 GbE" }
    ]
  },
  
  // Camera Security
  {
    id: "g5-pro",
    name: "G5 Professional",
    category: "Camera Security",
    price: 379,
    image: "/images/camera.jpg",
    shortDescription: "4K indoor/outdoor PoE camera with exceptional low-light performance.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Night Vision", value: "25m (82ft) IR" },
      { label: "Zoom", value: "3x Optical" },
      { label: "Audio", value: "Two-way Audio" }
    ]
  },
  {
    id: "ai-theta",
    name: "AI Theta",
    category: "Camera Security",
    price: 299,
    image: "/images/camera.jpg",
    shortDescription: "Discreet panoramic camera system with AI analytics.",
    specs: [
      { label: "Resolution", value: "4K (8MP)" },
      { label: "Form Factor", value: "In-wall / Ceiling" },
      { label: "AI", value: "People Detection" },
      { label: "View", value: "360° Panoramic" }
    ]
  },
  // Door Access
  {
    id: "g2-reader-pro",
    name: "Access Reader G2 Professional",
    category: "Door Access",
    price: 399,
    image: "/images/door-access.jpg",
    shortDescription: "Advanced NFC card reader and intercom with touchscreen.",
    specs: [
      { label: "Unlock", value: "NFC, PIN, Mobile" },
      { label: "Camera", value: "12MP with Night Vision" },
      { label: "Display", value: "Touchscreen" },
      { label: "Durability", value: "IP55 Weather Resistant" }
    ]
  }
];

export const CATEGORIES = [
  "Cloud Gateways",
  "Switching",
  "WiFi",
  "Camera Security",
  "Door Access",
  "Others"
] as const;
