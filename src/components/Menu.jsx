import React from 'react'
import Img1 from '../assets/coffee-white.png'
import Img2 from '../assets/coffee2.png'
import { motion } from 'framer-motion'


const MenuData = [
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        description: "Rich and bold espresso shot, perfect for a quick caffeine boost.",
        price: "$3.99"
    },
    {
        id: 2,
        img: Img1,
        name: "Cappuccino",
        description: "A delightful blend of espresso, steamed milk, and froth foam.",
        price: "$4.75"
    },
    {
        id: 3,
        img: Img2,
        name: "Latte",
        description: "Smooth espresso combined with steamed milk and a light layer of foam.",
        price: "$6.25"
    },
    {
        id: 4,
        img: Img1,
        name: "Mocha",
        description: "A chocolate-infused espresso drink topped with whipped cream.",
        price: "$6.00"
    },
    {
        id: 5,
        img: Img2,
        name: "Americano",
        description: "Espresso diluted with hot water for a milder coffee experience.",
        price: "$4.08"
    },
    {
        id: 6,
        img: Img1,
        name: "Macchiato",
        description: "Espresso marked with a dollop of frothy milk for a balanced taste.",
        price: "$5.25"
    },
];
const Menu = () => {
    return (
        <div id='menu' className='py-20'>
            <div className='max-w-7xl mx-auto'>
                {/* Heading Section */}
                <div className='text-center mb-20'>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className='text-4xl font-bold font-cursive text-amber-900'>Best Coffee for You</motion.h1>
                </div>
                {/* menu card section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {MenuData.map((menu) => (
                        <div className='rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow duration-high group max-w-[300px] mt-10'>
                            <div className='h-[122px]'>
                                <img src={menu.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300' />
                            </div>
                            <div className='p-4 text-center'>
                                <div className='w-full'>
                                    <h1 className='text-xl font-bold'>{menu.name}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2'>{menu.description}</p>
                                    <div className='flex justify-between mt-5 px-6 items-center'>
                                        <p className='text-lg font-semibold'>{menu.price}</p>
                                        <button className='bg-amber-900 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-amber-900'>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Menu
