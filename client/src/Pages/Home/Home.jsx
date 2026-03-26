import Hero from './Sections/Hero';
import AboutSection from './Sections/About';
import ProductSection from './Sections/ProductSection';
import CTASection from './Sections/CTASection';
import ContactSection from './Sections/ContactSection';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <AboutSection />
            <ProductSection />
            <CTASection />
            <ContactSection />
        </div>
    );
}