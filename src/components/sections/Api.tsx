import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Lock, DollarSign } from 'lucide-react';

const Api = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Supercharge Your Business with Our API
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Integrate powerful AI capabilities into your applications with our robust API
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full"
            >
              View Documentation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500 text-white px-8 py-3 rounded-full"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Code className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Simple Integration</h3>
                <p className="text-gray-400">Get started with just a few lines of code</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Bank-grade encryption and data protection</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">High Performance</h3>
                <p className="text-gray-400">Lightning-fast response times and scalability</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <DollarSign className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Pricing</h3>
                <p className="text-gray-400">Pay only for what you use</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`
// Example API Usage
const response = await fetch('https://api.aivision.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'A futuristic cityscape at sunset',
    style: 'photorealistic',
    dimensions: { width: 1024, height: 1024 }
  })
});

const result = await response.json();
              `}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Api;