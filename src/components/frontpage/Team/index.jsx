import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';
import { Box, Flex, Heading, Text, chakra } from '@chakra-ui/react';

const MotionBox = motion(chakra.div);
const MotionHeading = motion(Heading);

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
      name: "Vincent Musangamfura",
      role: "CEO & Founder",
      image: "https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/team/vincent.png",
      bio: "15+ years experience in digital innovation and business strategy."
    },
    {
      name: "Igor J.L. Ndiramiye",
      role: "Chief Technology Officer",
      image: "https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/team/igor.png",
      bio: "AI specialist with background in machine learning and cloud architecture."
    },
    {
      name: "Adolphe Ngoga",
      role: "Lead Developer",
      image: "https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/team/ngoga.jpg",
      bio: "Full-stack engineer passionate about creating intuitive digital experiences."
    },
    {
      name: "Serge Rwoga",
      role: "UX/UI Designer",
      image: "https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/team/serge.png",
      bio: "Award-winning designer crafting beautiful, user-centered interfaces."
    },
    {
      name: "Jean Claude Mbonimpa",
      role: "Web Developer",
      image: "https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/team/claude.jpg",
      bio: "Award-winning designer crafting beautiful, user-centered interfaces."
    }
  ];

  return (
    <>
      {/* About Us Section */}
      <Flex id="about" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <Box
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundColor: "purple",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-sm" />
        </Box>

        {/* Content */}
        <Box w="100%" className="relative z-10">
          <Box
            className="-mx-4 flex flex-wrap items-center"
            paddingX={{ base: "8", md: "32" }}
            paddingBottom={{ base: "8", md: "16" }}
            marginY={{ base: "24", md: "18", lg: "16" }}
            paddingTop={{ base: "8", md: "16" }}
          >
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full px-4 lg:w-1/2"
            >
              <div className="mb-12 max-w-full lg:mb-0">
                <Box
                  // initial={{ opacity: 0, x: -50 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.8 }}
                  marginY={{ base: "24", md: "18", lg: "16" }}
                  paddingTop={{ base: "8", md: "16" }}
                  display="flex"
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems={{ base: "center", md: "flex-start" }}
                  gap="4"
                >
                  <Heading as="h4" className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="4xl">
                    Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400'> Workspace</span>
                  </Heading>
                  <Text className="text-sm font-playfair font-semibold md:text-xl lg:text-2xl text-center lg:text-left">
                    Our goal is to build strong relationships with our clients by earning their trust and satisfaction. We strive to provide exceptional service that makes them feel valued and appreciated.
                  </Text>
                  <Text className="text-sm font-playfair font-semibold md:text-xl lg:text-2xl text-center lg:text-left">
                    Brilliant Toolkit to Build Nextgen Website Faster.
                  </Text>
                  <Text className="text-sm font-playfair font-semibold md:text-xl lg:text-2xl text-center lg:text-left">
                    The main &apos;thrust&apos; is to focus on educating attendees on how to
                    best protect highly vulnerable business applications with
                    interactive panel discussions and roundtables led by subject
                    matter experts.
                    <br />
                    <br />
                    The main &apos;thrust&lsquo; is to focus on educating attendees on how to
                    best protect highly vulnerable business applications with
                    interactive panel.
                  </Text>
                </Box>
              </div>
            </MotionBox>
            <Box
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true }}
              // variants={fadeInUp}
              className="w-full px-4 lg:w-1/2"
            >
              <Flex gap="4" wrap="wrap" justifyContent={{base: "center", md: "center", lg: 'center'}}>
                <Box>
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img src="https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/about_1.jpg" alt="about image" className="h-full w-full object-cover object-center" />
                  </div>
                </Box>
                <Box gap={{base: 4, md: 4, lg: 4}} display="flex" flexDirection="column" justifyContent={"space-between"}>
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img src="https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/about_2.jpg" alt="about image" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-green-400 px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <Text className="font-playfair font-semibold text-2xl text-dark dark:text-white">
                        Over
                      </Text>
                      <Heading as="h2" fontWeight="bold" textStyle="2xl">
                        06
                      </Heading>
                      <Text className="font-playfair font-semibold text-2xl text-dark dark:text-white">
                        Years of experience
                      </Text>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <svg width={106} height={144} viewBox="0 0 106 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x={-67} y="47.127" width="113.378" height="131.304" transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)" />
                          <defs>
                            <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111" y2="178.431" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white" />
                              <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <svg width={130} height={97} viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x="0.86792" y="-6.67725" width="155.563" height="140.614" transform="rotate(-42.8643 0.86792 -6.67725)" fill="url(#paint0_linear_1416_215)" />
                          <defs>
                            <linearGradient id="paint0_linear_1416_215" x1="78.6495" y1="-6.67725" x2="78.6495" y2="133.937" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white" />
                              <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <svg width={175} height={104} viewBox="0 0 175 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x="175.011" y="108.611" width="101.246" height="148.179" transform="rotate(137.136 175.011 108.611)" fill="url(#paint0_linear_1416_216)" />
                          <defs>
                            <linearGradient id="paint0_linear_1416_216" x1="225.634" y1="108.611" x2="225.634" y2="256.79" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white" />
                              <stop offset={1} stopColor="white" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Box>
              </Flex>
            </Box>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full px-4 lg:w-full"
            >
              <Box
                w="100%"
                paddingY={{ base: "4", md: "12" }}
              >
                <Heading as="h4" className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="4xl">
                  Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400'> Company</span>
                </Heading>
                <Text>
                  Founded in 2015, we've grown from a small startup into a dynamic digital agency with a global presence. 
                  Our mission is to bridge the gap between complex technology and elegant user experiences. 
                  We believe in creating solutions that not only solve problems but also delight users.
                  Our team combines technical expertise with creative innovation to deliver exceptional results
                  that exceed client expectations.
                </Text>
                <Box
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
                  marginY={{ base: "4", md: "12" }}
                >
                  <div className="text-center">
                    <Heading as="h3" fontWeight="bold" textStyle="4xl" className="text-blue-600">150+</Heading>
                    <Text fontWeight="bolder" className="text-white">Projects Completed</Text>
                  </div>
                  <div className="text-center">
                    <Heading as="h3" fontWeight="bold" textStyle="4xl" className="text-blue-600">85%</Heading>
                    <Text fontWeight="bolder" className="text-white">Client Retention</Text>
                  </div>
                  <div className="text-center">
                    <Heading as="h3" fontWeight="bold" textStyle="4xl" className="text-blue-600">24</Heading>
                    <Text fontWeight="bolder" className="text-white">Team Members</Text>
                  </div>
                  <div className="text-center">
                    <Heading as="h3" fontWeight="bold" textStyle="4xl" className="text-blue-600">12</Heading>
                    <Text fontWeight="bolder" className="text-white">Countries Served</Text>
                  </div>
                </Box>
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Flex>

      {/* Team Section */}
      <Flex id="team"  className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <Box
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundColor: "gray",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-sm" />
        </Box>
        <Box w="100%" className='relative z-10'>
          <Box
            className='-mx-4 flex flex-wrap items-center'
            paddingX={{ base: "8", md: "32" }}
            paddingBottom={{ base: "8", md: "16" }}
            marginY={{ base: "24", md: "18", lg: "16" }}
            paddingTop={{ base: "8", md: "16" }}
          >
              <MotionBox
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="w-full px-4 lg:w-full"
              >
                <Box
                  // initial={{ opacity: 0, x: -50 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.8 }}
                  display="flex"
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems={{ base: "center", md: "flex-start" }}
                  gap="4"
                >
                  <Heading as="h4" className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="4xl">
                    Meet Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400'> Expert Team</span>
                  </Heading>
                  <Text className="text-sm font-playfair font-semibold md:text-xl lg:text-2xl text-center lg:text-left">
                    Our diverse team of professionals combines creativity, technical expertise, and industry insight 
                    to deliver exceptional digital solutions for our clients.
                  </Text>
                </Box>
              </MotionBox>

              <MotionBox
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
                marginY={{ base: "4", md: "12" }}
              >
                {teamMembers.map((member, index) => (
                  <MotionBox
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10px" }}
                    className="bg-none rounded-xl shadow-md overflow-hidden group"
                    whileHover={{
                      y: -10,
                      boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <MotionBox 
                      className="relative overflow-hidden"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <motion.img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center rounded-t-xl"
                        initial={{ scale: 1.2, filter: "blur(5px)" }}
                        animate={{ scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                      />
                      {/* Overlay with Social Media Icons and Info Box */}
                      <MotionBox 
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end gap-4 p-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {/* Social Media Icons at the bottom */}
                        <MotionBox 
                          className="flex space-x-3 justify-around"
                          variants={{
                            rest: { opacity: 0, y: 20 },
                            hover: { opacity: 1, y: 0 }
                          }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <motion.button 
                            whileHover={{ 
                              scale: 1.2, 
                              backgroundColor: "#0077B5",
                              color: "white",
                              transition: { duration: 0.2 }
                            }} 
                            className="bg-white p-2 rounded-full shadow-lg"
                          >
                            <Linkedin size={16} className="text-blue-600" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ 
                              scale: 1.2, 
                              backgroundColor: "#1DA1F2",
                              color: "white",
                              transition: { duration: 0.2 }
                            }} 
                            className="bg-white p-2 rounded-full shadow-lg"
                          >
                            <Twitter size={16} className="text-blue-400" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ 
                              scale: 1.2, 
                              backgroundColor: "#333",
                              color: "white",
                              transition: { duration: 0.2 }
                            }} 
                            className="bg-white p-2 rounded-full shadow-lg"
                          >
                            <Github size={16} className="text-gray-800" />
                          </motion.button>
                        </MotionBox>
                        {/* Info Box at the top */}
                        <MotionBox 
                          className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg transform"
                          variants={{
                            rest: { opacity: 0, y: -20 },
                            hover: { opacity: 1, y: 0 }
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          padding={{ base: "4", md: "6" }}
                        >
                          <MotionHeading
                            variants={{
                              rest: { opacity: 0 },
                              hover: { opacity: 1 }
                            }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            as="h5"
                            className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400'
                            fontWeight="bold"
                            textStyle="xl"
                          >
                            {member.name}
                          </MotionHeading>
                          <motion.p 
                            className="text-blue-600 mb-2"
                            variants={{
                              rest: { opacity: 0, x: -10 },
                              hover: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                          >
                            {member.role}
                          </motion.p>
                          <motion.p 
                            className="text-gray-600 text-sm"
                            variants={{
                              rest: { opacity: 0 },
                              hover: { opacity: 1 }
                            }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                          >
                            {member.bio}
                          </motion.p>
                        </MotionBox>
                      </MotionBox>
                    </MotionBox>
                  </MotionBox>
                ))}
              </MotionBox>
          </Box>
        </Box>
      </Flex>

      {/* Contact Form Section */}
      <Flex id="contact" className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MotionBox
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
                    <p className="text-gray-300">+250 789 660 036</p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Visit Us</h3>
                    <p className="text-gray-300">123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                </div> */}
              </div>
            </MotionBox>

            <MotionBox
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
            </MotionBox>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default WebsiteSections;