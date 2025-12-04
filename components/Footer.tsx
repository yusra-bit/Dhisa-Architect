import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl font-bold mb-4">DHISA</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Creating sustainable, innovative, and timeless spaces that inspire and endure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white">Our Projects</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Architecture Ave,<br />Design District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@dhisaarchitects.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Mock) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe for design updates.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-secondary/50 text-white placeholder-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-white border border-gray-600"
              />
              <button className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dhisa Architects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;