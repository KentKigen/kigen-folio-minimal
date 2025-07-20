import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import photoStreet1 from '../assets/photo-street-1.jpg';
import photoStreet2 from '../assets/photo-street-2.jpg';
import photoPortrait1 from '../assets/photo-portrait-1.jpg';
import photoPortrait2 from '../assets/photo-portrait-2.jpg';
import photoProduct1 from '../assets/photo-product-1.jpg';
import photoProduct2 from '../assets/photo-product-2.jpg';

const photographyData = [
  {
    id: 1,
    title: "Urban Stories",
    image: photoStreet1,
    category: "Street Photography",
    description: "Capturing the pulse of Nairobi's streets"
  },
  {
    id: 2,
    title: "City Skylines",
    image: photoStreet2,
    category: "Street Photography",
    description: "The changing face of modern Nairobi"
  },
  {
    id: 3,
    title: "Authentic Portraits",
    image: photoPortrait1,
    category: "Portrait Photography",
    description: "Celebrating natural beauty and character"
  },
  {
    id: 4,
    title: "Fashion Forward",
    image: photoPortrait2,
    category: "Portrait Photography",
    description: "Contemporary African fashion and style"
  },
  {
    id: 5,
    title: "Tech Essentials",
    image: photoProduct1,
    category: "Product Photography",
    description: "Clean, minimalist product presentation"
  },
  {
    id: 6,
    title: "Lifestyle Brands",
    image: photoProduct2,
    category: "Product Photography",
    description: "Luxury products with sophisticated appeal"
  }
];

const categories = ["All", "Street Photography", "Portrait Photography", "Product Photography"];

const Photography = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = photographyData.filter(
    photo => activeCategory === "All" || photo.category === activeCategory
  );

  return (
    <section id="photography" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Photography Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through my lens, I capture moments that tell stories — from the vibrant streets of Nairobi
            to intimate portraits and commercial product photography.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 p-2 bg-secondary/50 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                    {photo.category}
                  </Badge>
                  <h3 className="text-xl font-light mb-2">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in working together on your next photography project?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Photography;