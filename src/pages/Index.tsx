import { useState } from "react";
import aravImage from "@/assets/arav-professional.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "You'll be notified when the blog launches.",
    });
    setEmail("");
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden md:flex" style={{ boxShadow: 'var(--shadow-card)' }}>
        
        {/* Left Side: Image */}
        <div className="md:w-5/12">
          <img 
            src={aravImage} 
            alt="Arav Chopra - Cardiac Health Specialist" 
            className="w-full h-[28rem] md:h-full object-cover object-[center_30%] md:object-center"
          />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-7/12 p-8 sm:p-12 flex flex-col justify-center">
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Arav Chopra
            </h1>
            <div className="h-1.5 w-24 bg-primary mt-4 mb-6 rounded mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>

            <p className="text-xl sm:text-2xl text-primary font-semibold leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Unlocking the secrets to a healthier heart.
            </p>
            
            <p className="text-5xl sm:text-6xl font-bold text-foreground mt-2 animate-pulse animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Coming Soon
            </p>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              My new blog is launching soon. Get ready for insightful articles, the latest research, and practical advice on maintaining optimal cardiac health.
            </p>

            {/* Subscription Form */}
            <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-foreground font-medium">Be the first to know when it's live:</p>
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow w-full"
                />
                <Button 
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 font-bold transform hover:scale-105 transition-transform"
                >
                  Notify Me
                </Button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="mt-12 text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <p className="text-sm text-muted-foreground mb-3">Connect with me:</p>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* LinkedIn Icon */}
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* Twitter/X Icon */}
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Index;
