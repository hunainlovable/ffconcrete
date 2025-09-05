import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  Palette, 
  Sparkles, 
  Gem,
  Brush,
  CheckCircle,
  ArrowRight,
  Phone,
  Eye
} from 'lucide-react';

const Decorative = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Stamped Concrete',
      description: 'Create the look of brick, stone, or tile with stamped concrete patterns and textures.',
      features: ['Multiple pattern options', 'Color customization', 'Texture variety', 'Cost-effective alternative']
    },
    {
      icon: Palette,
      title: 'Stained Concrete',
      description: 'Transform plain concrete with beautiful acid stains and water-based coloring systems.',
      features: ['Acid stain options', 'Water-based stains', 'Variegated color effects', 'UV-resistant finishes']
    },
    {
      icon: Gem,
      title: 'Polished Concrete',
      description: 'Achieve a high-gloss, mirror-like finish with our professional concrete polishing services.',
      features: ['Multiple gloss levels', 'Densified surface', 'Low maintenance', 'Dust-free finish']
    },
    {
      icon: Brush,
      title: 'Exposed Aggregate',
      description: 'Reveal the natural beauty of aggregate materials for a unique, textured concrete surface.',
      features: ['Various aggregate types', 'Slip-resistant surface', 'Natural appearance', 'Durable finish']
    }
  ];

  const applications = [
    'Residential Patios',
    'Pool Decks',
    'Driveways',
    'Walkways',
    'Interior Floors',
    'Commercial Spaces',
    'Restaurant Floors',
    'Retail Showrooms'
  ];

  const benefits = [
    'Unique aesthetic appeal',
    'Durable and long-lasting',
    'Low maintenance requirements',
    'Cost-effective beauty',
    'Slip-resistant options',
    'Weather resistant'
  ];

  const colorOptions = [
    'Earth Tones',
    'Slate Gray',
    'Terracotta',
    'Sandstone',
    'Charcoal',
    'Russet',
    'Custom Colors'
  ];

  return (
    <>
      <SEO
        title="Decorative Concrete Houston | Stamped & Colored Concrete Services"
        description="FF Concrete specializes in decorative concrete including stamped concrete, colored concrete, and decorative finishes. Transform your Houston property with beautiful decorative concrete."
        keywords="decorative concrete Houston, stamped concrete, colored concrete, decorative concrete finishes, concrete staining Houston"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Decorative <span className="text-accent">Concrete Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform ordinary concrete into stunning architectural features. Our decorative concrete solutions 
              combine beauty with durability for lasting visual impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Get Design Quote
              </Button>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                  View Portfolio
                  <Eye className="ml-2 h-5 w-5" />
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
              Decorative <span className="text-accent">Options</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From elegant stamped patterns to vibrant stained finishes, we offer a complete range of decorative concrete services.
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

      {/* Color & Pattern Options */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Endless Design <span className="text-accent">Possibilities</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Choose from our extensive selection of colors, patterns, and textures to create 
                the perfect decorative concrete solution for your space.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Popular Color Options</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {colorOptions.map((color, index) => (
                      <div key={index} className="bg-muted rounded px-3 py-2 text-sm">
                        {color}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Pattern Styles</h3>
                  <div className="space-y-2">
                    {['Slate Stone', 'Brick Pattern', 'Cobblestone', 'Wood Plank', 'Flagstone', 'Custom Designs'].map((pattern, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        <span>{pattern}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Popular Applications</h3>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <span className="font-medium">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-accent">Decorative Concrete?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Decorative concrete offers the perfect combination of beauty, durability, and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Design <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to completion, we work with you to create the perfect decorative concrete solution.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design Consultation</h3>
              <p className="text-muted-foreground">Discuss your vision and explore design options.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sample & Selection</h3>
              <p className="text-muted-foreground">View samples and finalize colors and patterns.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
              <p className="text-muted-foreground">Expert installation with attention to detail.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sealing & Protection</h3>
              <p className="text-muted-foreground">Protective sealing for long-lasting beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Transform Your Space with <span className="text-accent">Decorative Concrete</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Ready to create something beautiful? Let's discuss your decorative concrete project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+1-832-375-4830" className="text-accent hover:text-accent/80 transition-colors">Call: (832)-375-4830</a>
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Design Consultation
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

export default Decorative;