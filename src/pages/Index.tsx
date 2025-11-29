import { Link } from "react-router-dom";
import aravImage from "@/assets/arav-professional.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: 1,
    title: "Introduction to Heart Structure",
    description: "Understanding the heart's anatomy and how CHF develops when the pumping mechanism fails.",
    available: true,
    category: "Fundamentals",
  },
  {
    id: 2,
    title: "Heart Rate Variability",
    description: "Exploring the importance of HRV in cardiovascular health monitoring.",
    available: false,
    category: "Monitoring",
  },
  {
    id: 3,
    title: "Nutrition for Heart Health",
    description: "Dietary choices that support optimal cardiac function and longevity.",
    available: false,
    category: "Lifestyle",
  },
  {
    id: 4,
    title: "Exercise & Cardiac Wellness",
    description: "Safe and effective exercise strategies for maintaining heart health.",
    available: false,
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "Understanding Blood Pressure",
    description: "The mechanics of blood pressure and its impact on heart function.",
    available: false,
    category: "Fundamentals",
  },
  {
    id: 6,
    title: "Advances in Cardiac Care",
    description: "Latest research and treatments in cardiovascular medicine.",
    available: false,
    category: "Research",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AC</span>
              </div>
              <span className="font-bold text-lg text-foreground">Arav Chopra</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">Articles</a>
              <a href="#connect" className="text-muted-foreground hover:text-primary transition-colors">Connect</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1 animate-fade-in-up">
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-card)' }}>
                <img 
                  src={aravImage} 
                  alt="Arav Chopra - Cardiac Health Specialist" 
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 top-8 -left-4 w-full h-full bg-primary/10 rounded-2xl hidden lg:block"></div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Cardiac Health Educator
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Hi, I'm <span className="text-primary">Arav Chopra</span>
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-semibold mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Unlocking the secrets to a healthier heart.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Welcome to my cardiac health blog where I share insightful articles, the latest research, and practical advice on maintaining optimal heart health. My mission is to make complex cardiovascular concepts accessible to everyone.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Button asChild size="lg" className="font-semibold">
                  <a href="#articles">Explore Articles</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#connect">Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Featured Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Dive deep into cardiac health topics with evidence-based articles designed to educate and empower.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className={`group transition-all duration-300 animate-fade-in-up ${
                  article.available 
                    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' 
                    : 'opacity-70'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={article.available ? "default" : "secondary"}>
                      {article.category}
                    </Badge>
                    {!article.available && (
                      <Badge variant="outline" className="text-muted-foreground">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <CardTitle className={`text-xl ${article.available ? 'group-hover:text-primary transition-colors' : ''}`}>
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {article.available ? (
                    <Button asChild className="w-full">
                      <Link to="/article/introduction-to-heart-structure">
                        Read Article
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full" variant="secondary">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Have questions about cardiac health or interested in collaboration? Feel free to reach out through social media.
          </p>
          
          <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* LinkedIn */}
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
            
            {/* Twitter/X */}
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-foreground hover:text-foreground transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Arav Chopra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
