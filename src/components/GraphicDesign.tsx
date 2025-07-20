import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import graphicDesign1 from '../assets/graphic-design-1.jpg';
import graphicDesign2 from '../assets/graphic-design-2.jpg';
import graphicDesign3 from '../assets/graphic-design-3.jpg';

const designProjects = [
  {
    id: 1,
    title: "Brand Identity Suite",
    description: "Complete brand identity design including logo variations, business cards, letterhead, and packaging design for modern businesses.",
    image: graphicDesign1,
    category: "Brand Identity",
    tools: ["Illustrator", "Photoshop", "InDesign"]
  },
  {
    id: 2,
    title: "Social Media Templates",
    description: "Eye-catching social media graphics and templates for Instagram, Facebook, and LinkedIn with consistent visual branding.",
    image: graphicDesign2,
    category: "Digital Design",
    tools: ["Figma", "Photoshop", "After Effects"]
  },
  {
    id: 3,
    title: "Print Design Portfolio",
    description: "Magazine layouts, brochures, and poster designs showcasing editorial design expertise and typography mastery.",
    image: graphicDesign3,
    category: "Print Design",
    tools: ["InDesign", "Illustrator", "Photoshop"]
  }
];

const GraphicDesign = () => {
  return (
    <section id="graphic-design" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="mb-6 text-foreground">
            Graphic Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating visual identities and designs that communicate effectively across digital 
            and print mediums, from brand identities to marketing materials.
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-white/30">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-light mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{project.description}</p>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-white/20 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/20"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a visual identity or graphic design work for your brand?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;