import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-500 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-gray-600">We are ready to start your next project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <div>
            <div className="bg-primary text-white rounded-xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-gray-300">123 Architecture Ave, Suite 400<br/>New York, NY 10012</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-300">hello@dhisaarchitects.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
              <img 
                src="https://picsum.photos/800/400?grayscale&blur=2" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <p className="text-gray-500 font-semibold bg-white/80 px-4 py-2 rounded">Map View Placeholder</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                   <Send className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>New Project Proposal</option>
                    <option>Career Opportunity</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-secondary transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;