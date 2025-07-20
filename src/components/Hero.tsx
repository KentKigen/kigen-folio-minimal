import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroPortrait from '../assets/hero-portrait.jpg';

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"></div>
      
      {/* Hero Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <img
          src={heroPortrait}
          alt="Koech Kent Kigen"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-primary font-light text-lg">Hello, I'm</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title mb-8 animate-slide-up">
            Koech Kent Kigen
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mb-8 leading-relaxed animate-slide-up">
            Creative Tech-Savvy
            <br />
            <span className="text-primary">UI/UX Designer</span> &{' '}
            <span className="text-primary">Photographer</span>
            <br />
            Based in Nairobi
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-slide-up">
            I craft digital experiences that bridge creativity and functionality, 
            while capturing the world through my lens with a passion for visual storytelling.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Button
              size="lg"
              onClick={scrollToWork}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-light"
            >
              View Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-light"
            >
              See Photography
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;