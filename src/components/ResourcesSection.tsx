
import React, { useEffect, useRef } from 'react';
import { Bookmark, ExternalLink, FileText, Info } from 'lucide-react';
import images from '@/assets/images';

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (resourcesRef.current) observer.observe(resourcesRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (resourcesRef.current) observer.unobserve(resourcesRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const resources = [
    {
      title: "Gender Equality Policy Framework",
      description: "Comprehensive guide for organizations implementing gender-responsive policies.",
      icon: <FileText className="text-masterplan-primary" size={20} />,
      category: "Policy",
    },
    {
      title: "Educational Toolkit for Schools",
      description: "Resources for educators to promote gender equality in classrooms.",
      icon: <FileText className="text-masterplan-primary" size={20} />,
      category: "Education",
    },
    {
      title: "Gender Pay Gap Calculator",
      description: "Tool for organizations to analyze and address pay disparities.",
      icon: <FileText className="text-masterplan-primary" size={20} />,
      category: "Workplace",
    },
    {
      title: "Community Advocacy Playbook",
      description: "Strategies for grassroots gender equality initiatives.",
      icon: <FileText className="text-masterplan-primary" size={20} />,
      category: "Advocacy",
    },
  ];

  return (
    <section id="resources" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="pill pill-secondary mb-4">Resources</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tools for Creating Change
          </h2>
          <p className="text-masterplan-text-light text-lg">
            Access a curated collection of resources designed to help individuals, organizations, 
            and policymakers take meaningful action toward gender equality.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div ref={imageRef} className="order-2 lg:order-1 fade-in-section">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={images.resourcesIllustration} 
                  alt="Resources illustration" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating element */}
              <div className="glass absolute -bottom-8 right-8 lg:-right-8 rounded-xl p-5 shadow-lg max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-masterplan-accent text-white p-2 rounded-lg">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">AI-Updated Resources</h4>
                    <p className="text-sm text-masterplan-text-light mt-1">
                      Resources continuously updated with the latest research and best practices
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Partner logos */}
              <div className="glass mt-12 p-6 rounded-xl">
                <p className="text-sm text-masterplan-text-light mb-4 text-center">Trusted by organizations worldwide</p>
                <div className="flex flex-wrap justify-center gap-8">
                  {images.partnerLogos.map((logo, index) => (
                    <img 
                      key={index} 
                      src={logo} 
                      alt={`Partner ${index + 1}`} 
                      className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resources list */}
          <div ref={resourcesRef} className="order-1 lg:order-2 fade-in-section">
            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div 
                  key={index} 
                  className="glass rounded-xl p-6 transition-all hover:shadow-lg card-hover"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-masterplan-secondary p-3 rounded-full h-fit">
                        {resource.icon}
                      </div>
                      
                      <div>
                        <div className="pill pill-secondary text-xs mb-2 inline-block">{resource.category}</div>
                        <h3 className="font-semibold mb-2">{resource.title}</h3>
                        <p className="text-masterplan-text-light text-sm">{resource.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <button className="text-masterplan-text-light hover:text-masterplan-primary transition-colors p-2">
                        <Bookmark size={18} />
                      </button>
                      <button className="text-masterplan-text-light hover:text-masterplan-primary transition-colors p-2">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View all button */}
              <div className="mt-8 text-center">
                <button className="bg-white border-2 border-masterplan-primary text-masterplan-primary rounded-xl px-8 py-3 font-medium transition-all hover:bg-masterplan-secondary">
                  View All Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
