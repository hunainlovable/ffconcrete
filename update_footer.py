# Read the current file
with open('/Users/hunainqureshi/Desktop/ffconcrete/src/components/Footer.tsx', 'r') as f:
    content = f.read()

# Define the new mobile-friendly footer
new_footer = '''import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="FF Concrete" 
                className="h-6 sm:h-8 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm sm:text-base">
              Building strength that lasts. Houston's premier concrete services company since 2013.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ffconcrete" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://instagram.com/ffconcrete" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://linkedin.com/company/ffconcrete" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/residential" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Residential Concrete
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Commercial Concrete
                </Link>
              </li>
              <li>
                <Link to="/services/decorative" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Decorative Concrete
                </Link>
              </li>
              <li>
                <Link to="/services/repair" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Repair & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm sm:text-base">
                  <p>8000 Harwin Drive</p>
                  <p>Houston, TX 77036</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-accent flex-shrink-0" />
                <a href="tel:+1-832-375-4830" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  (832)-375-4830
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-accent flex-shrink-0" />
                <a href="mailto:info@ffconcrete.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base break-all">
                  info@ffconcrete.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm">
            © 2024 FF Concrete. All rights reserved. | Licensed & Insured | 
            <Link to="/privacy" className="hover:text-accent ml-1 sm:ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-accent ml-1 sm:ml-2">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;'''

# Write the updated content
with open('/Users/hunainqureshi/Desktop/ffconcrete/src/components/Footer.tsx', 'w') as f:
    f.write(new_footer)

print('Footer component updated for mobile responsiveness')
