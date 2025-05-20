import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Flex } from '@chakra-ui/react'

function Footer() {
  return (
    <section id="footer" className="py-20 bg-gray-900 text-white relative overflow-hidden">
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

      <Flex
        className='relative z-10'
        justifyContent={"center"}
        alignItems="center" textAlign="center"
        paddingY={{ base: "2", md: "4" }}
      >
        <p>&copy; {new Date().getFullYear()} Gammageeks. All rights reserved</p> 
        <p>Privacy Policy | Terms of Service</p>
      </Flex>
    </section>
  )
}

export default Footer