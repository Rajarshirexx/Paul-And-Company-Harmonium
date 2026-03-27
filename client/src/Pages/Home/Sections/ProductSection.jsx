import React from 'react';
import { products } from '../../../data/products';
import ProductCard from '../../../Components/UI/ProductCard';
import { Link } from 'react-router-dom';

export default function ProductSection() {
  return (
    <section className="py-24 bg-bg relative">
      {/* Decorative background text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[15rem] font-display font-bold whitespace-nowrap leading-none">
          CRAFTSMANSHIP CRAFTSMANSHIP
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
              Our <span className="text-accent">Official Collection</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Explore the four genuine Paul & Company models. Each instrument is 
              hand-tuned in Kolkata and verified for international shipment.
            </p>
          </div>
          <Link to="/products" className="text-sm font-bold uppercase tracking-widest group flex items-center text-primary">
            View All Series
            <span className="ml-2 w-8 h-px bg-primary group-hover:w-12 transition-all" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
