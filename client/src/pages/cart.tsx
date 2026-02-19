import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Layout from "@/components/layout";

export default function Cart() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-700">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-8 shadow-inner">
          <ShoppingCart className="w-10 h-10 text-muted-foreground/50" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
          Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
          We are putting the finishing touches on our shopping experience. Full checkout functionality will be available shortly.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full px-8 shadow-lg">
            Return Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}