import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Shield, Brain, Settings } from 'lucide-react';

const Teams = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Express Your Creativity with AI',
      description: 'Bring your vision to life with our cutting-edge suite of creative solutions.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Protect Your IP',
      description: 'Your data remains secure and protected while you scale your brand assets.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborate Seamlessly',
      description: 'Unite your team with innovative AI tools and work towards a shared vision.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Smart Team Management',
      description: 'Manage your team efficiently with simple and secure administrative controls.'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Empower Your Team with AI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transform your team's creative workflow with our collaborative AI platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full"
          >
            Start Free Trial
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;