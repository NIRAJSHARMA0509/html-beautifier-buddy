import { useState } from "react";
import { Link } from "react-router-dom";
import aravImage from "@/assets/arav-professional.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Heart, BookOpen, Users } from "lucide-react";

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
            <a href="#home" className="font-bold text-2xl text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
              <Heart className="w-6 h-6 fill-primary" />
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
        <section id="home" className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-28 md:py-36 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Cardiovascular Health Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Making Cardiovascular Science
              <span className="block text-primary">Accessible</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Evidence-based insights on heart health, designed for the general public.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#articles" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <BookOpen className="w-5 h-5" />
                Read Articles
              </a>
              <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 animate-fade-in-up">About The Project</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                The Mission Behind This Work
              </h2>
            </div>
            
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-xl">
              <div className="md:flex md:gap-12 items-start">
                {/* Image */}
                <div className="md:w-2/5 mb-8 md:mb-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="relative">
                    <img 
                      src={aravImage} 
                      alt="Arav Chopra" 
                      className="rounded-xl shadow-lg mx-auto w-full max-w-sm object-cover aspect-[3/4]"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                      <span className="text-sm font-semibold">Future Medical Professional</span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="md:w-3/5 space-y-6 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <p className="text-muted-foreground">
                    My name is <strong className="text-foreground">Arav Chopra</strong>, and I am a prospective undergraduate student passionate about a future in medicine. This project is born from a dedication to cardiac health activism and the power of scientific communication.
                  </p>
                  <p className="text-muted-foreground">
                    My goal is to translate complex cardiovascular concepts into clear, evidence-based, and accessible articles for the general public. Each piece is developed with a serious, academic approach, grounded in established medical research. I aim to clearly outline the scope and limitations of current knowledge.
                  </p>
                  <p className="text-muted-foreground">
                    This project is proudly conducted under the expert guidance and supervision of <strong className="text-foreground">Dr. Sandeep Kaushal</strong>, Dean Academics, Professor and Head of Pharmacology at Dayanand Medical College and Hospital in Punjab, India, whose mentorship is invaluable to this work.
                  </p>
                  
                  {/* Medical Disclaimer */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary text-foreground p-6 rounded-xl mt-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary mb-2">Important Medical Disclaimer</p>
                        <p className="text-base text-muted-foreground">
                          The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with your physician or a qualified healthcare provider with any questions you may have regarding a medical condition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="py-20 md:py-28 bg-card relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 animate-fade-in-up">
                <BookOpen className="w-3 h-3 mr-1" />
                Knowledge Base
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Articles on Heart Health
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                A comprehensive series exploring cardiovascular health from structure to disease.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className={`group transition-all duration-300 animate-fade-in-up overflow-hidden flex flex-col ${
                    article.available 
                      ? 'hover:shadow-2xl hover:-translate-y-2 border-t-4 border-t-primary bg-card' 
                      : 'bg-muted/30 hover:bg-muted/50'
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
                  <CardContent className={`pt-0 ${article.available ? 'bg-gradient-to-r from-primary/10 to-primary/5' : 'bg-muted/50'} p-6`}>
                    {article.available ? (
                      <Link 
                        to="/article/introduction-to-heart-structure"
                        className="font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 group/link"
                      >
                        Read Article 
                        <span className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <span className="font-semibold text-muted-foreground/60 cursor-not-allowed inline-flex items-center gap-1">
                        Coming Soon <span aria-hidden="true">→</span>
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
      <footer id="contact" className="bg-foreground text-background py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full mb-6 animate-fade-in-up">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Connect With Me</h3>
          <p className="text-background/70 mb-8 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Interested in collaboration or have questions? Reach out through any of these platforms.
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://www.linkedin.com/in/arav-chopra-8a4939353" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-background/10 hover:bg-background/20 rounded-lg transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-background/10 hover:bg-background/20 rounded-lg transition-colors font-medium"
            >
              X / Twitter
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-background/10 hover:bg-background/20 rounded-lg transition-colors font-medium"
            >
              ResearchGate
            </a>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              © 2025 Arav Chopra. All rights reserved.
            </p>
            <p className="text-background/40 text-xs mt-3 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Disclaimer: This site is for educational purposes only and is not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
