import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Video, Image, Megaphone, Box, Building2, Camera, Home } from 'lucide-react';

const solutions = [
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'AI Marketing Tools',
    description: 'Revolutionize your marketing campaigns with AI-powered content generation.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'AI Graphic Design',
    description: 'Transform your design workflow with intelligent automation and creative assistance.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: 'AI Print on Demand',
    description: 'Convert your digital designs into print-ready masterpieces instantly.',
    gradient: 'from-pink-500 to-red-500'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'AI Photography',
    description: 'Enhance your photography portfolio with our AI-powered editing tools.',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'AI Interior Design',
    description: 'Create stunning interior visualizations with AI assistance.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'AI Architecture',
    description: 'Streamline architectural design with intelligent AI tools.',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our AI technology can transform your industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-purple-900/20 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative">
                <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 text-purple-400 hover:text-purple-300 flex items-center gap-2"
                >
                  Explore solution
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;