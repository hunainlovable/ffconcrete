import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  Building2, 
  Truck, 
  Factory,
  Store,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield
} from 'lucide-react';

const Commercial = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Foundations',
      description: 'Heavy-duty foundations for office buildings, retail spaces, and commercial facilities.',
      features: ['High-strength concrete', 'Custom reinforcement', 'Load-bearing calculations', 'Code compliance']
    },
    {
      icon: Truck,
      title: 'Parking Lots & Driveways',
      description: 'Durable parking solutions designed to handle heavy traffic and commercial vehicle loads.',
      features: ['Traffic-rated concrete', 'Proper drainage systems', 'ADA compliance', 'Line striping preparation']
    },
    {
      icon: Factory,
      title: 'Warehouse & Industrial Floors',
      description: 'Industrial-grade concrete floors for warehouses, manufacturing facilities, and distribution centers.',
      features: ['Heavy-duty concrete mixes', 'Joint-free installations', 'Chemical resistant options', 'Forklift-rated surfaces']
    },
    {
      icon: Store,
      title: 'Loading Docks & Ramps',
      description: 'Specialized concrete work for loading areas, ramps, and heavy equipment platforms.',
      features: ['Reinforced concrete design', 'Proper slope calculations', 'Safety compliance', 'Weather-resistant finish']
    }
  ];

  const industries = [
    'Retail & Shopping Centers',
    'Office Buildings',
    'Warehouses & Distribution',
    'Manufacturing Facilities',
    'Healthcare Facilities',
    'Educational Institutions',
    'Restaurants & Food Service',
    'Automotive Services'
  ];

  const advantages = [
    'Licensed for commercial projects',
    'Bonded and fully insured',
    'Experienced with large-scale projects',
    'Code compliance guaranteed',
    'Project management expertise',
    'Competitive commercial pricing'
  ];

  return (
    <>
      <SEO
        title="FF Concrete Commercial Services | Foundations & Parking Lots Houston"
        description="FF Concrete provides commercial concrete services including foundations, parking lots, and industrial concrete work. Professional commercial concrete contractor in Houston."
        keywords="commercial concrete Houston, commercial foundations, parking lot construction, industrial concrete, commercial concrete contractor Houston"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Commercial <span className="text-accent">Concrete Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional concrete solutions for businesses throughout Houston. From foundations to parking lots, 
              we deliver commercial-grade results on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Get Commercial Quote
              </Button>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Site Visit
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
              Commercial <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique requirements of commercial concrete projects and deliver solutions that meet your business needs.
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

      {/* Industries Served */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-accent">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commercial concrete expertise spans across multiple industries throughout Houston.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial <span className="text-accent">Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                When your business needs reliable concrete work, FF Concrete delivers the expertise, 
                quality, and professionalism that commercial projects demand.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent mr-3" />
                    <span className="text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="text-center mb-6">
                <Shield className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Fully Licensed & Insured</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Commercial License</span>
                  <span className="text-accent font-semibold">✓ Active</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>General Liability</span>
                  <span className="text-accent font-semibold">✓ $2M</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Workers Compensation</span>
                  <span className="text-accent font-semibold">✓ Full</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Bonding Available</span>
                  <span className="text-accent font-semibold">✓ Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Project <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our structured approach ensures your commercial concrete project is completed efficiently and professionally.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Site Assessment</h3>
              <p className="text-muted-foreground">Detailed evaluation of project requirements and site conditions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design & Engineering</h3>
              <p className="text-muted-foreground">Professional design with proper calculations and code compliance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-muted-foreground">Coordinated execution with timeline management and quality control.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Final Inspection</h3>
              <p className="text-muted-foreground">Thorough quality inspection and project documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Ready for Your <span className="text-accent">Commercial Project?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with Houston's trusted commercial concrete specialists. Get your detailed quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+1-832-375-4830" className="text-accent hover:text-accent/80 transition-colors">Call: (832)-375-4830</a>
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                Request Commercial Quote
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

export default Commercial;