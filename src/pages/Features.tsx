import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Wand2, Video, Image, Palette, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Phoenix AI',
    description: 'Our revolutionary foundational model that redefines AI image generation with unprecedented quality and control.',
    isNew: true
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: 'AI Art Generator',
    description: 'Create stunning artwork, illustrations, and designs with simple text prompts.',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'AI Video Generator',
    description: 'Transform static images into dynamic videos with AI-powered animation.',
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: 'Transparent PNG Generator',
    description: 'Generate professional background-free images instantly.',
  }
];

const Features = () => {
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
            Cutting-Edge AI Features
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our suite of advanced AI tools designed to revolutionize creative workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className="relative bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-purple-900/20 transition-all duration-300"
            >
              {feature.isNew && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full">
                  NEW
                </span>
              )}
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-purple-400 hover:text-purple-300 flex items-center gap-2"
              >
                Learn more <Rocket className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;