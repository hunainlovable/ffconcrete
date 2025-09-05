import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              FF<span className="text-accent">Concrete</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Building strength that lasts. Houston's premier concrete services company with over 15 years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/residential" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Residential Concrete
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Commercial Concrete
                </Link>
              </li>
              <li>
                <Link to="/services/decorative" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Decorative Concrete
                </Link>
              </li>
              <li>
                <Link to="/services/repair" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Repair & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent" />
                <div className="text-primary-foreground/80">
                  <p>1234 Houston Avenue</p>
                  <p>Houston, TX 77001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:+1-713-555-0123" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  (713) 555-0123
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:info@ffconcrete.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@ffconcrete.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 FF Concrete. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;