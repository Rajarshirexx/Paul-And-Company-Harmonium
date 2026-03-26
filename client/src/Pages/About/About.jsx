import React from 'react';
import legacyImg from '../../assets/img-2305.jpg';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6 animate-slideDown">
            Our <span className="text-accent italic">Legacy</span>
          </h1>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
            A tradition of musical excellence, born in Kolkata and celebrated by
            masters across the globe.
          </p>
        </div>
      </section>

      {/* The Ancestry Section */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-fadeIn">
              <div className="inline-block px-4 py-1.5 bg-secondary/30 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Ancestry & Roots
              </div>
              <h2 className="text-4xl font-display font-bold text-primary mb-8 leading-tight">
                From Vaudeville to <br />
                <span className="text-accent">Classical Mastery</span>
              </h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                The story of Paul & Company doesn't just begin in a workshop; it begins with a deep,
                performing knowledge of Indian Classical Music. Our founder's father, the late
                <strong> Sri Kshitish Chandra Paul</strong>, was an accomplished violinist and a
                dedicated disciple of the legendary <strong>Ustad Allauddin Khan</strong>.
              </p>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                This musical lineage is carried forward today by Sri Batta Krishna Paul, known affectionately
                as "Paul Babu." Having learned the art of craftsmanship from his father, Paul Babu
                understands the harmonium not just as an instrument of wood and reed, but as a bridge
                between the musician and the divine.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700 border-8 border-white">
                <img src={legacyImg} alt="Paul Babu and Family" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent text-primary p-8 rounded-2xl shadow-xl hidden md:block animate-float">
                <p className="text-4xl font-display font-bold">30+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Consistency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The "Rolls-Royce" Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              The "Rolls-Royce" of Harmoniums
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-8" />
            <p className="text-lg text-muted italic leading-relaxed">
              "We noticed a difference in the quality with other makers... and hence
              maintained our uncompromising standards for over three decades."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 color-card hover:bg-secondary/10">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-bold">1</div>
              <h4 className="text-xl font-bold text-primary mb-4">Seasoned Teak</h4>
              <p className="text-sm text-muted leading-relaxed">Only the finest hard woods are used for internal construction to ensure the resonance of sound and long-term durability.</p>
            </div>
            <div className="p-8 color-card hover:bg-secondary/10">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-bold">2</div>
              <h4 className="text-xl font-bold text-primary mb-4">Palitana Reeds</h4>
              <p className="text-sm text-muted leading-relaxed">Every Palitana reed is meticulously voiced by Paul Babu himself, enabling the fast virtuostic runs necessary for Ghazal and Classical Music.</p>
            </div>
            <div className="p-8 color-card hover:bg-secondary/10">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display font-bold">3</div>
              <h4 className="text-xl font-bold text-primary mb-4">Quick Response</h4>
              <p className="text-sm text-muted leading-relaxed">Superior keyboard action designed for professional accompaniment, offering a "quick response" and effortless playability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authenticity Pledge Section */}
      <section className="py-24 bg-dark text-secondary overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none select-none">
          <h2 className="text-[20rem] font-display font-bold whitespace-nowrap">AUTHENTICITY</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-accent/40 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Official Brand Advisory</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">
              A Warning on Counterfeit Brands
            </h2>

            <div className="space-y-8 text-lg text-secondary/80 leading-relaxed text-left md:text-center">
              <p>
                In recent years, we have noticed many "fake Pauls" appearing on mass-market platforms.
                Specifically, unauthorized websites selling "H Paul & Co." are NOT affiliated with the
                legendary Paul Babu workshop in Kolkata.
              </p>
              <p className="p-8 bg-primary/40 rounded-2xl border border-secondary/10 italic">
                "Paul Babu has no other official website. We have received many complaints about the quality
                of these imitations. This platform remains the ONLY direct gateway to ensure your instrument
                comes straight from the Paul family hands."
              </p>
              <p>
                We source every instrument through a direct pipeline to the Kolkata workshop, ensuring
                that international customers receive only the guaranteed heritage quality that professionals expect.
              </p>
            </div>

            <div className="mt-16">
              <Link to="/contact" className="btn-accent px-12 py-4">
                Verify Your Instrument
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & International Section */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-primary mb-8">Global Shipping & Protection</h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                We understand the anxiety of shipping a delicate instrument halfway across the world.
                That is why every Paul & Company harmonium is packed in a
                <strong> Suitcase-style fold-up box</strong>, designed to withstand the rigors of international travel.
              </p>
              <p>
                Our instruments can now be shipped to <strong>Europe and Asia</strong> at very reasonable rates.
                Each price includes a specialized $25 packing fee to ensure professional-grade protection.
              </p>
              <p className="text-sm font-bold text-primary italic border-l-2 border-accent pl-4">
                ATTENTION: If you are ordering a pre-paid or out-of-stock instrument, we work directly
                with the workshop to speed up the delivery process for you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-center shadow-sm border border-secondary/40">
              <h5 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Packing</h5>
              <p className="text-3xl font-display font-bold text-primary">$25</p>
              <p className="text-[10px] text-muted">Fixed Protection Fee</p>
            </div>
            <div className="aspect-square bg-primary rounded-3xl p-8 flex flex-col justify-center shadow-lg">
              <h5 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Coverage</h5>
              <p className="text-xl font-display font-bold text-secondary leading-tight">Europe &<br />Asia Shipping</p>
            </div>
            <div className="aspect-square bg-secondary/30 rounded-3xl p-8 flex flex-col justify-center">
              <h5 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Tuning</h5>
              <p className="text-xl font-display font-bold text-primary leading-tight">Verified &<br />Stable</p>
            </div>
            <div className="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-center shadow-sm border border-secondary/40">
              <h5 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Build</h5>
              <p className="text-3xl font-display font-bold text-primary">Hand</p>
              <p className="text-[10px] text-muted">Made in Kolkata</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}