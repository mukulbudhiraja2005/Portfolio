// "use client";
// import { motion } from "framer-motion";

// const skillData = [
//   {
//     title: "Frontend",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Bootstrap", "TypeScript", "React Native"],
//   },
//   {
//     title: "Backend",
//     skills: ["Node.js", "Express.js"],
//   },
//   {
//     title: "Database",
//     skills: ["MongoDB", "SQL"],
//   },
//   {
//     title: "Tools & Design",
//     skills: ["Git", "GitHub", "Figma"],
//   },
// ];

// export default function Skills() {
//   return (
//     <section className="py-20 px-6 md:px-20 text-center">

//       {/* Heading */}
//       <h2 className="text-4xl font-bold mb-16">
//         My <span className="text-purple-400">Skills</span>
//       </h2>

//       {/* Grid */}
//       <div className="grid md:grid-cols-2 gap-10">

//         {skillData.map((category, i) => (
//           <motion.div
//             key={i}
//             className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-purple-500/40 hover:scale-105 transition duration-300"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//           >
//             {/* INNER CARD */}
//             <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10">

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-6 text-purple-400">
//                 {category.title}
//               </h3>

//               {/* Skills */}
//               <div className="flex flex-wrap gap-3">
//                 {category.skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 hover:from-purple-500/40 hover:to-pink-500/40 transition"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//             </div>
//           </motion.div>
//         ))}

//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "TypeScript",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Git",
  "GitHub",
  "Figma",
  "c++",
  "c",
  "VScode"
];

export default function Skills() {
  return (
    <section className="py-12 px-6 md:px-20 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16">
        Tech<span className="text-purple-400">Stack</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="relative group flex items-center justify-center h-20 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {/* Glow Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-purple-500/20 blur-xl"></div>

            {/* Text */}
            <span className="relative z-10 text-sm md:text-base text-gray-200 group-hover:text-white transition">
              {skill}
            </span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}