"use client";
import React from "react";

export default function Footer() {
    return (
        <main>
            <section className="bg-white text-black flex py-12 px-6 sm:px-10">
                <div className="max-w-[1300px] mx-auto flex flex-col gap-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center">
                        Let’s plan your future together.
                    </h1>

                    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Shri Associates Location"
                            src="https://maps.google.com/maps?q=17.704493,74.180893&z=15&output=embed"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            className="border-0 w-full h-full"
                        ></iframe>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Our Location</h2>
                            <a
                                href="https://www.google.com/maps?q=17.704493,74.180893"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white underline"
                            >
                                View on Map
                            </a>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Connect with us</h2>
                            <div className="flex gap-5 mt-2">
                                <a
                                    href="https://wa.me/yourwhatsapplink"
                                    target="_blank"
                                    aria-label="WhatsApp"
                                    className="hover:text-green-400 transition"
                                >
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                                        <path d="M19.11 17.57c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.66.15-.75.97-.91 1.17-.34.22-.63.07a7.96 7.96 0 01-2.35-1.45 8.88 8.88 0 01-1.63-2.02c-.17-.29-.02-.44.13-.59.14-.14.3-.37.45-.56.15-.2.2-.34.3-.56.1-.22.05-.41-.03-.56s-.66-1.6-.91-2.2c-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.5.07-.76.36s-1 1-.99 2.43 1.03 2.8 1.17 3c.15.2 2 3.05 4.86 4.28.68.3 1.2.48 1.61.61.67.21 1.28.18 1.76.11.54-.08 1.77-.72 2.02-1.42.24-.7.24-1.3.17-1.42-.07-.11-.27-.17-.56-.3zM16 3A13 13 0 003 16c0 2.3.6 4.43 1.7 6.3L3 29l6.84-1.8A13 13 0 1016 3z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:contact@shriassociates.com"
                                    aria-label="Email"
                                    className="hover:text-red-400 transition"
                                >
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 13.065L.375 4.5H23.625L12 13.065zM12 15.615L0 6.75v12.75h24V6.75L12 15.615z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com/yourprofile"
                                    target="_blank"
                                    aria-label="Instagram"
                                    className="hover:text-pink-400 transition"
                                >
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.5 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-400 pt-8">
                        © {new Date().getFullYear()} Shri Associates. All rights reserved.
                    </div>
                </div>
            </section>
        </main>
    );
}
