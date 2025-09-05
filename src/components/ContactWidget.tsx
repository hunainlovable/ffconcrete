import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  X, 
  Phone, 
  Mail, 
  Home, 
  Building2, 
  Palette, 
  Wrench,
  Send,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'services'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    setFormData({ name: '', phone: '', message: '' });
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    { icon: Home, title: 'Residential', link: '/services/residential' },
    { icon: Building2, title: 'Commercial', link: '/services/commercial' },
    { icon: Palette, title: 'Decorative', link: '/services/decorative' },
    { icon: Wrench, title: 'Repair', link: '/services/repair' }
  ];

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          variant="hero-primary"
          className="rounded-full w-16 h-16 shadow-hero"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Popup Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-hero backdrop-concrete border-accent/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-accent">Get in Touch</CardTitle>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('contact')}
                    className={activeTab === 'contact' ? 'bg-accent/10 text-accent' : ''}
                  >
                    Contact
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveTab('services')}
                    className={activeTab === 'services' ? 'bg-accent/10 text-accent' : ''}
                  >
                    Services
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {activeTab === 'contact' ? (
                <div className="space-y-4">
                  {/* Quick Contact Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="tel:+1-832-375-4830" 
                      className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">Call Now</span>
                    </a>
                    <a 
                      href="mailto:info@ffconcrete.com" 
                      className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  </div>

                  {/* Quick Contact Form */}
                  <form name="contact-widget" method="POST" data-netlify="true" className="space-y-3" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact-widget" />
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="widget-name" className="text-xs">Name</Label>
                        <Input id="widget-name" className="h-8 text-sm" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                      </div>
                      <div>
                        <Label htmlFor="widget-phone" className="text-xs">Phone</Label>
                        <Input id="widget-phone" type="tel" className="h-8 text-sm" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="widget-message" className="text-xs">Project Details</Label>
                      <Textarea 
                        id="widget-message" 
                        rows={2} 
                        className="text-sm resize-none"
                        placeholder="Describe your concrete project..."
                      />
                    </div>
                    <Button type="submit" className="w-full" size="sm" variant="hero-primary">
                      <Send className="h-3 w-3 mr-2" />
                      Get Free Quote
                    </Button>
                  </form>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
                    <MapPin className="h-3 w-3" />
                    <span>Serving Greater Houston Area</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional concrete services for all your needs
                  </p>
                  
                  <div className="grid gap-2">
                    {services.map((service, index) => (
                      <Link key={index} to={service.link}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3 hover:bg-accent/10"
                          onClick={() => setIsOpen(false)}
                        >
                          <service.icon className="h-4 w-4 mr-3 text-accent" />
                          <div className="text-left">
                            <div className="font-medium">{service.title} Concrete</div>
                            <div className="text-xs text-muted-foreground">Learn more →</div>
                          </div>
                        </Button>
                      </Link>
                    ))}
                  </div>

                  <Link to="/services">
                    <Button variant="outline" className="w-full mt-3" onClick={() => setIsOpen(false)}>
                      View All Services
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ContactWidget;