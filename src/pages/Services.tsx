import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  Home, 
  Building2, 
  Palette, 
  Wrench, 
  Hammer,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Concrete',
      description: 'Transform your home with professional concrete solutions including driveways, patios, sidewalks, and foundations.',
      features: ['Driveways & Walkways', 'Patios & Pool Decks', 'Home Foundations', 'Garage Floors'],
      link: '/services/residential',
      image: 'residential'
    },
    {
      icon: Building2,
      title: 'Commercial Concrete',
      description: 'Large-scale concrete projects for businesses, including foundations, parking lots, and industrial facilities.',
      features: ['Commercial Foundations', 'Parking Lots', 'Warehouse Floors', 'Loading Docks'],
      link: '/services/commercial',
      image: 'commercial'
    },
    {
      icon: Palette,
      title: 'Decorative Concrete',
      description: 'Beautiful stamped, stained, and polished concrete that combines durability with stunning aesthetics.',
      features: ['Stamped Concrete', 'Stained Concrete', 'Polished Concrete', 'Exposed Aggregate'],
      link: '/services/decorative',
      image: 'decorative'
    },
    {
      icon: Wrench,
      title: 'Concrete Repair & Maintenance',
      description: 'Professional repair services to restore and maintain your existing concrete structures.',
      features: ['Crack Repair', 'Surface Restoration', 'Joint Sealing', 'Concrete Leveling'],
      link: '/services/repair',
      image: 'repair'
    },
    {
      icon: Hammer,
      title: 'Custom Concrete Projects',
      description: 'Specialized concrete work including retaining walls, outdoor living spaces, and unique architectural elements.',
      features: ['Retaining Walls', 'Outdoor Kitchens', 'Fire Pits', 'Custom Designs'],
      link: '/services/custom',
      image: 'custom'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet with you to discuss your project requirements, timeline, and budget.'
    },
    {
      step: '02',
      title: 'Design & Estimate',
      description: 'Our team creates a detailed plan and provides a comprehensive, transparent estimate.'
    },
    {
      step: '03',
      title: 'Preparation',
      description: 'We prepare the site, ensuring proper grading, forms, and reinforcement as needed.'
    },
    {
      step: '04',
      title: 'Installation',
      description: 'Our experienced crew pours and finishes your concrete using professional techniques.'
    },
    {
      step: '05',
      title: 'Final Inspection',
      description: 'We conduct a thorough inspection and walk-through to ensure your complete satisfaction.'
    }
  ];

  return (
    <>
      <SEO
        title="Concrete Services Houston | Residential & Commercial Solutions"
        description="FF Concrete offers comprehensive concrete services in Houston including residential driveways, commercial foundations, decorative concrete, and repair services. Licensed and insured."
        keywords="concrete services Houston, residential concrete services, commercial concrete Houston, driveway installation, foundation construction, decorative concrete, concrete repair services"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From residential driveways to commercial foundations, FF Concrete delivers expert solutions 
              tailored to your specific needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mr-6 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.link}>
                    <Button className="w-full group-hover:bg-accent/90 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven 5-step process to ensure every project is completed to the highest standards, 
              on time and within budget.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-accent text-accent-foreground font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="text-accent">Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We proudly serve Houston and surrounding areas with professional concrete services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Houston', 'Katy', 'Sugar Land', 'The Woodlands',
              'Pearland', 'Pasadena', 'Spring', 'Humble',
              'Cypress', 'Richmond', 'Stafford', 'Missouri City'
            ].map((area, index) => (
              <div key={index} className="bg-muted rounded-lg p-4 text-center hover:bg-accent/10 transition-colors">
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Ready to Get <span className="text-accent">Started?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contact us today for a free consultation and detailed estimate for your concrete project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1-832-375-4830">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call (832)-375-4830
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                Get Free Quote
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

export default Services;