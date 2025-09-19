import { User, BookOpen, GraduationCap, Target } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-about-pro relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate cybersecurity researcher and developer with expertise in ServiceNow, Java, and web security
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I'm a dedicated cybersecurity enthusiast pursuing my Bachelor of Technology in Cybersecurity and IoT at MVGR College of Engineering. With strong foundations in <strong>Java programming</strong>, <strong>Data Structures & Algorithms</strong>, and <strong>ServiceNow development</strong>, I specialize in building innovative security solutions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My experience spans from developing sophisticated honeypot systems to creating automated ServiceNow applications. I'm particularly passionate about <strong>cybersecurity research</strong>, <strong>web application security</strong>, and <strong>enterprise automation</strong>.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-card hover:shadow-card transition-all duration-300">
                <User className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-lg">Location</p>
                  <p className="text-muted-foreground">Vizianagaram, Andhra Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-card hover:shadow-card transition-all duration-300">
                <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-lg">Education</p>
                  <p className="text-muted-foreground">B.Tech Cybersecurity & IoT</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-card hover:shadow-card transition-all duration-300">
                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-lg">CGPA</p>
                  <p className="text-muted-foreground">8.30 / 10</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-card hover:shadow-card transition-all duration-300">
                <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-lg">Focus</p>
                  <p className="text-muted-foreground">ServiceNow Development</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Image & Highlights */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              
              {/* Main Card */}
              <div className="relative bg-card p-8 rounded-3xl shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-500">
                <Avatar className="w-64 h-64 mx-auto mb-8 border-4 border-primary/20 shadow-card">
                  <AvatarImage 
                    src="/lovable-uploads/d4909c64-431e-4fc7-b920-9bc1ff0a1d38.png" 
                    alt="Lenka Karthikeya"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">LK</AvatarFallback>
                </Avatar>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">ServiceNow</span>
                    <span className="font-bold text-primary">CSA + CAD Certified</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Programming</span>
                    <span className="font-bold text-foreground">Java, DSA</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground font-medium">Security Tools</span>
                    <span className="font-bold text-foreground">Suricata, Wireshark</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground font-medium">Current Learning</span>
                    <span className="font-bold text-foreground">Advanced Web Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;