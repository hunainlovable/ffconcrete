import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      projectDetails: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(832)-375-4830',
      link: 'tel:+1-832-375-4830'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ffconcrete.com',
      link: 'mailto:info@ffconcrete.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '8000 Harwin Drive\nHouston, TX 77036',
      link: 'https://maps.google.com/?q=Houston,TX'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 7:00 AM - 6:00 PM\nSat: 8:00 AM - 4:00 PM\nSun: Emergency Only',
      link: null
    }
  ];

  const services = [
    'Residential Concrete',
    'Commercial Concrete',
    'Decorative Concrete',
    'Concrete Repair',
    'Custom Projects',
    'Emergency Repair',
    'Other'
  ];

  const whyChooseUs = [
    'Free detailed estimates',
    '24-hour response guarantee',
    'Licensed and fully insured',
    'Satisfaction guarantee',
    'Competitive pricing',
    'Expert consultation'
  ];

  return (
    <>
      <SEO
        title="Contact FF Concrete | Get Your Free Quote Today"
        description="Contact FF Concrete for your concrete project needs. Located at 8000 Harwin Drive, Houston TX. Call (832)-375-4830 for free estimates on residential and commercial concrete services."
        keywords="contact FF Concrete, concrete contractor Houston, free concrete quote, concrete estimate Houston, concrete consultation"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-accent">FF Concrete</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to start your concrete project? Get in touch for a free consultation and detailed estimate. 
              We're here to answer your questions and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-6">Get Your Free Quote</h2>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(832)-375-4830"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="projectDetails">Project Details</Label>
                    <Textarea
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                      placeholder="Tell us about your project - size, timeline, specific requirements..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-hero-primary text-lg py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Request Free Quote
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond within 24 hours with a detailed estimate
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to discuss your concrete project. We're here to help with any questions 
                  and provide expert guidance for your specific needs.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Why Choose FF Concrete?</h3>
                <div className="space-y-3">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Location</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Proudly serving Houston and surrounding areas with professional concrete services.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">FF Concrete</h3>
                <p className="text-muted-foreground">8000 Harwin Drive, Houston, TX 77036</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Service Radius</h4>
                <p className="text-muted-foreground">50+ miles from Houston</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-muted-foreground">Same day estimates</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Emergency Service</h4>
                <p className="text-muted-foreground">24/7 availability</p>
              </div>
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
            <p className="text-xl text-muted-foreground">
              We provide professional concrete services throughout Greater Houston and surrounding communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              'Houston', 'Katy', 'Sugar Land', 'The Woodlands',
              'Pearland', 'Pasadena', 'Spring', 'Humble',
              'Cypress', 'Richmond', 'Stafford', 'Missouri City',
              'Tomball', 'Conroe', 'League City', 'Friendswood'
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
            Ready to Start Your <span className="text-accent">Project?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Don't wait - get your free estimate today and see why Houston trusts FF Concrete for their concrete needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1-832-375-4830">
              <Button size="lg" className="btn-hero-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (832)-375-4830
              </Button>
            </a>
            <a href="mailto:info@ffconcrete.com">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Email Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;