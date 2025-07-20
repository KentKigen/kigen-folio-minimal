import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import webProject1 from '../assets/web-project-1.jpg';
import webProject2 from '../assets/web-project-2.jpg';
import webProject3 from '../assets/web-project-3.jpg';

const projects = [
  {
    id: 1,
    title: "FinTech Mobile App",
    description: "A comprehensive mobile banking solution designed to simplify financial transactions for the modern user. The app features intuitive navigation, secure authentication, and seamless money transfer capabilities.",
    image: webProject1,
    tools: ["Figma", "React Native", "Node.js", "MongoDB"],
    problem: "Users struggled with complex banking interfaces and lengthy transaction processes.",
    solution: "Created a streamlined, user-centric design with one-tap transactions and intelligent categorization.",
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built for African artisans to showcase and sell their crafts globally. Features include inventory management, payment integration, and seller analytics.",
    image: webProject2,
    tools: ["React", "TypeScript", "Stripe", "Supabase"],
    problem: "Local artisans lacked access to global markets and digital selling tools.",
    solution: "Built an accessible platform with multi-currency support and simplified seller onboarding.",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "A comprehensive analytics dashboard for small businesses to track their digital marketing performance. Real-time data visualization and actionable insights drive business growth.",
    image: webProject3,
    tools: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    problem: "Small businesses couldn't afford expensive analytics tools but needed data insights.",
    solution: "Developed an affordable, easy-to-use dashboard with essential metrics and clear visualizations.",
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard"
  }
];

const WebDesign = () => {
  return (
    <section id="work" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="mb-6 text-foreground">
            Web Design & Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating digital experiences that solve real problems through thoughtful design,
            intuitive user interfaces, and clean code implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg shadow-medium hover-lift"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl font-light text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">The Problem</h4>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">The Solution</h4>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                {/* Tools Used */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="border-primary/30">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="default"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-primary text-primary">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesign;