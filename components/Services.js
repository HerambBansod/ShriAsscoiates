"use client";
import React, { useEffect } from 'react';
import {
    FaPiggyBank,
    FaHeartbeat,
    FaBriefcaseMedical,
    FaCar,
    FaShieldAlt,
    FaCoins
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false, easing: 'ease-in-out' });
    }, []);

    return (
        <main>
            <section className='w-full min-h-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center bg-blue-600 font-sans'>
                <div className='max-w-[1300px] w-full h-full text-white'>
                    <div className="mb-10 text-center md:text-left px-2 sm:px-0" data-aos="fade-up">
                        <p className="text-green-200 text-sm font-medium font-sans">Our Services</p>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">What We Offer</h2>
                        <p className="text-white max-w-xl mx-auto md:mx-0 text-sm sm:text-base font-sans">
                            Secure your future with customized financial and insurance solutions backed by expert advice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <FaPiggyBank />, title: 'Mutual Funds', text: 'Invest in top-rated mutual funds with expert guidance and portfolio diversification.' },
                            { icon: <FaHeartbeat />, title: 'Life Insurance', text: 'Protect your family’s future with tailored life insurance policies.', bg: 'bg-green-500', textColor: 'text-white', iconColor: 'text-white' },
                            { icon: <FaBriefcaseMedical />, title: 'Medical Insurance', text: 'Ensure top medical care without financial strain through our health coverage plans.' },
                            { icon: <FaCar />, title: 'Vehicle Insurance', text: 'Comprehensive protection for your car, bike, or commercial vehicles.' },
                            { icon: <FaShieldAlt />, title: 'General Insurance', text: 'Flexible and wide-ranging coverage for property, travel, and more.' },
                            { icon: <FaCoins />, title: 'Wealth Advisory', text: 'Customized strategies to grow and manage your wealth over time.' },
                        ].map((card, index) => (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                data-aos-offset="150"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-out"
                                className={`p-5 sm:p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.05] border border-transparent hover:border-white ${card.bg || 'bg-white'} ${card.textColor || 'text-gray-800'} font-sans`}
                            >
                                <div className={`${card.iconColor || 'text-blue-600'} text-2xl sm:text-3xl mb-4`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 font-serif">{card.title}</h3>
                                <p className={`text-sm sm:text-base mb-4 ${card.textColor ? '' : 'text-gray-600'} font-sans`}>
                                    {card.text}
                                </p>
                                <button
                                    className={`w-full sm:w-auto text-center ${card.bg
                                        ? 'bg-white text-green-600 hover:bg-gray-100'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                        } px-4 py-2 rounded-md transition font-sans`}
                                >
                                    Know More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
