import React from 'react'
import Bg from '../assets/Bg.png'
import Lottie from 'lottie-react'
import coffee from '../assets/Coffeeanime.json'
import { motion } from 'framer-motion'

const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundColor: '#270c03',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}
const About = () => {
  return (
    <div id='about' className='md:py-20 py-40' style={bgImage}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className='text-amber-900 font-cursive text-5xl text-center'>About us</motion.h1>
      <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto'>
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Lottie animationData={coffee} className='md:w-[600px]' />
        </motion.div>
        {/* text section */}
        <div className='space-y-4 px-4 md:px-0'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='text-2xl font-cursive2 text-amber-900'>Pure taste. Pure moments. PureBrew.</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='font-cursive2 text-lg'>
            At PureBrew, coffee is more than a drink—it’s a way of life. We start with ethically sourced beans, carefully handpicked from trusted farms, and bring out their finest flavors through expert roasting and brewing. Every cup is a celebration of authenticity, passion, and craftsmanship.

            Our space is designed to be your cozy corner in the city—a place where conversations flow as smoothly as the coffee. Whether you’re catching up with friends, finding inspiration for your next big idea, or simply taking a moment for yourself, PureBrew is here to make every visit special.

            Because at PureBrew, we don’t just brew coffee—
            we brew experiences worth savoring.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
