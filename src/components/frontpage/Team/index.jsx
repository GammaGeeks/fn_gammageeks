// import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  chakra, 
  Image, 
} from '@chakra-ui/react';

const MotionBox = motion(chakra.div);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionButton = motion(chakra.button);
const MotionText = motion(Text);

const WebsiteSections = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

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
            className='-mx-4 flex flex-wrap items-center justify-center'
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
                marginY={{ base: "4", md: "12" }}
                // justifyContent={"center"}
                // alignItems={"center"}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {teamMembers.map((member, index) => (
                  <MotionBox
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10px" }}
                    className="bg-none rounded-xl shadow-md overflow-hidden group h-[400px]"
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
                      whileFocus="hover"
                      animate="rest"
                      height="100%"
                    >
                      <MotionImage
                        width="100%"
                        height="100%"
                        borderRadius="xl"
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center rounded-xl"
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
                          <MotionButton 
                            className="bg-white p-2 rounded-full shadow-lg hover:scale-110 hover:bg-[#0077B5] hover:text-white transition-all"
                            whileHover={{ 
                              scale: 1.2,
                              transition: { duration: 0.2 }
                            }} 
                          >
                            <Linkedin size={16} className="text-white" />
                          </MotionButton>

                          <MotionButton 
                            className="bg-white p-2 rounded-full shadow-lg hover:scale-110 hover:bg-[#1DA1F2] hover:text-white transition-all"
                            whileHover={{ 
                              scale: 1.2,
                              transition: { duration: 0.2 }
                            }} 
                          >
                            <Twitter size={16} className="text-white" />
                          </MotionButton>

                          <MotionButton 
                            className="bg-white p-2 rounded-full shadow-lg hover:scale-110 hover:bg-[#333] hover:text-white transition-all"
                            whileHover={{ 
                              scale: 1.2,
                              transition: { duration: 0.2 }
                            }} 
                          >
                            <Github size={16} className="text-white" />
                          </MotionButton>
                        </MotionBox>
                        {/* Info Box at the top */}
                        <MotionBox 
                          className="bg-gradient-to-br from-[#E4E5E6]/90 to-[#00416A]/90 backdrop-blur-sm rounded-b-xl shadow-lg transform"
                          variants={{
                            rest: { opacity: 0, y: 20 },
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
                            className='bg-clip-text text-transparent bg-gradient-to-r from-black via-orange-500 to-red-500 opacity-70'
                            fontWeight="bold"
                            textStyle="md"
                          >
                            {member.name}
                          </MotionHeading>
                          <motion.p 
                            className="text-black mb-2 *:text-sm font-light"
                            variants={{
                              rest: { opacity: 0, x: -10 },
                              hover: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                            fontWeight="bold"
                            textStyle="sm"
                            color="gray.700"
                            textTransform="uppercase"
                            textAlign="center"
                            letterSpacing="wider"
                          >
                            {member.role}
                          </motion.p>
                          {/* <motion.p 
                            className="text-black text-sm font-light"
                            variants={{
                              rest: { opacity: 0 },
                              hover: { opacity: 1 }
                            }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                          >
                            {member.bio}
                          </motion.p> */}
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
      <Flex id="contact" className="relative min-h-screen flex items-center justify-center px-4 sm:px-10 py-16">
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

        {/* Contact Content */}
        <Box w="100%" className="relative z-10">
          <Box
            className="-mx-4 flex flex-wrap"
            paddingX={{ base: "8", md: "28" }}
            paddingBottom={{ base: "8", md: "16", lg: "16" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flex className='flex flex-col w-full'>
              <Text
                className='bg-clip-text text-transparent text-center md:text-start bg-gradient-to-r from-blue-400 via-green-500 to-purple-400'
                fontWeight="bold"
                textStyle="5xl"
                paddingY={{ base: "4", md: "6" }}
              >
                Contact Us
              </Text>

              <Flex className="flex flex-col md:flex-row gap-10">
                {/* Contact Form */}
                <MotionBox
                  className="w-full md:w-1/2 space-y-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={Yup.object({
                      name: Yup.string().required('Name is required'),
                      email: Yup.string().email('Invalid email').required('Email is required'),
                      message: Yup.string().required('Message is required').min(10, 'Message too short')
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                        resetForm();
                      }, 1000);
                    }}
                  >
                    {({ handleSubmit, errors, touched, isSubmitting }) => (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <Flex
                          className="flex flex-col md:flex-row gap-4"
                          marginBottom={{ base: "4", md: "8" }}
                          justifyContent={{ base: "center", md: "space-between" }}
                          alignItems={{ base: "center", md: "flex-start" }}
                          flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                          <fieldset className="space-y-1 w-full md:w-1/2">
                            <Field
                              name="name"
                              className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-400/30 focus:ring-2 focus:ring-blue-400 text-white rounded-lg shadow-inner"
                              style={{ padding: '0.5rem 1rem 0.5rem 1rem' }}
                              placeholder="Your Name"
                            />
                            {errors.name && touched.name && (
                              <div className="text-red-400 text-sm">{errors.name}</div>
                            )}
                          </fieldset>
                          
                          <fieldset className="space-y-1 w-full md:w-1/2">
                            <Field
                              name="email"
                              type="email"
                              className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-400/30 focus:ring-2 focus:ring-blue-400 text-white rounded-lg shadow-inner"
                              style={{ padding: '0.5rem 1rem 0.5rem 1rem' }}
                              placeholder="Your Email"
                            />
                            {errors.email && touched.email && (
                              <div className="text-red-400 text-sm">{errors.email}</div>
                            )}
                          </fieldset>
                        </Flex>

                        <fieldset className="space-y-1">
                          <Field
                            as="textarea"
                            name="message"
                            rows={5}
                            className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-400/30 focus:ring-2 focus:ring-blue-400 text-white rounded-lg shadow-inner"
                            style={{ padding: '0.5rem 1rem 0.5rem 1rem' }}
                            placeholder="Your Message"
                          />
                          {errors.message && touched.message && (
                            <div className="text-red-400 text-sm">{errors.message}</div>
                          )}
                        </fieldset>
                        
                        <MotionButton
                          type="submit"
                          disabled={isSubmitting}
                          className="text-white font-semibold rounded-full shadow-lg w-full flex items-center justify-center"
                          paddingX={8}
                          paddingY={4}
                          color={"white"}
                          backgroundColor="blue.500"
                          backgroundImage="linear-gradient(to right, #4f46e5, #3b82f6)"
                          borderRadius="full"
                          boxSize="full"
                          boxSizing="border-box"
                          borderWidth="1px"
                          borderColor="blue.500"
                          borderStyle="solid"
                          boxShadow="0px 5px 15px rgba(0, 0, 255, 0.2)"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 255, 0.4)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          {!isSubmitting && <ArrowRight className="ml-2" />}
                        </MotionButton>
                      </form>
                    )}
                  </Formik>
                </MotionBox>

                {/* Contact Info */}
                <MotionBox
                  className="w-full md:w-1/2 space-y-4"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Text className="text-lg"><strong>Email:</strong> jeanluc05@live.com</Text>
                  <Text className="text-lg"><strong>Phone:</strong> +250 789 660 036</Text>
                  <Text className="text-lg"><strong>Location:</strong> Kigali, Rwanda</Text>
                  <Text className="text-sm text-gray-300">We'd love to hear from you! Whether you have a question or just want to say hi, drop us a message.</Text>
                </MotionBox>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default WebsiteSections;