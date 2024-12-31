import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Lock, DollarSign } from 'lucide-react';

const pricingPlans = [
  {
    name: 'API Basic',
    price: '9',
    credits: '3,500',
    features: [
      'Up to 5 concurrent generations',
      'Alchemy, Prompt Magic v3, PhotoReal, and Motion',
      'Train models with API credits',
      'API credits do not expire',
      'No discount on API credits top-ups',
      'Automatic API credits top-ups'
    ]
  },
  {
    name: 'API Standard',
    price: '49',
    credits: '25,000',
    features: [
      'Up to 5 concurrent generations',
      'Alchemy, Prompt Magic v3, PhotoReal, and Motion',
      'Train models with API credits',
      'API credits do not expire',
      '20% discount on API credits top-ups',
      'Automatic API credits top-ups'
    ]
  },
  {
    name: 'API Pro',
    price: '299',
    credits: '200,000',
    features: [
      'Up to 5 concurrent generations',
      'Alchemy, Prompt Magic v3, PhotoReal, and Motion',
      'Train models with API credits',
      'API credits do not expire',
      '40% discount on API credits top-ups',
      'Automatic API credits top-ups'
    ]
  }
];

const Api = () => {
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
            Supercharge your business with the AI Vision API
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Experience content creation excellence with our powerful API. With unmatched scalability, 
            effortlessly tailor outputs to your brand guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full"
            >
              API Documentation
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-purple-400 mb-6">{plan.credits} API credits per month</p>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Zap className="w-5 h-5 mr-2 text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">Quick and Easy Integration</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Simple API</h3>
                  <p className="text-gray-400">Integrate our powerful AI capabilities with just a few lines of code.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
                  <p className="text-gray-400">Enterprise-grade security with encrypted data transmission.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Pricing</h3>
                  <p className="text-gray-400">Pay only for what you use with our credit-based system.</p>
                </div>
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