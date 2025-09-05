import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  Wrench, 
  AlertTriangle, 
  Shield,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock
} from 'lucide-react';

const Repair = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: 'Crack Repair',
      description: 'Professional repair of cracks in concrete surfaces, from hairline cracks to major structural issues.',
      features: ['Crack injection', 'Surface sealing', 'Structural assessment', 'Permanent solutions']
    },
    {
      icon: RefreshCw,
      title: 'Surface Restoration',
      description: 'Restore worn, damaged, or deteriorated concrete surfaces to like-new condition.',
      features: ['Surface grinding', 'Concrete overlays', 'Texture matching', 'Color restoration']
    },
    {
      icon: Shield,
      title: 'Joint Sealing',
      description: 'Professional sealing of expansion joints and control joints to prevent water damage.',
      features: ['Caulk joint sealing', 'Polyurethane sealants', 'Silicone applications', 'Weather protection']
    },
    {
      icon: Wrench,
      title: 'Concrete Leveling',
      description: 'Fix uneven, settled, or sunken concrete slabs with our professional leveling techniques.',
      features: ['Slab jacking', 'Mud jacking', 'Polyurethane injection', 'Drainage correction']
    }
  ];

  const commonIssues = [
    {
      issue: 'Cracking',
      causes: ['Settlement', 'Temperature changes', 'Poor drainage', 'Heavy loads'],
      urgency: 'Medium'
    },
    {
      issue: 'Spalling',
      causes: ['Water damage', 'Freeze-thaw cycles', 'Salt exposure', 'Age'],
      urgency: 'High'
    },
    {
      issue: 'Settlement',
      causes: ['Soil issues', 'Poor compaction', 'Water erosion', 'Heavy traffic'],
      urgency: 'High'
    },
    {
      issue: 'Scaling',
      causes: ['Poor finishing', 'Freeze-thaw', 'Chemical exposure', 'Deicing salts'],
      urgency: 'Medium'
    }
  ];

  const benefits = [
    'Cost-effective alternative to replacement',
    'Extends concrete lifespan',
    'Prevents further damage',
    'Improves safety and appearance',
    'Maintains property value',
    'Quick turnaround time'
  ];

  return (
    <>
      <SEO
        title="FF Concrete Repair Services | Foundation & Driveway Repair Houston"
        description="FF Concrete offers professional concrete repair services including foundation repair, driveway resurfacing, and concrete restoration. Expert concrete repair contractor in Houston."
        keywords="concrete repair Houston, foundation repair, driveway repair, concrete resurfacing, concrete restoration Houston"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Concrete Repair & <span className="text-accent">Maintenance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Don't replace it - restore it! Our professional concrete repair services can save you money 
              while extending the life of your concrete structures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Repair Service
              </Button>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Assessment
                  <Clock className="ml-2 h-5 w-5" />
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
              Repair <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive repair services address all types of concrete damage, from minor cosmetic issues to major structural problems.
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

      {/* Common Issues */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common Concrete <span className="text-accent">Problems</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Recognize the signs of concrete damage and understand when professional repair is needed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {commonIssues.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{item.issue}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.urgency === 'High' 
                      ? 'bg-destructive/20 text-destructive' 
                      : 'bg-warning/20 text-warning'
                  }`}>
                    {item.urgency} Priority
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Causes:</h4>
                  <div className="space-y-1">
                    {item.causes.map((cause, causeIndex) => (
                      <div key={causeIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        {cause}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Repair */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Repair Instead of <span className="text-accent">Replace?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional concrete repair can save you up to 70% compared to full replacement 
                while delivering results that last for years.
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
              <h3 className="text-2xl font-bold mb-6 text-center">Cost Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Crack Repair</span>
                  <div className="text-right">
                    <div className="text-accent font-bold">$200-500</div>
                    <div className="text-sm text-muted-foreground">vs $2,000+ replacement</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Surface Restoration</span>
                  <div className="text-right">
                    <div className="text-accent font-bold">$500-1,200</div>
                    <div className="text-sm text-muted-foreground">vs $3,000+ replacement</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Concrete Leveling</span>
                  <div className="text-right">
                    <div className="text-accent font-bold">$300-800</div>
                    <div className="text-sm text-muted-foreground">vs $1,500+ replacement</div>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <p className="text-sm text-muted-foreground">*Savings of up to 70% typical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency <span className="text-accent">Repair Service</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Some concrete problems need immediate attention. We offer emergency repair services for urgent situations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground">Emergency response available for urgent concrete issues.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety First</h3>
              <p className="text-muted-foreground">Immediate stabilization to prevent further damage or injury.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rapid Response</h3>
              <p className="text-muted-foreground">Quick assessment and temporary repairs to secure the area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Don't Wait - <span className="text-accent">Repair Today</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Early repair saves money and prevents bigger problems. Get your free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+1-832-375-4830" className="text-accent hover:text-accent/80 transition-colors">Emergency: (832)-375-4830</a>
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Assessment
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

export default Repair;