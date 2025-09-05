import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  Mountain, 
  FlameKindling,
  ChefHat,
  CheckCircle,
  ArrowRight,
  Phone,
  Lightbulb
} from 'lucide-react';

const Custom = () => {
  const services = [
    {
      icon: Mountain,
      title: 'Retaining Walls',
      description: 'Custom concrete retaining walls for erosion control, landscaping, and structural support.',
      features: ['Engineered designs', 'Decorative options', 'Drainage systems', 'Long-lasting stability']
    },
    {
      icon: ChefHat,
      title: 'Outdoor Kitchens',
      description: 'Complete concrete solutions for outdoor kitchen islands, countertops, and cooking spaces.',
      features: ['Custom countertops', 'Built-in features', 'Weather resistant', 'Heat resistant surfaces']
    },
    {
      icon: FlameKindling,
      title: 'Fire Pits & Features',
      description: 'Custom concrete fire pits, fireplaces, and decorative fire features for your outdoor space.',
      features: ['Custom shapes', 'Heat-resistant concrete', 'Gas or wood burning', 'Integrated seating']
    },
    {
      icon: Hammer,
      title: 'Specialty Projects',
      description: 'Unique concrete projects including planters, benches, architectural elements, and more.',
      features: ['Custom designs', 'Artistic elements', 'Functional features', 'Unique solutions']
    }
  ];

  const projectTypes = [
    'Outdoor Living Spaces',
    'Garden & Landscape Features',
    'Architectural Elements',
    'Custom Furniture',
    'Water Features',
    'Sports Courts',
    'Workshop Floors',
    'Art Installations'
  ];

  const capabilities = [
    'Custom design consultation',
    '3D modeling and visualization',
    'Structural engineering',
    'Decorative concrete integration',
    'Multi-phase project management',
    'Unique problem solving'
  ];

  const features = [
    {
      title: 'Design Freedom',
      description: 'No limits on creativity - we can bring any concrete vision to life.'
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Skilled artisans with experience in complex custom concrete work.'
    },
    {
      title: 'Quality Materials',
      description: 'Premium concrete mixes and reinforcement for lasting results.'
    },
    {
      title: 'Project Management',
      description: 'Full project coordination from concept to completion.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom <span className="text-accent">Concrete Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bring your unique vision to life with custom concrete solutions. From outdoor living spaces 
              to architectural features, we create one-of-a-kind concrete projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Lightbulb className="mr-2 h-5 w-5" />
                Start Your Custom Project
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="btn-hero-secondary text-lg px-8 py-4">
                  Design Consultation
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
              Custom <span className="text-accent">Specialties</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our custom concrete services combine functionality with artistic design to create unique features for your property.
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

      {/* Project Types */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Project <span className="text-accent">Types</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We've completed custom concrete projects across a wide range of applications and styles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {projectTypes.map((type, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Custom <span className="text-accent">Capabilities</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                With years of experience in custom concrete work, we have the skills and expertise 
                to tackle even the most challenging and unique projects.
              </p>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent mr-3" />
                    <span className="text-lg">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Project <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our collaborative approach ensures your custom concrete project exceeds your expectations.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Initial Consultation</h3>
              <p className="text-muted-foreground text-sm">Discuss your vision and project requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Design Development</h3>
              <p className="text-muted-foreground text-sm">Create detailed designs and 3D visualizations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Engineering & Planning</h3>
              <p className="text-muted-foreground text-sm">Structural analysis and detailed project planning.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Custom Fabrication</h3>
              <p className="text-muted-foreground text-sm">Skilled craftsmanship and precise execution.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">5</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Final Finishing</h3>
              <p className="text-muted-foreground text-sm">Detailed finishing and quality inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Ready to Create Something <span className="text-accent">Amazing?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let's bring your unique concrete vision to life. Schedule a consultation to discuss your custom project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call: (713) 555-0123
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="btn-hero-secondary text-lg px-8 py-4">
                Start Your Custom Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Custom;