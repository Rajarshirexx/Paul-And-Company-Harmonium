import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary group">
          {/* Decorative Texture/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-dark opacity-90 transition-all duration-700 group-hover:scale-105" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse" />

          <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary mb-8 leading-tight max-w-4xl">
              Ready to Own a Piece of <br />
              <span className="text-accent italic">Musical History?</span>
            </h2>
            
            <p className="text-xl text-secondary/70 mb-12 max-w-2xl leading-relaxed">
              Every Paul & Company harmonium is custom-tuned to your requirements. 
              Start a consultation with our international team today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="btn-accent px-12 py-4 text-sm uppercase tracking-widest font-bold shadow-2xl shadow-accent/20"
              >
                Inquire Now
              </Link>
              <Link 
                to="/products" 
                className="px-12 py-4 text-sm uppercase tracking-widest font-bold border border-secondary/30 text-secondary rounded-full hover:bg-secondary/10 transition-all"
              >
                Explore Models
              </Link>
            </div>
            
            {/* Authenticity Badge Footer */}
            <div className="mt-12 pt-8 border-t border-secondary/10 flex items-center justify-center space-x-4 opacity-50">
              <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">100% Genuine Kolkata Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
