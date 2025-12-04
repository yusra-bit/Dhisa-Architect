import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Who We Are</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Office" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2010, Dhisa Architects began with a simple belief: that design should serve people. What started as a small studio has grown into a multidisciplinary firm recognized for its thoughtful approach to contemporary architecture.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our name "Dhisa" symbolizes direction and vision. We guide our clients through the complex process of bringing a dream to reality, ensuring every line drawn on paper translates into a meaningful structure.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-primary text-white rounded-xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300">Pushing boundaries with modern materials and technology.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-300">Designing for energy efficiency and environmental harmony.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-300">Honest relationships with clients, contractors, and communities.</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Principal Architect', img: 1 },
              { name: 'David Chen', role: 'Senior Designer', img: 2 },
              { name: 'Elena Rodriguez', role: 'Urban Planner', img: 3 },
              { name: 'Michael Ross', role: 'Project Manager', img: 4 },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={`https://picsum.photos/400/500?random=${member.img + 10}`} 
                    alt={member.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;