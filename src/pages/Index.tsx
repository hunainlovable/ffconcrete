import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  Palette, 
  Wrench, 
  Users, 
  Shield, 
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Award,
  Calendar,
  Truck
} from 'lucide-react';
import heroImage from '@/assets/hero-concrete.jpg';
import ContactWidget from '@/components/ContactWidget';
import SEO from '@/components/SEO';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FF Concrete",
  "description": "Houston's premier concrete contractor specializing in residential and commercial concrete services including driveways, patios, foundations, and decorative concrete.",
  "url": "https://ffconcrete.com",
  "telephone": "(832)-375-4830",
  "email": "info@ffconcrete.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8000 Harwin Drive",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77036",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.7604",
    "longitude": "-95.3698"
  },
  "openingHours": "Mo-Fr 07:00-18:00,Sa 08:00-16:00",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "29.7604",
      "longitude": "-95.3698"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Concrete Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Concrete",
          "description": "Driveways, patios, sidewalks, and foundations for residential properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Concrete",
          "description": "Commercial foundations, parking lots, and industrial concrete work"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Decorative Concrete",
          "description": "Stamped concrete, colored concrete, and decorative finishes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete Repair",
          "description": "Concrete repair, resurfacing, and restoration services"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
};

const Index = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Concrete',
      description: 'Driveways, patios, sidewalks, and foundations for your home.',
      link: '/services/residential'
    },
    {
      icon: Building2,
      title: 'Commercial Concrete',
      description: 'Large-scale foundations, parking lots, and industrial projects.',
      link: '/services/commercial'
    },
    {
      icon: Palette,
      title: 'Decorative Concrete',
      description: 'Stamped, stained, and polished concrete for stunning finishes.',
      link: '/services/decorative'
    },
    {
      icon: Wrench,
      title: 'Repair & Maintenance',
      description: 'Professional concrete repair and restoration services.',
      link: '/services/repair'
    }
  ];

  const stats = [
    { number: '11+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'West Houston',
      text: 'FF Concrete transformed our backyard with a beautiful stamped concrete patio. The quality and attention to detail exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      location: 'Downtown Houston',
      text: 'Professional, reliable, and fair pricing. They completed our commercial parking lot on time and within budget.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      location: 'Memorial Area',
      text: 'Excellent workmanship on our driveway replacement. The team was courteous and kept us informed throughout the process.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO
        title="FF Concrete | Houston's Premier Concrete Contractor"
        description="FF Concrete is Houston's trusted concrete contractor specializing in driveways, patios, foundations, and decorative concrete. Licensed, insured, and serving Houston for over 15 years."
        keywords="concrete contractor Houston, residential concrete, commercial concrete, driveway installation, patio construction, foundation repair, decorative concrete, stamped concrete, concrete repair Houston"
        structuredData={structuredData}
      />
    <div>
      <ContactWidget />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/90"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="animate-fade-up mb-8">
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-6 py-2 text-sm font-medium backdrop-blur-sm">
                <Award className="mr-2 h-4 w-4" />
                Houston's Premier Concrete Company Since 2013
              </Badge>
            </div>
            
            {/* Main Heading */}
            <div className="animate-fade-up delay-200 mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-tight">
                <span className="block text-primary-foreground">Building</span>
                <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Excellence
                </span>
                <span className="block text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-light mt-4">
                  That Stands the Test of Time
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="animate-fade-up delay-400 mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
                Transform your vision into reality with <span className="font-semibold text-accent">FF Concrete</span> — 
                Houston's trusted partner for premium concrete solutions that combine 
                <span className="font-semibold"> durability, beauty, and innovation</span>.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="animate-fade-up delay-600 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+1-832-375-4830">
                <Button size="lg" variant="hero-primary" className="text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-3 h-6 w-6" />
                  Get Your Free Quote
                </Button>
              </a>
              <Link to="/services">
                <Button variant="hero-secondary" size="lg" className="text-lg px-10 py-6 rounded-xl border-2 border-primary-foreground/30 hover:border-primary-foreground/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  Explore Our Services
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="animate-fade-up delay-800 mt-16 pt-8 border-t border-primary-foreground/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/70">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">500+ Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in py-4 sm:py-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              From residential driveways to commercial foundations, we deliver exceptional concrete solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <div className="mt-4 text-accent font-medium flex items-center justify-center group-hover:text-accent/80">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-accent">FF Concrete?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                With over 11 years of experience serving Houston since 2013, we've earned our reputation through quality work, fair pricing, and exceptional customer service.
              </p>
              
              <div className="space-y-4">
                {[
                  'Licensed and fully insured',
                  'Free detailed estimates',
                  'Quality materials and equipment',
                  'Experienced professional team',
                  'Competitive pricing',
                  'Satisfaction guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Fully Licensed</h3>
                <p className="text-sm text-muted-foreground">Licensed and insured for your peace of mind</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Skilled professionals with years of experience</p>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">On Time</h3>
                <p className="text-sm text-muted-foreground">Projects completed on schedule</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Top Quality</h3>
                <p className="text-sm text-muted-foreground">Premium materials and workmanship</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to project completion, we follow a proven process that ensures quality results on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Free Consultation</h3>
              <p className="text-muted-foreground text-sm">We assess your project needs and provide a detailed, no-obligation quote.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Project Planning</h3>
              <p className="text-muted-foreground text-sm">Detailed planning, permit acquisition, and scheduling to ensure smooth execution.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Professional Execution</h3>
              <p className="text-muted-foreground text-sm">Our experienced team delivers quality workmanship using premium materials.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">4. Quality Guarantee</h3>
              <p className="text-muted-foreground text-sm">Final inspection and our satisfaction guarantee for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from satisfied customers across Houston.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Ready to Start Your <span className="text-accent">Project?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Get a free, no-obligation quote for your concrete project. Our team is ready to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1-832-375-4830">
              <Button size="lg" variant="hero-primary" className="text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call (832)-375-4830
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-secondary" size="lg" className="text-lg px-8 py-4">
                Contact Us Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;