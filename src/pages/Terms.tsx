import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & <span className="text-accent">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Services Agreement</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>By hiring FF Concrete for services, you agree to these terms and conditions. Our services include:</p>
                <ul>
                  <li>Residential concrete installation and repair</li>
                  <li>Commercial concrete projects</li>
                  <li>Decorative concrete services</li>
                  <li>Concrete maintenance and repair</li>
                </ul>
                <p>All work will be performed in accordance with industry standards and local building codes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul>
                  <li>Quotes are valid for 30 days from the date of issue</li>
                  <li>A deposit may be required before work begins</li>
                  <li>Payment is due upon completion unless otherwise agreed</li>
                  <li>Late payments may incur additional fees</li>
                  <li>We accept cash, check, and major credit cards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Scheduling</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul>
                  <li>Project schedules are estimates and may vary due to weather, permits, or unforeseen circumstances</li>
                  <li>Client must provide clear access to work areas</li>
                  <li>Changes to project scope may affect timeline and cost</li>
                  <li>We will communicate any delays promptly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Warranties & Guarantees</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>FF Concrete provides:</p>
                <ul>
                  <li>1-year warranty on workmanship defects</li>
                  <li>Manufacturer warranties on materials used</li>
                  <li>Guarantee of professional installation standards</li>
                  <li>Prompt resolution of any covered issues</li>
                </ul>
                <p>Warranty does not cover damage from normal wear, improper use, or acts of nature.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>FF Concrete's liability is limited to the cost of the services provided. We are not responsible for:</p>
                <ul>
                  <li>Indirect or consequential damages</li>
                  <li>Underground utilities not properly marked</li>
                  <li>Existing structural issues not disclosed</li>
                  <li>Damage from extreme weather conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>For questions about these terms, contact us at:</p>
                <ul>
                  <li>Email: info@ffconcrete.com</li>
                  <li>Phone: (713) 555-0123</li>
                  <li>Address: 1234 Houston Avenue, Houston, TX 77001</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;