import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul>
                  <li>Request a quote or consultation</li>
                  <li>Contact us via phone, email, or our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Provide feedback or reviews</li>
                </ul>
                <p>This information may include your name, email address, phone number, address, and project details.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide quotes and consultations</li>
                  <li>Communicate with you about your project</li>
                  <li>Schedule appointments and services</li>
                  <li>Send you updates about our services</li>
                  <li>Improve our website and services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:</p>
                <ul>
                  <li>Service providers who assist us in operating our business</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners for joint projects (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <ul>
                  <li>Email: privacy@ffconcrete.com</li>
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

export default Privacy;