import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PenTool, Layout, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl px-4">
          <div className="inline-block mb-4 px-3 py-1 border border-white/30 rounded-full text-white/80 text-sm tracking-widest uppercase backdrop-blur-sm">
            Est. 2010
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Visionary Design <br/> 
            <span className="text-white/90">Timeless Spaces</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Dhisa Architects fuses modern innovation with sustainable practices to create environments that inspire, endure, and elevate the human experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/projects" 
              className="px-8 py-4 bg-white text-primary font-bold rounded-sm hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              View Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-sm hover:bg-white hover:text-primary transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-full -z-10"></div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">Redefining the <br/>Architectural Landscape</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                At Dhisa Architects, we believe that every line drawn is a commitment to the future. Our multidisciplinary team combines technical expertise with creative intuition to deliver projects that stand the test of time.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded text-primary">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Design Excellence</h3>
                    <p className="text-sm text-gray-600">Award-winning conceptualization and execution.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded text-primary">
                    <Layout size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Sustainable Planning</h3>
                    <p className="text-sm text-gray-600">Eco-friendly solutions for modern living.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link to="/about" className="text-primary font-bold inline-flex items-center gap-2 border-b-2 border-primary pb-1 hover:gap-4 transition-all">
                  Read our story <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" alt="Interior" className="rounded-sm shadow-xl w-full h-80 object-cover mt-12" />
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" alt="Exterior" className="rounded-sm shadow-xl w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">Featured Projects</h2>
              <p className="text-gray-600">A glimpse into our recent architectural endeavors.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary font-medium hover:translate-x-1 transition-transform">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/arch${i}/600/500`} 
                    alt={`Project ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 right-6 bg-primary text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Residential</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Residence {i}</h3>
                  <p className="text-gray-500 text-sm">New York, NY</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link to="/projects" className="inline-block px-6 py-3 border border-primary text-primary rounded font-semibold hover:bg-primary hover:text-white transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;