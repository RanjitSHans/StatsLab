import React from 'react';
import { AlertTriangle, TrendingUp, Microscope, PieChart } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Outlier Detection",
      description: "Identifying the things that 'fall out' of the norm. We detect anomalies that signal fraud, failure, or opportunity.",
      isOutlier: true,
      icon: <AlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Predictive Modeling",
      description: "Forecasting trends before they happen. Our models look into the future with high confidence intervals.",
      isOutlier: false,
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Deep Analysis",
      description: "Root cause diagnostics. We dig beneath the surface layers of your data to find the 'Why'.",
      isOutlier: false,
      icon: <Microscope className="w-8 h-8" />,
    },
    {
      title: "Infographics",
      description: "Visualizing complex stories. Turning raw petabytes into executive-ready visual narratives.",
      isOutlier: false,
      icon: <PieChart className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Precision engineering for your data infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative group p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-2
                ${service.isOutlier 
                  ? 'bg-outlier/5 border-outlier/30 hover:border-outlier hover:shadow-lg hover:shadow-outlier/20' 
                  : 'bg-white/5 border-white/10 hover:border-accent hover:shadow-lg hover:shadow-accent/10'
                }
              `}
            >
              <div className={`mb-6 inline-block p-4 rounded-xl 
                ${service.isOutlier ? 'bg-outlier/10 text-outlier' : 'bg-accent/10 text-accent'}
              `}>
                {service.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${service.isOutlier ? 'text-white' : 'text-slate-100'}`}>
                {service.title}
              </h3>
              
              <p className="text-slate-400 font-body leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl opacity-10 rounded-bl-full transition-opacity
                 ${service.isOutlier ? 'from-outlier to-transparent' : 'from-accent to-transparent'}
              `}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};