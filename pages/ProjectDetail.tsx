import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, Maximize, Share2, X, Check, Copy, Facebook, Linkedin, Twitter } from 'lucide-react';
import { PROJECTS } from '../data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}` },
    { name: 'Twitter', icon: <Twitter size={20} />, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(project.title)}` },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(project.title)}` },
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-20 bg-white relative">
      
      {/* Share Modal */}
      {isShareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 relative animate-in zoom-in-95 duration-200 border border-gray-100">
            <button 
              onClick={() => setIsShareOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-xl font-serif font-bold text-primary mb-2">Share Project</h3>
            <p className="text-sm text-gray-500 mb-6">Spread the word about {project.title}.</p>
            
            <div className="flex justify-center gap-8 mb-8">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-md">
                    {link.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-500 group-hover:text-primary transition-colors">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="relative pt-4 border-t border-gray-100">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Or copy link</label>
              <div className="flex gap-2">
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-600 truncate font-mono">
                  {currentUrl}
                </div>
                <button
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded flex items-center gap-2 font-medium transition-all shadow-sm ${
                    copied 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-primary text-white hover:bg-secondary border border-transparent'
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
          {/* Header Actions */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors hover:-translate-x-1 duration-200"
            >
              <ArrowLeft size={20} /> <span className="font-medium">Back to Projects</span>
            </Link>

            <button 
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-medium border border-white/10 hover:border-white/30"
            >
              <Share2 size={16} /> Share
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-in slide-in-from-bottom-5 duration-700">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-100 border border-blue-400/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest rounded-sm">
                  {project.category}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">{project.title}</h1>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
              <MapPin size={18} />
              <span className="text-lg font-light">{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-t-lg shadow-sm border border-gray-100 p-8">
          
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-100 pb-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
                <Calendar size={16} />
                <span>Year</span>
              </div>
              <p className="text-gray-600 pl-6 font-serif text-lg">{project.year || 'N/A'}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
                <User size={16} />
                <span>Client</span>
              </div>
              <p className="text-gray-600 pl-6 font-serif text-lg">{project.client || 'Confidential'}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
                <Maximize size={16} />
                <span>Area</span>
              </div>
              <p className="text-gray-600 pl-6 font-serif text-lg">{project.area || 'N/A'}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
                <MapPin size={16} />
                <span>Location</span>
              </div>
              <p className="text-gray-600 pl-6 font-serif text-lg">{project.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">About the Project</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none font-light">
                <p>{project.detailedDescription || project.description}</p>
                <p className="mt-6">
                  The design process for {project.title} involved a deep analysis of the site conditions, client requirements, and the cultural context of {project.location}. Our team worked tirelessly to ensure that every material chosen and every line drawn serves both a functional and aesthetic purpose.
                </p>
              </div>
            </div>

            {/* Sidebar / Context */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="font-bold text-primary mb-6 pb-2 border-b border-gray-200 font-serif text-xl">Design Focus</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>Sustainability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>Community Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>Material Innovation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span>Light Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 pl-4 border-l-4 border-primary">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery?.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}
            >
              <img 
                src={img} 
                alt={`${project.title} view ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          ))}
          {!project.gallery && (
            <div className="col-span-full py-12 text-center text-gray-500 bg-gray-50 rounded border border-dashed border-gray-300">
              Additional gallery images coming soon.
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-10 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link to="/projects" className="text-gray-600 hover:text-primary font-medium hover:underline transition-all">
            ← Back to All Projects
          </Link>
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded shadow-lg hover:bg-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-medium tracking-wide">
            Inquire About This Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;