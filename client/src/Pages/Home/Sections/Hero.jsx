import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../../data/products';
import legacyImg from '../../../assets/img-2305.jpg';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = products.map(p => p.image);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[90vh] pt-20 lg:pt-12 pb-24 lg:pb-20 overflow-hidden flex items-center bg-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Content Column */}
          <div className="flex-1 text-center lg:text-left animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Genuine Kolkata Legacy</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight mb-6 animate-slideRight">
              The <span className="color-heading">Legend</span> of <br /> 
              Paul & Company
            </h1>
            
            <p className="text-lg text-muted max-w-xl mb-10 leading-relaxed animate-fadeIn delay-300">
              For generations, Paul Babu's workshop in Kolkata has crafted the world's most 
              coveted harmoniums. Now, these authentic masterpieces are 
              <span className="text-primary font-semibold"> exclusively available </span> 
              for the international community.
            </p>

            {/* Authenticity Advisor - Modern & Trustworthy */}
            <div className="mt-8 md:mt-12 p-6 md:p-8 color-card bg-white/60 border-accent/20 max-w-lg mb-8 md:mb-12 animate-fadeIn delay-300 shadow-2xl mx-auto lg:mx-0">
              <div className="flex items-start gap-4 md:gap-5">
                <div className="bg-accent/10 p-2 md:p-3 rounded-2xl text-accent flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-primary text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-wider">Official Authenticity Guarantee</h4>
                  <p className="text-[11px] md:text-sm text-muted leading-relaxed">
                    Beware of unauthorized third-party imitations. As official 
                    international partners, we source every instrument directly 
                    from the Paul family workshop in Kolkata to guarantee 
                    the legendary quality professionals expect.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 animate-scaleIn delay-500">
              <Link to="/products" className="btn-primary flex items-center justify-center min-w-[220px] py-4">
                Our Collection
              </Link>
              <Link to="/about" className="btn-accent flex items-center justify-center min-w-[220px] py-4">
                Our Story
              </Link>
            </div>
          </div>

          {/* Visual Column - Refined Slider */}
          <div className="flex-1 relative w-full lg:pt-12 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] mt-16 lg:mt-0 px-4 md:px-0">
            <div className="absolute inset-0 z-10">
              {heroImages.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <img 
                    src={img} 
                    alt={`Genuine Paul & Co. Harmonium ${idx + 1}`} 
                    className="w-full h-auto md:max-h-full object-contain drop-shadow-2xl rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
              {heroImages.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-accent w-6' : 'bg-primary/20'}`}
                />
              ))}
            </div>

            {/* Human Legacy Card */}
            <div className="absolute bottom-4 left-0 md:-left-10 lg:bottom-10 z-20 animate-slideRight">
              <div className="bg-white/90 backdrop-blur-lg p-3 md:p-4 rounded-2xl shadow-2xl border border-white flex items-center gap-3 md:gap-4 max-w-[250px] md:max-w-[280px] mx-auto sm:mx-0">
                <img 
                  src={legacyImg} 
                  alt="Paul Babu and Family" 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-tighter text-muted font-bold">The Makers</p>
                  <p className="text-xs md:text-sm font-display font-bold text-primary italic leading-tight">"Quality is our only obsession."</p>
                  <p className="text-[9px] md:text-[10px] text-accent font-semibold">— Paul Babu, Kolkata</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold text-primary">Discover More</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
