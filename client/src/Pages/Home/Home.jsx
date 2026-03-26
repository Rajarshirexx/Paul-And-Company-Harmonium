import Hero from './Sections/Hero';
import AboutSection from './Sections/About';
import ProductSection from './Sections/ProductSection';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <AboutSection />
            <ProductSection />
            {/* Other sections will go here */}
        </div>
    );
}