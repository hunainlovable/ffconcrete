# Read the current file
with open('/Users/hunainqureshi/Desktop/ffconcrete/src/components/Navigation.tsx', 'r') as f:
    content = f.read()

# Define the new mobile-friendly navigation
new_navigation = '''import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="FF Concrete" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? 'text-accent' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:+1-832-375-4830" className="flex items-center text-foreground hover:text-accent transition-colors text-sm xl:text-base">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden xl:inline">(832)-375-4830</span>
              <span className="xl:hidden">Call Now</span>
            </a>
            <Link to="/contact">
              <Button variant="hero-primary" size="sm" className="text-sm">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-2 font-medium transition-colors hover:text-accent hover:bg-accent/5 rounded-md ${
                    isActive(item.path) ? 'text-accent bg-accent/10' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-border">
                <a href="tel:+1-832-375-4830" className="flex items-center justify-center py-3 px-4 text-foreground hover:text-accent transition-colors bg-accent/5 hover:bg-accent/10 rounded-md">
                  <Phone className="h-4 w-4 mr-2" />
                  (832)-375-4830
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero-primary" className="w-full">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;'''

# Write the updated content
with open('/Users/hunainqureshi/Desktop/ffconcrete/src/components/Navigation.tsx', 'w') as f:
    f.write(new_navigation)

print('Navigation component updated for mobile responsiveness')
