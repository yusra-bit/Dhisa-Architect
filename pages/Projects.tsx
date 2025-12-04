import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Public'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="animate-in fade-in duration-500 pt-8 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Explore a selection of our finest work, showcasing our commitment to design excellence across various sectors.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-wider font-medium transition-all duration-300 border-b-2 ${
                filter === cat 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-sm mb-4 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors">
                    View Project
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide">{project.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;