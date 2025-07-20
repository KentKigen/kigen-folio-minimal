import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="section-padding bg-foreground text-background">
      <div className="container-wide">
        {/* Contact Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-background mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Have a project in mind? Whether it's a digital experience that needs crafting 
            or a moment that needs capturing, I'd love to hear from you.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Start a Conversation
          </Button>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-background/10 border-background/20 p-6 text-center hover-lift">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium text-background mb-2">Email</h3>
            <p className="text-background/80">hello@koechkent.com</p>
          </Card>
          
          <Card className="bg-background/10 border-background/20 p-6 text-center hover-lift">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium text-background mb-2">Phone</h3>
            <p className="text-background/80">+254 700 123 456</p>
          </Card>
          
          <Card className="bg-background/10 border-background/20 p-6 text-center hover-lift">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-medium text-background mb-2">Location</h3>
            <p className="text-background/80">Nairobi, Kenya</p>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left - Logo and Copyright */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light text-background mb-2">
                Koech Kent Kigen
              </h3>
              <p className="text-background/60 flex items-center justify-center md:justify-start gap-1">
                Made with <Heart className="w-4 h-4 text-primary fill-current" /> in Nairobi
              </p>
              <p className="text-background/60 mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Right - Social Links */}
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background/60 hover:text-primary hover:bg-background/10"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background/60 hover:text-primary hover:bg-background/10"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background/60 hover:text-primary hover:bg-background/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background/60 hover:text-primary hover:bg-background/10"
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;