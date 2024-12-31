import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Zap, Shield, Rocket, Brain, Settings } from 'lucide-react';

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

const stats = [
  { value: '500K+', label: 'Custom IP trained models' },
  { value: '1B+', label: 'Images generated' },
  { value: '1000+', label: 'Business clients' }
];

const Teams = () => {
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
            Fuel creative collaboration with AI Vision for Teams
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Bring your team's ideas to life at scale with our intuitive AI-first creative suite built for business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full"
          >
            Get Started Now
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to transform your team's workflow?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;