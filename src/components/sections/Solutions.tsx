import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brush, Camera, Home, Briefcase } from 'lucide-react';

const solutions = [
  {
    icon: <Brush className="w-12 h-12" />,
    title: 'Creative Design',
    description: 'Transform your creative vision with AI-powered design tools.',
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: 'Photography',
    description: 'Enhance and generate stunning photographs with AI assistance.',
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: 'Interior Design',
    description: 'Revolutionize interior spaces with AI visualization.',
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: 'Business Solutions',
    description: 'Streamline your workflow with AI-powered business tools.',
  },
];

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our AI technology can transform your industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl p-8 hover:from-purple-900/30 transition-all duration-300"
            >
              <div className="text-purple-400 mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-400 text-lg">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;