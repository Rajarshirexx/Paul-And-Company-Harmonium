import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '3-reed-9-scale',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log('Form Submitted:', formData);
    alert('Thank you for your interest! Our international team will contact you shortly.');
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-display font-bold text-primary mb-8">
              Start Your <br />
              <span className="text-accent underline decoration-secondary decoration-8 underline-offset-[-2px]">Consultation</span>
            </h2>
            
            <p className="text-muted mb-12 leading-relaxed">
              We offer personalized consultations for international musicians. 
              Our team will guide you through scale selection, custom reed voicing, 
              and the logistics of safe transit from Kolkata to your doorstep.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase text-xs tracking-widest">Workshop Address</h4>
                  <p className="text-sm text-muted">A-1, Masterpiece Chambers, Kolkata, India</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase text-xs tracking-widest">Global Inquiries</h4>
                  <p className="text-sm text-muted">orders@paulandcompany.org</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase text-xs tracking-widest">Response Time</h4>
                  <p className="text-sm text-muted">Within 24-48 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:flex-1">
            <div className="bg-bg p-8 md:p-12 rounded-[2rem] shadow-sm border border-secondary/40">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-muted ml-1">Full Name</label>
                    <input 
                      type="text" name="name" required
                      className="w-full bg-white border-b border-secondary p-3 outline-none focus:border-accent transition-colors"
                      placeholder="e.g. Pt. Ravi Singh"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-muted ml-1">Email Address</label>
                    <input 
                      type="email" name="email" required
                      className="w-full bg-white border-b border-secondary p-3 outline-none focus:border-accent transition-colors"
                      placeholder="ravi@music.com"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-muted ml-1">Phone (with Country Code)</label>
                    <input 
                      type="tel" name="phone"
                      className="w-full bg-white border-b border-secondary p-3 outline-none focus:border-accent transition-colors"
                      placeholder="+1 234 567 890"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-muted ml-1">Desired Model</label>
                    <select 
                      name="product"
                      className="w-full bg-white border-b border-secondary p-3 outline-none focus:border-accent transition-colors"
                      onChange={handleChange}
                      value={formData.product}
                    >
                      <option value="3-reed-7-scale">3 Reed 7 Scale Change</option>
                      <option value="3-reed-9-scale">3 Reed 9 Scale Change</option>
                      <option value="3-reed-11-scale">3 Reed 11 Scale Change</option>
                      <option value="4-reed-13-scale">4 Reed 13 Scale Change</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-muted ml-1">Your Message or Customization Needs</label>
                  <textarea 
                    name="message" rows="4" required
                    className="w-full bg-white border-b border-secondary p-3 outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your musical journey and what you are looking for..."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto btn-primary px-16 py-4 text-xs tracking-[0.2em] font-bold uppercase shadow-xl hover:shadow-primary/20"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
