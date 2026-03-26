import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="group color-card bg-white p-4 h-full flex flex-col items-center text-center">
      {/* Product Image Wrapper */}
      <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-secondary/10">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-3 left-3 bg-primary/90 text-secondary text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
          {product.collection}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-xl font-display font-bold text-primary mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-accent font-bold uppercase tracking-widest mb-4">
          {product.tagline}
        </p>
        
        {/* Specs Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="text-[9px] bg-secondary/40 text-primary px-2 py-1 rounded border border-primary/5 font-bold uppercase">
            {product.reeds}
          </span>
          <span className="text-[9px] bg-secondary/40 text-primary px-2 py-1 rounded border border-primary/5 font-bold uppercase">
            {product.scales}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-6">
          {product.description}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-4 w-full flex gap-3">
          <Link 
            to={`/products/${product.id}`} 
            className="flex-1 text-[11px] font-bold uppercase tracking-widest py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-secondary transition-all"
          >
            Details
          </Link>
          <Link 
            to="/contact" 
            className="flex-1 text-[11px] font-bold uppercase tracking-widest py-3 bg-accent text-primary rounded-full hover:brightness-110 transition-all"
          >
            Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
