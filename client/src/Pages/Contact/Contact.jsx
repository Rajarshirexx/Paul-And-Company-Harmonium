import React, { useState } from 'react';
import overlayImg from '../../assets/overlay.jpg';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="bg-bg min-h-screen pb-24 font-sans text-primary">
      {/* Hero Header */}
      <section className="relative bg-primary pt-32 pb-24 text-center overflow-hidden">
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
          style={{ 
            backgroundImage: `url(${overlayImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6 animate-slideDown">
            Get in <span className="text-accent italic">Touch</span>
          </h1>
          <p className="text-secondary/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Whether you are a seasoned maestro or beginning your musical journey, 
            our experts are here to help you find your perfect instrument.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-secondary/40">
              <h3 className="text-2xl font-display font-bold text-primary mb-8">Workshop Direct</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/30 flex items-center justify-center flex-shrink-0 text-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Expert WhatsApp Consultancy</p>
                    <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="text-lg font-bold text-primary hover:text-accent transition-colors">+91 XXXXX XXXXX</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/30 flex items-center justify-center flex-shrink-0 text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Corporate Email</p>
                    <a href="mailto:info@paulandcompany.com" className="text-lg font-bold text-primary hover:text-accent transition-colors">info@paulandcompany.com</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/30 flex items-center justify-center flex-shrink-0 text-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Authentic Workshop</p>
                    <p className="text-lg font-bold text-primary leading-tight">Paul & Co. Workshop,<br/>Kolkata, West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Card */}
            <div className="bg-primary text-secondary rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <h4 className="text-xl font-display font-bold mb-4 relative z-10">Authenticity Note</h4>
              <p className="text-sm text-secondary/70 leading-relaxed relative z-10">
                Beware of third-party websites claiming to be Paul & Co. We operate exclusively 
                through direct communication and authorized musical dealers to ensure 
                you receive a genuine, hand-tuned masterpiece.
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl border border-secondary/40 h-full">
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-primary mb-4">Inquiry Received</h3>
                  <p className="text-muted max-w-sm mx-auto mb-8">
                    Thank you for your interest in our instruments. A Paul & Co. 
                    representative will reach out to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-accent font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <h2 className="text-4xl font-display font-bold text-primary mb-4">Professional Inquiry</h2>
                    <p className="text-muted">Fill out the form below for specialist advice or a custom quote.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-primary tracking-widest">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-bg border-b-2 border-secondary focus:border-accent outline-none py-3 px-1 transition-all text-primary font-medium placeholder:text-muted/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-primary tracking-widest">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full bg-bg border-b-2 border-secondary focus:border-accent outline-none py-3 px-1 transition-all text-primary font-medium placeholder:text-muted/40"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-primary tracking-widest">Instrument of Interest</label>
                      <select className="w-full bg-bg border-b-2 border-secondary focus:border-accent outline-none py-3 px-1 transition-all text-primary font-medium appearance-none">
                        <option>Choose a model...</option>
                        <option>3 Reed 7 Scale Change</option>
                        <option>3 Reed 9 Scale Change</option>
                        <option>3 Reed 11 Scale Change</option>
                        <option>4 Reed 13 Scale Change</option>
                        <option>Custom Instrument Order</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-primary tracking-widest">Your Message</label>
                      <textarea 
                        required
                        rows="4"
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-bg border-b-2 border-secondary focus:border-accent outline-none py-3 px-1 transition-all text-primary font-medium placeholder:text-muted/40 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      disabled={formState === 'sending'}
                      type="submit"
                      className="btn-primary w-full md:w-fit px-16 py-5 text-sm uppercase tracking-[0.2em] shadow-xl shadow-primary/10 disabled:opacity-50"
                    >
                      {formState === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Section */}
      <section className="mt-24 pt-24 border-t border-secondary/40">
        <div className="container mx-auto px-6">
          <div className="bg-secondary/30 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none grayscale" style={{ backgroundImage: `url(${overlayImg})`, backgroundSize: 'cover' }} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 relative z-10">Global Harmony Shipping</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed mb-12 relative z-10">
              We understand the delicate nature of these handmade instruments. 
              Our workshop employs industrial-grade custom wooden crating and triple-layer 
              cushioning for every international shipment, ensuring your harmonium 
              reaches you in perfect tune, anywhere in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-12 relative z-10">
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">📦</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Custom Wood Crating</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">✈️</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Air-Express Worldwide</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🛠️</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Tuning Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}