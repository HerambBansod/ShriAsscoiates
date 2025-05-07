"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <section className="w-full min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans">
        {/* Cards */}
        <div className="max-w-[1300px] w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "💡", title: "Innovative Solutions" },
            {
              icon: "👥",
              title: "Professional Team",
              bg: "bg-blue-600 text-white",
              delay: 100,
            },
            { icon: "🛠️", title: "24/7 Support", delay: 200 },
          ].map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={card.delay || 0}
              className={`p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 text-center ${
                card.bg || "bg-white text-black"
              }`}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h4
                className={`text-xl font-semibold mb-2 font-serif ${
                  card.bg ? "text-white" : "text-black"
                }`}
              >
                {card.title}
              </h4>
              <p
                className={`mb-4 text-sm ${card.bg ? "text-white" : "text-gray-600"}`}
              >
                We bring the right people together to challenge established
                thinking and drive transform in 2020.
              </p>
              <button
                className={`font-medium ${
                  card.bg
                    ? "text-white underline"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* About */}
        <div
          data-aos="fade-up"
          className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 py-10 md:p-10 rounded-2xl shadow-xl bg-white"
        >
          <div className="relative w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/Home_bg.webp"
              alt="Team Meeting"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                <svg
                  className="w-6 h-6 text-blue-600 hover:text-white transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          <div className="text-left">
            <h3 className="text-blue-600 font-semibold text-sm mb-2 font-serif">
              About Us
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
              Discover The World of Financial Planner
            </h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg font-sans">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
              Read More
            </button>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-blue-600 font-serif">
                  25
                </h4>
                <p className="text-gray-600 text-sm sm:text-base font-sans">
                  Years of Experience
                </p>
              </div>
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-blue-600 font-serif">
                  350
                </h4>
                <p className="text-gray-600 text-sm sm:text-base font-sans">
                  Completed Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
