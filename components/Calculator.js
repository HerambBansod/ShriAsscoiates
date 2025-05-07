"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculator() {
    const [inputs, setInputs] = useState({
        revenue: '',
        expenses: '',
        cash: '',
        growthInvestment: '',
        debt: '',
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const calculateInvestmentNeed = () => {
        const revenue = parseFloat(inputs.revenue) || 0;
        const expenses = parseFloat(inputs.expenses) || 0;
        const cash = parseFloat(inputs.cash) || 0;
        const growth = parseFloat(inputs.growthInvestment) || 0;

        const burnRate = expenses - revenue;

        let runway;
        if (burnRate > 0) {
            runway = cash / burnRate;
        } else {
            runway = Infinity;
        }

        let need = '';
        if (runway !== Infinity && runway < 6) {
            if (growth > 0) {
                need = '⚠️ Likely needs investment for survival and growth.';
            } else {
                need = '🚨 Runway is short. Consider investment or cost reduction.';
            }
        } else if (revenue > expenses) {
            need = '✅ Business is profitable with sufficient runway. No immediate need for investment.';
        } else {
            need = '🧐 Monitor closely. Investment may be required depending on growth plans.';
        }

        setResult({ runway: isFinite(runway) ? runway.toFixed(2) : '∞', need });
    };

    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <section className="w-full min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl w-full text-center lg:text-left mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
                        Let’s Check: Do You Need Investment?
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-6">
                        Use this calculator to evaluate your financial position. Based on your revenue, expenses, and growth plans,
                        we'll help you assess whether it's time to raise funds, reduce costs, or stay on track with your current strategy.
                    </p>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition-all shadow-md">
                        Book Appointment
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-6 text-center">
                        Let’s Calculate the Need
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { label: 'Monthly Revenue', name: 'revenue', placeholder: 'e.g., 5000' },
                            { label: 'Monthly Expenses / Burn Rate', name: 'expenses', placeholder: 'e.g., 7000' },
                            { label: 'Available Cash / Cash in Bank', name: 'cash', placeholder: 'e.g., 20000' },
                            { label: 'Planned Growth Investment (Optional)', name: 'growthInvestment', placeholder: 'Expansion (R&D, marketing, etc.)' },
                            { label: 'Current Debt or Liabilities (Optional)', name: 'debt', placeholder: 'Outstanding bank loans' },
                        ].map(({ label, name, placeholder }) => (
                            <div key={name}>
                                <label className="block text-sm sm:text-base text-gray-800 font-medium mb-1">{label}</label>
                                <input
                                    type="number"
                                    name={name}
                                    value={inputs[name]}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    className="w-full p-3 border rounded-md text-sm sm:text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={calculateInvestmentNeed}
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-sm sm:text-base font-semibold transition-all"
                    >
                        Calculate
                    </button>

                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-md transition-all"
                        >
                            <p className="text-base sm:text-lg text-blue-800 font-medium">
                                Runway: <span className="font-bold">{result.runway} months</span>
                            </p>
                            <p className="mt-2 text-sm sm:text-base text-gray-700">{result.need}</p>
                        </motion.div>
                    )}
                </motion.div>
            </section>
        </motion.main>
    );
}
