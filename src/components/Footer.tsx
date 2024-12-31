import React from 'react';
import { Brain, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    { name: 'AI Art Generator', id: 'solutions' },
    { name: 'AI Video Generator', id: 'solutions' },
    { name: 'Transparent PNG Generator', id: 'solutions' },
    { name: 'AI Marketing Tools', id: 'solutions' },
    { name: 'AI Graphic Design', id: 'solutions' },
    { name: 'AI Print on Demand', id: 'solutions' },
    { name: 'AI Photography', id: 'solutions' },
    { name: 'AI Interior Design', id: 'solutions' },
    { name: 'AI Architecture', id: 'solutions' },
  ];

  const company = [
    { name: 'About', id: 'about' },
    { name: 'API', id: 'api' },
    { name: 'FAQ', id: 'about' },
    { name: 'Blog', id: 'about' },
    { name: 'Support', id: 'contact' },
    { name: 'Contact us', id: 'contact' },
    { name: 'Careers', id: 'about' },
  ];

  const programs = [
    { name: 'Affiliate Program', id: 'about' },
    { name: 'Creator Program', id: 'about' },
    { name: 'Get the App', id: 'about' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold gradient-text">AI Vision</span>
            </button>
            <p className="text-gray-400 mb-6">
              Transforming creativity with cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4">Stay Tuned</h3>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-r-md hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-400">
            <p className="mb-4">
              AI Vision Interactive Pty Ltd
              <br />
              ABN: 56 662 209 485
            </p>
            <p>© 2024 All Rights Reserved, AI Vision Interactive Pty Ltd®</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button onClick={() => scrollToSection('about')} className="hover:text-white">Legal Notice</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-white">DMCA</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-white">Terms of Service</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-white">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;