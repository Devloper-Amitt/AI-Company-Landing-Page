import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '100K+', label: 'Active Users' },
    { icon: <Globe className="w-6 h-6" />, value: '50+', label: 'Countries' },
    { icon: <Award className="w-6 h-6" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-6 h-6" />, value: '24/7', label: 'Support' },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Revolutionizing Creative AI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to democratize AI-powered creativity and empower creators worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              At AI Vision, we believe in a future where AI amplifies human creativity rather than replacing it. 
              Our platform bridges the gap between imagination and reality, enabling creators to bring their 
              ideas to life with unprecedented ease and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              We're committed to developing cutting-edge AI tools that empower creators, businesses, and 
              innovators to push the boundaries of what's possible. Through continuous innovation and 
              user-centric design, we're making advanced AI technology accessible to everyone.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-purple-400 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;