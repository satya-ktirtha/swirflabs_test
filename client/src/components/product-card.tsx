import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <a className="group block bg-white dark:bg-card border border-border transition-all duration-300 hover:shadow-2xl rounded-[var(--radius)] overflow-hidden">
        {/* Image Container */}
        <div className="aspect-square relative p-8 bg-gray-50/50 dark:bg-gray-900/50 flex items-center justify-center overflow-hidden">
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full z-20">
              New
            </span>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-muted-foreground text-sm font-medium">${product.price}</p>
        </div>
      </a>
    </Link>
  );
}