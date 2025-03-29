import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';

const WebsiteSections = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300",
      bio: "15+ years experience in digital innovation and business strategy."
    },
    {
      name: "Samantha Chen",
      role: "Chief Technology Officer",
      image: "/api/placeholder/300/300",
      bio: "AI specialist with background in machine learning and cloud architecture."
    },
    {
      name: "David Park",
      role: "Lead Developer",
      image: "/api/placeholder/300/300",
      bio: "Full-stack engineer passionate about creating intuitive digital experiences."
    },
    {
      name: "Ava Williams",
      role: "UX/UI Designer",
      image: "/api/placeholder/300/300",
      bio: "Award-winning designer crafting beautiful, user-centered interfaces."
    }
  ];

  return (
    <>
      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                About <span className="text-blue-600">Our Company</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2015, we've grown from a small startup into a dynamic digital agency with a global presence. 
                Our mission is to bridge the gap between complex technology and elegant user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in creating solutions that not only solve problems but also delight users. 
                Our team combines technical expertise with creative innovation to deliver exceptional results 
                that exceed client expectations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">85%</h3>
                  <p className="text-gray-600">Client Retention</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">24</h3>
                  <p className="text-gray-600">Team Members</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">12</h3>
                  <p className="text-gray-600">Countries Served</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-blue-100 rounded-lg h-80 md:h-96 w-full"></div>
              <img 
                src="/api/placeholder/500/400" 
                alt="Our workspace" 
                className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-full h-80 md:h-96 object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-gray-600">
              Our diverse team of professionals combines creativity, technical expertise, and industry insight 
              to deliver exceptional digital solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-end">
                    <div className="p-4 flex space-x-3 mb-2">
                      <motion.button whileHover={{ scale: 1.1 }} className="bg-white p-2 rounded-full">
                        <Linkedin size={16} className="text-blue-600" />
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="bg-white p-2 rounded-full">
                        <Twitter size={16} className="text-blue-400" />
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="bg-white p-2 rounded-full">
                        <Github size={16} className="text-gray-800" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's <span className="text-blue-400">Connect</span>
                </h2>
                <p className="text-gray-300 max-w-md">
                  Have a project in mind or want to learn more about our services? 
                  Get in touch and let's discuss how we can help transform your ideas into reality.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email Us</h3>
                    <p className="text-gray-300">info@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Visit Us</h3>
                    <p className="text-gray-300">123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteSections;