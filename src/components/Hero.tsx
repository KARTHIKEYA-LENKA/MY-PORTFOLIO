import { useState, useEffect } from 'react';
import { Mail, Briefcase, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero bg-[length:400%_400%] animate-gradient-shift"></div>
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-white/30 shadow-elegant ring-4 ring-white/20 backdrop-blur-sm bg-white/10">
              <AvatarImage 
                src="/lovable-uploads/d4909c64-431e-4fc7-b920-9bc1ff0a1d38.png" 
                alt="Lenka Karthikeya"
                className="object-cover"
              />
              <AvatarFallback className="text-3xl font-bold bg-white/20 text-white border border-white/30">LK</AvatarFallback>
            </Avatar>
          </div>

          {/* Name and Title */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              Lenka Karthikeya
            </h1>
            <div className="text-xl md:text-2xl text-white/90 mb-2 font-medium">
              ServiceNow Certified Developer & System Administrator
            </div>
            <div className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Cybersecurity Researcher | Java Developer | Web Security Specialist
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg"
              className="bg-gradient-primary text-white border-0 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow hover:bg-gradient-to-r hover:from-primary hover:to-accent"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="border-white/40 text-white bg-white/5 hover:bg-white/20 hover:text-white backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
            >
              <Briefcase className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              <span className="group-hover:animate-fade-in">View Projects</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/40 text-white bg-white/5 hover:bg-white/20 hover:text-white backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              <span className="group-hover:animate-fade-in">Download Resume</span>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce animate-fade-in" style={{ animationDelay: '1s' }}>
          <ChevronDown 
            className="h-8 w-8 text-white/70 mx-auto cursor-pointer hover:text-white transition-colors duration-300" 
            onClick={() => scrollToSection('about')} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;