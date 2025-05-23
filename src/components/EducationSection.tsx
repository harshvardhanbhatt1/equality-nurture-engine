
import React, { useEffect, useRef } from 'react';
import { BookOpen, BookOpenCheck, Brain, GraduationCap } from 'lucide-react';
import images from '@/assets/images';

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const educationalContent = [
    {
      title: "AI-Powered Learning",
      description: "Personalized content generated by Gemini AI to educate on gender equality concepts and challenges.",
      icon: <Brain className="text-masterplan-primary" size={24} />,
    },
    {
      title: "Interactive Courses",
      description: "Engaging modules designed to challenge biases and promote understanding across different cultures.",
      icon: <BookOpenCheck className="text-masterplan-primary" size={24} />,
    },
    {
      title: "Educational Resources",
      description: "Comprehensive library of articles, videos, and infographics on gender equality topics.",
      icon: <BookOpen className="text-masterplan-primary" size={24} />,
    },
    {
      title: "Knowledge Challenges",
      description: "Gamified quizzes and activities to test understanding and encourage continuous learning.",
      icon: <GraduationCap className="text-masterplan-primary" size={24} />,
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-masterplan-neutral">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="pill pill-primary mb-4">Education</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI-Powered Education for Awareness
          </h2>
          <p className="text-masterplan-text-light text-lg">
            Our platform leverages AI to generate personalized educational content that raises awareness 
            about gender equality issues and empowers users with knowledge to drive change.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Educational content cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-section">
            {educationalContent.map((item, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-xl card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-masterplan-secondary p-3 rounded-full w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-masterplan-text-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Image section */}
          <div ref={imageRef} className="fade-in-section">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={images.educationIllustration} 
                  alt="Educational content illustration" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Feature highlight */}
              <div className="glass absolute -bottom-6 -right-6 rounded-xl p-5 shadow-lg max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="bg-masterplan-primary text-white p-2 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Gemini AI Content</h4>
                    <p className="text-sm text-masterplan-text-light mt-1">
                      Continuously updated content using Google's most advanced AI
                    </p>
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

export default EducationSection;
