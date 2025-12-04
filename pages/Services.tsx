import React from 'react';
import { PenTool, Ruler, Home, Building2, Trees, HardHat } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <PenTool size={40} />,
      title: "Architectural Design",
      description: "Comprehensive conceptualization and design development for residential and commercial structures."
    },
    {
      icon: <Home size={40} />,
      title: "Interior Design",
      description: "Creating cohesive interior environments that complement the architectural shell."
    },
    {
      icon: <Building2 size={40} />,
      title: "Urban Planning",
      description: "Strategic planning for communities, focusing on sustainability and traffic flow."
    },
    {
      icon: <Ruler size={40} />,
      title: "Master Planning",
      description: "Long-term land use strategies for large-scale developments and campuses."
    },
    {
      icon: <Trees size={40} />,
      title: "Landscape Architecture",
      description: "Integrating natural elements to create harmonious outdoor living spaces."
    },
    {
      icon: <HardHat size={40} />,
      title: "Project Management",
      description: "Overseeing construction to ensure projects are delivered on time and within budget."
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 pt-8 pb-20">
      
      <div className="bg-primary py-16 mb-16 text-white text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-gray-300 px-4">
          From the first sketch to the final brick, we offer a full spectrum of architectural and design services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="p-8 border border-gray-100 rounded-xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 group bg-white"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We would love to hear about your ideas and help you turn them into reality.
          </p>
          <a href="#/contact" className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-secondary transition-colors">
            Start a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;