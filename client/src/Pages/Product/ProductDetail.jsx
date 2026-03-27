import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImg, setActiveImg] = useState(product?.image);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 text-center px-6">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Instrument Not Found</h2>
        <Link to="/products" className="btn-primary px-8 py-3">Back to Collection</Link>
      </div>
    );
  }

  const waLink = `https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}.%20Please%20provide%20more%20details.`;

  return (
    <main className="bg-bg pb-24">
      {/* Breadcrumb / Top Bar */}
      <div className="container mx-auto px-6 pt-10 pb-6 text-[10px] font-bold uppercase tracking-widest text-muted">
        <Link to="/products" className="hover:text-primary transition-colors">Collection</Link>
        <span className="mx-2">/</span>
        <span className="text-primary">{product.name}</span>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery Column */}
          <div className="lg:w-1/2 space-y-6">
            {/* Main Image */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl relative aspect-square">
              <img 
                src={activeImg} 
                alt={product.name} 
                className="w-full h-full object-contain p-8 md:p-12 transition-all duration-700" 
              />
              <div className="absolute top-8 left-8 bg-accent text-primary text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter">
                Official Heritage Model
              </div>
            </div>

            {/* Thumbs */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {product.gallery?.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all p-2 bg-white ${activeImg === img ? 'border-accent shadow-lg scale-105' : 'border-secondary/40'}`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="inline-block px-4 py-1.5 bg-secondary/30 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
              {product.collection}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              {product.name}
            </h1>
            <p className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-8">
              {product.tagline}
            </p>

            <div className="prose prose-sm text-muted mb-10 leading-relaxed">
              <p>{product.longDescription}</p>
            </div>

            {/* Technical Specs Accordion-style list */}
            <div className="bg-white rounded-3xl p-8 border border-secondary/40 shadow-sm mb-10 space-y-6">
              <h4 className="text-[11px] uppercase font-bold text-primary tracking-widest border-b border-secondary/20 pb-4">Technical Details</h4>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Reeds</span>
                <span className="font-bold text-primary">{product.reeds}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Changer</span>
                <span className="font-bold text-primary">{product.scales}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Weight</span>
                <span className="font-bold text-primary">{product.specs.weight}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Bellows</span>
                <span className="font-bold text-primary">7-Fold Pro</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="mt-auto">
              <a 
                href={waLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent px-12 py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center shadow-2xl shadow-accent/20 w-full lg:w-fit"
              >
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="leading-none pt-0.5">Book Now (WhatsApp)</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
