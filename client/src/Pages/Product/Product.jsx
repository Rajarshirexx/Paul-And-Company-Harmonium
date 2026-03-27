import React from 'react';
import { products } from '../../data/products';
import ProductRow from '../../Components/UI/ProductRow';

export default function Product() {
  return (
    <main>
      {/* Hero Header */}
      <section className="bg-primary pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6 animate-slideDown">
            Our <span className="text-accent italic">Instruments</span>
          </h1>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
            Every harmonium in our collection is a unique work of art, 
            hand-tuned and verified for professional excellence.
          </p>
        </div>
      </section>

      {/* Alternating Products */}
      <section>
        {products.map((product, index) => (
          <ProductRow 
            key={product.id} 
            product={product} 
            isEven={index % 2 !== 0} 
          />
        ))}
      </section>

      {/* Quality Assurance Section */}
      <section className="py-24 bg-dark text-secondary text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-8 italic text-accent">"Superior keyboard action. Pleasing tone. Long sustain."</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            These are the hallmarks of a genuine Paul Babu instrument. 
            Don't settle for less when your music deserves the best.
          </p>
        </div>
      </section>
    </main>
  );
}