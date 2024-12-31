import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wand2, Image, Video, Palette, Box, Building2 } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: 'AI Art Generator',
    description: 'Transform your ideas into stunning artwork with our advanced AI.',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'AI Video Generator',
    description: 'Create captivating videos with AI-powered animation and effects.',
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: 'Transparent PNG Generator',
    description: 'Generate professional transparent images for your projects.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'AI Graphic Design',
    description: 'Design beautiful graphics with AI assistance.',
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: 'AI Print on Demand',
    description: 'Create and sell custom merchandise with AI-generated designs.',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'AI Architecture',
    description: 'Revolutionize architectural design with AI technology.',
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our suite of AI-powered tools designed to transform your creative workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-purple-900/20 transition-all duration-300 cursor-pointer"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;