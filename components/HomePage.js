"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/40 backdrop-blur-sm text-white">
        <div className="flex items-center space-x-3">
          <img src="/Logo_SA.png" alt="Shri Associates" className="h-10 w-auto" />
          <span className="text-xl font-semibold">Shri Associates</span>
        </div>


        <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#services" className="hover:text-blue-400 transition">
            Services
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About Us
          </a>


          <a
            href="#appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-medium shadow-lg ml-auto transition duration-300"
          >
            Book Appointment
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="absolute top-full left-0 w-full bg-black/80 text-white flex flex-col items-center md:hidden overflow-hidden"
            >
              <a
                href="#home"
                className="py-3 w-full text-center border-b border-white/10 hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="py-3 w-full text-center border-b border-white/10 hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="py-3 w-full text-center border-b border-white/10 hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#appointment"
                className="py-3 w-full text-center hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section
        style={{
          backgroundImage: "url('/Home_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative w-full h-screen text-white flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-[3.6rem] leading-tight">
            Empower Your Financial Future
          </h1>
          <p className="text-lg md:text-xl font-light mb-[2.2rem]">
            At Shri Associates, we guide you with data-driven investments,
            personalized insurance solutions, and smart financial planning—
            all tailored to your life goals.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#appointment"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-3 rounded-2xl font-medium text-white shadow-lg"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
