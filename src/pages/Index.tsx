import { useState } from "react";
import { Link } from "react-router-dom";
import aravImage from "@/assets/arav-professional.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";

const articles = [
  {
    id: 1,
    part: "Part 1",
    title: "The Heart's Blueprint",
    description: "Understanding basic structure, function, and an introduction to Congestive Heart Failure (CHF).",
    available: true,
    status: "Published",
  },
  {
    id: 2,
    part: "Part 2",
    title: "The Pressure & the Plaque",
    description: "An introduction to Atherosclerosis (plaque buildup) and Hypertension (high blood pressure).",
    available: false,
    status: "Coming Soon",
  },
  {
    id: 3,
    part: "Part 3",
    title: "Supply, Demand, & MI",
    description: "What happens when the heart's oxygen supply doesn't meet demand, leading to Myocardial Infarction (Heart Attack).",
    available: false,
    status: "Coming Soon",
  },
  {
    id: 4,
    part: "Part 4",
    title: "The Heart's Electrical Symphony",
    description: "Exploring the conduction system (SA/AV nodes) and the causes of electrical disruptions (Arrhythmias).",
    available: false,
    status: "Coming Soon",
  },
  {
    id: 5,
    part: "Part 5",
    title: "The Gates of the Heart",
    description: "How the four valves direct blood flow and what happens in Valvular Heart Disease (e.g., narrowing).",
    available: false,
    status: "Coming Soon",
  },
  {
    id: 6,
    part: "Part 6",
    title: "When the Pump Weakens",
    description: "Understanding Cardiomyopathy, systolic vs. diastolic function, and its consequences.",
    available: false,
    status: "Coming Soon",
  },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-bold text-2xl text-primary hover:text-primary/80 transition-colors">
              Arav Chopra
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-muted-foreground hover:text-primary font-medium transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary font-medium transition-colors">About</a>
              <a href="#articles" className="text-muted-foreground hover:text-primary font-medium transition-colors">Articles</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary font-medium transition-colors">Connect</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-border">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary font-medium transition-colors">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary font-medium transition-colors">About</a>
              <a href="#articles" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary font-medium transition-colors">Articles</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-muted-foreground hover:text-primary font-medium transition-colors">Connect</a>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="bg-card py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-fade-in-up">
              Making Cardiovascular Science Accessible
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Evidence-based insights on heart health, designed for the general public.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
              About This Project
            </h2>
            
            <div className="bg-card p-8 md:p-10 rounded-xl border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="md:flex md:gap-10 items-center">
                {/* Image */}
                <div className="md:w-1/3 text-center mb-8 md:mb-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <img 
                    src={aravImage} 
                    alt="Arav Chopra" 
                    className="rounded-lg shadow-md mx-auto w-full max-w-xs md:max-w-none object-cover aspect-[3/4]"
                  />
                </div>

                {/* Text Content */}
                <div className="md:w-2/3 space-y-6 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <p className="text-muted-foreground">
                    My name is <strong className="text-foreground">Arav Chopra</strong>, and I am a prospective undergraduate student passionate about a future in medicine. This project is born from a dedication to cardiac health activism and the power of scientific communication.
                  </p>
                  <p className="text-muted-foreground">
                    My goal is to translate complex cardiovascular concepts into clear, evidence-based, and accessible articles for the general public. Each piece is developed with a serious, academic approach, grounded in established medical research. I aim to clearly outline the scope and limitations of current knowledge.
                  </p>
                  <p className="text-muted-foreground">
                    This project is proudly conducted under the expert guidance and supervision of <strong className="text-foreground">Dr. Sandeep Kaushal</strong>, Dean of Dayanand Medical College, whose mentorship is invaluable to this work.
                  </p>
                  
                  {/* Medical Disclaimer */}
                  <div className="bg-primary/10 border-l-4 border-primary text-foreground p-5 rounded-md mt-8">
                    <p className="font-bold text-primary">Important Medical Disclaimer</p>
                    <p className="text-base mt-2 text-muted-foreground">
                      The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with your physician or a qualified healthcare provider with any questions you may have regarding a medical condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="py-20 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
              Articles on Heart Health
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className={`group transition-all duration-300 animate-fade-in-up overflow-hidden flex flex-col ${
                    article.available 
                      ? 'hover:shadow-xl border-t-4 border-t-primary bg-card' 
                      : 'bg-muted/50'
                  }`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <CardHeader className="flex-grow">
                    <Badge 
                      variant={article.available ? "default" : "secondary"} 
                      className="w-fit mb-2 uppercase tracking-wider text-xs"
                    >
                      {article.part} {article.available ? '- Published' : ''}
                    </Badge>
                    <CardTitle className={`text-xl ${article.available ? 'group-hover:text-primary transition-colors' : ''}`}>
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className={`pt-0 ${article.available ? 'bg-primary/5' : 'bg-muted'} p-6`}>
                    {article.available ? (
                      <Link 
                        to="/article/introduction-to-heart-structure"
                        className="font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                      >
                        Read Article <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <span className="font-semibold text-muted-foreground/60 cursor-not-allowed inline-flex items-center gap-1">
                        Read Article (Coming Soon) <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Connect Section */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6 animate-fade-in-up">Connect With Me</h3>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <a 
              href="#" 
              className="text-background/70 hover:text-background transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-background/70 hover:text-background transition-colors"
            >
              X / Twitter
            </a>
            <a 
              href="#" 
              className="text-background/70 hover:text-background transition-colors"
            >
              ResearchGate
            </a>
          </div>
          
          <p className="text-background/60 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            © 2025 Arav Chopra. All rights reserved.
          </p>
          <p className="text-background/50 text-xs mt-3 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Disclaimer: This site is for educational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
