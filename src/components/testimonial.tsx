// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaStar, FaQuoteRight } from "react-icons/fa";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Annandas Vishal",
//     image: "/testimonials/user-male.png", // Replace with actual image
//     review:
//       "Our daughter has gained leadership skills at the best CBSE secondary school. We know she's prepared for higher studies.",
//   },
//   {
//     name: "Rekha Shilpa Kavuluru",
//     image: "/testimonials/user-female.png", // Replace with actual image
//     review:
//       "My teenager is excelling in CBSE academics at the most highly ranked secondary school. She's found her niche.",
//   },
//   {
//     name: "Ramesh Kulkarni",
//     image: "/testimonials/user-male.png", // Replace with actual image
//     review:
//       "Himalaya School provided an excellent foundation for my son. He is now confident and thriving in his studies.",
//   },
//   {
//     name: "Priya Sharma",
//     image: "/testimonials/user-female.png", // Replace with actual image
//     review:
//       "The school has nurtured my child’s creativity and confidence. We are grateful for the amazing faculty!",
//   },
//   {
//     name: "Rekha Shilpa Kavuluru",
//     image: "/testimonials/user-female.png", // Replace with actual image
//     review:
//       "My teenager is excelling in CBSE academics at the most highly ranked secondary school. She's found her niche.",
//   },
//   {
//     name: "Ramesh Kulkarni",
//     image: "/testimonials/user-male.png", // Replace with actual image
//     review:
//       "Himalaya School provided an excellent foundation for my son. He is now confident and thriving in his studies.",
//   },
//   {
//     name: "Priya Sharma",
//     image: "/testimonials/user-female.png", // Replace with actual image
//     review:
//       "The school has nurtured my child’s creativity and confidence. We are grateful for the amazing faculty!",
//   },
//   {
//     name: "Rekha Shilpa Kavuluru",
//     image: "/testimonials/user-female.png", // Replace with actual image
//     review:
//       "My teenager is excelling in CBSE academics at the most highly ranked secondary school. She's found her niche.",
//   },
//   {
//     name: "Ramesh Kulkarni",
//     image: "/testimonials/user-male.png", // Replace with actual image
//     review:
//       "Himalaya School provided an excellent foundation for my son. He is now confident and thriving in his studies.",
//   },
//   {
//     name: "Priya Sharma",
//     image: "/testimonials/user-female.png", // Replace with actual image
//     review:
//       "The school has nurtured my child’s creativity and confidence. We are grateful for the amazing faculty!",
//   },
// ];

// export default function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-16 bg-[#fdf8ed]">
//       <div className="max-w-6xl mx-auto px-6 overflow-hidden relative">
//         <motion.div
//           className="flex space-x-6"
//           animate={{ x: `-${currentIndex * 100}%` }}
//           transition={{ ease: "easeInOut", duration: 0.8 }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="min-w-full md:min-w-[50%] bg-white shadow-lg rounded-xl p-6 flex flex-col items-center relative transition-transform duration-500"
//             >
//               {/* User Image */}
//               <Image
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 width={70}
//                 height={70}
//                 className="rounded-full border-4 border-orange-400"
//               />

//               {/* User Name */}
//               <h3 className="mt-3 font-semibold text-lg text-[#3f2766]">
//                 {testimonial.name}
//               </h3>

//               {/* Quote & Stars */}
//               <div className="flex items-center space-x-2 mt-1">
//                 <FaQuoteRight className="text-orange-500 text-xl" />
//               </div>
//               <div className="flex mt-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-red-500 text-lg" />
//                 ))}
//               </div>

//               {/* Review */}
//               <p className="mt-3 text-gray-700 text-center italic max-w-sm">
//                 {testimonial.review}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Annandas Vishal",
    image: "/testimonial/testemonial_women.png",
    review:
      "Our daughter has gained leadership skills at the best CBSE secondary school. We know she's prepared for higher studies.",
  },
  {
    name: "Rekha Shilpa Kavuluru",
    image: "/testimonial/men.png",
    review:
      "My teenager is excelling in CBSE academics at the most highly ranked secondary school. She's found her niche.",
  },
  {
    name: "Ramesh Kulkarni",
    image: "/testimonial/testemonial_women.png",
    review:
      "Himalaya School provided an excellent foundation for my son. He is now confident and thriving in his studies.",
  },
  {
    name: "Priya Sharma",
    image: "/testimonial/men.png",
    review:
      "The school has nurtured my child’s creativity and confidence. We are grateful for the amazing faculty!",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-16 bg-[#fdf8ed] overflow-hidden">
      <div
        className="max-w-6xl mx-auto px-6 relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          style={{ display: "flex", width: "100%" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[50%] bg-white shadow-lg rounded-xl p-6 flex flex-col items-center relative mx-2"
            >
              {/* User Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={70}
                height={70}
                className="rounded-full border-4 border-orange-400"
              />

              {/* User Name */}
              <h3 className="mt-3 font-semibold text-lg text-[#3f2766]">
                {testimonial.name}
              </h3>

              {/* Quote & Stars */}
              <div className="flex items-center space-x-2 mt-1">
                <FaQuoteRight className="text-orange-500 text-xl" />
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-red-500 text-lg" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-3 text-gray-700 text-center italic max-w-sm">
                {testimonial.review}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
