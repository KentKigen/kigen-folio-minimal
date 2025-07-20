import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const skills = [
  { category: "Design", items: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"] },
  { category: "Development", items: ["React", "TypeScript", "Node.js", "Tailwind CSS"] },
  { category: "Photography", items: ["Portrait", "Street", "Product", "Adobe Lightroom"] },
  { category: "Tools", items: ["Figma", "Sketch", "After Effects", "Webflow"] }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-foreground">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm Koech Kent Kigen, a passionate creative based in the vibrant city of Nairobi. 
                  My journey began with a fascination for how design can solve real problems and create 
                  meaningful connections between people and technology.
                </p>
                <p>
                  As a UI/UX designer, I believe in the power of user-centered design. Every pixel has a purpose, 
                  every interaction tells a story, and every interface should feel like a natural extension of 
                  human behavior. I've spent years crafting digital experiences that not only look beautiful 
                  but function seamlessly.
                </p>
                <p>
                  When I'm not designing interfaces, you'll find me behind the camera, capturing the raw 
                  beauty of everyday life. Photography taught me to see the world differently — to notice 
                  the subtle interplay of light and shadow, the unguarded moments that reveal character, 
                  and the stories hidden in plain sight.
                </p>
                <p>
                  I'm currently seeking opportunities to collaborate with forward-thinking teams who share 
                  my passion for creating impactful digital experiences. Let's build something amazing together.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-foreground mb-8">
                Skills & Expertise
              </h3>
              <div className="grid gap-6">
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className="p-6 hover-lift">
                    <h4 className="font-medium text-foreground mb-4">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quote */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <blockquote className="text-lg text-muted-foreground italic text-center">
                "Good design is not just what it looks like and feels like. 
                Good design is how it works."
              </blockquote>
              <cite className="block text-center mt-4 text-primary font-medium">
                — Steve Jobs
              </cite>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;