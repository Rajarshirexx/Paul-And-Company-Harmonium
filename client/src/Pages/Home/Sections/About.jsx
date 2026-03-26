import React from 'react';
import legacyImg from '../../../assets/img-2305.jpg';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-secondary/20">
              <img 
                src={legacyImg} 
                alt="The Paul Family Workshop" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
            
          </div>

          {/* Text Column */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-secondary/30 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Our Heritage
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              A Legacy Tuned to <br />
              <span className="text-accent">Musical Perfection</span>
            </h2>

            <div className="space-y-8 text-muted leading-relaxed">
              <p className="text-lg relative pl-8 border-l-4 border-accent/30">
                Rooted in the golden era of Indian classical music, the legacy of Paul & Company 
                began with Sri Kshitish Chandra Paul—a master violinist and disciple of the 
                legendary Ustad Allauddin Khan. This deep musical lineage ensures that every 
                instrument in our Kolkata workshop is not just built, but tuned with the refined 
                ear and soul of a dedicated performer.
              </p>

              <p className="text-lg italic">
                Today, under the meticulous eye of Batta Krishna Paul, our workshop remains 
                dedicated to uncompromising excellence. Using only seasoned teak wood and 
                premium Palitana reeds, we craft harmoniums that are world-renowned for their 
                rich sustain, precision scale-changing mechanics, and a durability that serves 
                professional musicians for a lifetime.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 items-center pt-8 border-t border-secondary/20">
              <div>
                <p className="text-2xl font-display font-bold text-primary">Palitana</p>
                <p className="text-xs uppercase tracking-widest text-muted font-bold">Premium Reeds</p>
              </div>
              <div className="w-px h-10 bg-secondary/40 hidden sm:block" />
              <div>
                <p className="text-2xl font-display font-bold text-primary">Teak Wood</p>
                <p className="text-xs uppercase tracking-widest text-muted font-bold">Aged & Seasoned</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
