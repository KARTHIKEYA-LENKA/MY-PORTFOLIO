
import { useState } from 'react';
import { Award, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Index = () => {
  console.log('Index component rendering...');

  const skills = {
    Programming: ['Java (Core)', 'Data Structures & Algorithms', 'C', 'MySQL'],
    ServiceNow: ['System Administration (CSA)', 'Application Development (CAD)', 'Flow Designer', 'Service Catalog'],
    Web: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    Tools: ['Linux', 'GitHub', 'Suricata', 'VirtualBox', 'Apache', 'Wireshark'],
    'AI/ML': ['Scikit-learn', 'Isolation Forest'],
    'Soft Skills': ['Communication', 'Team Collaboration', 'Problem Solving']
  };

  const experience = [
    {
      title: 'ServiceNow Certified System Administrator (CSA)',
      company: 'ServiceNow Certification',
      period: 'May 2025 – Aug 2025',
      type: 'Certified',
      achievements: [
        'Configured tables, forms, UI policies, and lists for enhanced user experience',
        'Managed users, roles, groups, and Access Control Lists (ACLs) for security',
        'Designed service catalog items and approval workflows for business processes'
      ]
    },
    {
      title: 'ServiceNow Certified Application Developer (CAD)',
      company: 'ServiceNow Certification',
      period: 'May 2025 – Aug 2025',
      type: 'Certified',
      achievements: [
        'Developed custom applications using Studio and App Engine',
        'Implemented business rules, client scripts, and flow designer automation',
        'Created advanced scripting solutions for enterprise automation'
      ]
    },
    {
      title: 'Salesforce Intern',
      company: 'Skill Wallet Internship',
      period: 'Dec 2024 – Feb 2025',
      type: 'Remote',
      achievements: [
        'Worked with Salesforce CRM for comprehensive service management',
        'Completed Trailhead certifications and hands-on labs',
        'Gained proficiency in Apex programming and Service Cloud features'
      ]
    }
  ];

  const projects = [
    {
      title: 'Research Honeypot (Major Project)',
      description: 'Developed a comprehensive honeypot environment to analyze web-based attacks by deploying a fake banking site on Apache with MySQL to capture login attempts. Integrated Suricata and Wireshark for traffic monitoring and applied Isolation Forest for anomaly detection.',
      tech: ['Java', 'MySQL', 'Apache', 'Suricata', 'Wireshark', 'Scikit-learn', 'VirtualBox', 'Kali Linux'],
      github: 'github.com/KARTHIKEYA-LENKA/Research-Honeypot.git'
    },
    {
      title: 'Laptop Request Catalog Item (ServiceNow)',
      description: 'Developed a Service Catalog item in ServiceNow to streamline laptop requests. Automated the process with dynamic fields, UI policies, and reset functionality, replacing the manual request system for improved efficiency.',
      tech: ['ServiceNow', 'Flow Designer', 'UI Policies', 'Service Catalog', 'JavaScript']
    },
    {
      title: 'Java DSA Problem Solving',
      description: 'Actively solving Data Structures and Algorithms problems on LeetCode using Java. Focus on optimization, clean code practices, and efficient algorithm implementation for competitive programming.',
      tech: ['Java', 'Data Structures', 'Algorithms', 'LeetCode', 'Problem Solving']
    },
    {
      title: 'Cybersecurity Traffic Analysis',
      description: 'Built comprehensive network traffic analysis tools using Suricata and Wireshark to detect and analyze security threats. Implemented real-time monitoring and alerting systems.',
      tech: ['Suricata', 'Wireshark', 'Linux', 'Network Security', 'Traffic Analysis']
    }
  ];

  const certifications = [
    {
      name: 'ServiceNow Certified System Administrator (CSA) - Completed',
      link: 'https://drive.google.com/file/d/1DoeRq0OtDEuV4anSPU1Ivp6t-LgQILg-/view?usp=drive_link'
    },
    {
      name: 'ServiceNow Certified Application Developer (CAD) - Completed',
      link: 'https://drive.google.com/file/d/1shYcaQKvIw3-BRaMcEIpD-e77UKiCLrB/view?usp=drive_link'
    },
    {
      name: 'Salesforce Internship Completion (Trailhead)',
      link: 'https://skillwallet.smartinternz.com/internships/salesforce_certificates/bddcda5d65fcfdec9de3838794a77265'
    },
    {
      name: 'Java Programming (NPTEL)',
      link: 'https://drive.google.com/file/d/1_xfikASfgs1h0ld52bgq44c-bx2bYWs6/view?usp=drive_link'
    },
    {
      name: 'MySQL Database Certification (HackerRank)',
      link: 'https://www.hackerrank.com/certificates/42d49d592607'
    },
    {
      name: 'IT Essentials (Cisco)',
      link: 'https://www.credly.com/badges/4706138d-9253-403e-a1d6-cd9eb9027117/linked_in_profile'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-experience-pro relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified ServiceNow professional with hands-on experience in automation and cybersecurity
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-500 border border-border/50 bg-card animate-slide-in-left group" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-primary font-semibold mt-1">{exp.company}</CardDescription>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-muted-foreground font-medium text-lg">{exp.period}</p>
                      <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary border-primary/20">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                        <p className="text-foreground/80 leading-relaxed">{achievement}</p>
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-projects-pro">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions in cybersecurity, automation, and enterprise development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50 bg-card group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">{project.title}</CardTitle>
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild className="opacity-70 hover:opacity-100 transition-opacity">
                        <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors">
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
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-skills-pro relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill set in programming, cybersecurity, and enterprise automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-500 border border-border/50 bg-card group animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground flex items-center group-hover:text-primary transition-colors duration-300">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 shadow-glow"></div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm bg-secondary/70 hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Certifications & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-elegant hover:border-primary/30 transition-all duration-300 group animate-slide-in-right cursor-pointer hover:-translate-y-1" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Award className="h-8 w-8 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-foreground/80 font-medium group-hover:text-primary transition-colors duration-300">{cert.name}</p>
                  <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 ml-auto opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-contact-pro relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing cybersecurity research opportunities, ServiceNow development projects, or collaboration on innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-elegant transition-all duration-500 border border-border/50 bg-card group animate-scale-in hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
                <a href="mailto:lenkakarthikeya123@gmail.com" className="text-primary hover:text-primary-hover transition-colors text-lg font-medium">
                  lenkakarthikeya123@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all duration-500 border border-border/50 bg-card group animate-scale-in hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">LinkedIn</h3>
                <a href="https://linkedin.com/in/lenka-karthikeya" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors text-lg font-medium">
                  Connect with me
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-elegant transition-all duration-500 border border-border/50 bg-card group animate-scale-in hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">GitHub</h3>
                <a href="https://github.com/KARTHIKEYA-LENKA" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors text-lg font-medium">
                  View my work
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Lenka Karthikeya
            </h3>
            <p className="text-background/70 text-lg">
              ServiceNow Developer | Cybersecurity Researcher | Java Enthusiast
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://linkedin.com/in/lenka-karthikeya" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/KARTHIKEYA-LENKA" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              © 2025 Lenka Karthikeya. All rights reserved.
            </p>
            <p className="text-background/50 mt-2 text-sm">
              Built with React, TypeScript, and Tailwind CSS • Designed for Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
