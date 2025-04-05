"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Array of statistics
const stats = [
  { img: "/StatsSection/college.png", target: 10, label: "Branches" },
  { img: "/StatsSection/women.png", target: 300, label: "Faculty" },
  { img: "/StatsSection/student.png", target: 3200, label: "Students" },
  { img: "/StatsSection/books.png", target: 30, label: "Years" },
];

const StatBox = ({ img, target, label }: { img: string; target: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const interval = 30;
    const step = Math.ceil(target / (duration / interval));

    const counter = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(start);
    }, interval);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center bg-green-900 text-white px-6 py-4 rounded-lg border border-dashed border-white w-48 sm:w-56 space-x-4"
    >
      <div className="w-12 h-12">
        <Image src={img} alt={label} width={48} height={48} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{count}+</h2>
        <p className="text-lg">{label}</p>
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <div className="bg-green-900 py-10 flex flex-wrap justify-center gap-6 text-center">
      {stats.map((stat, index) => (
        <StatBox key={index} img={stat.img} target={stat.target} label={stat.label} />
      ))}
    </div>
  );
}
