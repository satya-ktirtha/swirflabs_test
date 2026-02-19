import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/layout";

export default function MikrotikSupport() {
  return (
    <Layout>
      <section className="relative bg-[#202020] text-white py-32 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Mikrotik Support Center
          </motion.h1>
          <p className="text-xl text-gray-400 mb-8">Comprehensive guides and documentation coming soon.</p>
          
          <div className="relative max-w-xl mx-auto opacity-50 pointer-events-none">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search knowledge base..." 
              className="w-full h-14 pl-12 pr-4 rounded-full bg-white/10 border border-white/20"
              disabled
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
