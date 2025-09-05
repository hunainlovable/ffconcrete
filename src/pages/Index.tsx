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
  Phone
} from 'lucide-react';
import heroImage from '@/assets/hero-concrete.jpg';

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
    { number: '15+', label: 'Years Experience' },
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
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent border-accent/30">
              Houston's Premier Concrete Company
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow">
              Building Strength That <span className="text-accent">Lasts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Professional concrete services for residential and commercial projects. 
              Licensed, insured, and committed to excellence since 2009.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
              <Link to="/services">
                <Button variant="outline" size="lg" className="btn-hero-secondary text-lg px-8 py-4">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential driveways to commercial foundations, we deliver exceptional concrete solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                With over 15 years of experience serving Houston, we've earned our reputation through quality work, fair pricing, and exceptional customer service.
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
              <Card key={index} className="p-6">
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
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call (713) 555-0123
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="btn-hero-secondary text-lg px-8 py-4">
                Contact Us Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;