"use client";

import CustomerMessenger from "@/components/ui/CustomerMessenger";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DigitalTwinsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const customerTwins = [
        {
            name: "Alice",
            churnRisk: "High",
            usage: 120,
            complaints: 3,
            strategy: "Offer Loyalty Discount & Personal Call",
        },
        {
            name: "Bob",
            churnRisk: "Medium",
            usage: 210,
            complaints: 1,
            strategy: "Send Personalized Email & Feedback Form",
        },
        {
            name: "Charlie",
            churnRisk: "Low",
            usage: 300,
            complaints: 0,
            strategy: "Continue Current Engagement Plan",
        },
        {
            name: "Diana",
            churnRisk: "High",
            usage: 80,
            complaints: 4,
            strategy: "Immediate Callback & Incentivized Offer",
        },
        {
            name: "Ethan",
            churnRisk: "Medium",
            usage: 160,
            complaints: 2,
            strategy: "Monitor Usage, Send App Tips",
        },
    ];

    const graphData = {
        labels: customerTwins.map((twin) => twin.name),
        datasets: [
            {
                label: "Usage (mins)",
                data: customerTwins.map((twin) => twin.usage),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
            {
                label: "Complaints",
                data: customerTwins.map((twin) => twin.complaints),
                backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
        ],
    };

    const graphOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: "Customer Data Overview",
            },
        },
    };

    return (
        <div className="mt-20 px-6 py-20 bg-white min-h-screen text-gray-900 w-full">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-extrabold text-center pb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
            >
                🧬 Digital Twins: Personalized AI Retention Strategies
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mx-auto bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-xl"
            >
                <p className="text-base md:text-lg mb-6 leading-relaxed">
                    Each Digital Twin below was intelligently crafted using AI analysis from ChurnDNA signals. These aren&apos;t just predictions—they&apos;re solutions, equipped with smart, love-infused strategies 💖 to keep your customers loyal and happy.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <div className="w-full md:w-1/2 overflow-x-auto">
                        <table className="min-w-full border border-gray-300 mt-4 rounded-lg overflow-hidden text-xs md:text-sm">
                            <thead className="bg-indigo-100">
                                <tr>
                                    <th className="px-2 md:px-4 py-2 text-left">👤 Customer</th>
                                    <th className="px-2 md:px-4 py-2 text-left">📉 Churn Risk</th>
                                    <th className="px-2 md:px-4 py-2 text-left">📊 Usage</th>
                                    <th className="px-2 md:px-4 py-2 text-left">📢 Complaints</th>
                                    <th className="px-2 md:px-4 py-2 text-left">💡 Strategy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerTwins.map((twin, index) => (
                                    <tr
                                        key={index}
                                        className="border-t border-gray-200 hover:bg-pink-50 transition duration-300"
                                    >
                                        <td className="px-2 md:px-4 py-2 font-medium">{twin.name}</td>
                                        <td className="px-2 md:px-4 py-2">{twin.churnRisk}</td>
                                        <td className="px-2 md:px-4 py-2">{twin.usage} mins</td>
                                        <td className="px-2 md:px-4 py-2">{twin.complaints}</td>
                                        <td className="px-2 md:px-4 py-2">{twin.strategy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full md:w-1/2 bg-white p-4 md:p-6 rounded-xl shadow-md">
                        <Bar data={graphData} options={graphOptions} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="mt-10 bg-gradient-to-br from-purple-100 to-pink-200 p-4 md:p-6 rounded-xl shadow-md text-center"
                >
                    <p className="text-lg md:text-xl font-semibold">
                        🎉 Digital Twins Ready! Each one is trained with churn signals and ready to retain your valuable customers.
                    </p>
                    <p className="mt-2 text-sm md:text-md text-gray-700">
                        💡 Use insights to tweak campaigns and reduce churn with love ❤️ and logic 🧠.
                    </p>
                </motion.div>

                <CustomerMessenger />
            </motion.div>
        </div>
    );
}

export default DigitalTwinsPage;