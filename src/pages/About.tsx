import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Heart, 
  Shield, 
  Lightbulb,
  Award,
  Clock,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through honesty, transparency, and reliable service.'
    },
    {
      icon: Award,
      title: 'Strength',
      description: 'Delivering concrete solutions that stand the test of time with superior materials and craftsmanship.'
    },
    {
      icon: Clock,
      title: 'Durability',
      description: 'Creating structures built to last using proven techniques and quality processes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new technologies and methods to deliver better results for our clients.'
    }
  ];

  const milestones = [
    { year: '2009', event: 'FF Concrete founded in Houston' },
    { year: '2012', event: 'Expanded to commercial projects' },
    { year: '2015', event: 'Added decorative concrete services' },
    { year: '2018', event: 'Reached 500+ completed projects' },
    { year: '2021', event: 'Became fully licensed and bonded' },
    { year: '2024', event: 'Celebrating 15 years of excellence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-accent">FF Concrete</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              For over 15 years, FF Concrete has been Houston's trusted partner for residential and commercial concrete solutions. 
              We're committed to building relationships as strong as the concrete we pour.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                FF Concrete was founded in 2009 by Fernando Fernandez with a simple mission: to provide Houston with the highest quality concrete services while maintaining the personal touch of a family-owned business.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a small residential concrete company has grown into one of Houston's most trusted names in concrete construction. Today, we serve both residential and commercial clients throughout the Greater Houston area.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to quality craftsmanship, reliability, and customer satisfaction has earned us a reputation for excellence that spans over a decade.
              </p>
              <Link to="/contact">
                <Button className="btn-hero-primary">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Company Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-accent text-accent-foreground font-bold px-3 py-1 rounded-full text-sm mr-4 min-w-[60px] text-center">
                      {milestone.year}
                    </div>
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from the projects we take on to the relationships we build with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Detailed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-accent">FF Concrete?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We don't just pour concrete - we build lasting relationships with our clients through exceptional service and quality workmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  'Over 15 years of experience in Houston',
                  'Licensed, bonded, and fully insured',
                  'Free detailed estimates and consultations',
                  'Quality materials from trusted suppliers'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {[
                  'Professional, experienced team members',
                  'Competitive pricing with no hidden fees',
                  'Projects completed on time and within budget',
                  '100% satisfaction guarantee on all work'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Ready to Experience the <span className="text-accent">FF Concrete Difference?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let us show you why Houston trusts FF Concrete for their most important projects. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              Get Free Quote
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="btn-hero-secondary text-lg px-8 py-4">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;