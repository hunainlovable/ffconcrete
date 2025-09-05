import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  User, 
  Mail, 
  Phone,
  ArrowRight,
  Award,
  Users,
  Clock
} from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Fernando Fernandez',
      title: 'Founder & CEO',
      bio: 'With over 20 years in the concrete industry, Fernando founded FF Concrete with a vision to deliver unmatched quality and service to Houston. His expertise in both residential and commercial projects has made FF Concrete a trusted name in the industry.',
      specialties: ['Project Management', 'Commercial Projects', 'Business Development']
    },
    {
      name: 'Brandon Moliona',
      title: 'Operations Manager',
      bio: 'Brandon oversees all day-to-day operations, ensuring projects are completed on time and to specification. His attention to detail and organizational skills keep our teams running smoothly and efficiently.',
      specialties: ['Operations Management', 'Quality Control', 'Team Coordination']
    },
    {
      name: 'Sofia Rodriguez',
      title: 'Project Coordinator',
      bio: 'Sofia manages project timelines, coordinates with clients, and ensures clear communication throughout every project. Her dedication to customer service helps make the construction process smooth for our clients.',
      specialties: ['Project Coordination', 'Client Relations', 'Scheduling']
    },
    {
      name: 'Miguel Torres',
      title: 'Lead Concrete Specialist',
      bio: 'Miguel brings 15+ years of hands-on concrete experience to every project. His expertise in decorative concrete and complex installations ensures exceptional results for our most demanding projects.',
      specialties: ['Decorative Concrete', 'Technical Installation', 'Quality Assurance']
    },
    {
      name: 'Isabella Martinez',
      title: 'Customer Relations',
      bio: 'Isabella is your first point of contact and ensures every client receives personalized attention. She coordinates estimates, answers questions, and maintains relationships long after project completion.',
      specialties: ['Customer Service', 'Estimates', 'Client Communication']
    },
    {
      name: 'Andres Santos',
      title: 'Field Supervisor',
      bio: 'Andres brings extensive field experience and technical expertise to our team. His attention to detail and commitment to safety ensures every project meets our high standards for quality and efficiency.',
      specialties: ['Field Operations', 'Safety Management', 'Technical Supervision']
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, big or small.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaboration and communication drive our success.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We deliver on our promises, on time and within budget.'
    }
  ];

  return (
    <>
      <SEO
        title="Meet the FF Concrete Team | Experienced Houston Concrete Professionals"
        description="Meet the skilled professionals behind FF Concrete's success. Our experienced team of concrete specialists is committed to delivering quality results for your Houston concrete projects."
        keywords="FF Concrete team, Houston concrete professionals, concrete specialists Houston, experienced concrete contractors, concrete project managers"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              With more than 500+ employees across Houston, FF Concrete is proud to showcase some highlights 
              of our upper management team. These skilled professionals represent the leadership and expertise 
              that drives our success in delivering exceptional concrete solutions and outstanding customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Led by industry veterans with decades of combined experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.slice(0, 2).map((member, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start mb-6">
                    <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mr-6">
                      <User className="h-10 w-10 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-accent font-semibold mb-4">{member.title}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="bg-muted px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated professionals who make every project a success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.slice(2).map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4">{member.title}</p>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Specialties:</h4>
                    <div className="space-y-1">
                      {member.specialties.map((specialty, i) => (
                        <div key={i} className="text-xs bg-muted px-2 py-1 rounded">
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our team and drive our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-accent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for skilled professionals who share our commitment to quality and excellence. 
              If you're passionate about concrete work and customer service, we'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-bold mb-2">Competitive Benefits</h3>
                <p className="text-sm text-muted-foreground">Health insurance, retirement plans, and paid time off.</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-bold mb-2">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">Training programs and career advancement paths.</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-bold mb-2">Great Work Environment</h3>
                <p className="text-sm text-muted-foreground">Supportive team culture and modern equipment.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Mail className="mr-2 h-5 w-5" />
                Send Resume
              </Button>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact HR
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Ready to Work with <span className="text-accent">Our Team?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Experience the FF Concrete difference. Our professional team is ready to bring your concrete project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+1-832-375-4830" className="text-accent hover:text-accent/80 transition-colors">Call: (832)-375-4830</a>
            </Button>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free Quote
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

export default Team;