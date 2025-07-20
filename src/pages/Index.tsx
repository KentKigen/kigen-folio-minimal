import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WebDesign from '../components/WebDesign';
import Photography from '../components/Photography';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WebDesign />
      <Photography />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
