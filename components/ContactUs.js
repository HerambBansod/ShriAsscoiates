"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactPage() {
    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-blue-800 text-white font-sans">
            {/* Contact Form Section */}
            <motion.div
                ref={formRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 30 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10"
            >
                <div className="w-full max-w-md">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">CONTACT</h1>
                    <p className="mb-10 text-gray-200">
                        For financial planning enquiries, or just to say hello, get in touch with Shri Associates.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label className="block mb-1 font-medium text-white">Full Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md text-white placeholder-white bg-transparent"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-white">Email</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md text-white placeholder-white bg-transparent"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-white">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md text-white placeholder-white bg-transparent"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-white">Message</label>
                            <textarea
                                className="w-full border border-gray-300 px-4 py-2 rounded-md text-white placeholder-white bg-transparent"
                                rows={4}
                                placeholder="Your message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-blue-800 font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>


            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.9 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 h-64 md:h-auto"
            >
                <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/Img_one.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </motion.div>
        </div>
    );
}
