import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    company: 'Design Studio',
    content: 'AI Vision has completely transformed our creative workflow. The tools are intuitive and the results are amazing.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'Tech Innovations',
    content: 'The API integration was seamless, and the AI capabilities have exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Art Director',
    company: 'Creative Labs',
    content: 'The AI art generator has opened up new possibilities for our design team. Simply incredible!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    company: 'Innovation Hub',
    content: 'Our team productivity has increased significantly since we started using AI Vision.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Alex Turner',
    role: 'Game Developer',
    company: 'GameCraft Studios',
    content: 'The AI tools have revolutionized our asset creation pipeline. Incredible technology!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Lisa Wang',
    role: 'UI/UX Designer',
    company: 'Digital Creatives',
    content: 'AI Vision has become an essential part of our design process. The results are outstanding.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150'
  }
];

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-24 bg-black overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how AI Vision is helping creators and businesses worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex overflow-x-hidden"
        >
          <motion.div
            animate={{
              x: [0, -2000],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            }}
            className="flex gap-8"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex-shrink-0 w-96 bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-purple-900/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;