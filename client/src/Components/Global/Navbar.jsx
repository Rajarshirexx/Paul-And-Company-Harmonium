import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/10' 
                : 'py-5 bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="group flex flex-col">
                    <span className="text-2xl font-display font-bold color-heading leading-tight group-hover:scale-105 transition-transform duration-300 text-primary">
                        Paul & Company
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted font-semibold">
                        Harmonium Builders
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-semibold transition-colors duration-300 relative group ${
                                isActive(link.path) 
                                ? 'text-primary' 
                                : 'text-primary/70 hover:text-primary'
                            }`}
                        >
                            {link.name}
                            <span 
                                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                            />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link to="/contact" className="btn-primary py-2.5 px-7 text-xs shadow-lg shadow-primary/20">
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-primary focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div 
                className={`fixed inset-0 bg-primary z-[100] md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                }`}
            >
                {/* Close Button Inside Drawer */}
                <button 
                    className="absolute top-8 right-8 text-secondary hover:text-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-3xl font-display font-bold tracking-widest ${
                            isActive(link.path) ? 'text-accent' : 'text-secondary hover:text-accent font-light opacity-80'
                        } transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-8'}`}
                    >
                        {link.name}
                    </Link>
                ))}
                
                <div className={`mt-10 transition-all duration-500 delay-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Link 
                        to="/contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className="btn-accent py-4 px-12 text-sm uppercase tracking-widest font-bold"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Bottom Info */}
                <div className="absolute bottom-12 text-center text-secondary/40">
                    <p className="text-[10px] uppercase tracking-widest mb-1">Authentic Kolkata Harmoniums</p>
                    <p className="text-xs font-semibold">Paul & Company © {new Date().getFullYear()}</p>
                </div>
            </div>
        </nav>
    );
}