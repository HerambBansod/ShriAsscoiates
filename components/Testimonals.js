'use client'
import React from 'react'
import TestimonialSwiper from './TestimonialSwiper'

const Testimonials = () => {
    return (
        <section className='w-full px-2 py-16 md:py-24 bg-black'>
            <div className='mx-auto w-full flex flex-col gap-14'>
            <h1 className='w-full text-center text-4xl text-white md:text-5xl font-bold'>
                    What Our Customers Say
                </h1>
                <div className='w-full flex flex-col gap-8'>
                    <div className='w-full max-w-[1300px] mx-auto'>
                       
                    </div>
                    <TestimonialSwiper slidesPerView={4} />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
