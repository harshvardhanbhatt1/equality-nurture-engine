
import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';
import images from '@/assets/images';

const StoriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeStory, setActiveStory] = useState(0);

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

    // Auto-rotate stories
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 5000);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
      clearInterval(interval);
    };
  }, []);

  const stories = [
    {
      id: 1,
      title: "Breaking Barriers in Tech Education",
      excerpt: "How our community initiative is helping young girls access STEM education in rural areas.",
      author: "Maya Johnson",
      avatar: images.storyAuthors[0],
      location: "Kenya",
      likes: 342,
      comments: 48,
    },
    {
      id: 2,
      title: "From Classroom to Boardroom",
      excerpt: "My journey as a woman in corporate leadership and how mentorship changed everything.",
      author: "Sarah Chen",
      avatar: images.storyAuthors[1],
      location: "Singapore",
      likes: 528,
      comments: 63,
    },
    {
      id: 3,
      title: "Empowering Through Equal Pay",
      excerpt: "How our organization achieved pay equality and the positive impact it's had on everyone.",
      author: "James Rodriguez",
      avatar: images.storyAuthors[2],
      location: "Colombia",
      likes: 217,
      comments: 35,
    },
  ];

  return (
    <section id="stories" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-masterplan-neutral to-white -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="pill pill-accent mb-4">Community Stories</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real Voices, Real Impact
          </h2>
          <p className="text-masterplan-text-light text-lg">
            Discover inspiring stories shared by our community members about their experiences 
            promoting gender equality in their homes, workplaces, and communities.
          </p>
        </div>

        {/* Stories carousel */}
        <div ref={cardsRef} className="fade-in-section">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeStory * 100}%)` }}
              >
                {stories.map((story) => (
                  <div key={story.id} className="w-full flex-shrink-0 px-4">
                    <div className="glass rounded-2xl overflow-hidden shadow-lg">
                      <div className="p-8 md:p-10">
                        <div className="flex items-center mb-6">
                          <img 
                            src={story.avatar} 
                            alt={story.author} 
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-medium">{story.author}</h4>
                            <p className="text-sm text-masterplan-text-light">{story.location}</p>
                          </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-4">{story.title}</h3>
                        <p className="text-masterplan-text-light mb-8">
                          "{story.excerpt}"
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <button className="flex items-center text-masterplan-text-light hover:text-masterplan-primary transition-colors">
                              <ThumbsUp size={18} className="mr-2" />
                              <span>{story.likes}</span>
                            </button>
                            <button className="flex items-center text-masterplan-text-light hover:text-masterplan-primary transition-colors">
                              <MessageCircle size={18} className="mr-2" />
                              <span>{story.comments}</span>
                            </button>
                          </div>
                          
                          <button className="flex items-center text-masterplan-text-light hover:text-masterplan-primary transition-colors">
                            <Share2 size={18} className="mr-2" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeStory === index 
                      ? 'bg-masterplan-primary scale-125' 
                      : 'bg-masterplan-neutral-dark'
                  }`}
                  onClick={() => setActiveStory(index)}
                />
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-masterplan-primary text-masterplan-primary rounded-full px-8 py-3 font-medium transition-all hover:bg-masterplan-secondary">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
