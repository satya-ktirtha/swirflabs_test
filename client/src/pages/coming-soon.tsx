import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, ArrowLeft } from "lucide-react";

export default function ComingSoon() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-10 shadow-2xl">
          <Search className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-primary uppercase italic">
          Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed font-medium uppercase tracking-[0.2em] italic">
          We are currently integrating this brand into our enterprise ecosystem. Stay tuned for advanced networking excellence.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest shadow-2xl shadow-primary/30">
            <ArrowLeft className="mr-3 w-6 h-6" /> Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}