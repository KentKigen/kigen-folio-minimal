import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import studealzMockup from '../assets/studealz-mockup.jpg';
import betlyticsDashboard from '../assets/betlytics-dashboard.jpg';
import fintrakInterface from '../assets/fintrak-interface.jpg';

const projects = [
  {
    id: 1,
    title: "Studealz – Mobile App for Student Discounts",
    description: "A Figma-designed mobile-first app connecting students with exclusive offers and discounts. Features clean card layouts, advanced filter systems, and youthful branding designed to resonate with the student community.",
    image: studealzMockup,
    tools: ["Figma", "Python", "Flask", "Location API"],
    problem: "Students struggled to find relevant discounts and offers in their area, missing out on savings opportunities.",
    solution: "Created a location-based mobile app with intuitive filtering and card-based design for easy discount discovery.",
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App"
  },
  {
    id: 2,
    title: "Betlytics – Betting Prediction & Analytics Platform",
    description: "A comprehensive dashboard interface providing betting odds, predictions, and insights. Built with advanced data analysis capabilities and machine learning for accurate match prediction engines.",
    image: betlyticsDashboard,
    tools: ["Python", "Pandas", "Flask", "Streamlit", "Chart.js"],
    problem: "Sports bettors lacked access to data-driven insights and predictive analytics for informed betting decisions.",
    solution: "Developed an analytics platform with real-time data processing, visualization, and predictive modeling for better betting strategies.",
    liveUrl: "#",
    githubUrl: "#",
    category: "Analytics Platform"
  },
  {
    id: 3,
    title: "FinTrak – Personal Finance Tracker",
    description: "A gamified personal finance application featuring expense/income tracking, savings goals, and clean dashboard interfaces. Built with comprehensive CRUD operations and data export capabilities.",
    image: fintrakInterface,
    tools: ["Django", "Streamlit", "Python", "SQLite", "Chart.js"],
    problem: "Users found traditional finance apps overwhelming and lacked motivation to maintain consistent tracking habits.",
    solution: "Created a gamified interface with intuitive dashboards, budget analysis, and reward systems to encourage financial wellness.",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
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