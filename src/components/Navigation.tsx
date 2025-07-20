import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-light tracking-wider hover:text-primary transition-colors"
          >
            Koech Kent Kigen
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('photography')}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Photography
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              About
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;