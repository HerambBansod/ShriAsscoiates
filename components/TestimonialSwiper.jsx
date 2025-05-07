import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FC, useEffect, useState } from 'react';

const data = [
    {
        name: 'Rajeev Mehta',
        text: "Shri Associates made financial planning so easy and stress-free. Their team patiently listened to my goals and offered the perfect plan to secure my future.",
        img: '/assets/images/main/Ellipse 11.webp'
    },
    {
        name: 'Anjali Verma',
        text: "Thanks to Shri Associates, I now have a clear understanding of investments, savings, and retirement planning. Their advice was transparent, practical, and highly effective.",
        img: '/assets/images/main/Ellipse 11.webp'
    },
    {
        name: 'Manoj Bhatia',
        text: "Excellent service! I received expert guidance on tax savings and wealth management. Truly a dependable partner for financial growth.",
        img: '/assets/images/main/Ellipse 11.webp'
    },
    {
        name: 'Sneha Patil',
        text: "Shri Associates isn't just a service provider—they treat your financial success like their own. I feel more secure and confident about my future than ever.",
        img: '/assets/images/main/Ellipse 11.webp'
    },
    {
        name: 'Karan Joshi',
        text: "Professional, honest, and customer-first approach. Shri Associates helped me restructure my finances and plan for both short-term and long-term goals effectively.",
        img: '/assets/images/main/Ellipse 11.webp'
    },
    {
        name: 'Rahul Sharma',
        text: "Shri Associates ने मेरी फाइनेंशियल प्लानिंग को एकदम आसान बना दिया। उनका मार्गदर्शन बहुत ही स्पष्ट और भरोसेमंद है।",
        img: '/assets/images/main/Ellipse 11.webp'
    },
    {
        name: 'Priya Singh',
        text: "अगर आप अपने पैसों को सही दिशा देना चाहते हैं, तो Shri Associates से बेहतर कोई विकल्प नहीं। इनकी सलाह से मेरा पूरा बजट बैलेंस हो गया।",
        img: '/assets/images/main/Ellipse 11.webp'
    },
    {
        name: 'Sandeep Yadav',
        text: "Shri Associates ने मुझे इन्वेस्टमेंट और टैक्स सेविंग्स में शानदार मार्गदर्शन दिया। अब मैं हर महीने बचत भी करता हूँ और निवेश भी।",
        img: '/assets/images/main/Ellipse 11.webp'
    }
];

const TestimonialSwiper = ({ slidesPerView, reverseDirection = false }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="relative w-full font-poppins">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    reverseDirection: reverseDirection
                }}
                freeMode={true}
                speed={5000}
                navigation={{
                    nextEl: '.testimonial-button-next-ex5',
                    prevEl: '.testimonial-button-prev-ex5',
                }}
                slidesPerView={slidesPerView}
                spaceBetween={20}
                breakpoints={{
                    1024: {
                        slidesPerView: slidesPerView,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
                loop={true}
                className="w-full swiper-free-mode"
            >
                <div className="swiper-wrapper">
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className="w-full max-w-md">
                            <div className="relative w-full h-[250px] flex flex-col justify-between gap-8 rounded-lg bg-blue-500/20 p-6 sm:p-8 backdrop-blur-sm shadow-md">
                                <p className="text-white text-sm sm:text-base line-clamp-6 font-medium">{item.text}</p>
                                <div className="flex gap-4 items-center">
                                    {/* <img loading="lazy" src={item.img} width={40} draggable={false} alt="User photo" /> */}
                                    <h1 className="text-sm font-semibold text-green-200 select-none">{item.name}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default TestimonialSwiper;
