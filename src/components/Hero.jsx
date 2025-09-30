import { Coffee } from 'lucide-react'
import React from 'react'
import coffee from '../assets/coffee5.png'
import Bean1 from '../assets/bean1.png'
import Bean2 from '../assets/bean2.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='from-slate-100 to-amber-950 bg-gradient-to-r mt-14'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>
                {/* text section */}
                <div className='space-y-5 px-4 md:px-0'>
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='text-amber-900 font-semibold font-cursive2 text-xl'>
                        Welcome to Pure Brew___
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className='text-4xl md:text-5xl font-bold font-cursive2'>Savor Artisanal <span className='text-amber-950'>Coffee</span>,<br />Made Just For You
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}>
                        Brewed with integrity, poured with love—coffee that truly cares.</motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4, delay: 0.8 }}
                        className='flex gap-2'>
                        <a href="#menu"><button className='bg-amber-900 hover:bg-amber-800 text-white px-3 py-2 rounded-md'>Explore Our Menu</button></a>
                        <a href="#menu"><button className='bg-transparent text-amber-900 border border-amber-900 rounded-md mt-1  px-3 py-1'>Our Story</button></a>
                    </motion.div>
                </div>
                {/* image section */}
                <div className='relative'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        src={coffee} alt="" className='w-[500px]' />
                </div>
                <motion.img
                    initial={{ opacity: 0, x: 400, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 45 }}
                    transition={{ duration: 1.8, delay: 0.8 }}
                    src={Bean2} alt="" className='absolute hidden md:block bottom-20 left-36 x-10 w-20 rotate-45' />

                <motion.img
                    initial={{ opacity: 0, x: 600, y: 200, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 1.8, delay: 0.8 }}
                    src={Bean1} alt="" className='absolute hidden md:block top-16 left-16 w-20' />

                <motion.img
                    initial={{ opacity: 0, x: -100, y: 100, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 45 }}
                    transition={{ duration: 1.8, delay: 0.8 }}
                    src={Bean2} alt="" className='absolute hidden md:block top-0 right-0 w-20 rotate-45' />
            </div>
        </div >
    )
}

export default Hero
