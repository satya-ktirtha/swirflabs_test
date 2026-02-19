import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { products, CATEGORIES } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <iframe
            src="https://www.youtube.com/embed/69g3O3Ltygw?autoplay=1&mute=1&loop=1&playlist=69g3O3Ltygw&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            className="w-[300%] h-[300%] -ml-[100%] -mt-[100%] object-cover opacity-80"
            allow="autoplay; encrypted-media"
            title="DCS Hero Video"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            THE FUTURE OF <br /> NETWORKING
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Enterprise-grade performance. Beautifully designed. <br /> Simply scalable.
          </p>
          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/collections/all">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-bold transition-all hover:scale-105">
                All Products
              </Button>
            </Link>
            <Link href="/support">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold transition-all hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 Reimagined Ecosystem Section - Aesthetic Masonry Layout */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Ecosystem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Integrated solutions for every environment, built to scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* WiFi Systems - Large Main Card */}
            <Link href="/collections/wifi" className="md:col-span-8 md:row-span-2">
              <motion.a 
                whileHover={{ scale: 0.99 }}
                className="group relative h-full min-h-[400px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-10 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <h3 className="text-3xl font-bold text-white mb-2">WiFi Systems</h3>
                  <p className="text-white/80 max-w-sm">Blazing fast wireless coverage for any space with WiFi 7 technology.</p>
                </div>
                <img 
                  src="/images/wifi-banner.png" 
                  alt="WiFi" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>

            {/* Switching - Side Card */}
            <Link href="/collections/switching" className="md:col-span-4 md:row-span-1">
              <motion.a 
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Switching</h3>
                  <p className="text-white/70 text-sm">The backbone of your network infrastructure.</p>
                </div>
                <img 
                  src="/images/switch.jpg" 
                  alt="Switching" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>

            {/* Security - Side Card */}
            <Link href="/collections/camera-security" className="md:col-span-4 md:row-span-1">
              <motion.a 
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Security</h3>
                  <p className="text-white/70 text-sm">Protect what matters with AI-driven surveillance.</p>
                </div>
                <img 
                  src="/images/camera.jpg" 
                  alt="Security" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>

            {/* Cloud Gateways - Bottom Grid */}
            <Link href="/collections/cloud-gateways" className="md:col-span-4 md:row-span-1">
              <motion.a 
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white">Cloud Gateways</h3>
                </div>
                <img 
                  src="/images/gateway-banner.png" 
                  alt="Gateways" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>

            {/* Door Access - Bottom Grid */}
            <Link href="/collections/door-access" className="md:col-span-4 md:row-span-1">
              <motion.a 
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)]"
              >
                <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white">Door Access</h3>
                </div>
                <img 
                  src="/images/door-access.jpg" 
                  alt="Access" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.a>
            </Link>

            {/* Others - Bottom Grid */}
            <Link href="/collections/others" className="md:col-span-4 md:row-span-1">
              <motion.a 
                whileHover={{ scale: 0.98 }}
                className="group relative h-full min-h-[250px] overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-2xl transition-all duration-500 block border border-border rounded-[var(--radius)] flex flex-col items-center justify-center p-8 text-center"
              >
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase italic">View All</h3>
                <ArrowRight className="w-12 h-12 text-primary group-hover:translate-x-4 transition-transform duration-500" />
              </motion.a>
            </Link>
          </div>
        </div>
      </section>

      {/* Reimagined Infrastructure Showcase */}
      <section className="bg-black text-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">UNIFY YOUR WORLD</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl mb-12">
            Professional-grade software meets enterprise-grade hardware. No subscriptions.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 h-16 text-lg font-bold transition-all">
            Talk to an Expert
          </Button>
        </div>

        <div className="container mx-auto px-4 space-y-48">
          {/* DCS Protect */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
                <img
                  src="/images/dcs-protect.png"
                  alt="DCS Protect"
                  className="relative z-10 w-full max-w-xl mx-auto rounded-full border-8 border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
                />
              </div>
            </div>
            <div className="flex-1 space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black italic uppercase">DCS Protect</h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                A License-Free enterprise-grade security platform powered by an AI detection engine. It delivers intelligent monitoring and centralized management in a single unified system.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-10 h-14 text-lg group">
                Explore Protect <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>

          {/* DCS Network */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black italic uppercase">DCS Network</h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                Centralized management of WiFi and switching with local processing at each site. Gain instant visibility into traffic, topology, and performance.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-10 h-14 text-lg group">
                Explore Network <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
                <img
                  src="/images/dcs-network.png"
                  alt="DCS Network"
                  className="relative z-10 w-full max-w-xl mx-auto rounded-full border-8 border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2"
                />
              </div>
            </div>
          </div>

          {/* DCS Access */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 pb-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
                <img
                  src="/images/dcs-access.png"
                  alt="DCS Access"
                  className="relative z-10 w-full max-w-xl mx-auto rounded-full border-8 border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
                />
              </div>
            </div>
            <div className="flex-1 space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black italic uppercase">DCS Access</h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                Seamlessly connect with third-party systems through secure APIs. Build smarter operations and maximize the value of your infrastructure.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-10 h-14 text-lg group">
                Explore Access <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Release - Aesthetic Dark Minimalist */}
      <section className="py-40 bg-white dark:bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-black uppercase tracking-widest">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                State of the Art
              </div>
              <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                U7 Pro <br /><span className="text-primary">WiFi 7</span>
              </h2>
              <p className="text-2xl text-muted-foreground max-w-lg leading-snug font-medium">
                Unprecedented throughput. Ultra-low latency. The pinnacle of wireless performance.
              </p>
              
              <div className="flex gap-12 border-l-4 border-primary pl-8">
                <div>
                  <div className="text-5xl font-black mb-1">5.7</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-black">Gbps Throughput</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-1">6GHz</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-black">Spectrum Band</div>
                </div>
              </div>

              <Link href="/collections/wifi">
                <Button size="lg" className="rounded-full px-12 h-20 text-xl font-black uppercase shadow-2xl shadow-primary/40 hover:scale-110 transition-transform bg-primary hover:bg-primary/90">
                  Pre-Order Now
                </Button>
              </Link>
            </div>
            <div className="flex-1 relative">
              <img 
                src="/images/wifi-ap.jpg" 
                alt="U7 Pro" 
                className="relative z-10 w-full max-w-2xl mx-auto object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)] hover:-translate-y-8 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}