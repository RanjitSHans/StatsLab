import React from 'react';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const projects: PortfolioItem[] = [
    {
      id: 1,
      title: "Fintech Risk Anomaly",
      imageUrl: "https://picsum.photos/800/600?random=1",
      tags: ["Prediction", "Finance", "Security"]
    },
    {
      id: 2,
      title: "Supply Chain Optimization",
      imageUrl: "https://picsum.photos/800/600?random=2",
      tags: ["Deep Analysis", "Logistics"]
    },
    {
      id: 3,
      title: "Healthcare Patient Outcomes",
      imageUrl: "https://picsum.photos/800/600?random=3",
      tags: ["Prediction", "BioTech"]
    },
    {
      id: 4,
      title: "Market Trend Visualization",
      imageUrl: "https://picsum.photos/800/600?random=4",
      tags: ["Infographic", "Marketing"]
    },
    {
      id: 5,
      title: "Energy Grid Efficiency",
      imageUrl: "https://picsum.photos/800/600?random=5",
      tags: ["Outlier Detection", "Energy"]
    },
    {
      id: 6,
      title: "Retail Customer Segmentation",
      imageUrl: "https://picsum.photos/800/600?random=6",
      tags: ["Deep Analysis", "Retail"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Case Studies</h2>
          <div className="h-1 w-20 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-accent/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};