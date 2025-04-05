// "use client";

// import Image from "next/image";

// const aboutUsData = [
//   {
//     title: "Our Founder President",
//     description: `We had such a crownable Leader amongst us…!! 
//     We the Himalaya Family pay our Tributes to our Eternal Leader and the visionary man Shri. R N Nayak, who is known for his ideology and passion for helping the people of Ankola.`,
//     image: "/aboutus/president.jpg",
//   },
//   {
//     title: "Chairman’s Message",
//     description: `We are all very proud that Himalaya School has completed seven academic years and enriched the lives and lifestyles of thousands of students and staff.
//     I congratulate our principal Smt. Savita Kanoji and her team of committed staff members for their dedication to value-based quality teaching and ensuring equal care for every student.`,
//     image: "/aboutus/chairman.jpg",
//   },
//   {
//     title: "Message from Principal's Desk",
//     description: `It is a great privilege to be the Principal of Himalaya Central School. 
//     Our mission is to nurture students with a state of happiness, courage, compassion, and integrity. 
//     We aim to develop strong, confident individuals who contribute to the world with knowledge and responsibility.`,
//     image: "/aboutus/principal.jpg",
//   },
// ];

// export default function AboutUs() {
//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center text-gray-900">
//           About Us
//         </h2>
//         <p className="text-center text-gray-600 mt-2">
//           Learn more about our leadership and vision for the future.
//         </p>

//         {/* Content Blocks */}
//         <div className="mt-12 space-y-16">
//           {aboutUsData.map((person, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-10 bg-white shadow-xl rounded-lg overflow-hidden p-6 transition-all duration-300 hover:shadow-2xl ${
//                 index % 2 === 0 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Image Section */}
//               <div className="w-full md:w-1/2 h-72 relative rounded-lg overflow-hidden">
//                 <Image
//                   src={person.image}
//                   alt={person.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Text Section */}
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-3xl font-semibold text-gray-900">{person.title}</h3>
//                 <p className="text-gray-700 mt-4 leading-relaxed">{person.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Homechairman from "./homechairman";
import HomePresident from "./homepresident";
import HomePrincipal from "./homeprincipal";




export default function AboutUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
<Homechairman />
<HomePrincipal />
<HomePresident />
    </section>
  );
}
