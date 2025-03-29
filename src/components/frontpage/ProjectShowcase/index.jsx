import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Server, Zap, Shield, Globe } from 'lucide-react';
import { Text } from '@chakra-ui/react';

const ProjectShowcase = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions that meet your unique business needs.",
      color: "text-blue-400"
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions to power your digital transformation.",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions to drive innovation and efficiency.",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security strategies to protect your digital assets.",
      color: "text-red-400"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end digital strategy and implementation services.",
      color: "text-indigo-400"
    }
  ];

  return (
    <div id='projects' className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundColor: "darkgray",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-6 md:px-20 text-white">
        {/* Services Grid */}
        <motion.div 
          variants={serviceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceVariants}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <service.icon className={`w-12 h-12 ${service.color}`} />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-6"
        >
          <Text className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="5xl">
            Our Digital <br />
            <span>Services & Solutions</span>
          </Text>
          <p className="text-gray-300 text-lg">
            We transform businesses through innovative technology, delivering 
            comprehensive solutions that drive growth, efficiency, and competitive advantage.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;