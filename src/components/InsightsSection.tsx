
import React, { useEffect, useRef } from 'react';
import { BarChart, Layers, Globe, TrendingUp } from 'lucide-react';
import images from '@/assets/images';

const InsightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

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
    if (chartRef.current) observer.observe(chartRef.current);
    if (insightsRef.current) observer.observe(insightsRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (chartRef.current) observer.unobserve(chartRef.current);
      if (insightsRef.current) observer.unobserve(insightsRef.current);
    };
  }, []);

  const insights = [
    {
      title: "Global Gender Pay Gap",
      description: "Women globally earn 77 cents for every dollar earned by men, with variations by region and industry.",
      icon: <Globe className="text-masterplan-primary" size={24} />,
      change: "-2.3%",
      isPositive: true,
    },
    {
      title: "Education Access",
      description: "131 million girls worldwide remain out of school, with poverty and cultural norms as major barriers.",
      icon: <Layers className="text-masterplan-primary" size={24} />,
      change: "+4.1%",
      isPositive: true,
    },
    {
      title: "Leadership Representation",
      description: "Only 27% of managerial positions are held by women globally, with slower growth in recent years.",
      icon: <TrendingUp className="text-masterplan-primary" size={24} />,
      change: "+1.2%",
      isPositive: true,
    },
  ];

  return (
    <section id="insights" className="py-20 md:py-32 relative overflow-hidden bg-masterplan-primary bg-opacity-5">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="pill pill-primary mb-4">Data Insights</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI-Driven Gender Equality Analytics
          </h2>
          <p className="text-masterplan-text-light text-lg">
            Leveraging AI to analyze global data on gender equality, providing actionable 
            insights to drive informed decision-making and targeted interventions.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Chart visualization */}
          <div ref={chartRef} className="fade-in-section">
            <div className="relative">
              <div className="glass rounded-2xl overflow-hidden shadow-xl p-4">
                <div className="bg-white rounded-xl p-6">
                  <img 
                    src={images.graphImage} 
                    alt="Gender equality data visualization" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="glass absolute -top-6 -right-6 rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-masterplan-primary text-white p-2 rounded-lg">
                    <BarChart size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Powered by Vertex AI</h4>
                    <p className="text-xs text-masterplan-text-light">Real-time data analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key insights */}
          <div ref={insightsRef} className="space-y-8 fade-in-section">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-masterplan-secondary p-3 rounded-full">
                    {insight.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                        insight.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {insight.change}
                      </div>
                    </div>
                    <p className="text-masterplan-text-light text-sm">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* CTA */}
            <button className="bg-masterplan-primary text-white rounded-xl w-full py-4 font-medium transition-all hover:shadow-lg hover:bg-opacity-90 mt-4">
              View Complete Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
