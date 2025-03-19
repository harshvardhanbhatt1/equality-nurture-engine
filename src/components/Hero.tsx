
import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart, BookOpen, Users } from 'lucide-react';
import images from '@/assets/images';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section className="pt-24 pb-16 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-masterplan-secondary/30 to-transparent -z-10"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className="fade-in-section">
          <div className="pill pill-secondary mb-4 opacity-0 animate-fade-in">AI-Powered Platform</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-delay-1">
            Empowering Gender Equality Through Innovation
          </h1>
          <p className="text-masterplan-text-light text-lg mb-8 max-w-xl opacity-0 animate-fade-in-delay-2">
            An educational, analytical, and action-oriented platform that promotes gender equality
            and empowers communities to create lasting change.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-3">
            <a href="#education" className="bg-masterplan-primary text-white rounded-full px-8 py-3 font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:translate-x-1">
              Explore Content
              <ArrowRight size={18} />
            </a>
            <a href="#stories" className="bg-white border border-masterplan-primary text-masterplan-primary rounded-full px-8 py-3 font-medium transition-all hover:bg-masterplan-secondary">
              Share Your Story
            </a>
          </div>
        </div>
        
        <div ref={heroRef} className="relative fade-in-section">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <img 
              src={images.heroIllustration} 
              alt="Gender equality illustration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating badge */}
          <div className="glass absolute -bottom-5 -left-5 md:left-5 rounded-xl p-4 shadow-lg max-w-[250px] opacity-0 animate-fade-in-delay-2">
            <div className="flex items-start gap-3">
              <div className="bg-masterplan-primary/10 p-2 rounded-lg">
                <BookOpen className="text-masterplan-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-sm">AI-Generated Content</h4>
                <p className="text-xs text-masterplan-text-light mt-1">Educating communities with personalized insights</p>
              </div>
            </div>
          </div>
          
          {/* Floating badge 2 */}
          <div className="glass absolute -top-5 -right-5 md:right-5 rounded-xl p-4 shadow-lg max-w-[250px] opacity-0 animate-fade-in-delay-3">
            <div className="flex items-start gap-3">
              <div className="bg-masterplan-accent/10 p-2 rounded-lg">
                <Users className="text-masterplan-accent" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-sm">Community Driven</h4>
                <p className="text-xs text-masterplan-text-light mt-1">Connecting advocates for gender equality worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div ref={statsRef} className="container mx-auto px-6 mt-20 lg:mt-32 fade-in-section">
        <div className="glass rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-masterplan-primary/10 p-3 rounded-full">
                <BookOpen className="text-masterplan-primary" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-masterplan-text-light mt-2">Educational Resources</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-masterplan-primary/10 p-3 rounded-full">
                <Users className="text-masterplan-primary" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold">50K+</h3>
            <p className="text-masterplan-text-light mt-2">Community Members</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-masterplan-primary/10 p-3 rounded-full">
                <BarChart className="text-masterplan-primary" size={24} />
              </div>
            </div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-masterplan-text-light mt-2">Data Insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
