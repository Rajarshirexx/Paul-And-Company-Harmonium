import React from 'react';
import { Link } from 'react-router-dom';
import heroProduct from '../../../assets/3Reed9Scale/1.jpg';
import legacyImg from '../../../assets/img-2305.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 pb-20 overflow-hidden flex items-center bg-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Content Column */}
          <div className="flex-1 text-center lg:text-left animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-slideDown">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Genuine Kolkata Legacy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 animate-slideRight">
              The <span className="color-heading">Legend</span> of <br /> 
              Paul & Company
            </h1>
            
            <p className="text-lg text-muted max-w-xl mb-10 leading-relaxed animate-fadeIn delay-300">
              For generations, Paul Babu's workshop in Kolkata has crafted the world's most 
              coveted harmoniums. Now, these authentic masterpieces are 
              <span className="text-primary font-semibold"> exclusively available </span> 
              for the international community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-scaleIn delay-500">
              <Link to="/products" className="btn-primary flex items-center group">
                Explore the Collection
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/about" className="btn-accent px-8 py-3.5">
                Our Story
              </Link>
            </div>

            {/* Authenticity Advisor - Modern & Trustworthy */}
            <div className="mt-16 p-6 color-card bg-white/40 border-dark/10 max-w-md animate-fadeIn delay-500">
              <div className="flex items-start gap-4">
                <div className="bg-dark/10 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="2 2 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-sm mb-1 uppercase tracking-wider">Official Authenticity Guarantee</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Beware of unauthorized third-party imitations. As official 
                    international partners, we source every instrument directly 
                    from the Paul family workshop in Kolkata to guarantee 
                    the legendary quality professionals expect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="flex-1 relative animate-scaleIn lg:pt-12">
            <div className="relative z-10 animate-float">
              <img 
                src={heroProduct} 
                alt="Genuine Paul & Co. Harmonium" 
                className="w-full h-auto drop-shadow-2xl rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Human Legacy Card */}
            <div className="absolute -bottom-10 -left-10 md:left-0 z-20 animate-slideRight delay-300">
              <div className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-2xl border border-white flex items-center gap-4 max-w-[280px]">
                <img 
                  src={legacyImg} 
                  alt="Paul Babu and Family" 
                  className="w-16 h-16 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-muted font-bold">The Makers</p>
                  <p className="text-sm font-display font-bold text-primary italic">"Quality is our only obsession."</p>
                  <p className="text-[10px] text-accent font-semibold">— Paul Babu, Kolkata</p>
                </div>
              </div>
            </div>

            {/* Decorative Gold Badge */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/40 animate-pulse z-0">
                <div className="text-[10px] font-bold text-accent text-center uppercase tracking-tighter leading-tight">
                    Premium<br/>Palitana<br/>Reeds
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-300 animate-fadeIn">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold text-primary">Discover More</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
