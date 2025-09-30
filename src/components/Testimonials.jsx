import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const TestimonialData = [
    {
        id: 1,
        name: "Rohit",
        review: "Great coffee and cozy atmosphere! The baristas are friendly and knowledgeable, and the coffee is always fresh and delicious. Highly recommendable!",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Anjali",
        review: "I love this coffee shop! The ambiance is perfect for working or catching up with friends. The coffee is top-notch, and they have a multiple options for coffee lovers.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Vikram",
        review: "This is my go-to-spot for coffee. The staff is always welcoming and the coffee is consistently excellent. I appreciate their commitment to using high-quality beans and sustainable practices.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 4,
        name: "Sneha",
        review: "I had a fantastic experience at this coffee shop. The latte art was impressive, and the flavors were rich and well-balanced. The cozy seating area made it a great place to relax and exnjoy my coffee.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 5,
        name: "Amit",
        review: "If you're a coffee lover, this place is a must-visit. The variety of coffee options is impressive,and the baristas are passionate about their craft. I always leave satisfied and eager to return.",
        img: "https://picsum.photos/105/105",
    }
]

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slideToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slideToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div id='testimonial' className='py-20'>
            <div className='max-w-7xl mx-auto'>
                {/* header section */}
                <div className='mb-10'>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className='text-center text-amber-900 text-4xl font-bold font-cursive'>Testimonials
                    </motion.h1>
                </div>
                {/* Testimonials Cards */}
                <motion.div
                    initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{ opacity: 1, scale:1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className='my-6'>
                                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-900/10 relative'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                                    </div>
                                    {/* content section */}
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500'>{data.review}</p>
                                            <h1 className='text-xl font-bold text-black/80 font-cursive2'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-amber-900/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>

        </div>
    )
}

export default Testimonials
