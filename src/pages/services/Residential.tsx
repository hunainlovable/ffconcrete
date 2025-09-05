import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Car, 
  TreePine,
  Waves,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

const Residential = () => {
  const services = [
    {
      icon: Car,
      title: 'Driveways',
      description: 'Durable concrete driveways that enhance your home\'s curb appeal and provide long-lasting functionality.',
      features: ['Standard concrete driveways', 'Decorative finishes available', 'Proper drainage included', 'Multiple width options']
    },
    {
      icon: Home,
      title: 'Patios & Pool Decks',
      description: 'Create beautiful outdoor living spaces with custom concrete patios and pool surrounds.',
      features: ['Custom shapes and sizes', 'Slip-resistant surfaces', 'Decorative options', 'Pool-safe materials']
    },
    {
      icon: TreePine,
      title: 'Sidewalks & Walkways',
      description: 'Safe, attractive walkways that connect your outdoor spaces and improve accessibility.',
      features: ['ADA compliant options', 'Various width configurations', 'Decorative borders', 'Proper slope for drainage']
    },
    {
      icon: Waves,
      title: 'Home Foundations',
      description: 'Solid foundations that provide the structural integrity your home needs for decades to come.',
      features: ['Slab-on-grade foundations', 'Basement foundations', 'Crawl space foundations', 'Proper reinforcement']
    }
  ];

  const benefits = [
    'Increase property value',
    'Low maintenance requirements',
    'Weather resistant and durable',
    'Customizable design options',
    'Cost-effective solution',
    'Quick installation process'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Residential <span className="text-accent">Concrete Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your home with professional concrete solutions. From driveways to patios, 
              we create beautiful, durable concrete features that enhance your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="btn-hero-secondary text-lg px-8 py-4">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Residential <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in residential concrete projects that combine functionality with aesthetic appeal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Concrete for Your <span className="text-accent">Home?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Concrete offers unmatched durability, versatility, and value for residential applications. 
                Here's why homeowners throughout Houston choose concrete solutions:
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent mr-3" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Popular Add-Ons</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Decorative Stamping</span>
                  <span className="text-accent font-semibold">Available</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Color Staining</span>
                  <span className="text-accent font-semibold">Available</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Exposed Aggregate</span>
                  <span className="text-accent font-semibold">Available</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Decorative Borders</span>
                  <span className="text-accent font-semibold">Available</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Sealing & Protection</span>
                  <span className="text-accent font-semibold">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Installation <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We follow a proven process to ensure your residential concrete project exceeds expectations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Site Preparation</h3>
              <p className="text-muted-foreground">Excavation, grading, and base preparation for optimal results.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Forming & Reinforcement</h3>
              <p className="text-muted-foreground">Precise forms and proper reinforcement for structural integrity.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Pour & Finish</h3>
              <p className="text-muted-foreground">Professional pouring and finishing for a beautiful, durable surface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Transform Your Home with <span className="text-accent">Quality Concrete</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Ready to enhance your property with professional concrete work? Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (713) 555-0123
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="btn-hero-secondary text-lg px-8 py-4">
                Request Quote Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;