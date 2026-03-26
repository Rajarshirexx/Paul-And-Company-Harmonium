import Hero from './Sections/Hero';
import AboutSection from './Sections/About';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <AboutSection />
            {/* Other sections will go here */}
        </div>
    );
}