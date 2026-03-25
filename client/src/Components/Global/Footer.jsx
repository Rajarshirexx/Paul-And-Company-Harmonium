import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-primary text-secondary py-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Info */}
                    <div className="md:col-span-2 text-secondary">
                        <Link to="/" className="group inline-flex flex-col mb-4">
                            <h2 className="text-3xl font-display font-bold !text-secondary group-hover:!text-accent transition-all duration-300">
                                Paul & Company
                            </h2>
                            <span className="text-[11px] uppercase tracking-[0.4em] !text-accent font-bold -mt-1 group-hover:!text-white transition-all duration-300">
                                Harmonium Builders
                            </span>
                        </Link>
                        <p className="text-secondary/70 max-w-sm leading-relaxed mt-4">
                            Crafting the finest quality harmoniums with traditional 
                            expertise and modern precision. A legacy of musical 
                            excellence since decades.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm text-secondary/60">
                            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="hover:text-accent transition-colors">Our Products</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-display font-semibold text-white mb-4">
                            Contact Info
                        </h3>
                        <ul className="space-y-3 text-sm text-secondary/60">
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>Premium Harmonium Workshop, India</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📧</span>
                                <span className="text-accent underline decoration-accent/30 underline-offset-4">info@paulandcompany.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/40 space-y-4 md:space-y-0">
                    <p>© {currentYear} Paul & Company Harmoniums. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}