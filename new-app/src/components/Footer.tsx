import { Link } from 'react-router-dom';
import { Palmtree as PalmtreeFill, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link to="/" className="flex items-center space-x-2">
                            <PalmtreeFill className="h-6 w-6" />
                            <span className="font-bold">Visit Sri Lanka</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Discover the beauty of Sri Lanka - from pristine beaches to ancient temples, wildlife
                            sanctuaries to tea plantations.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/destinations" className="text-sm text-muted-foreground hover:text-primary">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link to="/hotels" className="text-sm text-muted-foreground hover:text-primary">
                                    Hotels
                                </Link>
                            </li>
                            <li>
                                <Link to="/map" className="text-sm text-muted-foreground hover:text-primary">
                                    Map
                                </Link>
                            </li>
                            <li>
                                <Link to="/translator" className="text-sm text-muted-foreground hover:text-primary">
                                    Translator
                                </Link>
                            </li>
                            <li>
                                <Link to="/weather" className="text-sm text-muted-foreground hover:text-primary">
                                    Weather Forecast
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Visit Sri Lanka. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
