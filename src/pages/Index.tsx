
import { useState } from 'react';
import { Mail, User, Briefcase, BookOpen, Award, Github, Linkedin, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    Programming: ['Python', 'C', 'Java', 'Data Structures (Python)', 'Node.js'],
    Web: ['HTML', 'CSS', 'JavaScript', 'Web Design', 'Next.js'],
    Tools: ['Linux', 'GitHub', 'Suricata', 'VirtualBox', 'Apache', 'Wireshark'],
    'AI/ML': ['Scikit-learn', 'Isolation Forest'],
    'Soft Skills': ['Communication', 'Team Collaboration', 'Problem Solving']
  };

  const experience = [
    {
      title: 'Salesforce Intern',
      company: 'Skill Wallet Internship',
      period: 'Dec 2024 – Feb 2025',
      type: 'Remote',
      achievements: [
        'Developed and optimized Salesforce CRM workflows to improve institutional service management',
        'Conducted hands-on experiments with Trailhead labs to earn Salesforce certifications',
        'Gained proficiency in Salesforce features like Service Cloud and Apex programming'
      ]
    },
    {
      title: 'ServiceNow Learner',
      company: 'Self-paced Online Training',
      period: 'May 2025 – Present',
      type: 'Remote',
      achievements: [
        'Successfully completed ServiceNow Admin course with strong understanding of platform fundamentals',
        'Currently pursuing ServiceNow Developer course to enhance backend automation and scripting expertise'
      ]
    }
  ];

  const projects = [
    {
      title: 'Cybersecurity Deception Research',
      description: 'Designed and implemented a security decoy system to analyze and mitigate phishing attacks. Used VirtualBox with Linux OS, Python, and MySQL. Monitored traffic using Wireshark and Snort.',
      tech: ['Python', 'MySQL', 'VirtualBox', 'Linux', 'Wireshark', 'Snort']
    },
    {
      title: 'Predictive Analytics for Cyber Threat Detection',
      description: 'Built machine learning models using Scikit-learn to classify cybersecurity threats and improve prediction accuracy.',
      tech: ['Python', 'Scikit-learn', 'Machine Learning']
    },
    {
      title: 'Web Security Honeypot Project',
      description: 'Created a full-stack honeypot project using Next.js for the frontend and Node.js for backend simulations. Integrated Apache server, MySQL, Suricata, and Isolation Forest to monitor and log web-based attacks.',
      tech: ['Next.js', 'Node.js', 'MySQL', 'Apache', 'Suricata'],
      github: 'github.com/KARTHIKEYA-LENKA/Research-Honeypot.git'
    },
    {
      title: 'Fake Banking Site with Admin Redirection',
      description: 'Built a fake banking login for attackers and WordPress-based admin panel for tracking logins, using Suricata to capture activity. Frontend implemented using Next.js for realistic interaction.',
      tech: ['Next.js', 'WordPress', 'Suricata']
    }
  ];

  const certifications = [
    'Java Programming (NPTEL, 60%)',
    'Combined C and Python Certification (Datapro Institution)',
    'Salesforce Internship Completion (Trailhead)',
    'ServiceNow Certified - Admin (Completed) and Developer (Ongoing)'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Lenka Karthikeya</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Experience
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Projects
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Skills
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in">
              <div className="mb-8">
                <Avatar className="w-40 h-40 mx-auto mb-6 border-4 border-white shadow-xl">
                  <AvatarImage 
                    src="/lovable-uploads/d4909c64-431e-4fc7-b920-9bc1ff0a1d38.png" 
                    alt="Lenka Karthikeya"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-bold">LK</AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Lenka Karthikeya
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Aspiring Cybersecurity and Web Security Researcher with strong foundation in Python, MySQL, Linux, Node.js, and threat detection tools like Suricata
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3"
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </div>
            </div>
            
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-gray-400 mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate cybersecurity enthusiast currently pursuing my Bachelor of Technology in Cybersecurity and IoT at MVGR College of Engineering, Vizianagaram. With a strong foundation in programming and security research, I specialize in developing innovative solutions for cyber threat detection and web security.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience spans from building sophisticated honeypot systems to developing machine learning models for threat prediction. I'm particularly interested in cybersecurity research, web application security, and full-stack development using modern frameworks like Next.js.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Vizianagaram, Andhra Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Education</p>
                    <p className="text-gray-600">B.Tech Cybersecurity & IoT</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                  <Avatar className="w-64 h-64 mx-auto mb-6">
                    <AvatarImage 
                      src="/lovable-uploads/d4909c64-431e-4fc7-b920-9bc1ff0a1d38.png" 
                      alt="Lenka Karthikeya"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl font-bold">LK</AvatarFallback>
                  </Avatar>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">CGPA</span>
                      <span className="font-semibold text-gray-900">8.30 / 10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Intermediate</span>
                      <span className="font-semibold text-gray-900">81.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Focus</span>
                      <span className="font-semibold text-gray-900">Web Security Research</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Learning</span>
                      <span className="font-semibold text-gray-900">.NET Framework</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-medium">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-600 font-medium">{exp.period}</p>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing cybersecurity research opportunities, collaboration on projects, or just having a conversation about technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:lenkakarthikeya123@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  lenkakarthikeya123@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Linkedin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/lenka-karthikeya" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                  Connect with me
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Github className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
                <a href="https://github.com/KARTHIKEYA-LENKA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                  View my work
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Lenka Karthikeya. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
