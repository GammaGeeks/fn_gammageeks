import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true
      });
    }
    
    // Validate on change if already touched
    if (touched[name]) {
      const validationErrors = validate();
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    const validationErrors = validate();
    setErrors(validationErrors);
    
    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log(formData);
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTouched({});
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-300">
            Have a project in mind or want to learn more about our services? 
            Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
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

            <div className="pt-6">
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                  <motion.a
                    key={platform}
                    href={`#${platform}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-blue-600/50 p-3 rounded-full transition-colors duration-300"
                  >
                    <span className="w-5 h-5 block bg-white/90"></span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white/5 border ${
                          errors.name && touched.name ? 'border-red-500' : 'border-gray-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white transition-all duration-300`}
                        placeholder="John Doe"
                      />
                      {errors.name && touched.name && (
                        <div className="absolute right-3 top-3 text-red-500">
                          <AlertCircle size={18} />
                        </div>
                      )}
                    </div>
                    {errors.name && touched.name && (
                      <div className="mt-1 text-sm text-red-500">{errors.name}</div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 bg-white/5 border ${
                          errors.email && touched.email ? 'border-red-500' : 'border-gray-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white transition-all duration-300`}
                        placeholder="john@example.com"
                      />
                      {errors.email && touched.email && (
                        <div className="absolute right-3 top-3 text-red-500">
                          <AlertCircle size={18} />
                        </div>
                      )}
                    </div>
                    {errors.email && touched.email && (
                      <div className="mt-1 text-sm text-red-500">{errors.email}</div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.subject && touched.subject ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white transition-all duration-300`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && touched.subject && (
                      <div className="absolute right-3 top-3 text-red-500">
                        <AlertCircle size={18} />
                      </div>
                    )}
                  </div>
                  {errors.subject && touched.subject && (
                    <div className="mt-1 text-sm text-red-500">{errors.subject}</div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows="4"
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.message && touched.message ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white transition-all duration-300`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && touched.message && (
                      <div className="absolute right-3 top-3 text-red-500">
                        <AlertCircle size={18} />
                      </div>
                    )}
                  </div>
                  {errors.message && touched.message && (
                    <div className="mt-1 text-sm text-red-500">{errors.message}</div>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full ${
                    isSubmitting ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300 relative overflow-hidden`}
                >
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  )}
                  <span className={isSubmitting ? 'opacity-0' : 'opacity-100'}>Send Message</span>
                  <ArrowRight className={`w-4 h-4 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;