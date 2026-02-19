import { ArrowRight, FileText, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

export default function UbiquitiSupport() {
  const trendingArticles = [
    "UniFi - How to set up a Dream Machine",
    "Troubleshooting UniFi Access Point adoption",
    "Configuring VLANs on UniFi Switches",
    "UniFi Protect - Camera placement guide",
    "Updating firmware via SSH",
    "Restoring a backup to a new Console"
  ];

  const categories = [
    "UniFi Consoles",
    "UniFi Network",
    "UniFi Gateway & Routing",
    "UniFi Protect",
    "UniFi Door Access",
    "UniFi Drive",
    "People & Role Management",
    "Talk",
    "Connect",
    "Mobility",
    "Play",
    "Other 1",
    "Other 2"
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-black text-white py-24 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          Ubiquiti Support Center
        </motion.h1>

        {/* UniFi GPT Embed (Replace Search Bar) */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src= "https://gpt.distributor.ui-apps.com/?distributor=PTDINAMIKACIPTA SOLUSI"
            width="100%"
            height="560"
            className="border-0 bg-white"
          />
        </div>
      </section>

      {/* TRENDING */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Trending Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {trendingArticles.map((item, i) => (
              <a
                key={i}
                href="https://help.ui.com/hc/en-us"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition group"
              >
                <FileText className="w-6 h-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {item}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Browse Guides by Product Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <a
                key={i}
                href="https://help.ui.com/hc/en-us/categories/6583256751383"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-md transition group hover:border-primary/50"
              >
                <Shield className="w-8 h-8 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <h3 className="font-bold group-hover:text-primary transition-colors">
                  {cat}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RMA */}
      <section className="py-24 text-center px-4">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">
          RMA & Device Replacement
        </h2>
        <p className="text-muted-foreground mb-8">
          Start your automated RMA process here.
        </p>
        <a href="https://rma.ui.com/" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="rounded-full px-8">
            Start RMA Request
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </a>
      </section>
    </Layout>
  );
}