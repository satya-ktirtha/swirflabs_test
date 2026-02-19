import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { products } from "@/lib/data";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            className="w-full max-w-2xl bg-background/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-border"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex items-center gap-4">
              <Search className="w-6 h-6 text-muted-foreground" />
              <input 
                autoFocus
                placeholder="Search products, categories..." 
                className="flex-1 bg-transparent border-none outline-none text-xl font-medium placeholder:text-muted-foreground text-foreground"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-white/10">
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-4">
              {query && filtered.length > 0 ? (
                <div className="grid gap-2">
                  {filtered.map(p => (
                    <Link key={p.id} href={`/products/${p.id}`} onClick={onClose}>
                      <a className="flex items-center gap-4 p-4 hover:bg-accent rounded-xl transition-colors group">
                        <div className="w-16 h-16 bg-secondary/30 rounded-lg p-2 flex items-center justify-center">
                          <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <div className="font-bold group-hover:text-primary transition-colors">{p.name}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-widest font-black">{p.category}</div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              ) : query ? (
                <div className="py-12 text-center text-muted-foreground">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="py-12 text-center text-muted-foreground">
                  Start typing to search...
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
