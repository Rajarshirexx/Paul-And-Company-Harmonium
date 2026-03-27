import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductRow({ product, isEven }) {
  return (
    <div className={`py-24 ${isEven ? 'bg-white' : 'bg-bg'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Column */}
          <div className="lg:w-1/2 w-full group overflow-hidden rounded-[2rem] shadow-2xl relative aspect-[4/3]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Text Column */}
          <div className="lg:w-1/2 w-full">
            <div className="inline-block px-4 py-1.5 bg-secondary/30 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              {product.collection}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
              {product.name}
            </h2>
            <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-8">
              {product.tagline}
            </h4>
            
            <p className="text-lg text-muted mb-8 leading-relaxed">
              {product.longDescription || product.description}
            </p>

            {/* Specs Summary */}
            <div className="grid grid-cols-2 gap-6 mb-10 pb-8 border-b border-secondary/40">
              <div>
                <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Reeds</p>
                <p className="text-sm font-bold text-primary">{product.reeds}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Configuration</p>
                <p className="text-sm font-bold text-primary">{product.scales}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to={`/products/${product.id}`} 
                className="btn-primary px-10 py-4 text-xs font-bold uppercase tracking-widest"
              >
                View Gallery & Specs
              </Link>
              <a 
                href={`https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent px-10 py-4 text-xs font-bold uppercase tracking-widest"
              >
                Book Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
